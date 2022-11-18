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
  const dependenciesOfCurrentUrl =
    dependencyGraph.dependenciesOf(currentPathname);

  const dep =
    dependenciesOfCurrentUrl.find((url) => {
      const { level: itemLevel } = dependencyGraph.getNodeData(url);
      return itemLevel === startLevel;
    }) || currentPathname;

  return dependencyGraph.directDependenciesOf(dep)[0] || "/";
}
