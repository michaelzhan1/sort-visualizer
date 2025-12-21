import type { ALGORITHM_NAMES } from "@/common/constants";

export interface Algorithm {
  step: (arr: number[]) => Generator<number[], number[], number[]>;
}// each single sort step should be 2 real steps: a comparison (yellow) and a move (green)
//   // the final move should also be broken up (a move, then finally all green)
export type AlgorithmName = typeof ALGORITHM_NAMES[number];
export type AlgorithmFactory = () => Algorithm;