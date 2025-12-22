import type { ALGORITHM_NAMES } from "@/common/constants";

export interface Step {
  arr: number[];
  highlights: {
    color: "red" | "yellow";
    idx: number;
  }[];
}

export interface Algorithm {
  step: (arr: number[]) => Generator<Step[], Step[], number[]>;
}
export type AlgorithmName = (typeof ALGORITHM_NAMES)[number];
export type AlgorithmFactory = () => Algorithm;
