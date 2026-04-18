import React, { useContext } from "react";
import PizzaCard from "./PizzaCard.jsx";
import { AppContext } from "../context/context.jsx";
import { capitalize } from "../utils.js";

export default function Catalog() {
  const { category, selectedOption, menuList } = useContext(AppContext);
  const replacements = {
    Мясная: "Мясные",
    Вегетарианская: "Вегетарианские",
    Острая: "Острые",
    Закрытая: "Закрытые",
  };

  const filteredCategoryPizzas =
    category === "Все"
      ? menuList
      : menuList.filter((pizza) => {
          return pizza.category.toLowerCase() === category.toLowerCase();
        });

  const filteredOptionPizzas =
    selectedOption === "популярности"
      ? filteredCategoryPizzas
      : selectedOption === "цене"
        ? [...filteredCategoryPizzas].sort((a, b) => a.price - b.price)
        : [...filteredCategoryPizzas].sort((a, b) =>
            a.title.localeCompare(b.title, "ru", { sensitivity: "base" }),
          );

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <h1 className="catalog__title" id="catalog-title">
        {replacements[capitalize(category)] || capitalize(category)} пиццы
      </h1>
      <div className="catalog__grid">
        {filteredOptionPizzas.map((pizza, index) => (
          <PizzaCard key={`${pizza.title}-${index}`} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
