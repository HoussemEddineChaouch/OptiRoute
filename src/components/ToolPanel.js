import React from "react";
import { VscDebugStart } from "react-icons/vsc";
import { RiResetLeftLine } from "react-icons/ri";
import { GrClearOption } from "react-icons/gr";

function ToolPanel({ resetRoutes, clearAllGraph, nodes, edges, handleSolve }) {
  return (
    <div className="w-1/4 flex flex-col justify-between h-80 p-4 rounded-xl font-poppins bg-white border">
      <div className="space-y-1">
        <h1 className="font-semibold">Control Panel</h1>
        <h2 className="text-xs opacity-50">
          Manage routes, algorithms, and settings.
        </h2>
      </div>
      <div className="space-y-2">
        <select
          name="algorithms"
          className="w-full p-3 border rounded-md text-sm border-gray-300 bg-gray-100 "
        >
          <option value="BF" className="hover:bg-black">
            Brute Force
          </option>
          <option value="GA" disabled>
            Genitic Algorithm (soon)
          </option>
          <option value="NN" disabled>
            Nearset Neighbor (soon)
          </option>
          <option value="SA" disabled>
            Simulated Annealing (soon)
          </option>
        </select>
        <div className="flex items-start flex-col gap-2">
          <button
            onClick={handleSolve}
            className={`btn-commun bg-blue-500 ${
              !edges?.length && !nodes?.length
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <VscDebugStart />
            Solve
          </button>
          <button
            className={`btn-commun bg-gray-100 !text-gray-800 ${
              !edges?.length ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={resetRoutes}
          >
            <RiResetLeftLine />
            Reset Routes
          </button>
          <button
            className={`btn-commun bg-red-500 ${
              !edges?.length && !nodes?.length
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={clearAllGraph}
          >
            <GrClearOption />
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToolPanel;
