import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Story from '../components/Story'
import ContactUs from "../components/ContactUs"; 
import CircularGallery from '../gsap/CircularGallery'
import HorizontalScroll from '../gsap/HorizontalScroll';
import SpotlightCard from '../gsap/SpotlightCard'
import LightRays from '../gsap/LightRays'
import MouseLightEffect from '../gsap/MouseLightEffect' // Add this import

const Home = () => {
  return (
    <div className="relative">
      {/* Mouse Light Effect - positioned at the top to cover entire page */}
      <MouseLightEffect />
      
      <Hero/>

      <div className="horizontal-section flex-none w-screen h-screen"><Intro/></div>
      <div className="horizontal-section flex-none w-screen h-screen"><Story/></div>
  
      {/* Added container with styling to improve text visibility */}
      <div className="relative w-full py-16 bg-black bg-opacity-50 text-white text-center">
        <CircularGallery/>
      </div>

      <ContactUs/>
    </div>
  )
}

export default Home