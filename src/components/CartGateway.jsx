import React, { useContext } from "react";
import { AppContext } from "../context/context.jsx";
import CartPage from "../pages/CartPage.jsx";
import { Navigate } from "react-router-dom";

export default function CartGateway() {
  const { basket } = useContext(AppContext);

  return basket.length > 0 ? <CartPage /> : <Navigate to="/cart-empty" replace />;
}
