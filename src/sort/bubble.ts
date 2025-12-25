import type { Algorithm, Step } from "@/common/types";

export class Bubble implements Algorithm {
  *step(arr: number[]): Generator<Step, Step, void> {
    const n = arr.length;
    let prev = [...arr];

    for (let i = 0; i < n - 1; i++) {
      for (let j = n - 1; j >= 0; j--) {
        if (prev[j] > prev[j + 1]) {
          const prenext = [...prev];
          yield {
            arr: prenext,
            highlights: [
              { color: "red", idx: j },
              { color: "red", idx: j + 1 },
            ],
          };

          const next = [...prenext];
          next[j] = prenext[j + 1];
          next[j + 1] = prenext[j];
          yield {
            arr: next,
            highlights: [
              { color: "green", idx: j },
              { color: "green", idx: j + 1 },
            ],
          };
          prev = next;
        }
      }
    }
    return {
      arr: prev,
      highlights: [],
    };
  }
}
