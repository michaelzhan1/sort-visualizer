import { useEffect, useRef, useState } from "react";

import type { DropdownProps } from "@/components/types";

import "@/components/dropdown.css";

export function Dropdown<T>({
  options,
  selectedValue,
  onSelect,
}: DropdownProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="dropdown-container">
      <div className="dropdown-input-group" onClick={() => setIsOpen(!isOpen)}>
        <input
          name="dropdown-input"
          className="dropdown-input"
          value={
            selectedValue.length === 0
              ? ""
              : options.find((o) => o.value === selectedValue)?.label || ""
          }
          readOnly
        />
        <div>
          ▼
        </div>
      </div>
      <div className="dropdown-list" hidden={!isOpen}>
        {options.map((option) => (
          <option
            key={option.label}
            className="dropdown-item"
            onClick={() => {
              onSelect(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </option>
        ))}
      </div>
    </div>
  );
}
