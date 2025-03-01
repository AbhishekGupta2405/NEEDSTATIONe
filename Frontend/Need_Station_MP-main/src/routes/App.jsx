import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ScrollToTop from "../hooks/ScrollToTop.jsx";

function App() {
 

  return (
    <>
    <ScrollToTop/>
    <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
