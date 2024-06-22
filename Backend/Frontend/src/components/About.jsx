import React from 'react';
import BannerPage from './BannerPage';
import Navbar from './Navbar';
import AboutusDetails from './AboutusDetails';
import Footer from './Footer';
const About = () => {
  return (
    <>
    <div>
        <Navbar/>
        <BannerPage headingPage="About Us"/>
        <AboutusDetails/>
        <Footer/>
    </div>
    </>
  )
}

export default About
