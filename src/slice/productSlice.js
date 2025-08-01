import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    searchValue:'',
    categoryProducts:[]
}

const productSlice= createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts: (state,action)=>{
          state.products=action.payload
        },
        setSearchMovie:(state,action)=>{
            state.searchValue=action.payload
        },
        setCatgeoryProducts:(state,action)=>{
            state.categoryProducts= action.payload
        }
    }
})

export const {setProducts,setSearchMovie,setCatgeoryProducts} = productSlice.actions

export default productSlice.reducer;