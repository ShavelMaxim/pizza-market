import React, { useContext, useEffect } from "react";
import PizzaCard from "../components/PizzaCard.jsx";
import { AppContext } from "../context/context.jsx";
import { getPizzasForPage } from "../utils.js";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setActivePage } from "../redux/slices/paginationSlice.js";

export const useCatalog = () => {
  const dispatch = useDispatch();

  const { menuList, setTotal } = useContext(AppContext);
  const { searchDefaultValue, selectedOption, selectCategory, activePage } =
    useSelector(
      (state) => ({
        searchDefaultValue: state.search.defaultValue,
        selectedOption: state.filters.activeFilter,
        selectCategory: state.categories.activeCategory,
        activePage: state.pagination.activePage,
      }),
      shallowEqual, // оптимизация для предотвращения лишних рендеров при изменении других частей состояния
    );

  const filteredSearchPizzas = searchDefaultValue
    ? menuList.filter((pizza) =>
        pizza.title.toLowerCase().includes(searchDefaultValue.toLowerCase()),
      )
    : menuList;

  const filteredCategoryPizzas =
    selectCategory === "Все"
      ? filteredSearchPizzas
      : filteredSearchPizzas.filter((pizza) => {
          return pizza.category.toLowerCase() === selectCategory.toLowerCase();
        });

  const filteredOptionPizzas =
    selectedOption === "популярности"
      ? filteredCategoryPizzas
      : selectedOption === "цене"
        ? [...filteredCategoryPizzas].sort((a, b) => a.price - b.price)
        : [...filteredCategoryPizzas].sort((a, b) =>
            a.title.localeCompare(b.title, "ru", { sensitivity: "base" }),
          );

  const paginatedPizzas = getPizzasForPage(filteredOptionPizzas, activePage);

  useEffect(() => {
    setTotal(filteredOptionPizzas.length);
  }, [selectCategory, searchDefaultValue, selectedOption, setTotal]);

  useEffect(() => {
    if (activePage !== 1) {
      dispatch(setActivePage(1));
    }
  }, [selectCategory, searchDefaultValue, dispatch]);

  return {
    filteredOptionPizzas: paginatedPizzas,
    selectCategory,
  };
};
