import { useEffect, useState } from "react";

import "@/App.css";
import { ALGORITHM_OPTIONS } from "@/common/constants";
import type { AlgorithmFactory, AlgorithmName } from "@/common/types";
import { Display } from "@/components/display";
import { Dropdown } from "@/components/dropdown";
import { useStepper } from "@/hooks/useStepper";
import { Bubble } from "@/sort/bubble";
import { Selection } from "@/sort/selection";
import { shuffle } from "@/utils/random.util";

const algorithms: Record<AlgorithmName, AlgorithmFactory> = {
  Bubble: () => new Bubble(),
  Selection: () => new Selection(),
};

function App() {
  const initial = shuffle(Array.from({ length: 10 }, (_, i) => i + 1));
  const [algChoice, setAlgChoice] = useState<AlgorithmName>("Bubble");

  const { arrs, idx, done, stepFwd, stepRev, start } = useStepper(
    algorithms[algChoice],
    initial,
  );
  useEffect(() => {
    start();
  }, [start]);

  return (
    <>
      <h1>Visualizer</h1>
      <div>
        <div style={{ marginBottom: "10px" }}>
          <Dropdown
            options={ALGORITHM_OPTIONS}
            selectedValue={algChoice}
            onSelect={(value) => setAlgChoice(value)}
          />
        </div>
        <div>
          <Display arr={arrs[idx]} done={done && idx >= arrs.length - 1} />
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button onClick={stepRev} disabled={idx <= 0}>
            &larr;
          </button>
          <button onClick={stepFwd} disabled={done && idx >= arrs.length - 1}>
            &rarr;
          </button>
          <span>Step: {idx}</span>
        </div>
      </div>
    </>
  );
}

export default App;
