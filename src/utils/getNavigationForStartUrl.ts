export default function getNavigationForStartUrl(url, graph) {
  // const oneUp = graph.directDependenciesOf(url)[0] || "/";
  return graph.getNodeData(url)?.children || [];
}

// export default function findStartUrlInStructure(structure, startUrl) {
//   return structure.find((item) => {
//     if (item.url === startUrl) return item;
//     if (item.children?.length > 0)
//       return findStartUrlInStructure(item.children, startUrl);
//     return false;
//   });
// }
