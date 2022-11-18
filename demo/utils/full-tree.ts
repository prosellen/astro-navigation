const fullTree = [
  { url: "/", text: "Home" },
  {
    url: "/examples/",
    text: 'Examples (will skip to "Full Tree Example")',
    redirect: "/examples/full-tree/",
    children: [
      {
        url: "/examples/full-tree/",
        text: "Full Tree Example",
      },
      {
        url: "/examples/start-level/",
        text: "Custom start level",
      },
      {
        url: "/examples/limit-levels/",
        text: "Limit the depth of levels to be shown",
        children: [
          {
            url: "/examples/limit-levels/level-3",
            text: "Level 3 (dummy)",
            redirect: "/examples/limit-levels/",
            children: [
              {
                url: "/examples/limit-levels/level-4",
                text: "Level 4 (dummy)",
                redirect: "/examples/limit-levels/",
                children: [
                  {
                    url: "/examples/limit-levels/level-5",
                    text: "Level 5 (dummy)",
                    redirect: "/examples/limit-levels/",
                    children: [
                      {
                        url: "/examples/limit-levels/level-6",
                        text: "Level 6 (dummy)",
                        redirect: "/examples/limit-levels/",
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
        url: "/examples/custom-tree/",
        text: "Custom Tree",
      },
    ],
  },
];

export default fullTree;
