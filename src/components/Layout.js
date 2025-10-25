import React, { useState } from "react";
import ToolPanel from "./ToolPanel";
import GraphCanvas from "./GraphCanvas";
import { graphToMatrix } from "../functions/graphToMatrix";
import { tspBruteForce } from "../algorithms/tspBruteForce";
import Result from "./Result";
import Card from "./Card";
import { PiPathBold } from "react-icons/pi";
import { GrNodes } from "react-icons/gr";
import { MdOutlineTimer } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

function Layout() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [result, setResult] = useState(null);

  const handleResetRoutes = () => {
    setEdges([]);
    setResult(null);
  };

  const clearAll = () => {
    setEdges([]);
    setNodes([]);
    setResult(null);
  };

  const runAlgorithm = () => {
    const matrix = graphToMatrix(nodes, edges);
    const result = tspBruteForce(matrix, nodes);
    setResult(result);
  };

  const carData = [
    {
      id: 1,
      name: "Total Distance",
      value: result ? result.cost : "-",
      icon: PiPathBold,
      bgColor: "bg-[#05339C]/10",
      textColor: "text-[#05339C]",
    },
    {
      id: 2,
      name: "Total Cities",
      value: result ? result.path.length : "-",
      icon: GrNodes,
      bgColor: "bg-[#450693]/10",
      textColor: "text-[#450693]",
    },
    {
      id: 3,
      name: "Computation Time",
      value: result ? result.time : "-",
      icon: MdOutlineTimer,
      bgColor: "bg-[#BF092F]/10",
      textColor: "text-[#BF092F]",
    },
    {
      id: 4,
      name: "Algorithme",
      value: "Burte force",
      icon: IoIosSettings,
      bgColor: "bg-[#E9B63B]/10",
      textColor: "text-[#E9B63B]",
    },
  ];

  return (
    <div className="conatiner mx-auto w-[95vw] mt-4 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        {carData.map(({ id, name, value, icon, bgColor, textColor }) => (
          <Card
            key={id}
            name={name}
            value={value ? value : "-"}
            Icon={icon}
            bgColor={bgColor}
            textColor={textColor}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ToolPanel
          resetRoutes={handleResetRoutes}
          clearAllGraph={clearAll}
          edges={edges}
          nodes={nodes}
          handleSolve={runAlgorithm}
        />
        <div className="w-full md:w-2/4">
          <GraphCanvas
            nodes={nodes}
            setNodes={setNodes}
            edges={edges}
            setEdges={setEdges}
          />
        </div>
        <div className="w-full md:w-1/4 h-80 overflow-auto bg-white rounded-lg border p-4 font-poppins">
          <Result result={result} nodes={nodes} edges={edges} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
