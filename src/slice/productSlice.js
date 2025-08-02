import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchValue: "",
  categoryProducts: [],
  favouriteProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchValue = action.payload;
    },
    setCatgeoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
    addFavourite: (state, action) => {
      const products = action.payload;
      const idx = state.favouriteProducts.findIndex(
        (fav) => fav.id === products.id
      );
      if (idx === -1) state.favouriteProducts.push(products);
      else state.favouriteProducts.splice(idx, 1);
    },
  },
});

export const {
  setProducts,
  setSearchMovie,
  setCatgeoryProducts,
  addFavourite,
} = productSlice.actions;

export default productSlice.reducer;
