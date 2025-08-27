import React from 'react';
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from '../../gsap/BentoTilt';
import BentoCard from '../../gsap/BentoCard';

const PwaWebsiteDetails = () => {
  const serviceDetails = {
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

  return (
    <>
      {/* Main Feature Card */}
      <BentoTilt className="border border-cyan-500/30 relative mb-8 h-80 sm:h-96 w-full overflow-hidden rounded-2xl md:h-[60vh] shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
        <BentoCard
          src={serviceDetails.mainFeatures[0]?.image}
          title={<><span className="font-bold">Responsive</span> Design</>}
          description={serviceDetails.mainFeatures[0]?.description}
        />
      </BentoTilt>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={serviceDetails.mainFeatures[1]?.image}
            title={<><span className="font-bold">Performance</span> Optimization</>}
            description={serviceDetails.mainFeatures[1]?.description}
          />
        </BentoTilt>
        
        <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={serviceDetails.mainFeatures[2]?.image}
            title={<><span className="font-bold">SEO</span> Excellence</>}
            description={serviceDetails.mainFeatures[2]?.description}
          />
        </BentoTilt>
        
        <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={serviceDetails.mainFeatures[3]?.image}
            title={<><span className="font-bold">PWA</span> Features</>}
            description={serviceDetails.mainFeatures[3]?.description}
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
                {serviceDetails.additionalInfo.process.map((step, index) => (
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
                {serviceDetails.additionalInfo.technologies.map((tech, index) => (
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
                {serviceDetails.additionalInfo.deliverables.map((item, index) => (
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
    </>
  );
};

export default PwaWebsiteDetails;