import React from 'react'
import "../styles/NotFount.modules.css"
import { Link } from 'react-router-dom'
const NotFount = () => {
  return (
    <div className='NotFount'>
        <div>
        <Link to="/">    <p className='nott'>Home/404 error</p></Link>
        </div>
  <div className='not'>
     <div>
        <h1>404 Not Found</h1>
        </div>
  
     <div>
        <h3>Your visited page not found. You may go home page.</h3>
      </div>
     <div>
        <button className='btn'>Back to home page</button>
     </div>
 </div>
    </div>
  )
}

export default NotFount
