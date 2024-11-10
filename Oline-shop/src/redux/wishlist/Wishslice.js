import { createSlice } from "@reduxjs/toolkit";


const Wishslice =createSlice({
    name:"wishlist",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state ,action)=>{
            const findProduct = state.items.find((x)=> x.id ==action.payload.id)
            if (!findProduct){
                state.items.push(action.payload)
            }         
       
        },
        removeWish :(state,action)=>{
            state.items=state.items.filter((items)=>items.id !==action.payload)
        }
    }
})
export const {addItem ,removeWish}= Wishslice.actions
export default Wishslice.reducer