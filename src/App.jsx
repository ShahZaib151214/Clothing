import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Appcontent from './Appcontent';

const App = () => {




  return (
    <>
     <BrowserRouter>
     <Appcontent/>
     </BrowserRouter>
    </>
  );
}

export default App;
