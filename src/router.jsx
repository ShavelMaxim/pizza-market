import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartGateway from "./components/CartGateway.jsx";
import EmptyCartPage from "./pages/EmptyCartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartGateway />,
      },
      {
        path: "cart-empty",
        element: <EmptyCartPage />,
      },
    ],
  },
]);

export default router;
