import { useState } from "react";
import GraphCanvas from "./components/GraphCanvas";
import ControlPanel from "./components/ControlPanel";
import ResultPanel from "./components/ResultPanel";
import { tspBruteForce } from "./algorithms/tspBruteForce";
import { graphToMatrix } from "./functions/graphToMatrix";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [result, setResult] = useState(null);

  const runAlgorithm = () => {
    const matrix = graphToMatrix(nodes, edges);
    const result = tspBruteForce(matrix, nodes); // Pass nodes here
    setResult(result);
  };

  return (
    <div className="flex">
      <GraphCanvas
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
      />
      <div className="w-1/4 p-4">
        <ControlPanel
          runAlgorithm={runAlgorithm}
          reset={() => {
            setNodes([]);
            setEdges([]);
            setResult(null);
          }}
        />
        <ResultPanel result={result} nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;
