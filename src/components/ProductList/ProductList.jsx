import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { assets } from '../../assets/assets';
import MainFeature from '../MainFeature/MainFeature';

const ProductList = ({ category, setCategory }) => {
  const bannerImages = [assets.slider1, assets.slider2, assets.slider3, assets.slider4 ];
  const [currentBanner, setCurrentBanner] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentBanner(prev => (prev === 0 ? bannerImages.length - 1 : prev - 1));
      setFade(true);
    }, 200); // delay for fade-out
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentBanner(prev => (prev === bannerImages.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200); // delay for fade-out
  };

  return (
    <div className='product-list'>
      <div className={`banner ${fade ? 'fade-in' : 'fade-out'}`} style={{ backgroundImage: `url(${bannerImages[currentBanner]})` }} >
        <div className="txt-banner">
          <h1 data-aos="fade-down" data-aos-duration="3000">TECH AT HAND</h1>
          <p data-aos="fade-down" data-aos-duration="2000">Smartwatches provide quick access to notification, call, messages, and right on your wrist, reducing the constantly check your phone.</p>
          <a href="#shop"><button data-aos="fade-down" data-aos-duration="3500">Shop Now</button></a>
        </div>

        <div className="swiper-btn">
          <div className="swiper-box previous" onClick={handlePrevious}>
            <i className="fa-solid fa-arrow-left"></i>
            <p>Previous</p>
          </div>
          <div className="swiper-box next" onClick={handleNext}>
            <p>Next</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <MainFeature/>

      <div className="product-title" id='shop'>
        <h1 data-aos="fade-up" data-aos-duration="1500">Choose your Category</h1>
        <p data-aos="fade-up" data-aos-duration="2000">Smartwatches provide quick access to notifications, calls, messages, and apps right on your wrist, reducing the constantly check your phone.</p>
      </div>
      <div className="product-navbar">
        <ul data-aos="fade-up" data-aos-duration="3500">
          <li onClick={() => setCategory(prev => prev === ""?"Klassy" : "Klassy")} className={category === "Klassy" ? "pro-active" : ""}>
            <img src={assets.klassy} alt="" />
            <span>Klassy </span>
          </li>
          <li onClick={() => setCategory(prev => prev === "" ? "Apple" : "Apple")} className={category === "Apple" ? "pro-active" : ""}>
            <img src={assets.apple} alt="" />
            <span>Apple</span>
          </li>
          <li onClick={() => setCategory(prev => prev === "" ? "G-Shock" : "G-Shock")} className={category === "G-Shock" ? "pro-active" : ""}>
            <img src={assets.g_shock} alt="" />
            <span>G-Shock</span>
          </li>
        </ul>
        <div className="sub-title" data-aos="fade-up" data-aos-duration="1000">
          <div className="sub-txt">
            <h2>Best Selling Products</h2>
            <p>Highly Recommended</p>
          </div>
          <p onClick={() => setCategory(prev => prev === "All" ? "Apple" : "All")} className='view-all'>View All</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;