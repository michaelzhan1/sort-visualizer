import { useEffect, useState } from "react";

import "@/App.css";
import type { AlgorithmFactory, AlgorithmName } from "@/common/types";
import { Display } from "@/components/display";
import { useStepper } from "@/hooks/useStepper";
import { Bubble } from "@/sort/bubble";
import { Selection } from "@/sort/selection";
import { shuffle } from "@/utils/random.util";
import { Dropdown } from "@/components/dropdown";
import { ALGORITHM_OPTIONS } from "@/common/constants";

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
        <div>
          <span>Algorithm</span>
          <Dropdown options={ALGORITHM_OPTIONS} selectedValue={algChoice} onSelect={(value) => setAlgChoice(value)} />
        </div>
        <div>
          <Display arr={arrs[idx]} done={done && idx >= arrs.length - 1} />
        </div>
        <div>
          <span>Step Index: {idx}</span>
          <button onClick={stepRev} disabled={idx <= 0}>
            &larr;
          </button>
          <button onClick={stepFwd} disabled={done && idx >= arrs.length - 1}>
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
