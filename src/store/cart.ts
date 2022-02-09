import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/products";

interface StateProps {
  isOpen: boolean;
  items: Array<IProduct>;
}

const initialState: StateProps = {
  isOpen: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addItem: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
  },
});

export const { openCart, closeCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
