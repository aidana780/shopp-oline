import React from 'react'
import "../footer/Footer.modules.css"

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-1'>
        <div>
            <h3>Exclusive</h3>
            <h5>Subscribe</h5>
            <p>Get 10% off your first order</p>
            <input type="text" />
        </div>
        <div>
            <h5>Support</h5>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div>
            <h5>Account</h5>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div>
            <h5>Quick Link</h5>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div>
            <h5>Download App</h5>
            <h6>Save $3 with App New User Only</h6>
            <div className='footer-icons'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
