import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import BentoTilt from './BentoTilt';
import BentoCard from './BentoCard';
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
  }, []);

  const services = [
    {
      title: 'UI/UX <b>D</b>esign',
      description: 'From wireframes to prototypes, we craft intuitive designs that ensure extraordinary user experiences.',
      video: 'videos/ui-ux-design.mp4',
    },
    {
      title: 'Web <b>D</b>esigning',
      description: 'Our custom web solutions blend creativity with functionality, delivering websites that stand out and perform flawlessly.',
      video: 'videos/web-design.mp4',
    },
    {
      title: 'Digital <b>M</b>arketing',
      description: 'Amplify your brand’s digital presence with our strategic digital marketing campaigns that drive engagement and conversions.',
      video: 'videos/digital-marketing.mp4',
    },
    {
      title: 'Graphic <b>D</b>esigning',
      description: 'Transform your brand’s identity with visually stunning graphics that captivate and inspire.',
      video: 'videos/graphic-design.mp4',
    },
    {
      title: 'Br<b>a</b>nding',
      description: 'Craft a compelling brand story that resonates with your audience and sets you apart in the market.',
      video: 'videos/branding.mp4',
    },
    {
      title: 'Print <b>M</b>edia',
      description: 'Extend your brand’s impact beyond digital with high-quality print materials that leave a lasting impression.',
      video: 'videos/print-media.mp4',
    },
    {
      title: 'Custom PC & Server <b>B</b>uilding',
      description: 'Tailor-made solutions for your hardware needs, ensuring performance and reliability that exceeds expectations.',
      video: 'videos/custom-pc.mp4',
    },
    {
      title: 'Product <b>P</b>hotoshoots',
      description: 'Showcase your products in their best light with professional photoshoots that highlight their unique features.',
      video: 'videos/product-photoshoots.mp4',
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-black text-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="about-section text-center">
          <AnimatedTitle
            title="Crafting <b>E</b>xcellence: <br /> Your Partner in Creative <b>S</b>olutions"
            containerClass="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-10"
          />
          <p className="max-w-3xl mx-auto text-lg font-light text-gray-400 leading-relaxed">
            At Aris, we don’t just deliver services; we craft excellence. Our comprehensive suite of creative and digital solutions is tailored to elevate your brand and engage your audience at every touchpoint.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
          {services.map((service, index) => (
            <BentoTilt key={index} className="service-card h-96">
              <BentoCard
                src={service.video}
                title={<>{service.title}</>}
                description={service.description}
                isComingSoon={false}
              />
            </BentoTilt>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/contact">
            <Button
              title="Join Us Today"
              containerClass="bg-cyan-400 text-black px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;