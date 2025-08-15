import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart, Code, Zap } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    { 
      number: "01", 
      title: "Ecommerce", 
      description: "Launch high-performance interactive 3D product landing pages that boost engagement and conversions—no code required.",
      icon: <Search className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#FF6B6B]"
    },
    { 
      number: "02", 
      title: "Tech", 
      description: "Leverage WebGL visuals and high-performance, best-in-class 3D websites to elevate your online presence—no code required.",
      icon: <BarChart className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#4A90E2]"
    },
    { 
      number: "03", 
      title: "Creative", 
      description: "Craft creative, captivating 3D websites with drag-and-drop tools and keyframe animations to wow every visitor.",
      icon: <Code className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#2ECC71]"
    },
    { 
      number: "04", 
      title: "Storytelling", 
      description: "Bring your vision to life with scroll triggered 3D scenes and interactive animations that keep users engaged.",
      icon: <Zap className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#9B59B6]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3,
        duration: 0.8
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      } 
    },
  };

  return (
    <motion.section
      id="process"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A23] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFFFFF]">
              Use Cases
            </h2>
            <p className="text-lg md:text-xl text-[#FFFFFF] max-w-3xl mx-auto leading-relaxed">
              Explore our tailored solutions
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex mb-16"
                style={{ marginLeft: `${index * 20}px`, marginTop: `${index * 40}px` }}
                variants={itemVariants}
              >
                <div className="px-8">
                  <motion.div
                    className="bg-[#241A7A]/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-[#1A135A]/30 w-64"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold text-[#FFFFFF] ml-3">{step.title}</h3>
                    </div>
                    <p className="text-[#FFFFFF] text-sm">{step.description}</p>
                    <div className="mt-4">
                      <a href="#" className="text-[#FFFFFF] underline">Explore Now</a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;