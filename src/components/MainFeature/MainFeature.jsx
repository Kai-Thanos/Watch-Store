import React from 'react'
import './MainFeature.css'
import { assets } from '../../assets/assets'

const MainFeature = () => {
  return (
    <div className='main-feature' id='about'>
        <div className="main-left">
            <div className="main-title" data-aos="fade-up">
                <p>Explore Functionality</p>
                <h1>Main Features</h1>
            </div>
            <div className="main-body" data-aos="fade-up" data-aos-duration="1000" >
                <div className="main-icon">
                    <i className="fa-solid fa-battery-full"></i>
                </div>
                <div className="main-txt">
                    <h3>Extended Battery Life</h3>
                    <p>Erat nam at lectus urna.</p>
                </div>
            </div>
            <div className="main-body" data-aos="fade-up" data-aos-duration="1500">
                <div className="main-icon">
                    <i className="fa-solid fa-microphone"></i>
                </div>
                <div className="main-txt">
                    <h3>Microphone, Call, Track, Volume</h3>
                    <p>Tristique senectus et netus</p>
                </div>
            </div>
            <div className="main-body" data-aos="fade-up" data-aos-duration="2000">
                <div className="main-icon">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                <div className="main-txt">
                    <h3>Seamless Connectivity</h3>
                    <p>Urna cursus eget nunc</p>
                </div>
            </div>
            <div className="main-body" data-aos="fade-up" data-aos-duration="2500">
                <div className="main-icon">
                    <i className="fa-solid fa-volume-high"></i>
                </div>
                <div className="main-txt">
                    <h3>Secure: Noise cancellation</h3>
                    <p>Interdum consectetur libero</p>
                </div>
            </div>
            <div className="main-body" data-aos="fade-up" data-aos-duration="3000">
                <div className="main-icon">
                    <i className="fa-solid fa-droplet"></i>
                </div>
                <div className="main-txt">
                    <h3>IPX4: Sweat and Splash Resistant</h3>
                    <p>Pellentesque eu tincidunt tortor</p>
                </div>
            </div>
        </div>
        <div className="main-right">
            <img src={assets.main_item} alt="" />
        </div>
    </div>
  )
}

export default MainFeature
