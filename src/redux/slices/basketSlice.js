import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultValue: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Экшен для смены категории
    addItem: (state, action) => {
      state.defaultValue = [...state.defaultValue, action.payload];
    },
    removeItem: (state, action) => {
      state.defaultValue = state.defaultValue.filter(
        (item) => item.orderName !== action.payload,
      );
    },
    clearBasket: (state) => {
      state.defaultValue = [];
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      // Ищем товар в корзине по id

      const item = state.defaultValue.find((item) => item.id === id);

      if (item) {
        if (type === "increment") {
          item.quantity += 1;
        } else if (type === "decrement" && item.quantity > 1) {
          item.quantity -= 1;
        }
        // Пересчитываем стоимость сразу в редьюсере
        item.orderPrice = item.price * item.quantity;
      }
    },
  },
});

export const { addItem, removeItem, clearBasket, updateQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
