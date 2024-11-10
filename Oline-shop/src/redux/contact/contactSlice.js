import { createSlice } from "@reduxjs/toolkit";

const contactSlice =createSlice({
    name:"contact",
    initialState:{
        list:[],
        loading:false,
        error:null,
        
    },
    reducers:{
        getCocktailStart:(state)=>{
            state.loading=true;
             state.error=null
        },
        getCocktailSuccess:(state,actions)=>{
            state.list=actions.payload
        },
        getCocktailError:(state,actions)=>{
            state.loading=false;
            state.error=actions.payload

        }
    },
})
export const {getCocktailStart,getCocktailSuccess,getCocktailError}=contactSlice.actions;
export default contactSlice.reducer