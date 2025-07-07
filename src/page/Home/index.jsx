import { useEffect } from "react"
import Header from "../../components/Header"
import { useDispatch, useSelector } from "react-redux"
import {getProducts} from "../../api/products"
const Home= ()=>{
    const dispatch= useDispatch()
    const {products}= useSelector(state=>state.products)
    console.log("products in home",products)

    useEffect(()=>{
    dispatch(getProducts())
    },[])
    return (
        <Header/>
    )
}

export default Home