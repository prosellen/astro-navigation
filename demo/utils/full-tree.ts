const fullTree = [
  { url: "/index.html", text: "Home" },
  {
    url: "/examples.html",
    text: 'Examples (will skip to "Full Tree Example")',
    redirect: "/examples/full-tree.html",
    children: [
      {
        url: "/examples/full-tree.html",
        text: "Full Tree Example",
      },
      {
        url: "/examples/start-level.html",
        text: "Custom start level",
      },
      {
        url: "/examples/limit-levels.html",
        text: "Limit the depth of levels to be shown",
        children: [
          {
            url: "/examples/limit-levels/level-3",
            text: "Level 3 (dummy)",
            redirect: "/examples/limit-levels.html",
            children: [
              {
                url: "/examples/limit-levels/level-4",
                text: "Level 4 (dummy)",
                redirect: "/examples/limit-levels.html",
                children: [
                  {
                    url: "/examples/limit-levels/level-5",
                    text: "Level 5 (dummy)",
                    redirect: "/examples/limit-levels.html",
                    children: [
                      {
                        url: "/examples/limit-levels/level-6",
                        text: "Level 6 (dummy)",
                        redirect: "/examples/limit-levels.html",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        url: "/examples/custom-tree.html",
        text: "Custom Tree",
      },
    ],
  },
];

export default fullTree;
