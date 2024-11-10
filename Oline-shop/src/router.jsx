import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Servis from "./pages/Servis";
import Profile from "./pages/Profile";
import NotFount from "./pages/NotFount";
import SignUp from "./pages/SignUp";
import Like from "./pages/Like";
import Login from "./pages/Login";

import Wishslice from "./redux/wishlist/Wishslice";
import Cart from "./pages/Cart";


export const myRouter=createBrowserRouter([
    {
        path:"/",
        element :<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"signup",
                element:<SignUp/>
            },
            {
                path:"like",
                element:<Like/>
            },
            {
                path:"servis",
                element:<Servis/>,
            },
            {
                path:"*",
                element:<NotFount/>
            },
            {
                path:"login",
                element:<Login/>
            },
           {
            path:"cart",
            element:<Cart/>
           }
         
            
            
        ],

    },
    {
        path:"/profile",
        element:<Profile/>
    }
  

]);