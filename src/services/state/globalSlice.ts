import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    itemsPerPage: 0,
    paginationButtons: 0,
  },
  reducers: {
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setPaginationButtons: (state, action) => {
      state.paginationButtons = action.payload;
    },
  },
});

export const { setItemsPerPage, setPaginationButtons } = globalSlice.actions;

export default globalSlice.reducer;
