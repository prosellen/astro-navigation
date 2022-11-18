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

  return parentsOfPathname;
}
