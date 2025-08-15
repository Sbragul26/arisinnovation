import React from 'react';
import { ChevronRight } from 'lucide-react';
import Lottie from 'lottie-react';

const CoverPage = ({ scrollToSection, waveAnimation }) => {
  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{ backgroundColor: '#0A0A23' }}
    >
      {/* Wave Animation Background */}
      <div className="absolute inset-0 z-0">
        <Lottie animationData={waveAnimation} loop={true} />
      </div>

      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: '#241A7A/40' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full animate-pulse delay-100" style={{ backgroundColor: '#241A7A/50' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full animate-pulse delay-200" style={{ backgroundColor: '#241A7A/30' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-3.5 h-3.5 rounded-full animate-pulse delay-300" style={{ backgroundColor: '#241A7A/40' }}></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-br from-[#241A7A]/40 to-[#1A135A]/50 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-36 h-36 bg-gradient-to-tr from-[#241A7A]/40 to-[#1A135A]/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-[#FFFFFF]">
          <span>
            {/*Apex*/}
          </span>
          <br />
          <span>
            {/*Agency*/}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed tracking-wide">
          {/*Crafting tomorrow's digital experiences with creativity, precision, and strategic vision*/}
        </p>

        {/* Value proposition card */}
        {/*
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#241A7A]/25 to-[#1A135A]/30 rounded-3xl blur-xl"></div>
          <div className="relative bg-[#241A7A]/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-[#1A135A]/50 shadow-lg hover:shadow-xl hover:bg-[#241A7A]/90 transition-all duration-500">
            <p className="text-lg md:text-xl text-[#FFFFFF] font-medium leading-relaxed">
              {We collaborate with innovative brands to deliver digital solutions that redefine industries and drive impactful growth.
            </p>
          </div>
        </div>*/}
        

        {/* CTA Button
        <div className="mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative inline-flex items-center bg-[#241A7A] hover:bg-[#1A135A] px-10 py-4 rounded-xl text-lg font-semibold text-[#FFFFFF] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#241A7A]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF]/10 to-[#FFFFFF]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Discover Our Expertise</span>
            <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
          </button>
        </div>
         */}
      </div>
    </section>
  );
};

export default CoverPage;