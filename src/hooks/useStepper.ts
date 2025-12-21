import type { AlgorithmFactory } from "@/common/types";
import { useCallback, useRef, useState } from "react";


export function useStepper(algFactory: AlgorithmFactory, initial: number[]) {
  const genRef = useRef<Generator<number[], number[], number[]> | null>(null);

  const [arrs, setArrs] = useState<number[][]>([initial]);
  const [idx, setIdx] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);

  // callback to start stepper. can use to reset if needed.
  const start = useCallback(() => {
    genRef.current = algFactory().step(initial);
    setArrs([initial]);
    setIdx(0);
    setDone(false);
  }, [algFactory, initial]);

  const stepFwd = () => {
    if (!genRef.current) return;

    if (idx >= arrs.length - 1) {
      const res = genRef.current.next();
      setArrs([...arrs, res.value])
      if (res.done) {
        setDone(true);
      }
    }

    if (!done || idx < arrs.length - 1) {
      setIdx((i) => i + 1);
    }
  };

  const stepRev = () => {
    setIdx((i) => Math.max(0, i - 1));
  };

  return {
    arrs,
    idx,
    done,
    stepFwd,
    stepRev,
    start,
  };
}
