import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.svg";
import Basket from "../assets/icons/Basket.svg";
import { AppContext } from "../context/context.jsx";
import { getOrderSummary, getQuantityInBaskets } from "../utils.js";
import Search from "./Search.jsx";
import { useSelector } from "react-redux";

export default function Header({ showBasket = true }) {
  const basket = useSelector((state) => state.basket.defaultValue);

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__info" to="/">
          <div className="header__logo">
            <img src={Logo} alt="React Pizza" />
          </div>
          <div className="header__description">
            <span className="header__title">React Pizza</span>
            <span className="header__subtitle">Самая реактивная пицца</span>
          </div>
        </Link>

        {showBasket && <Search />}

        {showBasket ? (
          <Link className="header__basket" to="/cart">
            <span className="header__basket-price">
              {getOrderSummary(basket)} ₽
            </span>
            <span className="basket__divider"></span>
            <span className="basket__icon">
              <img src={Basket} alt="" aria-hidden="true" />
              <span className="header__basket-count">
                {getQuantityInBaskets(basket)}
              </span>
            </span>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
