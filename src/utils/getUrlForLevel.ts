import { DepGraph } from "dependency-graph";

export default function getUrlForLevel(
  currentUrl: string,
  startLevel: number,
  dependencyGraph: DepGraph<any>
) {
  const dependenciesOfCurrentUrl = dependencyGraph.dependenciesOf(currentUrl);

  const dep =
    dependenciesOfCurrentUrl.find((url) => {
      const { level: itemLevel } = dependencyGraph.getNodeData(url);
      return itemLevel === startLevel;
    }) || currentUrl;

  return dependencyGraph.directDependenciesOf(dep)[0] || "/";
}
