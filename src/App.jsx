import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './components/Aboutus';
import NavBar from './components/NavBar'
//import About from './pages/About'
import Arisproducts from './components/Arisproducts'
import Contact from './pages/Contact'
import Footer from './components/Footer'
//import ScrollTop from './components/ScrollTop'
import Portfolio from './pages/Portfolio'
import ArisServices from './pages/ArisServices'
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the new component
import ScrollToTop from './components/Scroll';
import ServiceDetailPage from './pages/ServiceDetailPage';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      
      <NavBar/>
      <ScrollToTop /> {/* Ensure the page scrolls to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Arisproducts />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<ArisServices />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
      </Routes>
      <Footer/>
      <ScrollToTopButton /> {/* Add the scroll to top button */}
    </main>
  )
}

export default App