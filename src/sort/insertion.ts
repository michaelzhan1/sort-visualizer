import type { Algorithm, Step } from "@/common/types";

export class Insertion implements Algorithm {
  *step(arr: number[]): Generator<Step, Step, void> {
    const n = arr.length;
    let prev = [...arr];

    for (let i = 1; i < n; i++) {
      let j = i;
      while (j > 0 && prev[j] < prev[j - 1]) {
        const prenext = [...prev];
        yield {
          arr: prenext,
          highlights: [
            { color: "red", idx: j },
            { color: "red", idx: j - 1 },
          ],
        };

        const next = [...prenext];
        next[j] = prenext[j - 1];
        next[j - 1] = prenext[j];
        yield {
          arr: next,
          highlights: [
            { color: "green", idx: j },
            { color: "green", idx: j - 1 },
          ]
        }
        j--;
        prev = next;
      }
    }
    return {
      arr: prev,
      highlights: [],
    }
  }
}
