import type { Algorithm, Step } from "@/common/types";

export class Selection implements Algorithm {
  *step(arr: number[]): Generator<Step[], Step[], number[]> {
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

      const next = [...prev];
      next[i] = prev[minIdx];
      next[minIdx] = prev[i];
      yield next;
      prev = next;
    }

    return prev;
  }
}
