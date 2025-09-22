function permute(arr) {
  if (arr.length <= 1) return [arr];
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permute(rest);
    for (const perm of perms) {
      res.push([arr[i], ...perm]);
    }
  }
  return res;
}

export function tspBruteForce(matrix, nodes) {
  const n = matrix.length;
  if (n === 0) return { path: [], cost: 0 };

  const nodeIndices = Array.from({ length: n }, (_, i) => i);
  const permutations = permute(nodeIndices.slice(1));

  let minCost = Infinity;
  let bestPath = [];

  for (const perm of permutations) {
    const path = [0, ...perm, 0];
    let cost = 0;
    let validPath = true;

    for (let i = 0; i < path.length - 1; i++) {
      const from = path[i];
      const to = path[i + 1];
      if (matrix[from][to] === Infinity) {
        validPath = false;
        break;
      }
      cost += matrix[from][to];
    }

    if (validPath && cost < minCost) {
      minCost = cost;
      bestPath = path;
    }
  }

  // Handle case where no valid path was found
  if (bestPath.length === 0 && n > 0) {
    return {
      path: ["No valid path visiting all nodes exists"],
      cost: Infinity,
    };
  }

  // Convert indices to actual node names
  const nodeNames = nodes.map((node) => node.data.label);
  return {
    path: bestPath.map((i) => nodeNames[i] || `Node ${i}`),
    cost: minCost,
  };
}
