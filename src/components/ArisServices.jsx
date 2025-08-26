import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { servicesData } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// NOTE: All the local components (AnimatedTitle, Button, etc.) from your original file
// are kept here for completeness. In a larger project, you would move them to the `components` folder.

const AnimatedTitle = ({ title, containerClass }) => {
  const titleRef = useRef(null);
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 100, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.3, scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
      const words = titleRef.current.querySelectorAll('b');
      gsap.from(words, { color: '#00ffff', scale: 1.2, stagger: 0.2, duration: 0.8, ease: 'elastic.out(1, 0.5)', delay: 1.5, scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } });
    }
  }, []);
  return <div className={containerClass}><h1 ref={titleRef} dangerouslySetInnerHTML={{ __html: title }} /></div>;
};

const Button = ({ title, containerClass, onClick }) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      const handleMouseEnter = () => gsap.to(buttonRef.current, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      const handleMouseLeave = () => gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
      buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
      buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
      return () => { if (buttonRef.current) { buttonRef.current.removeEventListener('mouseenter', handleMouseEnter); buttonRef.current.removeEventListener('mouseleave', handleMouseLeave); } };
    }
  }, []);
  const handleClick = (e) => {
    gsap.to(buttonRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.inOut' });
    if (onClick) onClick(e);
  };
  return <button ref={buttonRef} className={containerClass} onClick={handleClick}>{title}</button>;
};

const BentoTilt = ({ children, className }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, { opacity: 0, y: 50, rotateX: -15 }, { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: elementRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    }
  }, []);
  const handleMouseMove = (e) => {
    const { current: element } = elementRef;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10, rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    gsap.to(element, { duration: 0.3, rotateX, rotateY, transformPerspective: 1000, ease: "power2.out" });
  };
  const handleMouseLeave = () => gsap.to(elementRef.current, { duration: 0.5, rotateX: 0, rotateY: 0, ease: "power2.out" });
  return <div ref={elementRef} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>{children}</div>;
};

const CounterCard = ({ targetNumber, label, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let target = parseInt(String(targetNumber).replace(/\D/g, ''));
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentCount = Math.floor((1 - Math.pow(1 - progress, 4)) * target);
          setCount(currentCount);
          if (progress < 1) requestAnimationFrame(animate); else setCount(target);
        };
        setTimeout(() => requestAnimationFrame(animate), delay);
      }
    }, { threshold: 0.5 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [targetNumber, duration, delay, hasAnimated]);
  const displayValue = () => `${count}${String(targetNumber).replace(/\d/g, '')}`;
  return <div ref={cardRef} className="stats-card text-center p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-3xl border border-cyan-500/20 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 glow-effect"><h3 ref={numberRef} className="text-5xl md:text-6xl font-bold text-cyan-300 mb-3">{displayValue()}</h3><p className="text-gray-300 text-sm uppercase tracking-wider">{label}</p></div>;
};

const FloatingHeroImage = () => {
  const frameRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(frameRef.current, { scale: 0.95, y: 50 }, { scale: 1, y: 0, duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: frameRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
    gsap.to(frameRef.current, { y: -15, ease: 'none', scrollTrigger: { trigger: frameRef.current, start: 'top 80%', end: 'bottom top', scrub: 1 } });
  }, []);
  const handleMouseMove = (e) => {
    const { current: element } = frameRef;
    if (!element) return;
    const rect = element.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5, rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    gsap.to(element, { duration: 0.3, rotateX, rotateY, transformPerspective: 1000, ease: "power2.out" });
  };
  const handleMouseLeave = () => gsap.to(frameRef.current, { duration: 0.5, rotateX: 0, rotateY: 0, ease: "power2.out" });
  return <div className="flex justify-center items-center h-[600px] w-full mb-16"><div className="relative"><img ref={frameRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Creative team collaboration" className="rounded-3xl shadow-2xl shadow-cyan-500/20 max-w-4xl w-full h-auto object-cover border border-cyan-500/30 glow-effect" /><div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div></div></div>;
};

const InnovativeServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();
  const services = servicesData;

  const handleLearnMore = (service) => {
    navigate(`/services/${service.slug}`);
  };
  
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction %' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden font-['Inter',sans-serif]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="font-light text-sm uppercase tracking-[0.3em] text-cyan-400 mb-8">Creative Excellence & Innovation</p>
        <AnimatedTitle title="Transform Your <b>V</b>ision Into <br /> Digital <b>R</b>eality" containerClass="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-tight" />
        <p className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-gray-200 leading-relaxed mb-12">We craft exceptional digital experiences that captivate audiences, drive engagement, and deliver measurable results for your business.</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-cyan-300 font-medium mb-16">
          <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Innovation</span>
          <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Quality</span>
          <span className="px-4 py-2 border border-cyan-500/30 rounded-full">Results</span>
        </div>
        <FloatingHeroImage />
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">Our <span className="text-white">Services</span></h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">Comprehensive digital solutions designed to elevate your brand and drive sustainable growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <BentoTilt key={index}>
              <div className={`service-card h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 border transition-all duration-500 cursor-pointer glow-effect ${activeService === index ? 'border-cyan-400/50 shadow-2xl shadow-cyan-400/20' : 'border-cyan-500/20 hover:border-cyan-400/40'}`} onClick={() => setActiveService(index)}>
                <div className="relative h-full">
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative z-10 flex flex-col justify-between h-full p-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white" dangerouslySetInnerHTML={{ __html: service.title }} />
                      <p className="text-gray-200 mb-6 text-sm leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-cyan-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />{feature}</div>
                        ))}
                      </div>
                    </div>
                    <Button title="Learn More" containerClass="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 text-sm font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300" onClick={() => handleLearnMore(service)} />
                  </div>
                </div>
              </div>
            </BentoTilt>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <CounterCard key={index} targetNumber={stat.number} label={stat.label} delay={index * 200} />)}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="max-w-5xl mx-auto p-16 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-3xl border border-cyan-500/30 backdrop-blur-lg">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Create Something <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Extraordinary?</span></h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">Let's transform your vision into a digital masterpiece that captivates your audience.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact"><Button title="Start Your Project" containerClass="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-4 text-lg font-semibold rounded-full" /></Link>
              <Link to="/portfolio"><Button title="View Our Work" containerClass="border-2 border-cyan-400 text-cyan-400 px-12 py-4 text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-black" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesPage;