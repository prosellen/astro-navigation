/* eslint-disable @typescript-eslint/no-explicit-any */
import { DepGraph } from "dependency-graph";

/**
 * Traverses the current URLs pathname up to the start level and returns the pathname of the start level
 * @param currentPathname The pathname of the current page
 * @param startLevel The number of the start level
 * @param dependencyGraph The dependency graph object of the navigation
 * @returns The pathname of the the start level
 */
export default function getStartLevelPathname(
  currentPathname: string,
  startLevel: number,
  dependencyGraph: DepGraph<any>
): string {
  const dependenciesOfCurrentPathname =
    dependencyGraph.dependenciesOf(currentPathname);

  // Traverse up to find the the node with the given startLevel
  // If we can't find it, it might be because the startLevel is too high - so take the current pathname
  const startLevelItem =
    dependenciesOfCurrentPathname.find((pathname) => {
      const { level: itemLevel } = dependencyGraph.getNodeData(pathname);
      return itemLevel === startLevel;
    }) || currentPathname;

  // If there is a dependency for the startLevel item: use that
  if (
    dependencyGraph.hasNode(startLevelItem) &&
    dependencyGraph.directDependenciesOf(startLevelItem)[0] !== undefined
  ) {
    return dependencyGraph.directDependenciesOf(startLevelItem)[0];
  }

  // If we're not supposed to be at root level, return the currentPathname
  if (startLevel > 1) {
    return currentPathname;
  }

  return "/";
}
