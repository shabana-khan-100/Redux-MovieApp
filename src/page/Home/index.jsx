import { useEffect } from "react"
import Header from "../../components/Header"
import { useDispatch, useSelector } from "react-redux"
import {getProducts} from "../../api/products"
import ProductCard from "../../components/ProductCard"
import { Box, Grid } from "@mui/material"
import { getProductsBySearch } from "../../utils/getProductsBySearcj"
const Home= ()=>{
    const dispatch= useDispatch()
    const {products, searchValue}= useSelector(state=>state.products)

    useEffect(()=>{
    dispatch(getProducts())
    },[])

    const filterByName= getProductsBySearch(products,searchValue)
    return (
        <>
        <Header/>
      <Box sx={{flexGrow:1, marginTop : "20px"}}>
        <Grid container spacing={2}>
        {
            //without API search 
            // filterByName?.length >0 && filterByName?.map((prod)=>
            //     <ProductCard key={prod.id} prod={prod}/>
            // )

            //with API search
            products?.length >0 && products?.map((prod)=>
                <ProductCard key={prod.id} prod={prod}/>
            )
        }
        </Grid>
        </Box >
        </>
    )

}

export default Home