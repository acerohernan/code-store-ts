import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./config";

import { ICollection, IProduct } from "../types/products";

interface PropsState {
  status: string;
  list: Array<IProduct>;
  listOfCollections: Array<ICollection>;
  productSelected: IProduct;
}

const initialState: PropsState = {
  status: "",
  list: [],
  listOfCollections: [],
  productSelected: {
    _id: "",
    name: "",
    price: 0,
    stars: 0,
    description: "",
    category: "",
    image: "",
  },
};

/* Thunk Get Products */
export const getProducts = createAsyncThunk<any>("product/get", async () => {
  const response = await fetchData().get("/api/products");
  const dataResponse = (await response).data;
  return dataResponse;
});

/* Thunk Get Collections */
export const getCollections = createAsyncThunk<any>(
  "product/getcollections",
  async () => {
    const response = await fetchData().get("/api/collections");
    const dataResponse = (await response).data;
    return dataResponse;
  }
);

/* Thunk Get Product By Id */
interface PropsGetById {
  category: string;
  id: string;
}

export const getProductById = createAsyncThunk<any, PropsGetById>(
  "product/getbyid",
  async (data) => {
    const { category, id } = data;
    const response = await fetchData().get(
      `/api/collections/${category}/${id}`
    );
    const dataResponse = (await response).data;
    console.log(dataResponse);
    return dataResponse;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Get Products */
    builder.addCase(getProducts.pending, (state) => {
      state.status = "getProducts_loading";
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.status = "getProducts_success";
      state.list = payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = "getProducts_rejected";
    });

    /* Get Collections */
    builder.addCase(getCollections.pending, (state) => {
      state.status = "getCollections_loading";
    });
    builder.addCase(getCollections.fulfilled, (state, { payload }) => {
      state.status = "getCollections_success";
      state.listOfCollections = payload;
    });
    builder.addCase(getCollections.rejected, (state) => {
      state.status = "getCollections_rejected";
    });

    /* Get Product By Id */
    builder.addCase(getProductById.pending, (state) => {
      state.status = "getProductById_loading";
    });
    builder.addCase(getProductById.fulfilled, (state, { payload }) => {
      state.status = "getProductById_success";
      state.listOfCollections = payload;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.status = "getProductById_rejected";
    });
  },
});

export default productSlice.reducer;
