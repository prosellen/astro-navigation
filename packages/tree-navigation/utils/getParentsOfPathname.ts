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
  try {
    parentsOfPathname = dependencyGraph.dependenciesOf(pathname);
  } catch (error) {
    console.error(`${pathname}: ${error.message}`);
  }

  // If none where found, we'll brut-force it. #yolo
  if (parentsOfPathname.length === 0) {
    const pathSegments = pathname.replace(/^\/|\/$/g, "").split("/");
    let allSegments = "/";
    pathSegments.forEach((segment) => {
      allSegments = `${allSegments + segment}/`;
      parentsOfPathname.push(allSegments);
    });
  }

  return parentsOfPathname;
}
