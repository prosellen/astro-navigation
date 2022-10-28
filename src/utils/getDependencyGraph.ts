import { DepGraph } from "dependency-graph";
import buildDependencyGraph from "./buildDependencyGraph";
import type { NavigationItems } from "../types";

export default function getDependencyGraph(navigationItems: NavigationItems) {
  const dependencyGraph = new DepGraph();
  return buildDependencyGraph(navigationItems, dependencyGraph);
}
