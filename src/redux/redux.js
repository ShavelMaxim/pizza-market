import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categoriesSlice.js";
import filterReducer from "./slices/filiterSlice.js";
import searchReducer from "./slices/searchSlice.js";
import basketReducer from "./slices/basketSlice.js";
import paginationReducer from "./slices/paginationSlice.js";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    filters: filterReducer,
    search: searchReducer,
    basket: basketReducer,
    pagination: paginationReducer,
  },
});
// orderSheet,
// setOrderSheet,
// menuList,
// setMenuList,

// const [orderSheet, setOrderSheet] = useState([]);
// const [menuList, setMenuList] = useState(modifyPizzas(pizzas));
