import React from 'react'
import "../styles/Cart.scss"
import up from "../assets/svg/du.svg"
import dow from "../assets/svg/dow.svg"
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { inQuantity } from '../redux/products/catrd/CartSlice'
import { inminus } from '../redux/products/catrd/CartSlice'


const Cart = () => {
    const{items}=useSelector((state) =>state.carts);
    let a =[40,9,9];
    let b =a.reduce((sub ,item) =>sub + item,0 )
    console.log(b);

    const subTotal =items.reduce((sub ,item) =>sub +item.price*item.quantity,0)


    
    

    const dispatch = useDispatch();
  return (
    <>
      <div className="pp">
        <Link to="/"><p className="p1">Home </p></Link> <p className="p2"> / Cart</p>
      </div>

      <div className="cart-wrapper container">
        {/* TODO: 1 */}
        <div className="title">
          <div className="text">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {/* TODO: 2 */}
        {items.map((x)=>(
            
        <div className="product-cart">

          <div className="img-title">
          <img src={x.images}/>
         
            <p>{x.title}</p>
          </div>
          <p>{x.price}$</p>
          <div className="textBox">
            <input type="num" value={x.quantity} min="1" max="10" />
           
            <div>
              <img onClick={()=>dispatch(inQuantity(x.id))} src={dow} alt="up" className="up" />
            </div>

            <img onClick={()=>dispatch(inminus(x.id))} src={up} alt="down" className="down" />
          </div>

          <p>{x.price*x.quantity}$</p>
        </div>
     
        ))}
        </div>
      <div className="buttons">
        <button className="btnThree">Return to Shop</button>
        <button className="btnFour">Update Cart</button>
      </div>
      <div>
       {subTotal}$
      </div>
    </>
  )
}

export default Cart
