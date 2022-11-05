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
    ],
  },
];

export default fullTree;
