import axios from "axios";
import { setProducts } from "../slice/productSlice";
const url = `https://dummyjson.com/products`;
export const getProducts = () => async (dispatch) => {
  try {
    const {
      data: { products },
    } = await axios.get(url);

    dispatch(setProducts(products));
    return products;
  } catch (err) {
    return err;
  }
};

export const getProductsBySearch = (value) => async (dispatch) => {
  const searchurl = url + "/search";
  try {
    const { data : { products } } = await axios.get(searchurl, {
      params: { q: value },
    });
    dispatch(setProducts(products))
  } catch (err) {
    return err;
  }
};
