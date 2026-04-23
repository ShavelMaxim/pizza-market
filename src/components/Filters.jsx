import React, { useEffect, useRef, useContext, useState } from "react";
import { AppContext } from "../context/context.jsx";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/filiterSlice.js";

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const filtersRef = useRef(null);
  const { selectedOption } = useContext(AppContext);
  const dispatch = useDispatch();
  const options = ["популярности", "цене", "алфавиту"];

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
          {options.map((option) => {
            const isSelected = option === selectedOption;

            return (
              <button
                aria-selected={isSelected}
                className={`filters__option ${isSelected ? "filters__option--active" : ""}`}
                key={option}
                type="button"
                onClick={() => {
                  dispatch(setFilter(option));
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
