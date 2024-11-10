import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loding: false,
    error: null,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loding = true;
      state.error = null;
    },
    fetchProductsSuccsess: (state, action) => {
      state.list = action.payload;
      state.loding = false;
    },
    feathProductsFail: (state, action) => {
      state.loding = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccsess, feathProductsFail } =
  productSlice.actions;
export default productSlice.reducer;
