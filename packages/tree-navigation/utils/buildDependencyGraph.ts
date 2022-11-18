/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DepGraph } from "dependency-graph";
import type { NavigationItems } from "../types";

export default function buildDependencyGraph(
  navigationItems: NavigationItems,
  dependencyGraph: DepGraph<any>,
  parentNode?: string
) {
  navigationItems.forEach((node) => {
    dependencyGraph.addNode(node.url, node);
    if (parentNode) {
      dependencyGraph.addDependency(node.url, parentNode);
    }
    if (node.children) {
      buildDependencyGraph(node.children, dependencyGraph, node.url);
    }
  });

  return dependencyGraph;
}
