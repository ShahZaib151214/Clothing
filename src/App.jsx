 import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Appcontent from './Appcontent';

const App = () => {




  return (
    <>
     <HashRouter basename="/Clothing">
     <Appcontent/>
     </HashRouter>
    </>
  );
}

export default App;
