import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import React from "react";
import AppProvider from "./context/AppProvider.jsx";
import { AppContext } from "./context/context.jsx";
import { store } from "./redux/redux.js";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  );
}
