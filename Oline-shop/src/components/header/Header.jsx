import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../header/Header.modules.css"
const Header = () => {
  return (
<div>
<div className='header'>
        <div>
            <h4>Exclusive</h4>
        </div>
     <ul className='header-ul'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
     </ul>
     <div>
        <input type="text" />
     </div>
     <div className='header-i'>
      <Link to="/like"><i className="bi bi-heart"></i></Link>
    <Link  to="./cart"><i className="bi bi-archive"></i></Link>
     <i className="bi bi-person"></i>
     </div>
    </div>
    <div className='header-ol'>

    </div>
</div>
  )
}

export default Header
