import { describe, expect, it } from "vitest";
import getDependencyGraph from "./getDependencyGraph";
import type { NavigationItems } from "../types";

const navigationItems: NavigationItems = [
  { url: "/home/", text: "Home" },
  {
    url: "/about-us/",
    text: "About Us",
    children: [
      {
        url: "/about-us/team/",
        text: "Team",
        children: [
          { url: "/about-us/team/bob", text: "Bob" },
          { url: "/about-us/team/marry", text: "Marry" },
          { url: "/about-us/team/bill", text: "Bill" },
        ],
      },
    ],
  },
  { url: "/contact/", text: "Contact" },
];

describe("getDependencies", () => {
  it("Should build a dependency graph", () => {
    const graph = getDependencyGraph(navigationItems);

    expect(graph.overallOrder()).toStrictEqual([
      "/",
      "/home/",
      "/about-us/",
      "/about-us/team/",
      "/about-us/team/bob",
      "/about-us/team/marry",
      "/about-us/team/bill",
      "/contact/",
    ]);
  });
  it("Should find the expected dependencies ", () => {
    const graph = getDependencyGraph(navigationItems);

    expect(graph.dependenciesOf("/home/")).toStrictEqual(["/"]);
    expect(graph.dependenciesOf("/about-us/team/bill")).toStrictEqual([
      "/",
      "/about-us/",
      "/about-us/team/",
    ]);
    expect(graph.dependenciesOf("/about-us/team/")).toStrictEqual([
      "/",
      "/about-us/",
    ]);
    expect(graph.dependenciesOf("/contact/")).toStrictEqual(["/"]);
  });

  it("Should find the expected dependants", () => {
    const graph = getDependencyGraph(navigationItems);

    expect(graph.dependantsOf("/home/")).toStrictEqual([]);
    expect(graph.dependantsOf("/about-us/team/")).toStrictEqual([
      "/about-us/team/bob",
      "/about-us/team/marry",
      "/about-us/team/bill",
    ]);
    expect(graph.dependantsOf("/about-us/team/bill")).toStrictEqual([]);
    expect(graph.dependantsOf("/contact/")).toStrictEqual([]);
  });
});
