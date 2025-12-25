import type { AlgorithmName } from "@/common/types";
import type { DropdownOption } from "@/components/types";

export const ALGORITHM_NAMES = [
  "Bubble",
  "Selection",
  "Insertion",
  "Bogo",
] as const;
export const ALGORITHM_OPTIONS: DropdownOption<AlgorithmName>[] = [
  { label: "Bubble Sort", value: "Bubble" },
  { label: "Selection Sort", value: "Selection" },
  { label: "Insertion Sort", value: "Insertion" },
  { label: "Bogo Sort", value: "Bogo" },
];
