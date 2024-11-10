import React from 'react'
import Star from '../../assets/svg/Star.jsx'
import Go from "../../assets/image/ggg.png"
import "./Product.scss"
// import Klaw from "../../assets/image/kl.png"
// import Dra from "../../assets/image/dr.png"
// import Te from "../../assets/image/tebl.png"
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/wishlist/Wishslice.js'
import  li from "../../assets/svg/like.svg"
import { addToCart } from '../../redux/products/catrd/CartSlice.js'

const Product = ({data}) => {
  const dispatch =useDispatch ()

  return (
    
      
    <div className='product'>
     <div className='product-1'>
     <div className='productImg'>
            <img  className='go' src={data.images} />
            <div className='discount'>-0%</div>
            <div className='icons'>
                <img onClick={() => dispatch(addItem(data))}src={li} alt="" />
                <img src="" alt="" />
            </div>
            <button onClick={()=>dispatch(addToCart(data))} className='product-btn'>Add to card</button>
        </div>
        <div className='info'>
            <p>{data.title}</p>
            <div className='prices'>
                <p className='price-2'>{data.price}$</p>
{/*            
                 <p className='price-3'>{data.price}$    </p> */}

            </div>
            <div className='rating'>
                {[1,2,3,4,5].map((item,index)=>(
                  <Star key={index} fill={item<=4?"#FFAD33":"gray"}/>
                ))}
  
            </div>
        </div>
     </div>
    
    </div>


  )
}

export default Product
