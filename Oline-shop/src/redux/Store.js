
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/CountSlice'
import productReducer from "./products/productSlice"
import wishReducer from "./wishlist/Wishslice"
import cardReducer from "./products/catrd/CartSlice"
import contactReducer from "./contact/contactSlice"


const store = configureStore({
    reducer:{
       counter:counterReducer,
       products :productReducer,
       Wishslice:wishReducer,
       carts:cardReducer,
       coctail:contactReducer,
     
    },
});

export default store;