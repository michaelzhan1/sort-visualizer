import type { Algorithm } from "@/sort/algorithm";

export class Bubble implements Algorithm {
  *step(arr: number[]): Generator<number[], number[], number[]> {
    // temp: do a cycle for testing purposes and easy implementation
    const n = arr.length;
    let prev = arr;

    for (let count = 0; count < n; count++) {
      const next = [...prev];
      for (let i = 0; i < n - 1; i++) {
        next[i] = prev[i + 1];
      }
      next[n - 1] = prev[0];
      yield next;
      prev = next;
    }
    return prev;
  }
}
