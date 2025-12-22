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

// todos:
// highlighting
// jump to step?

function App() {
  const initial = shuffle(Array.from({ length: 10 }, (_, i) => i + 1));
  const [algChoice, setAlgChoice] = useState<AlgorithmName>("Bubble");
  const [playing, setPlaying] = useState(false);

  const { arrs, idx, done, stepFwd, stepRev, start } = useStepper(
    algorithms[algChoice],
    initial,
  );
  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    if (!playing || done) return;

    const id = setInterval(() => {
      stepFwd();
    }, 100);
    return () => clearInterval(id);
  }, [playing, stepFwd, done]);

  const onTogglePlaying = () => {
    setPlaying((playing) => !playing);
  };
  const onReset = () => {
    setPlaying(false);
    start();
  };

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
          {done && idx >= arrs.length - 1 ? (
            <button onClick={onReset}>Reset</button>
          ) : (
            <button onClick={onTogglePlaying}>
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
