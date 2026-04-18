import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";

export default function AppLayout() {
  const location = useLocation();
  const pageType =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/cart-empty"
        ? "cart-empty"
        : "cart";

  return (
    <div className="app">
      <Header showBasket={pageType === "home"} />
      <main className={`container container--${pageType}`}>
        <Outlet />
      </main>
    </div>
  );
}
