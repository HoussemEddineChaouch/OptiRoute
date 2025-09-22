import React from "react";

function ResultPanel({ result, nodes, edges }) {
  if (!result)
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-500">
        <p>No solution calculated yet.</p>
        <p className="mt-2 text-sm">
          Create nodes, connect them with edges, and click "Solve TSP".
        </p>
      </div>
    );

  // Calculate total distance and prepare step-by-step path
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
    <div className="mt-4 p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold text-blue-600 mb-3">TSP Solution</h3>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-700">Best Path:</h4>
        <div className="flex flex-wrap items-center mt-1">
          {result.path.map((node, index) => (
            <React.Fragment key={index}>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md mx-1">
                {node}
              </span>
              {index < result.path.length - 1 && (
                <span className="text-gray-400 mx-1">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="font-semibold text-gray-700">Total Cost</h4>
          <p className="text-2xl font-bold text-blue-600">{result.cost}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="font-semibold text-gray-700">Nodes Visited</h4>
          <p className="text-2xl font-bold text-blue-600">
            {result.path.length - 1}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Path Details:</h4>
        <div className="space-y-2">
          {pathDetails.map((step, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                <span className="font-medium">{step.from}</span> →{" "}
                <span className="font-medium">{step.to}</span>
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                +{step.distance}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-3 rounded border border-blue-100">
        <h4 className="font-semibold text-blue-700">Algorithm Info</h4>
        <p className="text-sm text-gray-600 mt-1">
          Brute-force solution checked all possible paths to find this optimal
          route. Time complexity: O(n!).
        </p>

        <div className="mt-3 pt-3 border-t border-blue-100">
          <h5 className="font-medium text-blue-600 text-sm">
            Development Info
          </h5>
          <p className="text-xs text-gray-500 mt-1">
            Developed by: Chaouch Houssem eddine
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/houssemeddinechaouch
            </a>
          </p>

          <div className="flex space-x-2 mt-3">
            <a
              href="https://github.com/houssemeddinechaouch/tsp-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
            >
              View Source Code
            </a>
            <a
              href="/The Traveling Salesman Problem 2.pptx"
              download="TSP_Visualizer_Presentation.pptx"
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-500 transition-colors"
            >
              Download Presentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPanel;
