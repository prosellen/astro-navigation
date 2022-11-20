import { describe, expect, it } from "vitest";
import getAstroPathname from "./getAstroPathname";

describe("enrichNavigationItems", () => {
  it.each([
    ["/", "/"],
    ["/index.html", "/"],
    ["/about-us/team/", "/about-us/team/"],
    ["/about-us/team/index.html", "/about-us/team/"],
    ["/about-us/team.html", "/about-us/team.html"],
  ])("Should have added a level to the items", (received, expected) => {
    const pathname = getAstroPathname(received);

    expect(pathname).toBe(expected);
  });
});
