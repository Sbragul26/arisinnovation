import React from 'react';
import { gsap } from 'gsap';
import HorizontalScroll from './gsap/HorizontalScroll';
import CoverPage from './pages/intro';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ClientsPage from './pages/testimonials';
import ContactPage from './pages/contact';

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionsContainer = document.querySelector('.flex.w-\\[fit-content\\]');
    const offsetLeft = section.offsetLeft;

    gsap.to(sectionsContainer, {
      x: -offsetLeft,
      duration: 1,
      ease: 'power2.out',
    });
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">APEX AGENCY</span>
          </div>
          <div className="flex space-x-8">
            {['cover', 'about', 'services', 'clients', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Horizontal Scroll Container */}
      <HorizontalScroll>
        <CoverPage scrollToSection={scrollToSection} />
        <AboutPage scrollToSection={scrollToSection} />
        <ServicesPage scrollToSection={scrollToSection} />
        <ClientsPage scrollToSection={scrollToSection} />
        <ContactPage scrollToSection={scrollToSection} />
      </HorizontalScroll>
    </div>
  );
};

export default App;