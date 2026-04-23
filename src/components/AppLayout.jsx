import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Navigate from "./Navigate.jsx";
import Categories from "./Categories.jsx";
import Filters from "./Filters.jsx";

export default function AppLayout() {
  const location = useLocation();
  const pageType =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/cart-empty"
        ? "cart-empty"
        : "cart";

  return (
    <div>
      <div className="fix-yellow-line"></div>

      <div className="app">
        <div className="header__wrapper">
          <Header showBasket={pageType === "home"} />
        </div>

        <main className={`container container--${pageType}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
