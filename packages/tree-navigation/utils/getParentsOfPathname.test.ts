import { describe, expect, it } from "vitest";
import getParentsOfPathname from "./getParentsOfPathname";
import type { NavigationItems } from "../types";
import getDependencyGraph from "./getDependencyGraph";

const navigationItems: NavigationItems = [
  { url: "/", text: "Home" },
  {
    url: "/about-us/",
    text: "About Us",
    level: 1,
    children: [
      {
        url: "/about-us/team/",
        text: "Team",
        level: 2,
        children: [
          {
            url: "/about-us/team/bob/",
            text: "Bob",
            level: 3,
            children: [
              { url: "/about-us/team/bob/bobsCat/", text: "Bob", level: 4 },
            ],
          },
          { url: "/about-us/team/marry/", text: "Marry", level: 3 },
          { url: "/about-us/team/bill/", text: "Bill", level: 3 },
        ],
      },
    ],
  },
  { url: "/contact/", text: "Contact", level: 1 },
];

describe("getDependencies", () => {
  it.each([
    [
      "/about-us/team/bob/bobsCat/",
      ["/about-us/", "/about-us/team/", "/about-us/team/bob/"],
    ],
    ["/about-us/team/bob/", ["/about-us/", "/about-us/team/"]],
  ])(
    "Should return the navigation tree for the start url '%s'",
    (url, object) => {
      const graph = getDependencyGraph(navigationItems);
      const navigationTree = getParentsOfPathname(url, graph);

      expect(navigationTree).toStrictEqual(object);
    }
  );
});
