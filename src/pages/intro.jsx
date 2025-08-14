import React from 'react';
import { ChevronRight, Award, Users, Briefcase } from 'lucide-react';

const CoverPage = ({ scrollToSection }) => {
  return (
    <section id="cover" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20 relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-8 h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="bg-blue-100/20 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-slate-400/15 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 bg-blue-500/20 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-200/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-slate-100/60 to-blue-100/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo/Brand mark */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
              <span className="text-2xl font-bold text-white relative z-10">A</span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-700 bg-clip-text text-transparent">
            Apex
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            Agency
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Engineering tomorrow's digital experiences with precision, innovation, and strategic insight
        </p>

        {/* Value proposition card */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-500">
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
              We partner with visionary companies to create digital solutions that don't just meet expectations—they redefine industries and drive measurable business growth.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-10 py-5 rounded-2xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Explore Our Expertise</span>
            <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
          </button>
        </div>

        {/* Stats/Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-3">75+</div>
            <div className="text-gray-600 font-semibold text-lg">Projects Delivered</div>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-3">40+</div>
            <div className="text-gray-600 font-semibold text-lg">Global Clients</div>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-3">5</div>
            <div className="text-gray-600 font-semibold text-lg">Years Excellence</div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 pt-8 border-t border-gray-300/50">
          <p className="text-gray-500 text-sm font-medium">
            Trusted by industry leaders • Based in Innovation Hub • Est. 2020
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;