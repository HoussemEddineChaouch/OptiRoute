import React, { useEffect, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

function GraphCanvas({ nodes, setNodes, edges, setEdges }) {
  const [edgeValue, setEdgeValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [pendingConnection, setPendingConnection] = useState(null);

  const onConnect = (params) => {
    setPendingConnection(params);
    setShowInput(true);
  };

  const handleAddEdge = () => {
    if (!edgeValue || isNaN(edgeValue)) return;

    const newEdge = {
      id: `edge-${Date.now()}-${Math.random()}`,
      ...pendingConnection,
      label: edgeValue,
      data: { weight: parseInt(edgeValue) },
      type: "straight",
    };

    setEdges((eds) => [...eds, newEdge]);
    setEdgeValue("");
    setShowInput(false);
    setPendingConnection(null);
  };

  const onPaneDoubleClick = (event) => {
    const id = `${nodes.length + 1}`;
    const newNode = {
      id,
      data: { label: `Node ${id}` },
      position: {
        x: event.clientX - 250,
        y: event.clientY - 100,
      },
      draggable: true,
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onNodeDragStop = (event, node) => {
    setNodes((nds) =>
      nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
    );
  };

  return (
    <div className="flex h-80 border rounded-xl relative font-poppins">
      {showInput && (
        <div className="absolute z-10 w-full h-full bg-gray-300/40 flex flex-col gap-3 items-center justify-center">
          <div className="w-[300px] space-y-2">
            <input
              className="w-full focus:outline-none rounded-lg bg-gray-100 border p-3"
              name="edge-value"
              placeholder="Enter cost between nodes"
              value={edgeValue}
              onChange={(e) => setEdgeValue(e.target.value)}
            />
            <button
              className="bg-blue-500 w-full text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handleAddEdge}
            >
              Add weight
            </button>
          </div>
        </div>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onPaneClick={(event) => {
          if (event.detail === 2) onPaneDoubleClick(event);
        }}
        onNodeDragStop={onNodeDragStop}
        zoomOnDoubleClick={false}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default GraphCanvas;
