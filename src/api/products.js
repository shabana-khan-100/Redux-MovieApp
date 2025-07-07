import axios from "axios"
import { setProducts } from "../slice/productSlice"

export const getProducts = () => async dispatch =>{
    const url= `https://dummyjson.com/products`
    try{
        const {data:{products}}= await axios.get(url)
        
        dispatch(setProducts(products))
        return products

    }catch (err)
    {
        return err
    }
}