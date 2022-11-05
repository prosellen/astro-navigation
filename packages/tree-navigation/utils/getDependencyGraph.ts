import { DepGraph } from "dependency-graph";
import buildDependencyGraph from "./buildDependencyGraph";
import type { NavigationItems } from "../types";

export default function getDependencyGraph(navigationItems: NavigationItems) {
  const dependencyGraph = new DepGraph();
  const graph = buildDependencyGraph(navigationItems, dependencyGraph);

  // "/" is not defined, create it
  if (!graph.hasNode("/")) {
    const entryUrls = graph.overallOrder(true);
    graph.addNode("/");

    entryUrls.forEach((url) => {
      graph.addDependency(url, "/");
    });
  }

  return graph;
}
