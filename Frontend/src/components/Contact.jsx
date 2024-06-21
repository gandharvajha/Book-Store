import React from 'react';
import Navbar from './Navbar';
import BannerPage from "./BannerPage";
import Footer from "./Footer";
import Contactinfo from "./Contactinfo";

const Contact = () => {
  return (
    <>
    <div>
        <Navbar/>
        <BannerPage headingPage="Contact Us"/>
        <Contactinfo/>
        <Footer/>
    </div>
    </>
  )
}

export default Contact;
