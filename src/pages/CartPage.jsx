import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import { AppContext } from "../context/context.jsx";
import { getOrderSummary, getQuantityInBaskets } from "../utils.js";

function CartIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4H5L7.4 14.5C7.5 15 8 15.3 8.5 15.3H17.4C17.9 15.3 18.4 15 18.5 14.5L20 7H6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9.2"
        cy="19.2"
        r="1.4"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle
        cx="17.2"
        cy="19.2"
        r="1.4"
        stroke="currentColor"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M9 7V5.5C9 4.7 9.7 4 10.5 4H13.5C14.3 4 15 4.7 15 5.5V7M8 10V18M12 10V18M16 10V18M6.5 7L7.3 18.5C7.4 19.4 8.1 20 9 20H15C15.9 20 16.6 19.4 16.7 18.5L17.5 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CartPage() {
  const { basket, setBasket } = useContext(AppContext);

  return (
    <section className="cart-page">
      <div className="cart-page__top">
        <div className="cart-page__heading">
          <CartIcon />
          <h1 className="cart-page__title">Корзина</h1>
        </div>

        <Link
          onClick={() => {
            setBasket([]);
          }}
          className="cart-page__clear"
          to="/cart-empty"
        >
          <TrashIcon />
          <span>Очистить корзину</span>
        </Link>
      </div>

      <div className="cart-page__list">
        {basket.map((item) => (
          <CartItem key={`${item.title}_${item.description}`} pizza={item} />
        ))}
      </div>

      <div className="cart-page__summary">
        <p className="cart-page__summary-item">
          Всего пицц: <strong>{getQuantityInBaskets(basket)}</strong>
        </p>
        <p className="cart-page__summary-item">
          Сумма заказа:{" "}
          <span className="cart-page__summary-accent">
            {getOrderSummary(basket)} ₽
          </span>
        </p>
      </div>

      <div className="cart-page__actions">
        <Link className="cart-page__back" to="/">
          <span className="cart-page__back-arrow">‹</span>
          <span>Вернуться назад</span>
        </Link>

        <button className="cart-page__pay" type="button">
          Оплатить сейчас
        </button>
      </div>
    </section>
  );
}
