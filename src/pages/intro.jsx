import React from 'react';
import { ChevronRight } from 'lucide-react';
import Lottie from 'lottie-react';

const CoverPage = ({ scrollToSection, waveAnimation }) => {
  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-neutral-800 to-teal-900 pt-20 relative overflow-hidden"
    >
      {/* Wave Animation Background */}
      <div className="absolute inset-0 z-0">
        <Lottie animationData={waveAnimation} loop={true} />
      </div>

      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-amber-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-teal-500/40 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-neutral-500/25 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-1/4 right-1/6 w-3.5 h-3.5 bg-amber-600/30 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-br from-amber-400/30 to-teal-600/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-36 h-36 bg-gradient-to-tr from-neutral-600/50 to-amber-500/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-amber-200 via-neutral-100 to-amber-300 bg-clip-text text-transparent">
            Apex
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Agency
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed tracking-wide">
          Crafting tomorrow's digital experiences with creativity, precision, and strategic vision
        </p>

        {/* Value proposition card */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-teal-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-neutral-800/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-neutral-600/40 shadow-lg hover:shadow-xl hover:bg-neutral-800/95 transition-all duration-500">
            <p className="text-lg md:text-xl text-neutral-100 font-medium leading-relaxed">
              We collaborate with innovative brands to deliver digital solutions that redefine industries and drive impactful growth.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative inline-flex items-center bg-amber-400 hover:bg-amber-500 px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-amber-400/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Discover Our Expertise</span>
            <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;