import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Story from '../components/Story'
//import Features from '../components/Features'
import ContactUs from "../components/ContactUs"; 

import CircularGallery from '../gsap/CircularGallery'
//import GradientBlinds from '../gsap/GradientBlinds';
//import PixelTransition from '../gsap/PixelTransition';
//import ScrollStack, { ScrollStackItem } from '../gsap/ScrollStack/ScrollStack';
import HorizontalScroll from '../gsap/HorizontalScroll';
import SpotlightCard from '../gsap/SpotlightCard'
import LightRays from '../gsap/LightRays'



const Home = () => {
  return (
    <div>
      <Hero/>


      <div className="horizontal-section flex-none w-screen h-screen"><Intro/></div>
      <div className="horizontal-section flex-none w-screen h-screen"><Story/></div>
  
      
      <CircularGallery/>


      <ContactUs/>

    </div>
  )
}

export default Home
