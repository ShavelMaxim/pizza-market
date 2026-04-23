import React from "react";
import { AppContext } from "../context/context.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchSlice.js";

export default function Search() {
  const dispatch = useDispatch();
  const searchDefaultValue = useSelector((state) => state.search.defaultValue);

  return (
    <div className="search">
      <i className="fa-brands fa-sistrix"></i>
      <input
        value={searchDefaultValue}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
        className="search-input"
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchDefaultValue && (
        <i
          onClick={() => {
            dispatch(setSearch(""));
          }}
          className="close fa-solid fa-xmark search-clear"
        ></i>
      )}
    </div>
  );
}
