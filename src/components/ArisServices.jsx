import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

// AnimatedTitle Component
const AnimatedTitle = ({ title, containerClass }) => {
  return (
    <div className={containerClass}>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

// Button Component
const Button = ({ title, containerClass, onClick }) => {
  const handleClick = (e) => {
    // Add click animation
    const button = e.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
    
    if (onClick) onClick(e);
  };

  return (
    <button className={containerClass} onClick={handleClick}>
      {title}
    </button>
  );
};

// BentoTilt Component for service cards
const BentoTilt = ({ children, className }) => {
  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(elementRef.current, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={elementRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Counter Card Component
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
            
            let target = 0;
            if (typeof targetNumber === 'string') {
              if (targetNumber.includes('/')) {
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
        return `${count}${targetNumber.substring(targetNumber.indexOf('/'))}`;
      } else if (targetNumber.includes('+')) {
        return `${count}+`;
      }
    }
    return count;
  };

  return (
    <div 
      ref={cardRef}
      className="stats-card text-center p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-3xl border border-cyan-500/20 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <h3 className="text-5xl md:text-6xl font-bold text-cyan-300 mb-3">
        {displayValue()}
      </h3>
      <p className="text-gray-300 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
};

// Floating Hero Image Component
const FloatingHeroImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -15;
    const rotateY = ((xPos - centerX) / centerX) * 15;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[600px] w-full mb-16">
      <div className="relative">
        <img
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Creative team collaboration"
          className="rounded-3xl shadow-2xl shadow-cyan-500/20 max-w-4xl w-full h-auto object-cover border border-cyan-500/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
      </div>
    </div>
  );
};

// Main Services Component
const InnovativeServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target, 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

const services = [
  {
    title: 'Custom Software / SaaS Solutions',
    description: 'Tailored software and SaaS platforms designed to streamline business operations and deliver scalable growth.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: ['Enterprise Applications', 'Cloud Integration', 'Workflow Automation', 'Custom APIs']
  },
  {
    title: 'Progressive Web Applications (PWAs) / Websites',
    description: 'Modern, responsive, and high-performing web solutions that work seamlessly across all devices.',
    image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: ['PWAs', 'Next.js/React', 'SEO Optimization', 'Cross-Browser Compatibility']
  },
  {
    title: 'Brand Sculpting & Digital Identity',
    description: 'Crafting strong digital identities and brand strategies that connect with your target audience.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Content Strategy']
  }
];


  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '98', label: 'Client Satisfaction %' },
    { number: '5', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden font-['Inter',sans-serif]">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center animate-on-scroll">
          <p className="font-light text-sm uppercase tracking-[0.3em] text-cyan-400 mb-8">
            Creative Excellence & Innovation
          </p>
          
          <AnimatedTitle
            title="Transform Your <b>V</b>ision Into <br /> Digital <b>R</b>eality"
            containerClass="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-tight"
          />
          
          <p className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-gray-200 leading-relaxed mb-12">
            We craft exceptional digital experiences that captivate audiences, drive engagement, and deliver measurable results for your business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-cyan-300 font-medium mb-16">
            <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Innovation</span>
            <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Quality</span>
            <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Results</span>
          </div>
        </div>

        <FloatingHeroImage />
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
            Our <span className="text-white">Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand and drive sustainable growth in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <BentoTilt key={index} className="animate-on-scroll">
              <div 
                className={`service-card h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 border transition-all duration-500 cursor-pointer ${
                  activeService === index 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-400/20' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="relative h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="relative z-10 flex flex-col justify-between h-full p-8">
                    <div>
                      <h3 
                        className="text-2xl md:text-3xl font-bold mb-4 text-white" 
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                      <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-cyan-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      title="Learn More"
                      containerClass="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 text-sm font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </BentoTilt>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              targetNumber={stat.number}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="text-cyan-400">Process</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            A streamlined approach that ensures exceptional results from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
          {['Discover', 'Design', 'Develop', 'Deliver'].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{step}</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center animate-on-scroll">
          <div className="max-w-5xl mx-auto p-16 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-3xl border border-cyan-500/30 backdrop-blur-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Create Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's transform your vision into a digital masterpiece that captivates your audience and drives real business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button
                  title="Start Your Project"
                  containerClass="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
                />
              </Link>
              <Link to="/portfolio">
                <Button
                  title="View Our Work"
                  containerClass="border-2 border-cyan-400 text-cyan-400 px-12 py-4 text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesPage;