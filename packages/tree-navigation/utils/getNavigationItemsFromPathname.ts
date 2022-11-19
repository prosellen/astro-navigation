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
  let navigation = [];

  if (dependencyGraph.hasNode(pathname)) {
    const directChildren = dependencyGraph.directDependantsOf(pathname);

    navigation = directChildren.map((dependantUrl) =>
      dependencyGraph.getNodeData(dependantUrl)
    );
  }

  return navigation;
}
