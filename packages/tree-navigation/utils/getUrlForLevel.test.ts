import { describe, expect, it } from "vitest";
import getUrlForLevel from "./getUrlForLevel";
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

// describe("getDependencies", () => {
//   it.each([
//     ["/about-us/team/bob/bobsCat/", 1, "/about-us/"],
//     ["/about-us/team/bob/bobsCat/", 2, "/about-us/team/"],
//     ["/about-us/team/bob/bobsCat/", 3, "/about-us/team/bob/"],
//     ["/about-us/team/bob/bobsCat/", 4, "/about-us/team/bob/bobsCat/"],
//   ])(
//     "Should find a start url for '%s' for level '%s' to be '%s'",
//     (currentUrl, level, startUrl) => {
//       const graph = getDependencyGraph(navigationItems);
//       const urlOfStartLevel = getUrlForLevel(currentUrl, level, graph);

//       expect(urlOfStartLevel).toStrictEqual(startUrl);
//     }
//   );
// });
describe("getDependencies", () => {
  it.each([
    ["/about-us/team/bob/bobsCat/", 1, "/"],
    ["/about-us/team/bob/bobsCat/", 2, "/about-us/"],
    ["/about-us/team/bob/bobsCat/", 3, "/about-us/team/"],
    ["/about-us/team/bob/bobsCat/", 4, "/about-us/team/bob/"],
    ["/about-us/team/bob/bobsCat/", 5, "/about-us/team/bob/"],
    ["/about-us/team/bob/bobsCat/", 6, "/about-us/team/bob/"],
    ["/about-us/team/bob/bobsCat/", 7, "/about-us/team/bob/"],
  ])(
    "Should find a start url for '%s' for level '%s' to be '%s'",
    (currentUrl, level, startUrl) => {
      const graph = getDependencyGraph(navigationItems);
      const urlOfStartLevel = getUrlForLevel(currentUrl, level, graph);

      expect(urlOfStartLevel).toStrictEqual(startUrl);
    }
  );
});
