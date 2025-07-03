import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import StoreContextProvider from './components/Context/StoreContext';
import AOS from 'aos';
import Footer from './components/footer/Footer';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StoreContextProvider>
      <Router basename="/Watch-Store"> {/* ✅ This is the key fix */}
        <div>
          {showPopup && <LoginPopup setShowPopup={setShowPopup} />}
          <Navbar setShowPopup={setShowPopup} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;

 