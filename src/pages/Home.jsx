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


      <HorizontalScroll>
        <div className="horizontal-section flex-none w-screen h-screen"><Intro/></div>
        <div className="horizontal-section flex-none w-screen h-screen"><Story/></div>
      </HorizontalScroll>
      
      <CircularGallery/>

      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        {/* You can put any content here */}
      </SpotlightCard>

      <ContactUs/>

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={2}
          lightSpread={2}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>




    </div>
  )
}

export default Home
