/* eslint-disable @typescript-eslint/no-explicit-any */
import { DepGraph } from "dependency-graph";

/**
 * Returns an array with the pathnames of all parent items of the given `pathname`
 * @param pathname A pathname
 * @param dependencyGraph A dependency graph object
 * @returns An array with the pathnames
 */
export default function getParentsOfPathname(
  pathname: string,
  dependencyGraph: DepGraph<any>
): string[] {
  let parentsOfPathname = [];

  if (dependencyGraph.hasNode(pathname)) {
    parentsOfPathname = dependencyGraph.dependenciesOf(pathname);
  } else {
    // If none where found, we'll brut-force it. #yolo
    const pathSegments = pathname.replace(/^\/|\/$/g, "").split("/");
    let allSegments = "/";
    pathSegments.forEach((segment) => {
      allSegments = `${allSegments + segment}/`;
      parentsOfPathname.push(allSegments);
    });
  }

  return parentsOfPathname;
}
