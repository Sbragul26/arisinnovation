import React from "react";
import AnimatedTitle from "../gsap/AnimatedTitle";
import Button from "./Button";
import { Link } from "react-router-dom";
import LightRays from "../gsap/LightRays";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" /> {/* Added alt for accessibility */}
  </div>
);

const ContactUs = () => {
  return (
    <div id="contact" className="min-h-screen w-screen bg-black bg-opacity-50 text-white px-6 md:px-10">
<div className="relative min-h-screen w-full text-blue-50 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <LightRays
      raysOrigin="center"
      raysColor="#ffffff"
      raysSpeed={1.2}
      lightSpread={2.5}
      rayLength={1.8}
      followMouse={true}
      mouseInfluence={0.05}
      noiseAmount={0.02}
      distortion={0.01}
      className="custom-rays w-full h-full transition-opacity duration-1500 delay-500"
    />
  </div>

  <div className="relative flex flex-col items-center justify-center min-h-screen w-full z-10 opacity-0 animate-fadeIn px-4 py-8 sm:py-12 md:py-16">
    <p className="mb-4 sm:mb-6 font-sans font-light text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 text-center">
      Partner with Aris
    </p>
    
    <AnimatedTitle
      title="let&#39;s cr<b>e</b>ate something <br /> extraordin<b>a</b>ry <br /> tog<b>e</b>ther."
      className="font-sans font-light text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full max-w-4xl leading-[0.85] sm:leading-[0.9] tracking-wide text-center mb-6 sm:mb-8 md:mb-12"
    />
    
    <Link to="/contact">
      <Button
        title="start your project"
        className="custom-rays transition-opacity duration-1500 delay-500"
        containerClass="cursor-pointer"
      />
    </Link>
  </div>
</div>
      {/* Inline CSS for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;