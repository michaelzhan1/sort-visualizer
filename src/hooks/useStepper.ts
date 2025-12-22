import { useCallback, useRef, useState } from "react";

import type { AlgorithmFactory, Step } from "@/common/types";

export function useStepper(algFactory: AlgorithmFactory, initial: number[]) {
  const genRef = useRef<Generator<Step, Step, void> | null>(null);

  const [steps, setSteps] = useState<Step[]>([
    {
      arr: initial,
      highlights: [],
    },
  ]);
  const [idx, setIdx] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);

  // callback to start stepper. can use to reset if needed.
  const start = useCallback(() => {
    genRef.current = algFactory().step(initial);
    setSteps([
      {
        arr: initial,
        highlights: [],
      },
    ]);
    setIdx(0);
    setDone(false);
  }, [algFactory, initial]);

  const stepFwd = () => {
    if (!genRef.current) return;

    if (idx >= steps.length - 1) {
      const res = genRef.current.next();
      setSteps([...steps, res.value]);
      if (res.done) {
        setDone(true);
      }
    }

    if (!done || idx < steps.length - 1) {
      setIdx((i) => i + 1);
    }
  };

  const stepRev = () => {
    setIdx((i) => Math.max(0, i - 1));
  };

  return {
    steps,
    idx,
    done,
    stepFwd,
    stepRev,
    start,
  };
}
