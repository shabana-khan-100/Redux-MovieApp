import axios from "axios";
import {  setCatgeoryProducts, setProducts } from "../slice/productSlice";
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

export const getProductsBybrand = (value)=>async (dispatch) =>{
     const searchurl = url + "/categories";
  try {
    const { data  } = await axios.get(searchurl)
    console.log("API data",data)
    dispatch(setCatgeoryProducts(data))
  } catch (err) {
    return err;
  }
}

export const getProductsByCategory = (value)=>async (dispatch) =>{
     const searchurl = url + `/category/${value}`;
  try {
    const { data :{products} } = await axios.get(searchurl)
    console.log("catgory API data",products)
    dispatch(setProducts(products))
  } catch (err) {
    return err;
  }
}