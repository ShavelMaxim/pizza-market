import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import React from "react";
import AppProvider from "./context/AppProvider.jsx";
import { AppContext } from "./context/context.jsx";

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
