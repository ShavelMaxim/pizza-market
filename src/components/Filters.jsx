import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "../context/context.jsx";

export default function Filters() {
  const filtersRef = useRef(null);
  const { selectedOption, setSelectedOption, options, isOpen, setIsOpen } =
    useContext(AppContext);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="filters" ref={filtersRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="filters__toggle"
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span
          className={`filters__arrow ${isOpen ? "filters__arrow--open" : ""}`}
        />
        <span className="filters__label">Сортировка по:</span>
        <span className="filters__value">{selectedOption}</span>
      </button>

      {isOpen ? (
        <div className="filters__menu" role="listbox">
          {options.current.map((option) => {
            const isSelected = option === selectedOption;

            return (
              <button
                aria-selected={isSelected}
                className={`filters__option ${isSelected ? "filters__option--active" : ""}`}
                key={option}
                type="button"
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
