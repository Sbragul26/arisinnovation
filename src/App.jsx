import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/Aboutus';
import NavBar from './components/NavBar'
//import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './components/Footer'
//import ScrollTop from './components/ScrollTop'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the new component
import ScrollToTop from './components/Scroll';
import ServiceDetailPage from './components/ServiceDetailPage';
import MouseLightEffect from './gsap/MouseLightEffect';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <MouseLightEffect />
      <NavBar/>
      <ScrollToTop /> {/* Ensure the page scrolls to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />

        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
      </Routes>
      <Footer/>
      <ScrollToTopButton /> {/* Add the scroll to top button */}
    </main>
  )
}

export default App