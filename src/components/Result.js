import React from "react";

function Result({ result, nodes, edges }) {
  if (!result) {
    return (
      <div className="space-y-2">
        <h1 className="font-semibold">Short Rout details</h1>
        <h2 className="text-xs opacity-50">
          Check the steps your optimized route.
        </h2>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-500">
          <p>No solution calculated yet.</p>
          <p className="mt-2 text-xs">
            Create nodes, connect them with edges, and click "Solve".
          </p>
        </div>
      </div>
    );
  }

  const pathDetails = [];
  let totalDistance = 0;

  for (let i = 0; i < result.path.length - 1; i++) {
    const fromNode = nodes.find((n) => n.data.label === result.path[i]);
    const toNode = nodes.find((n) => n.data.label === result.path[i + 1]);

    if (fromNode && toNode) {
      const edge = edges.find(
        (e) =>
          (e.source === fromNode.id && e.target === toNode.id) ||
          (e.source === toNode.id && e.target === fromNode.id)
      );

      const distance = edge?.data?.weight || 0;
      totalDistance += distance;

      pathDetails.push({
        from: result.path[i],
        to: result.path[i + 1],
        distance,
        cumulative: totalDistance,
      });
    }
  }

  return (
    <div>
      <div className="space-y-2">
        <h1 className="font-semibold">Short Rout details</h1>
        <h2 className="text-xs opacity-50">
          Check the steps your optimized route.
        </h2>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap items-center ">
          {result.path.map((node, index) => (
            <React.Fragment key={index}>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-md my-1 ">
                {node}
              </span>
              {index < result.path.length - 1 && (
                <span className="text-gray-400 mx-1">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="space-y-2">
          <h1 className="font-semibold">Shortest Path Breakdown</h1>
          <h2 className="text-xs opacity-50">
            Review each leg of your shortest computed path.
          </h2>
        </div>
        <div className="space-y-2 mt-4">
          {pathDetails.map((step, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm border-b pb-2"
            >
              <span>
                <span className="font-semibold">{step.from}</span> →{" "}
                <span className="font-semibold">{step.to}</span>
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                +{step.distance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Result;
