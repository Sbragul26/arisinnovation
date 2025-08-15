import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Loader from './lottie/Loading.json';
import Wave from './lottie/background.json';
import CoverPage from './pages/intro';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ClientsPage from './pages/testimonials';
import ContactPage from './pages/contact';


import Project1 from './pages/project/Project1';
import Project2 from './pages/project/Project2';
import Project3 from './pages/project/Project3';  
import Project4 from './pages/project/Project4';
import Project5 from './pages/project/Project5';


import HorizontalScroll from './gsap/HorizontalScroll';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., 3 seconds) before showing main content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
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
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 tracking-tight">
              APEX AGENCY
            </span>
          </div>
          <div className="flex space-x-10">
            {['cover', 'about', 'services', 'projects', 'clients', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-200 hover:text-blue-400 font-semibold text-lg tracking-wide relative group transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Background Wave Animation - Adjusted to move up */}
      <div className="absolute inset-0 -top-20 z-0 opacity-20">
        <Lottie animationData={Wave} loop={true} />
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <CoverPage scrollToSection={scrollToSection} waveAnimation={Wave} />
        <AboutPage scrollToSection={scrollToSection} />
        <ServicesPage scrollToSection={scrollToSection} />

        <div id="projects">
          <HorizontalScroll>
            <Project1 scrollToSection={scrollToSection} />
            <Project2 scrollToSection={scrollToSection} />
            <Project3 scrollToSection={scrollToSection} />
            <Project4 scrollToSection={scrollToSection} />
            <Project5 scrollToSection={scrollToSection} />
          </HorizontalScroll>
        </div>
        
        <ClientsPage scrollToSection={scrollToSection} />
        <ContactPage scrollToSection={scrollToSection} />


      </div>
    </div>
  );
};

export default App;