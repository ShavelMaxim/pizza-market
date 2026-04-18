import React from "react";
import { Link } from "react-router-dom";
import EmptyCartIllustration from "../components/EmptyCartIllustration.jsx";

export default function EmptyCartPage() {
  return (
    <section className="empty-cart">
      <h1 className="empty-cart__title">
        Корзина пустая <span className="empty-cart__emoji">😕</span>
      </h1>

      <p className="empty-cart__description">
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>

      <EmptyCartIllustration />

      <Link className="empty-cart__back" to="/">
        Вернуться назад
      </Link>
    </section>
  );
}
