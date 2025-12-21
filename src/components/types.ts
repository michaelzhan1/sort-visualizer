export interface DisplayProps {
  arr: number[];
  done: boolean;
  width?: number;
  height?: number;
}

interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  id: string;
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}
