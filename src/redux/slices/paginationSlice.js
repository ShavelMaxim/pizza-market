import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 1, // Текущая выбранная страница
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    // Экшен для смены страницы
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = paginationSlice.actions;
export default paginationSlice.reducer;
