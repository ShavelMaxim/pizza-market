import React, { useContext } from "react";
import { AppContext } from "../context/context.jsx";
import {
  buildPizzaState,
  changePrice,
  createBasketItem,
  modifyOrderName,
} from "../utils.js";

function renderOptionClass(option) {
  return [
    "pizza-card__option",
    option.active ? "pizza-card__option--active" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function PizzaCard({ pizza }) {
  const { setMenuList, setBasket, basket } = useContext(AppContext);

  const { title, image, doughs = [], sizes = [], basePrice, price } = pizza;
  const currentOrderName = modifyOrderName(pizza);

  const isAddedToBasket = basket.some(
    (item) => item.orderName === currentOrderName,
  );

  const handleAddToOption = (types, option) => {
    const updatedOptions = pizza[types].map((item) =>
      item.label === option.label
        ? { ...item, active: true }
        : { ...item, active: false },
    );

    const activeDough =
      (types === "doughs" ? updatedOptions : doughs).find((item) => item.active)
        ?.label ?? doughs[0]?.label;
    const activeSize =
      (types === "sizes" ? updatedOptions : sizes).find((item) => item.active)
        ?.label ?? sizes[0]?.label;

    const updatedPizza = buildPizzaState({
      ...pizza,
      price: changePrice([activeDough, activeSize], basePrice),
      [types]: updatedOptions,
    });

    setMenuList((prevSheet) => {
      const existingIndex = prevSheet.findIndex((item) => item.id === pizza.id);
      if (existingIndex !== -1) {
        const updatedSheet = [...prevSheet];
        updatedSheet[existingIndex] = updatedPizza;
        return updatedSheet;
      }
      return [...prevSheet, updatedPizza];
    });
  };

  return (
    <article className="pizza-card">
      <img className="pizza-card__image" src={image} alt={title} />
      <h2 className="pizza-card__title">{title}</h2>

      <div className="pizza-card__selectors">
        <div className="pizza-card__group">
          {doughs.map((option) => (
            <button
              onClick={() => handleAddToOption("doughs", option)}
              className={renderOptionClass(option)}
              key={option.label}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="pizza-card__group pizza-card__group--sizes">
          {sizes.map((option) => (
            <button
              onClick={() => handleAddToOption("sizes", option)}
              className={renderOptionClass(option)}
              key={option.label}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pizza-card__footer">
        <span className="pizza-card__price">{price} ₽</span>
        {isAddedToBasket ? (
          <button
            onClick={() => {
              setBasket((prev) =>
                prev.filter((item) => item.orderName !== currentOrderName),
              );
            }}
            className="pizza-card__add pizza-card__add--active"
            type="button"
          >
            <span className="pizza-card__add-icon"></span>
            <span>В корзине</span>
          </button>
        ) : (
          <button
            onClick={() => {
              setBasket((prev) => [...prev, createBasketItem(pizza)]);
            }}
            className="pizza-card__add"
            type="button"
          >
            <span className="pizza-card__add-icon">+</span>
            <span>Добавить</span>
          </button>
        )}
      </div>
    </article>
  );
}
