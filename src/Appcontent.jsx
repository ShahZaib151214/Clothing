import {Routes, Route, useLocation } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import './App.css' 
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductPage from "./Pages/ProductPage/ProductPage";




const Appcontent = () => {
    const location = useLocation();
  
  
    const hideNavbarAndFooter = location.pathname === '/Login';

    return(
     <>
      {!hideNavbarAndFooter && <Navbar/>}
      
      <Routes>
     
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Shop' element={<ProductPage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        
      </Routes>
     
      {!hideNavbarAndFooter && <Footer />}
    </>
    
    )
}
export default Appcontent;