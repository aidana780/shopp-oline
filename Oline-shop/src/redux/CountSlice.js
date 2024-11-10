import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        minus:(state)=>{
            state.value-=1
          }
    },
})

export const {increment, minus}=counterSlice.actions;

export default counterSlice.reducer;