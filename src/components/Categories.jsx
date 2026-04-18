import React, { useContext } from "react";
import { getUniqueCategories, capitalize } from "../utils.js";
import { AppContext } from "../context/context.jsx";

export default function Categories() {
  const { category, setCategory, menuList } = useContext(AppContext);
  const categories = getUniqueCategories(menuList);

  return (
    <ul className="categories">
      {categories.map((categoryName) => (
        <li key={categoryName}>
          <button
            onClick={(e) => {
              setCategory(categoryName);
              e.target.classList.toggle("categories__item--active");
            }}
            className={`categories__item ${categoryName === category ? "categories__item--active" : ""}`}
            key={categoryName}
            type="button"
          >
            {capitalize(categoryName)}
          </button>
        </li>
      ))}
    </ul>
  );
}
