import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TiArrowLeft } from "react-icons/ti";
import Button from "./Button";
import CustomSoftwareDetails from '../components/services/CustomSoftwareDetails';
import PwaWebsiteDetails from '../components/services/PwaWebsiteDetails';
import BrandSculptingDetails from '../components/services/BrandSculptingDetails';

gsap.registerPlugin(ScrollTrigger);

const DetailedServiceView = ({ service, onBack }) => {
  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(detailRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
    }
    gsap.from('.detail-feature-card', { opacity: 0, y: 30, stagger: 0.1, duration: 0.6, delay: 0.3, ease: 'power2.out' });
    return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
  }, [service]);

  const renderServiceDetailsComponent = () => {
    switch(service.title) {
      case 'Custom Software / SaaS Solutions': return <CustomSoftwareDetails />;
      case 'Progressive Web Applications (PWAs) / Websites': return <PwaWebsiteDetails />;
      case 'Brand Sculpting & Digital Identity': return <BrandSculptingDetails />;
      default: return <div className="text-red-500">Service details not found.</div>;
    }
  };

  return (
    <div ref={detailRef} className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* Header with Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <Button title={<div className="flex items-center gap-2"><TiArrowLeft className="text-xl" /> Back to Services</div>} containerClass="text-cyan-400 border border-cyan-400/50 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300" onClick={onBack} />
      </div>

      {/* Service Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
          {service.title.split(' ').map((word, index) => index === 0 ? <span key={index} className="text-cyan-400">{word} </span> : `${word} `)}
        </h1>
        <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">{service.description}</p>
      </div>

      {/* Main Features & Additional Info Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-16">
          <p className="font-light text-lg text-cyan-400 mb-4">Comprehensive Solutions</p>
          <p className="max-w-md text-lg text-gray-300">Explore our detailed approach and cutting-edge methodologies that drive exceptional results.</p>
        </div>
        {renderServiceDetailsComponent()}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-2xl border border-cyan-500/30 backdrop-blur-lg">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">Let's discuss how we can bring your vision to life with our {service.title.toLowerCase()}.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact"><Button title="Start Your Project" containerClass="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 sm:px-12 py-4 text-lg font-semibold rounded-full hover:scale-105" /></Link>
            <Button title="Schedule Consultation" containerClass="border-2 border-cyan-400 text-cyan-400 px-8 sm:px-12 py-4 text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-black hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedServiceView;