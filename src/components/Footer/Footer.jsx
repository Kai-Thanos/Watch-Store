import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to='/'><h1 className='logo'>ThaMix.</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita enim optio sapiente quos. Vitae omnis magni magnam asperiores a consequuntur consequatur quo, odio est praesentium, velit aliquam rem nihil quidem.</p>
                <div className="footer-social-icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <Link to='/'>Home</Link>
                    <a href='#about'>About us</a>
                    <a href='#shop'>Shops</a>
                    <a href='#contact'>Contact us</a>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+855-118-630-35</li>
                    <li>mengkemom@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Mengke - All Right Reserved.</p>
    </div>
  )
}

export default Footer
