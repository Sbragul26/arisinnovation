import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Story from '../components/Story'
//import Features from '../components/Features'
import ContactUs from "../components/ContactUs"; 

import CircularGallery from '../gsap/CircularGallery'
import GradientBlinds from '../gsap/GradientBlinds/GradientBlinds';
//import ScrollStack, { ScrollStackItem } from '../gsap/ScrollStack/ScrollStack';


const Home = () => {
  return (
    <div>
      <Hero/>
      <CircularGallery/>
      <GradientBlinds/>
      <Intro/>
      <Story/>
      <ContactUs/>
    </div>
  )
}

export default Home
