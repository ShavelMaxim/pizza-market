import React from "react";
import { AppContext } from "../context/context.jsx";
import CartPage from "../pages/CartPage.jsx";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartGateway() {
  const basket = useSelector((state) => state.basket.defaultValue);

  return basket.length > 0 ? (
    <CartPage />
  ) : (
    <Navigate to="/cart-empty" replace />
  );
}
