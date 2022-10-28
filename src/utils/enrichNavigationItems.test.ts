import { describe, expect, it } from "vitest";
import enrichNavigationItems from "./enrichNavigationItems";
import type { NavigationItems } from "../types";

const navigationItems: NavigationItems = [
  { url: "/", text: "Home" },
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

describe("enrichNavigationItems", () => {
  it("Should have added a level to the items", () => {
    const items = enrichNavigationItems(navigationItems);

    expect(items[0].level).toBe(1);
    expect(items[1].children[0].level).toBe(2);
    expect(items[1].children[0].children[1].level).toBe(3);
  });
});
