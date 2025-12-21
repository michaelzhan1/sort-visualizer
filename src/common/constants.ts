import type { AlgorithmName } from "@/common/types";
import type { DropdownOption } from "@/components/types";

export const ALGORITHM_NAMES = ["Bubble", "Selection"] as const;
export const ALGORITHM_OPTIONS: DropdownOption<AlgorithmName>[] = [
  { label: "Bubble Sort", value: "Bubble" },
  { label: "Selection Sort", value: "Selection" },
];
