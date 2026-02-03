import React, { useEffect, useRef, useState } from "react";

export default function MultiSelectDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!wrapperRef.current || wrapperRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleOption = (optionValue) => {
    const next = value.includes(optionValue)
      ? value.filter((item) => item !== optionValue)
      : [...value, optionValue];
    onChange(next);
  };

  const displayValue = value.length ? value.join(", ") : "Select";

  return (
    <div className="dropdown" ref={wrapperRef}>
      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{displayValue}</span>
        <span className="dropdown-caret">▾</span>
      </button>
      {open ? (
        <div className="dropdown-panel">
          {label ? <p className="dropdown-label">{label}</p> : null}
          {options.map((option) => (
            <label key={option.value} className="dropdown-option">
              <input
                type="checkbox"
                checked={value.includes(option.value)}
                onChange={() => toggleOption(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}
