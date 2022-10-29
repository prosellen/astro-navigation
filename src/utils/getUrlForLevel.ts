export default function getUrlForLevel(currentUrl, startLevel, dependenyGraph) {
  const dependenciesOfCurrentUrl = dependenyGraph.dependenciesOf(currentUrl);

  const dep =
    dependenciesOfCurrentUrl.find((url) => {
      const { level: itemLevel } = dependenyGraph.getNodeData(url);
      return itemLevel === startLevel;
    }) || currentUrl;

  return dependenyGraph.directDependenciesOf(dep)[0] || "/";
}
