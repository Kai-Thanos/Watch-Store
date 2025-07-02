import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({ setShowPopup }) => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <div className='navbar'>
      <div className="menu-box">
        <Link className="logo" to='/' data-aos="fade-right" data-aos-duration="1700">ThaMix.</Link>

        {/* Navigation Menu */}
        <ul className='center-bar'>
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
          <a href='#shop' onClick={() => setMenu("service")} className={menu === "service" ? "active" : ""}>Shop</a>
          <a href='#contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
        </ul>

        {/* Right Icons */}
        <div className='right-bar' data-aos="fade-left" data-aos-duration="1700">
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="nav-icon">
            <Link to='Cart'><i className="fa-solid fa-bag-shopping"></i></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowPopup(true)} className='login'>Sign in</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
