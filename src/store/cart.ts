import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/products";

interface StateProps {
  isOpen: boolean;
  items: Array<IProduct>;
  subtotal: number;
}

const initialState: StateProps = {
  isOpen: false,
  items: [],
  subtotal: 0,
};

/* Add Item Reducer */
interface AddProps {
  payload: IProduct;
}

function addItemReducer(state: StateProps, { payload }: AddProps) {
  const item = state.items.find((item) => item._id === payload._id);

  if (item && item.quantity) {
    const newArrItems = state.items.filter((item) => item._id !== payload._id);

    state.items = [
      ...newArrItems,
      {
        ...item,
        quantity: item.quantity + 1,
      },
    ];
  }

  if (!item) {
    state.items = [...state.items, payload];
  }
}

/* Remove Item Reduces */
interface RemoveProps {
  payload: {
    _id: string;
  };
}

function removeItemReducer(state: StateProps, { payload }: RemoveProps) {
  const newItems = state.items.filter((item) => item._id !== payload._id);
  state.items = newItems;
}

/* Reduce Quantity Reducer */
interface ReduceQuantityProps {
  payload: {
    _id: string;
  };
}

function reduceQuantityReducer(
  state: StateProps,
  { payload }: ReduceQuantityProps
) {
  let item = state.items.find((item) => item._id === payload._id);

  const newArrItems = state.items.filter((item) => item._id !== payload._id);

  if (newArrItems && item && item.quantity) {
    state.items = [...newArrItems, { ...item, quantity: item.quantity - 1 }];
  }
}

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
    addItem: addItemReducer,
    removeItem: removeItemReducer,
    reduceQuantity: reduceQuantityReducer,
  },
});

export const { openCart, closeCart, addItem, removeItem, reduceQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
