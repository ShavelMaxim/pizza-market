import React from "react";
import PizzaCard from "./PizzaCard.jsx";
import { AppContext } from "../context/context.jsx";
import { capitalize } from "../utils.js";
import { replacements } from "../data/constans.js";
import { useCatalog } from "../hooks/useCatalog.js";

export default function Catalog() {
  const { filteredOptionPizzas, selectCategory } = useCatalog();

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <h1 className="catalog__title" id="catalog-title">
        {replacements[capitalize(selectCategory)] || capitalize(selectCategory)}{" "}
        пиццы
      </h1>
      <div className="catalog__grid">
        {filteredOptionPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
