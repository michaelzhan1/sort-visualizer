export interface DisplayProps {
  arr: number[];
  done: boolean;
  width?: number;
  height?: number;
}

export interface DropdownOption<T> {
  label: string;
  value: T;
}

export interface DropdownProps<T> {
  options: DropdownOption<T>[];
  selectedValue: string;
  onSelect: (value: T) => void;
}
