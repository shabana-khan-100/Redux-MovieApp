import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    searchValue:'',
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
        }
    }
})

export const {setProducts,setSearchMovie} = productSlice.actions

export default productSlice.reducer;