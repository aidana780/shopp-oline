import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, minus } from '../redux/CountSlice'
import geel from "../assets/image/gerl.png"
import "../styles/About.scss"
import shoop from "../assets/svg/shop.svg"
import baag from "../assets/svg/bag.svg"
import mooney from "../assets/svg/money.svg"
import Tom from "../assets/image/jon.png"
import ema from "../assets/image/emma.png"
import will from "../assets/image/wil.png"

const About = () => {
  const {value}= useSelector((state)=>state.counter)
  const disptach =useDispatch()
  return (
    <div>
  <div>
  <div className='About'>
        <div className='About-text'>
          <h1>Our Story</h1>
          <div>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
          </div>
          <div>
            <p>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
          </div>
        </div>
        <div>
          <img className='About-img' src={geel} />
        </div>
  </div>
  <div className='About-card-1'>
    <div className='About-card'>
      <img className='About-icons' src={shoop} alt="" />
      <h4>10.5k</h4>
      <p>Sallers active our site</p>
    </div>
    <div className='About-card'>
      <img className='About-icons' src={shoop} alt="" />
      <h4>33k</h4>
      <p>Mopnthly Produduct Sale</p>
    </div>
    <div className='About-card'>
      <img className='About-icons' src={baag} alt="" />
      <h4>45.5k</h4>
      <p>Customer active in our site</p>
    </div>
    <div className='About-card'>
      <img className='About-icons' src={mooney} alt="" />
      <h4>25k</h4>
      <p>Anual gross sale in our site</p>
    </div>
  </div>
  <div className='about'>
    <div className='About-1'>
      <div className='About-person'>
        <img className='About-tom' src={Tom} alt="" />
        </div>
      <h3>Tom Cruise</h3>
      <p>Founder & Chairman</p>
      <div>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-instagram"></i>
      
      </div>

    </div>
    <div className='About-1'>
      <div className='About-person'>
        <img className='About-tom' src={ema} alt="" />
        </div>
      <h3>Tom Cruise</h3>
      <p>Founder & Chairman</p>
      <div>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-instagram"></i>
      
      </div>

    </div>
    <div className='About-1'>
      <div className='About-person'>
        <img className='About-tom' src={will} alt="" />
        </div>
      <h3>Tom Cruise</h3>
      <p>Founder & Chairman</p>
      <div>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-instagram"></i>
      
      </div>

    </div>
    
  </div>
      </div>
      About {value}
      <button onClick={()=>disptach(increment())}>add</button>
      <button onClick={()=>disptach(minus())}>fhbjc</button>
    </div>
  )
}

export default About
