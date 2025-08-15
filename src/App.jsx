import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import Loader from './lottie/Loading.json';
import Wave from './lottie/background.json';
import CoverPage from './pages/intro';
import AboutPage from './pages/about';
import ServicesPage from './pages/ServicesSection';
import ClientsPage from './pages/testimonials';
import ContactPage from './pages/contact';
import Project1 from './pages/project/Project1';
import Project2 from './pages/project/Project2';
import Project3 from './pages/project/Project3';
import Project4 from './pages/project/Project4';
import Project5 from './pages/project/Project5';
import HorizontalScroll from './gsap/HorizontalScroll';
import Transition from './gsap/Transition';
import { gsap } from 'gsap';

import ProcessSection from './pages/ProcessSection';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const overlayRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      // Log section position for debugging
      const rect = sectionElement.getBoundingClientRect();
      console.log(`Section ${sectionId} top: ${rect.top + window.scrollY}px, current scroll: ${window.scrollY}px`);

      // Attempt scrollIntoView first
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Fallback using window.scrollTo with timeout to handle layout shifts
      setTimeout(() => {
        const updatedRect = sectionElement.getBoundingClientRect();
        window.scrollTo({
          top: updatedRect.top + window.scrollY,
          behavior: 'smooth',
        });
        console.log(`Fallback scroll to ${sectionId} at ${updatedRect.top + window.scrollY}px`);
      }, 100);

      // GSAP transition animation
      const tl = gsap.timeline({
        onComplete: () => {
          console.log(`Transition complete for section: ${sectionId}`);
          setActiveSection(null);
        },
      });

      tl.to(overlayRef.current, {
        translateY: '0%',
        duration: 0.8,
        ease: 'power4.inOut',
      }).to(overlayRef.current, {
        translateY: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.6,
      });
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="w-64 h-64 relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <Lottie animationData={Loader} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800">
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-3">
          {/* Enhanced Logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm"></div>
          </div>
          
          {/* Attractive Brand Name */}
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Aris Innovations
            </span>
            <span className="text-xs text-gray-400 -mt-1">Digital Solutions</span>
          </div>
        </div>
         
        {/* Center Menu - Dark theme pill */}
        <div className="flex items-center space-x-2 bg-gray-800 px-5 py-2.5 rounded-full shadow-sm">
          {['cover', 'about', 'services', 'projects', 'clients', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-base font-medium text-gray-200 hover:text-white hover:bg-cyan-500/20 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              {section === 'cover' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
         
        {/* Right-side Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-5 py-2 border border-cyan-400 rounded-full text-cyan-300 text-base font-medium hover:bg-cyan-400/10 hover:scale-105 transition-all duration-200">
            Book a Call
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-base font-medium hover:from-cyan-400 hover:to-blue-400 hover:scale-105 transition-all duration-200 shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>



      <Transition overlayRef={overlayRef} activeSection={activeSection} />

      <div className="absolute inset-0 -top-20 z-0 opacity-20">
        <Lottie animationData={Wave} loop={true} />
      </div>

      <div className="relative z-10">
        <div id="cover">
          <CoverPage scrollToSection={scrollToSection} waveAnimation={Wave} />
        </div>
        <div id="about">
          <AboutPage scrollToSection={scrollToSection} />
        </div>
        <div id="services">
          <ServicesPage scrollToSection={scrollToSection} />
          <ProcessSection scrollToSection={scrollToSection} /> 
        </div>
        <div id="projects">
          <HorizontalScroll>
            <Project1 scrollToSection={scrollToSection} />
            <Project2 scrollToSection={scrollToSection} />
            <Project3 scrollToSection={scrollToSection} />
            <Project4 scrollToSection={scrollToSection} />
            <Project5 scrollToSection={scrollToSection} />
          </HorizontalScroll>
        </div>
        <div id="clients">
          <ClientsPage scrollToSection={scrollToSection} />
        </div>
        <div id="contact">
          <ContactPage scrollToSection={scrollToSection} />
        </div>
      </div>
    </div>
  );
};

export default App;