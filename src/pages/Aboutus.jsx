import React, { useState, useEffect, useRef } from 'react';
import AnimatedTitle from '../gsap/AnimatedTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const CounterCard = ({ targetNumber, label, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Parse the target number (handle special cases like "24/7")
            let target = 0;
            if (typeof targetNumber === 'string') {
              if (targetNumber.includes('/')) {
                // Handle cases like "24/7" - just animate the first number
                target = parseInt(targetNumber.split('/')[0]);
              } else {
                target = parseInt(targetNumber.replace(/\+/g, ''));
              }
            } else {
              target = targetNumber;
            }

            setTimeout(() => {
              let startTime = null;
              const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * target);
                
                setCount(currentCount);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCount(target);
                }
              };
              
              requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [targetNumber, duration, delay, hasAnimated]);

  const displayValue = () => {
    if (typeof targetNumber === 'string') {
      if (targetNumber.includes('/')) {
        // For "24/7", show the animated number + the rest
        return `${count}${targetNumber.substring(targetNumber.indexOf('/'))}`;
      } else if (targetNumber.includes('+')) {
        // For "100+", show the animated number + "+"
        return `${count}+`;
      }
    }
    return count;
  };

  return (
    <div 
      ref={cardRef}
      className="stats-card text-center p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-3xl border border-cyan-500/20 backdrop-blur-md shadow-lg hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-5xl md:text-6xl font-bold text-cyan-300 mb-3">
        {displayValue()}
      </h3>
      <p className="text-gray-300 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
};

// Logo Scroll Component with CSS-based animation (no GSAP dependency)
const LogoScroll = ({ items, scrollSpeed = 0.3, pauseOnHover = true }) => {
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const defaultLogos = [
    'astra', 'BA','cit', 'Dia cure logo', 'Eicher-Motors-Logo', 'GK Logo',
    'H&H Logo', 'Happy bites Logo', 'Homefin Logo', 'KB Logo', 'MKS Logo',
    'SDC Logo', 'SSb Logo-01', 'TK LOGO', 'Trip38 Logo', 'Trust Logo'
  ];

  const logoItems = items && items.length ? items : defaultLogos;

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);

    // Clone items for seamless loop
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });
  }, [logoItems]);

  const animationSpeed = 30 / scrollSpeed; // Adjust speed

  return (
    <div className="relative overflow-hidden py-16">
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div 
        ref={scrollerRef}
        className="flex items-center space-x-8 animate-scroll"
        style={{
          animationDuration: `${animationSpeed}s`,
          animationPlayState: (pauseOnHover && isPaused) ? 'paused' : 'running'
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {logoItems.map((partner, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-64 h-36 bg-white/10 rounded-xl border border-cyan-500/20 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <img
              src={`/logos/${partner}.png`}
              alt={partner}
              className="max-w-48 max-h-24 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-gray-300 text-sm font-medium hidden group-hover:text-white transition-colors duration-300">
              {partner}
            </span>
          </div>
        ))}
      </div>

      {pauseOnHover }
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

const AboutUs = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '70+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const partners = [
    'astra', 'BA','cit', 'Dia cure logo', 'Eicher-Motors-Logo', 'GK Logo',
    'H&H Logo', 'Happy bites Logo', 'Homefin Logo', 'KB Logo', 'MKS Logo',
    'SDC Logo', 'SSb Logo-01', 'TK LOGO', 'Trip38 Logo', 'Trust Logo'
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="about-section text-center">
          <AnimatedTitle
            title="Shaping <b>F</b>utures <br /> Your Creative <b>P</b>artner"
            containerClass="text-7xl md:text-[6rem] font-black tracking-wide text-white text-center mb-12"
          />
          <p className="max-w-4xl mx-auto text-lg md:text-xl font-light text-gray-200 leading-relaxed mb-10">
            At Aris, we transform visions into reality with innovative, high-impact digital and creative solutions designed to elevate your brand and captivate your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-widest text-cyan-300 font-medium">
            <span>Creativity</span>
            <span>•</span>
            <span>Innovation</span>
            <span>•</span>
            <span>Impact</span>
            <span>•</span>
            <span>Excellence</span>
          </div>
        </div>

        {/* Stats Section with Counter Animation */}
        <div className="stats-section mt-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <CounterCard
                key={index}
                targetNumber={stat.number}
                label={stat.label}
                duration={2000}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="vision-mission-section mt-32">
          <div className="text-center mb-20">
            <h2 className="vision-mission-title text-5xl md:text-6xl font-bold text-cyan-300 mb-6">
              Our <b>Vision</b> & <b>Mission</b>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Vision Card */}
            <div className="vision-card relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-12 rounded-3xl border border-cyan-500/30 backdrop-blur-lg hover:border-cyan-400/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-6 hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-cyan-300">Our Vision</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To become the leading creative powerhouse that transforms businesses through innovative design and cutting-edge digital solutions, setting new standards of excellence in the creative industry while empowering brands to reach their full potential.
                </p>
                <div className="mt-8 flex items-center text-cyan-300">
                  <div className="w-12 h-0.5 bg-cyan-400 mr-4"></div>
                  <span className="text-sm font-medium tracking-wider uppercase">Future Forward</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="mission-card relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-lg hover:border-blue-400/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-6 hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-300">Our Mission</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To deliver exceptional creative solutions that drive measurable results for our clients. We combine strategic thinking, innovative design, and technical expertise to create memorable brand experiences that resonate with audiences and accelerate business growth.
                </p>
                <div className="mt-8 flex items-center text-blue-300">
                  <div className="w-12 h-0.5 bg-blue-400 mr-4"></div>
                  <span className="text-sm font-medium tracking-wider uppercase">Excellence Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section with Logo Scroll */}
        <div className="partners-section mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-300 mb-6">
              Trusted by <b>Leaders</b>
            </h2>
            <p className="text-lg text-gray-200">
              Collaborating with top brands to deliver exceptional results
            </p>
          </div>

          <LogoScroll 
            items={partners}
            scrollSpeed={1.2}
            pauseOnHover={true}
          />
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl border border-cyan-500/30 backdrop-blur-lg hover:border-cyan-400/40 hover:scale-105 transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-300 mb-6">
              Ready to Build Something <b>Extraordinary</b>?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Partner with Aris to turn your ideas into impactful realities. Let's create something unforgettable together.
            </p>
            <Link to="/contact">
              <Button
                title="Start Your Journey"
                containerClass="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;