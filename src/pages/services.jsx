import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Search, BarChart, Smartphone, Globe, ChevronRight, Zap, Star, CheckCircle } from 'lucide-react';

const ServicesPage = ({ scrollToSection }) => {
  const services = [
    { 
      icon: <Palette className="w-12 h-12 text-[#FFFFFF]" />, 
      title: "Brand Identity & Design", 
      description: "Create memorable brand experiences that resonate with your audience and stand out in the marketplace.", 
      benefits: ["Logo & Visual Identity", "Brand Guidelines", "Marketing Materials", "Brand Strategy"], 
      color: "from-[#FF6B6B] to-[#FF8E8E]",
      shadowColor: "shadow-[#FF6B6B]/25",
      emoji: "🎨"
    },
    { 
      icon: <Code className="w-12 h-12 text-[#FFFFFF]" />, 
      title: "Web Development", 
      description: "Build fast, secure, and scalable websites that convert visitors into customers and grow with your business.", 
      benefits: ["Custom Website Development", "E-commerce Solutions", "CMS Integration", "Performance Optimization"], 
      color: "from-[#4A90E2] to-[#50B7E9]",
      shadowColor: "shadow-[#4A90E2]/25",
      emoji: "⚡"
    },
    { 
      icon: <Smartphone className="w-12 h-12 text-[#FFFFFF]" />, 
      title: "Mobile App Development", 
      description: "Develop intuitive mobile applications that provide seamless user experiences across all devices.", 
      benefits: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Maintenance & Support"], 
      color: "from-[#2ECC71] to-[#36E289]",
      shadowColor: "shadow-[#2ECC71]/25",
      emoji: "📱"
    },
    { 
      icon: <Search className="w-12 h-12 text-[#FFFFFF]" />, 
      title: "SEO & Digital Marketing", 
      description: "Increase your online visibility and drive qualified traffic through strategic SEO and marketing campaigns.", 
      benefits: ["Search Engine Optimization", "Content Marketing", "Social Media Management", "PPC Campaigns"], 
      color: "from-[#9B59B6] to-[#B76DD2]",
      shadowColor: "shadow-[#9B59B6]/25",
      emoji: "🚀"
    },
    { 
      icon: <BarChart className="w-12 h-12 text-[#FFFFFF]" />, 
      title: "Analytics & Strategy", 
      description: "Make data-driven decisions with comprehensive analytics and strategic planning for sustainable growth.", 
      benefits: ["Performance Analytics", "User Experience Research", "Growth Strategy", "Conversion Optimization"], 
      color: "from-[#F1C40F] to-[#F7D633]",
      shadowColor: "shadow-[#F1C40F]/25",
      emoji: "📊"
    },
    { 
      icon: <Globe className="w-12 h-12 text-[#FFFFFF]" />, 
      title: "Digital Consulting", 
      description: "Get expert guidance on digital transformation and technology decisions to future-proof your business.", 
      benefits: ["Technology Consultation", "Digital Transformation", "Process Optimization", "Training & Support"], 
      color: "from-[#1ABC9C] to-[#22E4B9]",
      shadowColor: "shadow-[#1ABC9C]/25",
      emoji: "🌐"
    }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Discovery", 
      description: "We deep-dive into your business, goals, and challenges to understand your unique needs.",
      icon: <Search className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#FF6B6B]"
    },
    { 
      number: "02", 
      title: "Strategy", 
      description: "Based on our findings, we develop a comprehensive strategy tailored to your objectives.",
      icon: <BarChart className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#4A90E2]"
    },
    { 
      number: "03", 
      title: "Design & Development", 
      description: "Our team brings your vision to life with stunning design and robust development.",
      icon: <Code className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#2ECC71]"
    },
    { 
      number: "04", 
      title: "Launch & Optimize", 
      description: "We launch your project and continuously optimize for better performance and results.",
      icon: <Zap className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#9B59B6]"
    }
  ];

  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      price: "$2,999",
      period: "Starting from",
      features: ["5-page website", "Basic SEO setup", "Mobile responsive", "3 months support"],
      color: "from-[#4A90E2] to-[#50B7E9]",
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses", 
      price: "$7,999",
      period: "Starting from",
      features: ["Custom website design", "E-commerce integration", "Advanced SEO & Analytics", "6 months support"],
      color: "from-[#9B59B6] to-[#B76DD2]",
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      description: "For established companies",
      price: "Custom",
      period: "Let's discuss",
      features: ["Custom development", "Advanced integrations", "Dedicated support", "12+ months partnership"],
      color: "from-[#2ECC71] to-[#36E289]",
      popular: false,
      buttonText: "Contact Us"
    }
  ];

  // Animation variants
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

  const cardHoverVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      id="services"
      className="min-h-screen flex items-center justify-center bg-[#0A0A23] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-[#FFFFFF]"
            variants={itemVariants}
          >
            Our Services
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-light text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed tracking-wide"
            variants={itemVariants}
          >
            Comprehensive digital solutions designed to <span className="text-[#FFFFFF] font-semibold">elevate</span> your brand and drive <span className="text-[#FFFFFF] font-semibold">meaningful results</span>
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.div
                className="bg-[#241A7A]/90 backdrop-blur-xl rounded-3xl p-8 border border-[#1A135A]/40 shadow-2xl h-full flex flex-col"
                whileHover={cardHoverVariants.hover}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-[#FFFFFF] shadow-xl`}>
                    {service.icon}
                  </div>
                  <div className="text-3xl">
                    {service.emoji}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">{service.title}</h3>
                <p className="text-[#FFFFFF] mb-6 leading-relaxed flex-grow">{service.description}</p>
                <div className="space-y-3 mt-auto">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-[#FFFFFF]">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section - Vertical Timeline with Alternating Sides */}
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFFFFF]">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-[#FFFFFF] max-w-3xl mx-auto leading-relaxed">
              A step-by-step approach to deliver exceptional results, tailored to your needs
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#241A7A]/50 via-[#1A135A]/50 to-[#241A7A]/50"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
                variants={itemVariants}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    className="bg-[#241A7A]/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-[#1A135A]/30"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold text-[#FFFFFF] ml-3">{step.title}</h3>
                    </div>
                    <p className="text-[#FFFFFF] text-sm">{step.description}</p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <motion.div
                    className={`w-12 h-12 ${step.color} text-[#FFFFFF] font-bold rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Packages */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#FFFFFF]"
            variants={itemVariants}
          >
            Service Packages
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative ${pkg.popular ? 'scale-105' : ''}`}
                variants={itemVariants}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F1C40F] to-[#F7D633] text-[#FFFFFF] px-6 py-2 rounded-full text-sm font-bold shadow-xl z-10">
                    <Star className="w-4 h-4 inline mr-1 text-[#FFFFFF]" />
                    Most Popular
                  </div>
                )}
                
                <motion.div
                  className={`h-full bg-${pkg.popular ? '[#FFFFFF]' : '[#241A7A]/90'} backdrop-blur-xl rounded-3xl p-8 border ${pkg.popular ? 'border-[#1A135A]/50' : 'border-[#1A135A]/40'} shadow-2xl flex flex-col`}
                  whileHover={cardHoverVariants.hover}
                >
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-[#241A7A]' : 'text-[#FFFFFF]'} mb-3`}>
                      {pkg.name}
                    </h3>
                    <p className={`${pkg.popular ? 'text-[#241A7A]' : 'text-[#FFFFFF]'} mb-6`}>
                      {pkg.description}
                    </p>
                    <div className={`text-5xl font-bold mb-2 ${pkg.popular ? 'text-[#241A7A]' : 'text-[#FFFFFF]'}`}>
                      {pkg.price}
                    </div>
                    <p className={`text-sm ${pkg.popular ? 'text-[#241A7A]' : 'text-[#FFFFFF]'}`}>
                      {pkg.period}
                    </p>
                  </div>
                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 mr-3 ${pkg.popular ? 'text-[#241A7A]' : 'text-[#FFFFFF]'}`} />
                        <span className={`${pkg.popular ? 'text-[#241A7A]' : 'text-[#FFFFFF]'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full py-4 rounded-xl font-bold ${pkg.popular ? 'bg-[#241A7A] text-[#FFFFFF]' : 'bg-gradient-to-r ' + pkg.color + ' text-[#FFFFFF]'}`}
                  >
                    {pkg.buttonText}
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFFFFF]">
            Ready to Get Started?
          </h2>
          
          <p className="text-lg md:text-xl text-[#FFFFFF] mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your <span className="text-[#FFFFFF] font-semibold">vision</span> to life
          </p>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center bg-gradient-to-r from-[#241A7A] to-[#1A135A] hover:from-[#1A135A] hover:to-[#241A7A] px-10 py-4 rounded-xl text-lg font-bold text-[#FFFFFF] transition-all duration-300 shadow-xl hover:shadow-[#241A7A]/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF]/20 to-[#FFFFFF]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Zap className="w-5 h-5 mr-3 text-[#FFFFFF]" />
            Start Your Project
            <ChevronRight className="ml-3 w-5 h-5 text-[#FFFFFF]" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesPage;