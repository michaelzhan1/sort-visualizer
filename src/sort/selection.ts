import type { Algorithm, Step } from "@/common/types";

export class Selection implements Algorithm {
  *step(arr: number[]): Generator<Step, Step, void> {
    const n = arr.length;
    let prev = [...arr];

    for (let i = 0; i < n - 1; i++) {
      let minVal = prev[i];
      let minIdx = i;

      for (let j = i + 1; j < n; j++) {
        if (prev[j] < minVal) {
          minVal = prev[j];
          minIdx = j;
        }
      }

      if (i == minIdx) continue;

      const next = [...prev];
      yield {
        arr: next,
        highlights: [
          { color: "red", idx: i },
          { color: "red", idx: minIdx },
        ],
      };
      next[i] = prev[minIdx];
      next[minIdx] = prev[i];
      yield {
        arr: next,
        highlights: [
          { color: "green", idx: i },
          { color: "green", idx: minIdx },
        ],
      };
      prev = next;
    }

    return {
      arr: prev,
      highlights: [],
    };
  }
}
