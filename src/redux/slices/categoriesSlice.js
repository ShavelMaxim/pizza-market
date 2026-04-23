import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "Все", // Текущая выбранная категория
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Экшен для смены категории
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
