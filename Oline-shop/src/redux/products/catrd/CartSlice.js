import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice ({
    name:"card",
    initialState:{items:[]},
    reducers:{
        addToCart:( state,action)=>{
            const findProduct=state.items.find((item)=>item.id ==action.payload.id)

            if(!findProduct){
                state.items.push({...action.payload, quantity:1})
            }
        },
        inQuantity:(state,action)=>{
         const findProduct=state.items.find((item)=>item.id ==action.payload)

         if(findProduct) {
            findProduct.quantity +=1
         }
        },
        inminus:(state,action) =>{
           
            const findProduct=state.items.find((item)=>item.id ==action.payload)

            if(findProduct && findProduct.quantity>1) {
               findProduct.quantity -=1
            }
        }

        
    },
});

export const { addToCart,inQuantity ,inminus} = cartSlice.actions;
export default cartSlice.reducer;
