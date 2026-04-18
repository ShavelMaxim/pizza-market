import React, { useContext } from "react";
import { AppContext } from "../context/context.jsx";
import { deleteItemFromBasket } from "../utils.js";

export default function CartItem({ pizza }) {
  const { image, title, orderDescription, quantity, orderPrice, id } = pizza;
  const { setBasket, basket } = useContext(AppContext);

  const incrementQuantity = (type) => {
    type === "increment"
      ? setBasket((prev) => {
          return prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  orderPrice: item.price * (item.quantity + 1),
                }
              : item,
          );
        })
      : setBasket((prev) => {
          return prev.map((item) =>
            item.id === id && item.quantity > 1
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  orderPrice: item.price * (item.quantity - 1),
                }
              : item,
          );
        });
  };

  return (
    <article className="cart-item">
      <img className="cart-item__image" src={image} alt={title} />

      <div className="cart-item__info">
        <h2 className="cart-item__title">{title}</h2>
        <p className="cart-item__description">{orderDescription}</p>
      </div>

      <div className="cart-item__quantity">
        <button
          className="cart-item__action"
          type="button"
          onClick={() => incrementQuantity("decrement")}
        >
          -
        </button>
        <span className="cart-item__count">{quantity}</span>
        <button
          className="cart-item__action"
          type="button"
          onClick={() => incrementQuantity("increment")}
        >
          +
        </button>
      </div>

      <div className="cart-item__price">{orderPrice} ₽</div>

      <button
        onClick={() => {
          deleteItemFromBasket(id, setBasket, basket);
        }}
        className="cart-item__remove"
        type="button"
        aria-label={`Удалить ${title}`}
      >
        ×
      </button>
    </article>
  );
}
