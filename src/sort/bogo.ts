import type { Algorithm, Step } from "@/common/types";
import { shuffle } from "@/utils/random.util";

export class Bogo implements Algorithm {
  *step(arr: number[]): Generator<Step, Step, void> {
    const n = arr.length;
    let prev = [...arr];
    while (true) {
      let i = 0;
      while (i < n - 1) {
        if (prev[i] > prev[i + 1]) break;
        i++;
      }
      if (i == n - 1) break;

      const next = shuffle([...prev]);
      yield {
        arr: next,
        highlights: [],
      };
      prev = next;
    }

    return {
      arr: prev,
      highlights: [],
    };
  }
}
