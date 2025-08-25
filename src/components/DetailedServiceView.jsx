import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TiLocationArrow, TiArrowLeft } from "react-icons/ti";
import Button from "./Button";
import BentoTilt from "./BentoTilt";
import BentoCard from "./BentoCard";

gsap.registerPlugin(ScrollTrigger);

const DetailedServiceView = ({ service, onBack }) => {
  const detailRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (detailRef.current) {
      gsap.fromTo(detailRef.current, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    // Animate feature cards
    gsap.from('.detail-feature-card', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.3,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getServiceDetails = (serviceTitle) => {
    // Fallback image for error handling
    const fallbackImage = 'https://picsum.photos/500/300?random=1';

    switch(serviceTitle) {
      case 'Custom Software / SaaS Solutions':
        return {
          mainFeatures: [
            {
              title: 'Enterprise Architecture',
              description: 'Scalable, secure, and robust software architecture designed for enterprise-level performance.',
              image: 'https://picsum.photos/500/300?random=2'
            },
            {
              title: 'Cloud Integration',
              description: 'Seamless integration with AWS, Azure, and Google Cloud platforms for optimal performance.',
              image: 'https://picsum.photos/500/300?random=3'
            },
            {
              title: 'API Development',
              description: 'RESTful and GraphQL APIs that enable seamless data exchange and third-party integrations.',
              image: 'https://picsum.photos/500/300?random=4'
            },
            {
              title: 'Security & Compliance',
              description: 'Industry-standard security protocols and compliance with regulations like GDPR and HIPAA.',
              image: 'https://picsum.photos/500/300?random=5'
            }
          ],
          additionalInfo: {
            process: ['Requirements Analysis', 'System Design', 'Development', 'Testing', 'Deployment', 'Maintenance'],
            technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
            deliverables: ['Source Code', 'Documentation', 'Training', '24/7 Support']
          }
        };
      
      case 'Progressive Web Applications (PWAs) / Websites':
        return {
          mainFeatures: [
            {
              title: 'Responsive Design',
              description: 'Mobile-first approach ensuring perfect performance across all devices and screen sizes.',
              image: 'https://picsum.photos/500/300?random=6'
            },
            {
              title: 'Performance Optimization',
              description: 'Lightning-fast loading speeds with advanced caching and optimization techniques.',
              image: 'https://picsum.photos/500/300?random=7'
            },
            {
              title: 'SEO Excellence',
              description: 'Advanced SEO strategies and technical optimization for maximum search visibility.',
              image: 'https://picsum.photos/500/300?random=8'
            },
            {
              title: 'PWA Features',
              description: 'Offline functionality, push notifications, and app-like experience on all platforms.',
              image: 'https://picsum.photos/500/300?random=9'
            }
          ],
          additionalInfo: {
            process: ['UX Research', 'Wireframing', 'Design', 'Development', 'Testing', 'Launch'],
            technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Webpack'],
            deliverables: ['Website', 'PWA', 'Analytics Setup', 'SEO Optimization']
          }
        };
      
      case 'Brand Sculpting & Digital Identity':
        return {
          mainFeatures: [
            {
              title: 'Brand Strategy',
              description: 'Comprehensive brand positioning and messaging that resonates with your target audience.',
              image: 'https://picsum.photos/500/300?random=10'
            },
            {
              title: 'Visual Identity',
              description: 'Distinctive logos, color schemes, and visual elements that create memorable brand recognition.',
              image: 'https://picsum.photos/500/300?random=11'
            },
            {
              title: 'Content Strategy',
              description: 'Strategic content planning and creation that drives engagement and builds brand authority.',
              image: 'https://picsum.photos/500/300?random=12'
            },
            {
              title: 'Digital Presence',
              description: 'Cohesive digital experience across all touchpoints and social media platforms.',
              image: 'https://picsum.photos/500/300?random=13'
            }
          ],
          additionalInfo: {
            process: ['Brand Audit', 'Strategy Development', 'Design Creation', 'Implementation', 'Guidelines', 'Launch'],
            technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'After Effects', 'Webflow'],
            deliverables: ['Brand Guidelines', 'Logo Package', 'Marketing Materials', 'Digital Assets']
          }
        };
      
      default:
        return { 
          mainFeatures: [], 
          additionalInfo: { process: [], technologies: [], deliverables: [] } 
        };
    }
  };

  const details = getServiceDetails(service.title);

  // Debug click handler for Back button
  const handleBackClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    console.log('Back to Services button clicked');
    if (onBack) {
      onBack();
    }
  };

  return (
    <div ref={detailRef} className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* Header with Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <Button
          title={
            <div className="flex items-center gap-2">
              <TiArrowLeft className="text-xl" />
              Back to Services
            </div>
          }
          containerClass="text-cyan-400 border border-cyan-400/50 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
          onClick={handleBackClick}
        />
      </div>

      {/* Service Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            {service.title.split(' ').map((word, index) => 
              index === 0 ? <span key={index} className="text-cyan-400">{word} </span> : `${word} `
            )}
          </h1>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-16">
          <p className="font-light text-lg text-cyan-400 mb-4">
            Comprehensive Solutions
          </p>
          <p className="max-w-md text-lg text-gray-300">
            Explore our detailed approach and cutting-edge methodologies that drive exceptional results for your business.
          </p>
        </div>
        
        {/* Main Feature Card */}
        <BentoTilt className="border border-cyan-500/30 relative mb-8 h-80 sm:h-96 w-full overflow-hidden rounded-2xl md:h-[60vh] shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={details.mainFeatures[0]?.image || 'https://picsum.photos/500/300?random=1'}
            title={
              <>
                {details.mainFeatures[0]?.title.split(' ').map((word, index) => 
                  index === 0 ? <span key={index} className="font-bold">{word.charAt(0).toUpperCase() + word.slice(1)} </span> : `${word} `
                )}
              </>
            }
            description={details.mainFeatures[0]?.description}
          />
        </BentoTilt>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
            <BentoCard
              src={details.mainFeatures[1]?.image || 'https://picsum.photos/500/300?random=1'}
              title={
                <>
                  {details.mainFeatures[1]?.title.split(' ').map((word, index) => 
                    index === 0 ? <span key={index} className="font-bold">{word.charAt(0).toUpperCase() + word.slice(1)} </span> : `${word} `
                  )}
                </>
              }
              description={details.mainFeatures[1]?.description}
            />
          </BentoTilt>
          
          <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
            <BentoCard
              src={details.mainFeatures[2]?.image || 'https://picsum.photos/500/300?random=1'}
              title={
                <>
                  {details.mainFeatures[2]?.title.split(' ').map((word, index) => 
                    index === 0 ? <span key={index} className="font-bold">{word.charAt(0).toUpperCase() + word.slice(1)} </span> : `${word} `
                  )}
                </>
              }
              description={details.mainFeatures[2]?.description}
            />
          </BentoTilt>
          
          <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
            <BentoCard
              src={details.mainFeatures[3]?.image || 'https://picsum.photos/500/300?random=1'}
              title={
                <>
                  {details.mainFeatures[3]?.title.split(' ').map((word, index) => 
                    index === 0 ? <span key={index} className="font-bold">{word.charAt(0).toUpperCase() + word.slice(1)} </span> : `${word} `
                  )}
                </>
              }
              description={details.mainFeatures[3]?.description}
            />
          </BentoTilt>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          <BentoTilt className="h-96 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
            <div className="flex size-full flex-col justify-between bg-gradient-to-br from-cyan-600 to-blue-700 p-6 sm:p-8 rounded-2xl border border-cyan-500/30">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Process</h1>
                <ul className="space-y-2">
                  {details.additionalInfo.process.map((step, index) => (
                    <li key={index} className="text-gray-100 text-sm sm:text-base flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      {index + 1}. {step}
                    </li>
                  ))}
                </ul>
              </div>
              <TiLocationArrow className="self-end text-white text-2xl sm:text-3xl" />
            </div>
          </BentoTilt>
          
          <BentoTilt className="h-96 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
            <div className="flex size-full flex-col justify-between bg-gradient-to-br from-purple-600 to-pink-600 p-6 sm:p-8 rounded-2xl border border-cyan-500/30">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Technologies</h1>
                <div className="flex flex-wrap gap-2">
                  {details.additionalInfo.technologies.map((tech, index) => (
                    <span key={index} className="bg-white/20 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <TiLocationArrow className="self-end text-white text-2xl sm:text-3xl" />
            </div>
          </BentoTilt>
          
          <BentoTilt className="h-96 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
            <div className="flex size-full flex-col justify-between bg-gradient-to-br from-green-600 to-teal-600 p-6 sm:p-8 rounded-2xl border border-cyan-500/30">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Deliverables</h1>
                <ul className="space-y-2">
                  {details.additionalInfo.deliverables.map((item, index) => (
                    <li key={index} className="text-gray-100 text-sm sm:text-base flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <TiLocationArrow className="self-end text-white text-2xl sm:text-3xl" />
            </div>
          </BentoTilt>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-2xl border border-cyan-500/30 backdrop-blur-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with our {service.title.toLowerCase()}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/contact">
                <Button
                  title="Start Your Project"
                  containerClass="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
                />
              </Link>
              <Button
                title="Schedule Consultation"
                containerClass="border-2 border-cyan-400 text-cyan-400 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedServiceView;