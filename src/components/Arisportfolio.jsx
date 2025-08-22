import React, { useState, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Arisportfolio = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer (you can set your target date)
  useEffect(() => {
    const targetDate = new Date('2026-02-17T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Hero section animation
    gsap.from('.portfolio-hero', {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    });

    // Coming soon text animation
    gsap.from('.coming-soon-text', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)',
      delay: 0.8
    });

    // Countdown animation
    gsap.from('.countdown-item', {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      delay: 1.2
    });





    // Floating elements animation
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Glow effect animation
    gsap.to('.glow-effect', {
      scale: 1.1,
      opacity: 0.8,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });


  }, []);



  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden font-['Poppins',sans-serif]">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl glow-effect"></div>
        <div className="floating-element absolute top-60 right-32 w-24 h-24 bg-blue-500/15 rounded-full blur-lg glow-effect"></div>
        <div className="floating-element absolute bottom-40 left-1/3 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl glow-effect"></div>
        <div className="floating-element absolute bottom-20 right-20 w-28 h-28 bg-cyan-400/12 rounded-full blur-lg glow-effect"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="portfolio-hero text-center min-h-screen flex flex-col justify-center">
          <div className="coming-soon-text mb-16">
            <AnimatedTitle
              title="Portfolio <br /> Coming <b>S</b>oon"
              containerClass="text-8xl md:text-[8rem] font-black tracking-wide !text-white text-center mb-8"
            />
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed mb-12">
                We're crafting something extraordinary. Our portfolio showcase will feature stunning 
                <span className="text-cyan-300 font-medium"> interactive experiences</span> and 
                <span className="text-cyan-300 font-medium"> cutting-edge designs</span> that push 
                the boundaries of creativity.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-widest text-cyan-300 font-medium mb-16">
                <span>Innovation</span>
                <span>•</span>
                <span>Creativity</span>
                <span>•</span>
                <span>Excellence</span>
                <span>•</span>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>


        </div>



{/*
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="feature-card relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3" dangerouslySetInnerHTML={{ __html: feature.title }} />
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    
                    {/* Progress Section *
                    <div className="progress-section">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Development Progress</span>
                        <span className="text-sm text-cyan-300 font-medium">{feature.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="progress-bar h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          style={{ width: `${feature.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
*/}

{/*
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-300 mb-6">Sneak <b>Peek</b></h2>
            <p className="text-lg text-gray-200 mb-12">
              A glimpse of what's coming to our portfolio showcase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="aspect-video bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-cyan-500/20 backdrop-blur-md flex items-center justify-center hover:border-cyan-400/40 transition-all duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className="text-6xl text-cyan-300/50 mb-4 group-hover:text-cyan-300/80 transition-all duration-300">🎨</div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-all duration-300">Project Preview</p>
                </div>
              </div>
            ))}
          </div>
        </div>
*/}

      </div>
    </div>
  );
};

export default Arisportfolio;