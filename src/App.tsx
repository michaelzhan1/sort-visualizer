import { useEffect } from "react";

import "@/App.css";
import { Display } from "@/components/display";
import { useStepper } from "@/hooks/useStepper";
import { Bubble } from "@/sort/bubble";
import { shuffle } from "@/utils/random.util";

function App() {
  const initial = shuffle(Array.from({ length: 5 }, (_, i) => i + 1));

  const { arrs, idx, done, stepFwd, stepRev, start } = useStepper(
    new Bubble(),
    initial,
  );
  useEffect(() => {
    start();
  }, [start]);

  return (
    <>
      <h1>Visualizer</h1>
      <div>
        <span>Array: </span>
        <span>{initial.join(", ")}</span>
      </div>
      <div>
        <div>
          <span>Display</span>
        </div>
        <div>
          <Display arr={arrs[idx]} done={false} />
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
