import React from 'react';
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from '../../components/BentoTilt';
import BentoCard from '../../components/BentoCard';

const CustomSoftwareDetails = () => {
  const serviceDetails = {
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

  return (
    <>
      {/* Main Feature Card */}
      <BentoTilt className="border border-cyan-500/30 relative mb-8 h-80 sm:h-96 w-full overflow-hidden rounded-2xl md:h-[60vh] shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
        <BentoCard
          src={serviceDetails.mainFeatures[0]?.image}
          title={<><span className="font-bold">Enterprise</span> Architecture</>}
          description={serviceDetails.mainFeatures[0]?.description}
        />
      </BentoTilt>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={serviceDetails.mainFeatures[1]?.image}
            title={<><span className="font-bold">Cloud</span> Integration</>}
            description={serviceDetails.mainFeatures[1]?.description}
          />
        </BentoTilt>
        
        <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={serviceDetails.mainFeatures[2]?.image}
            title={<><span className="font-bold">API</span> Development</>}
            description={serviceDetails.mainFeatures[2]?.description}
          />
        </BentoTilt>
        
        <BentoTilt className="h-80 sm:h-96 md:h-[50vh] w-full rounded-2xl border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 detail-feature-card">
          <BentoCard
            src={serviceDetails.mainFeatures[3]?.image}
            title={<><span className="font-bold">Security</span> & Compliance</>}
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

export default CustomSoftwareDetails;