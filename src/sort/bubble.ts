import type { Algorithm } from "@/common/types";

export class Bubble implements Algorithm {
  *step(arr: number[]): Generator<number[], number[], number[]> {
    const n = arr.length;
    let prev = [...arr];

    for (let i = 0; i < n - 1; i++) {
      for (let j = n - 1; j >= 0; j--) {
        if (prev[j] > prev[j + 1]) {
          const next = [...prev];
          next[j] = prev[j + 1];
          next[j + 1] = prev[j];
          yield next;
          prev = next;
        }
      }
    }
    return prev;
  }
}
