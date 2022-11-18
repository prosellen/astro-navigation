/* eslint-disable @typescript-eslint/no-explicit-any */
import { DepGraph } from "dependency-graph";
import { NavigationItems } from "../types";

/**
 * Returns the an array of navigation item objects that are direct children of the given pathname
 * @param pathname The pathname for which the child navigation items should be returned
 * @param dependencyGraph The dependency graph object
 * @returns An array of child navigation item objects objects from the current pathname
 */
export default function getNavigationItemsFromPathname(
  pathname: string,
  dependencyGraph: DepGraph<any>
): NavigationItems {
  let directChildren = [];
  try {
    directChildren = dependencyGraph.directDependantsOf(pathname);
  } catch (error) {
    console.error(`${pathname}: ${error.message}`);
  }

  const navigation = directChildren.map((dependantUrl) =>
    dependencyGraph.getNodeData(dependantUrl)
  );

  return navigation;
}
