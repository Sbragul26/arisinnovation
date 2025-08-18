import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import BentoTilt from './BentoTilt';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useGSAP(() => {
    gsap.from('.about-section', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.service-card', {
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.stats-card', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.mission-section', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.mission-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.partners-section', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.partners-section',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.to('.partners-scroll', {
      x: '-50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const services = [
    {
      title: 'UI/UX <b>D</b>esign',
      description: 'Crafting intuitive and engaging designs to deliver seamless user experiences.',
      image: '/images/ui-ux-design.png',
    },
    {
      title: 'Web <b>D</b>esigning',
      description: 'Building visually stunning and functional websites tailored to your brand.',
      image: '/images/web-design.png',
    },
    {
      title: 'Digital <b>M</b>arketing',
      description: 'Boosting your brand’s reach with strategic campaigns that drive results.',
      image: '/images/digital-marketing.png',
    },
    {
      title: 'Graphic <b>D</b>esigning',
      description: 'Creating captivating visuals to elevate your brand’s identity.',
      image: '/images/graphic-design.png',
    },
    {
      title: 'Br<b>a</b>nding',
      description: 'Developing a unique brand story that resonates with your audience.',
      image: '/images/branding.png',
    },
    {
      title: 'Print <b>M</b>edia',
      description: 'Designing high-impact print materials for lasting impressions.',
      image: '/images/photoshoot.png',
    },
    {
      title: 'Custom PC & Server <b>B</b>uilding',
      description: 'Delivering high-performance hardware solutions for your needs.',
      image: '/images/photoshoot.png',
    },
    {
      title: 'Product <b>P</b>hotoshoots',
      description: 'Capturing your products with professional, high-quality photography.',
      image: '/images/photoshoot.png',
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const partners = [
    'astra', 'BA', 'Dia cure logo', 'Eicher-Motors-Logo', 'GK Logo',
    'H&H Logo', 'Happy bites Logo', 'Homefin Logo', 'KB Logo', 'MKS Logo',
    'SDC Logo', 'SSb Logo-01', 'TK LOGO', 'Trip38 Logo', 'Trust Logo'
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden font-['Poppins',sans-serif]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="about-section text-center">
          <AnimatedTitle
            title="Shaping <b>F</b>utures: <br /> Your Creative <b>P</b>artner"
            containerClass="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tight mb-12 font-['Montserrat',sans-serif]"
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

        {/* Stats Section */}
        <div className="stats-section mt-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card text-center p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-3xl border border-cyan-500/20 backdrop-blur-md shadow-lg">
                <h3 className="text-5xl md:text-6xl font-bold text-cyan-300 mb-3">{stat.number}</h3>
                <p className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Services Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold text-cyan-300 mb-8">Our <b>Services</b></h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-200">
              Explore our innovative solutions designed to elevate your brand and create meaningful connections with your audience.
            </p>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <BentoTilt key={index} className="service-card h-[24rem]">
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-cyan-500/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                    <div>
                      <h1 className="text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: service.title }} />
                      <p className="mt-4 text-sm text-gray-200">{service.description}</p>
                    </div>
                    <div className="mt-4">
                      <Link to="/contact">
                        <Button
                          title="Learn More"
                          containerClass="bg-cyan-400 text-black px-6 py-2 text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </BentoTilt>
            ))}
          </div>
        </div>

{/* Partners Section */}
<div className="partners-section mt-32">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-semibold text-cyan-300 mb-6">Trusted by <b>Leaders</b></h2>
    <p className="text-lg text-gray-200">
      Collaborating with top brands to deliver exceptional results
    </p>
  </div>
  
  <div className="relative overflow-hidden py-16">
    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
    
    <div className="partners-scroll flex items-center space-x-24 whitespace-nowrap" style={{ width: '200%' }}>
      {/* First set of logos */}
      {partners.map((partner, index) => (
        <div key={index} className="flex-shrink-0 w-64 h-36 bg-white/10 rounded-xl border border-cyan-500/20 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img 
            src={`/logos/${partner}.png`} 
            alt={partner}
            className="max-w-48 max-h-24 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="text-gray-300 text-sm font-medium hidden">{partner}</span>
        </div>
      ))}
      
      {/* Duplicate set for seamless loop */}
      {partners.map((partner, index) => (
        <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 h-36 bg-white/10 rounded-xl border border-cyan-500/20 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <img 
            src={`/logos/${partner}.png`} 
            alt={partner}
            className="max-w-48 max-h-24 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="text-gray-300 text-sm font-medium hidden">{partner}</span>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl border border-cyan-500/30 backdrop-blur-lg">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-300 mb-6">Ready to Build Something <b>Extraordinary</b>?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Partner with Aris to turn your ideas into impactful realities. Let’s create something unforgettable together.
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