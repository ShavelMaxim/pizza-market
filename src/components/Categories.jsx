import React, { useContext } from "react";
import { getUniqueCategories, capitalize } from "../utils.js";
import { AppContext } from "../context/context.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/categoriesSlice.js";

export default function Categories() {
  const { menuList } = useContext(AppContext);
  const categories = getUniqueCategories(menuList);
  const category = useSelector((state) => state.categories.activeCategory);
  const dispatch = useDispatch();

  return (
    <ul className="categories">
      {categories.map((categoryName) => (
        <li key={categoryName}>
          <button
            onClick={() => {
              dispatch(setCategory(categoryName));
            }}
            className={`categories__item ${categoryName === category ? "categories__item--active" : ""}`}
            type="button"
          >
            {capitalize(categoryName)}
          </button>
        </li>
      ))}
    </ul>
  );
}
