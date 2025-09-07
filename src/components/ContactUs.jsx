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
      <div className="relative h-full text-blue-50 overflow-hidden">
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

        <div className="relative flex flex-col items-center justify-center h-full z-10 opacity-0 animate-fadeIn pt-42"> 
          <p className="mb-6 font-sans font-light text-sm uppercase tracking-[0.3em] text-gray-400">
            Partner with Aris
          </p>
          <AnimatedTitle
            title="let&#39;s cr<b>e</b>ate something <br /> extraordin<b>a</b>ry <br /> tog<b>e</b>ther."
            className="font-sans font-light text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full leading-[0.9] tracking-wide text-center px-4"
          />
          <Link to="/contact">
            <Button 
              title="start your project" 
              containerClass="mt-8 md:mt-12 cursor-pointer" 
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