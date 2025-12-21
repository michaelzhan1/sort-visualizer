import { useEffect, useRef, useState } from "react";

import type { DropdownProps } from "@/components/types";

import "@/components/dropdown.css";

export function Dropdown<T>({
  id,
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
      <input
        id={id}
        className="dropdown-input"
        value={
          selectedValue.length === 0
            ? ""
            : options.find((o) => o.value === selectedValue)?.label || ""
        }
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="dropdown-list" hidden={!isOpen}>
        {options.map((option) => (
          <div
            key={option.label}
            className="dropdown-item"
            onClick={() => {
              onSelect(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
