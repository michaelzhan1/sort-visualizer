import type { ALGORITHM_NAMES } from "@/common/constants";

export interface Highlight {
  color: "red" | "yellow";
  idx: number;
}

export interface Step {
  arr: number[];
  highlights: Highlight[];
}

export interface Algorithm {
  step: (arr: number[]) => Generator<Step, Step, void>;
}
export type AlgorithmName = (typeof ALGORITHM_NAMES)[number];
export type AlgorithmFactory = () => Algorithm;
