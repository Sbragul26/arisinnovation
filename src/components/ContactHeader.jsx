import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactHeader = () => {
  useGSAP(() => {
    // Animation Option 1: Sliding Reveal Effect
    gsap.set('.image-container', {
      scale: 0.8,
      y: 100,
      opacity: 0,
      filter: 'brightness(0.6) contrast(1.2)',
    });

    gsap.set('.image-overlay', {
      x: '100%',
    });

    gsap.set('.corner-accents', {
      scale: 0,
      rotation: 45,
      opacity: 0,
    });

    const mainAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1200 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        ease: "power2.inOut"
      }
    });

    mainAnimation
      // Phase 1: Image reveal and scale
      .to('.image-container', {
        scale: 1,
        y: 0,
        opacity: 1,
        filter: 'brightness(1) contrast(1)',
        duration: 1,
        ease: "power2.out"
      })
      // Phase 2: Sliding overlay reveal
      .to('.image-overlay', {
        x: '-100%',
        duration: 1.2,
        ease: "power3.inOut"
      }, 0.3)
      // Phase 3: Corner accents appear
      .to('.corner-accents', {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.8)
      // Phase 4: Final positioning and effects
      .to('.image-container', {
        scale: 1.05,
        filter: 'brightness(1.1) contrast(0.95)',
        duration: 1,
        ease: "power1.inOut"
      }, 1.5);

    // Parallax effect for the title
    gsap.to('.contact-title', {
      y: -150,
      opacity: 0.5,
      scale: 0.9,
      scrollTrigger: {
        trigger: "#clip",
        start: "top center",
        end: "bottom center",
        scrub: 1.5
      }
    });

    // Floating animation for corner accents
    gsap.to('.corner-accent-1', {
      y: -10,
      x: 5,
      rotation: 5,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    gsap.to('.corner-accent-2', {
      y: 10,
      x: -5,
      rotation: -5,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Alternative Animation Option 2: Uncomment for different effect
    /*
    // Zoom and Fade Effect
    gsap.set('.image-container', {
      scale: 1.5,
      opacity: 0,
      filter: 'blur(10px) brightness(0.5)',
    });

    const zoomAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1000 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      }
    });

    zoomAnimation
      .to('.image-container', {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px) brightness(1)',
        duration: 2,
        ease: "power2.out"
      });
    */

    // Alternative Animation Option 3: Uncomment for different effect
    /*
    // Split Reveal Effect
    gsap.set('.image-half-left', {
      x: '-100%',
      skewX: -15,
    });

    gsap.set('.image-half-right', {
      x: '100%',
      skewX: 15,
    });

    const splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      }
    });

    splitAnimation
      .to(['.image-half-left', '.image-half-right'], {
        x: '0%',
        skewX: 0,
        duration: 1.5,
        ease: "power3.out"
      });
    */

  }, []);

  return (
    <div className='bg-gradient-to-br from-gray-700 to-black min-h-[100vh] w-full flex flex-col items-center relative overflow-hidden'>
      <h1 className='contact-title special-font uppercase font-zentry font-black text-5xl mt-[5%] mb-[2%] sm:right-10 sm:text-7xl md:text-9xl lg:text-[18rem] text-white z-10 drop-shadow-lg'>
        C<b className="text-cyan-300">o</b>ntact Us
      </h1>
      
      <div className='h-dvh w-screen flex items-center justify-center' id="clip">
        {/* Main image container with straight edges */}
        <div className='image-container relative w-[80vw] h-[70vh] max-w-6xl overflow-hidden shadow-2xl'>
          {/* Image */}
          <img 
            src="img/intro.jpg"
            alt="Background"
            className='absolute left-0 top-0 size-full object-cover'
          />
          
          {/* Sliding overlay for reveal effect */}
          <div className='image-overlay absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900'></div>
          
          {/* Gradient overlay for depth */}
          <div className='absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-purple-900/30 pointer-events-none'></div>
          
          {/* Animated corner accents */}
          <div className='corner-accents'>
            <div className='corner-accent-1 absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-cyan-300/80'></div>
            <div className='corner-accent-2 absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-cyan-300/80'></div>
          </div>
          
          {/* Additional decorative elements */}
          <div className='absolute top-4 left-4 w-2 h-2 bg-cyan-300 rounded-full opacity-60 animate-pulse'></div>
          <div className='absolute top-8 left-8 w-1 h-1 bg-purple-300 rounded-full opacity-80 animate-pulse delay-300'></div>
          <div className='absolute bottom-4 right-4 w-2 h-2 bg-indigo-300 rounded-full opacity-60 animate-pulse delay-700'></div>
          
          {/* Border glow effect */}
          <div className='absolute inset-0 border-2 border-cyan-300/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]'></div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;