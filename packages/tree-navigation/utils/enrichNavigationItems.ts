import { NavigationItem, NavigationItems } from "../types";

export default function enrichNavigationItems(
  navigationItems: NavigationItems,
  level = 1
) {
  return navigationItems?.map((item: NavigationItem) => {
    let children;

    // TODO: Read files and insert title, etc from Formatter Header

    if (item.children) {
      children = enrichNavigationItems(item.children, level + 1);
    }

    return {
      ...item,
      level,
      children,
    };
  });
}
