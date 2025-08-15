import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Loader from './lottie/Loading.json';
import Wave from './lottie/background.json';
import CoverPage from './pages/intro';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ClientsPage from './pages/testimonials';
import ContactPage from './pages/contact';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-64 h-64">
          <Lottie animationData={Loader} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-100">APEX AGENCY</span>
          </div>
          <div className="flex space-x-8">
            {['cover', 'about', 'services', 'clients', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <CoverPage scrollToSection={scrollToSection} waveAnimation={Wave} />
      <AboutPage scrollToSection={scrollToSection} />
      <ServicesPage scrollToSection={scrollToSection} />
      <ClientsPage scrollToSection={scrollToSection} />
      <ContactPage scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;