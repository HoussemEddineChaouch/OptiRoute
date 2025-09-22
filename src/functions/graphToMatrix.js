export function graphToMatrix(nodes, edges) {
  const nodeIndexMap = Object.fromEntries(
    nodes.map((node, index) => [node.id, index])
  );
  const size = nodes.length;
  const matrix = Array(size)
    .fill(null)
    .map(() => Array(size).fill(Infinity));

  for (let i = 0; i < size; i++) matrix[i][i] = 0;

  edges.forEach((edge) => {
    const from = nodeIndexMap[edge.source];
    const to = nodeIndexMap[edge.target];
    const weight = edge.data?.weight || parseInt(edge.label);
    if (from !== undefined && to !== undefined) {
      matrix[from][to] = weight;
      matrix[to][from] = weight; // undirected
    }
  });

  return matrix;
}
