import { useState, useRef } from "react";
import { AppContext } from "./context.jsx";
import { modifyPizzas } from "../utils.js";
import pizzas from "../data/pizzas.js";

export default function AppProvider({ children }) {
  const [category, setCategory] = useState("Все");
  const [basket, setBasket] = useState([]);
  const [selectedOption, setSelectedOption] = useState("популярности");
  const [isOpen, setIsOpen] = useState(false);
  const [orderSheet, setOrderSheet] = useState([]);
  const [menuList, setMenuList] = useState(modifyPizzas(pizzas));
  const options = useRef(["популярности", "цене", "алфавиту"]);

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        basket,
        setBasket,
        selectedOption,
        setSelectedOption,
        isOpen,
        setIsOpen,
        options,
        orderSheet,
        setOrderSheet,
        menuList,
        setMenuList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
