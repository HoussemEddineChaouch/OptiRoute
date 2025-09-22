import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
function GraphCanvas({ nodes, setNodes, edges, setEdges }) {
  const onConnect = (params) => {
    const weight = prompt("Enter cost between nodes:");
    if (!isNaN(weight) && weight !== "") {
      setEdges((eds) => [
        ...eds,
        {
          ...params,
          label: weight,
          data: { weight: parseInt(weight) },
          type: "straight",
        },
      ]);
    }
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
      draggable: true, // Add this line
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onNodeDragStop = (event, node) => {
    setNodes((nds) =>
      nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
    );
  };

  return (
    <div className="w-3/4 h-screen border">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onPaneClick={(event) => {
          if (event.detail === 2) {
            onPaneDoubleClick(event);
          }
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
