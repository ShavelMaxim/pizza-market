import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Экшен для смены категории
    setSearch: (state, action) => {
      state.defaultValue = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
