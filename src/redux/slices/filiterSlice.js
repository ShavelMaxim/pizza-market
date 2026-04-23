import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilter: "популярности", // Текущая выбранная категория
};

export const filterSlice = createSlice({
  name: "filiter",
  initialState,
  reducers: {
    // Экшен для смены категории
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
