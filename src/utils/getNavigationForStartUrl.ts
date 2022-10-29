import { DepGraph } from "dependency-graph";

export default function getNavigationForStartUrl(
  url: string,
  graph: DepGraph<any>
) {
  const dependant = graph.directDependantsOf(url);
  const navigation = dependant.map((dependantUrl) =>
    graph.getNodeData(dependantUrl)
  );
  return navigation;
}
