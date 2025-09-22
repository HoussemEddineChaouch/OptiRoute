import React from "react";

function ControlPanel({ runAlgorithm, reset }) {
  return (
    <div className="space-y-4">
      <button
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={runAlgorithm}
      >
        Solve TSP with Brut force
      </button>
      <button
        className="w-full bg-red-500 text-white py-2 rounded"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default ControlPanel;
