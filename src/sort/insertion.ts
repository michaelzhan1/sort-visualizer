import type { Algorithm } from "@/sort/algorithm";

export class Insertion implements Algorithm {
  *step(arr: number[]): Generator<number[], number[], number[]> {
    const n = arr.length;
    let prev = [...arr];

    for (let i = 0; i < n - 1; i++) {
      let minVal = arr[i];
      let minIdx = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < minVal) {
          minVal = arr[j];
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