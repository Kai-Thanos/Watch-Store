import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import StoreContextProvider from './components/Context/StoreContext'; // ✅ import the Provider
import AOS from 'aos';
import Footer from './components/footer/Footer';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once on scroll
    });
  }, []);

  return (
    <StoreContextProvider> {/* ✅ Wrap everything inside this */}
      <Router>
        <div>
          {showPopup ? <LoginPopup setShowPopup={setShowPopup} /> : null}
          <Navbar setShowPopup={setShowPopup} /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/order' element={<PlaceOrder/>} />
          </Routes>
        </div>    
        <Footer/>
      </Router> 

    </StoreContextProvider>
  );
};

export default App;
 