import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/slices/basketSlice.js";

export default function CartItem({ pizza }) {
  const { image, title, orderDescription, quantity, orderPrice, id } = pizza;
  const dispatch = useDispatch();

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
          onClick={() => dispatch(updateQuantity({ id, type: "decrement" }))}
        >
          -
        </button>
        <span className="cart-item__count">{quantity}</span>
        <button
          className="cart-item__action"
          type="button"
          onClick={() => dispatch(updateQuantity({ id, type: "increment" }))}
        >
          +
        </button>
      </div>

      <div className="cart-item__price">{orderPrice} ₽</div>

      <button
        onClick={() => {
          dispatch(removeItem(pizza.orderName));
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
