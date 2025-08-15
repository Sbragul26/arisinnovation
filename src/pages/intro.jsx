import React from 'react';
import { ChevronRight, Award, Users, Briefcase } from 'lucide-react';
import Lottie from 'lottie-react';

const CoverPage = ({ scrollToSection, waveAnimation }) => {
  return (
    <section id="cover" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-20 relative overflow-hidden">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 z-0">
        <Lottie animationData={waveAnimation} loop={true} />
      </div>

      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-600/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-600/40 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gray-600/25 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 bg-blue-700/30 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-600/40 to-indigo-700/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-gray-700/60 to-blue-600/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Apex
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Agency
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Engineering tomorrow's digital experiences with precision, innovation, and strategic insight
        </p>

        {/* Value proposition card */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:bg-gray-800/90 transition-all duration-500">
            <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
              We partner with visionary companies to create digital solutions that don't just meet expectations—they redefine industries and drive measurable business growth.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative inline-flex items-center bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 px-10 py-5 rounded-2xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-600/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Explore Our Expertise</span>
            <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
          </button>
        </div>

        {/* Stats/Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-8 rounded-3xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:bg-gray-800/80 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-100 mb-3">75+</div>
            <div className="text-gray-300 font-semibold text-lg">Projects Delivered</div>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-3xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:bg-gray-800/80 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-100 mb-3">40+</div>
            <div className="text-gray-300 font-semibold text-lg">Global Clients</div>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-3xl bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:bg-gray-800/80 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-100 mb-3">5</div>
            <div className="text-gray-300 font-semibold text-lg">Years Excellence</div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm font-medium">
            Trusted by industry leaders • Based in Innovation Hub • Est. 2020
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;