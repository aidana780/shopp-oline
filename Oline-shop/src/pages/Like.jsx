import React from 'react'
import Product from '../components/product/Product'
import { useDispatch, useSelector } from 'react-redux'
import del from "../assets/svg/del.svg"
import { removeWish } from '../redux/wishlist/Wishslice'
const Like = () => {
  const {items} =useSelector((state)=>state.Wishslice);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div>
          <button>Move All To Bag</button>
        </div>
      <div><span>wishlist <span>({items.length})</span></span></div>
        {items?.map((x)=>(
               <div className='product-1'>
               <div className='productImg'>
                      <img  className='go' src={x.images[0]} />
                      <div className='discount'>-0%</div>
                      <div  onClick={()=>dispatch(removeWish(x.id))} className='icons'>
                          <img src={del} alt="" />
                  
                      </div>
                      <button className='product-btn'>Add to card</button>
                  </div>
                  <div className='info'>
                      <p>{x.title}</p>
                      <div className='prices'>
                          <p className='price-2'>{x.price}$</p>
          {/*            
                           <p className='price-3'>{data.price}$    </p> */}
          
                      </div>
                      <div className='rating'>
                          
            
                      </div>
                  </div>
               </div>
        ))}
      </div>
    </div>
  )
}

export default Like
