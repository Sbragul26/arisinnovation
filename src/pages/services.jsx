import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Search, BarChart, Smartphone, Globe, ChevronRight, Zap, Star, CheckCircle } from 'lucide-react';

const ServicesPage = ({ scrollToSection }) => {
  const services = [
    { 
      icon: <Palette className="w-12 h-12" />, 
      title: "Brand Identity & Design", 
      description: "Create memorable brand experiences that resonate with your audience and stand out in the marketplace.", 
      benefits: ["Logo & Visual Identity", "Brand Guidelines", "Marketing Materials", "Brand Strategy"], 
      color: "from-pink-500 to-rose-500",
      shadowColor: "shadow-pink-500/25",
      emoji: "🎨"
    },
    { 
      icon: <Code className="w-12 h-12" />, 
      title: "Web Development", 
      description: "Build fast, secure, and scalable websites that convert visitors into customers and grow with your business.", 
      benefits: ["Custom Website Development", "E-commerce Solutions", "CMS Integration", "Performance Optimization"], 
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
      emoji: "⚡"
    },
    { 
      icon: <Smartphone className="w-12 h-12" />, 
      title: "Mobile App Development", 
      description: "Develop intuitive mobile applications that provide seamless user experiences across all devices.", 
      benefits: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Maintenance & Support"], 
      color: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/25",
      emoji: "📱"
    },
    { 
      icon: <Search className="w-12 h-12" />, 
      title: "SEO & Digital Marketing", 
      description: "Increase your online visibility and drive qualified traffic through strategic SEO and marketing campaigns.", 
      benefits: ["Search Engine Optimization", "Content Marketing", "Social Media Management", "PPC Campaigns"], 
      color: "from-purple-500 to-indigo-500",
      shadowColor: "shadow-purple-500/25",
      emoji: "🚀"
    },
    { 
      icon: <BarChart className="w-12 h-12" />, 
      title: "Analytics & Strategy", 
      description: "Make data-driven decisions with comprehensive analytics and strategic planning for sustainable growth.", 
      benefits: ["Performance Analytics", "User Experience Research", "Growth Strategy", "Conversion Optimization"], 
      color: "from-orange-500 to-yellow-500",
      shadowColor: "shadow-orange-500/25",
      emoji: "📊"
    },
    { 
      icon: <Globe className="w-12 h-12" />, 
      title: "Digital Consulting", 
      description: "Get expert guidance on digital transformation and technology decisions to future-proof your business.", 
      benefits: ["Technology Consultation", "Digital Transformation", "Process Optimization", "Training & Support"], 
      color: "from-teal-500 to-blue-500",
      shadowColor: "shadow-teal-500/25",
      emoji: "🌐"
    }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Discovery", 
      description: "We deep-dive into your business, goals, and challenges to understand your unique needs.",
      icon: <Search className="w-8 h-8 text-blue-400" />,
      color: "blue-500"
    },
    { 
      number: "02", 
      title: "Strategy", 
      description: "Based on our findings, we develop a comprehensive strategy tailored to your objectives.",
      icon: <BarChart className="w-8 h-8 text-indigo-400" />,
      color: "indigo-500"
    },
    { 
      number: "03", 
      title: "Design & Development", 
      description: "Our team brings your vision to life with stunning design and robust development.",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      color: "purple-500"
    },
    { 
      number: "04", 
      title: "Launch & Optimize", 
      description: "We launch your project and continuously optimize for better performance and results.",
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      color: "pink-500"
    }
  ];

  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      price: "$2,999",
      period: "Starting from",
      features: ["5-page website", "Basic SEO setup", "Mobile responsive", "3 months support"],
      color: "from-blue-500 to-blue-600",
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses", 
      price: "$7,999",
      period: "Starting from",
      features: ["Custom website design", "E-commerce integration", "Advanced SEO & Analytics", "6 months support"],
      color: "from-indigo-500 to-purple-600",
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      description: "For established companies",
      price: "Custom",
      period: "Let's discuss",
      features: ["Custom development", "Advanced integrations", "Dedicated support", "12+ months partnership"],
      color: "from-purple-500 to-pink-600",
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Our 
            </span>
            {' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed tracking-wide"
            variants={itemVariants}
          >
            Comprehensive digital solutions designed to <span className="text-blue-400 font-semibold">elevate</span> your brand and drive <span className="text-purple-400 font-semibold">meaningful results</span>
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
                className={`bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/40 shadow-2xl h-full flex flex-col`}
                whileHover={cardHoverVariants.hover}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                    {service.icon}
                  </div>
                  <div className="text-3xl">
                    {service.emoji}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <div className="space-y-3 mt-auto">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* New Process Section - Vertical Timeline with Alternating Sides */}
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A step-by-step approach to deliver exceptional results, tailored to your needs
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
                variants={itemVariants}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    className="bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-700/30"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <motion.div
                    className={`w-12 h-12 bg-${step.color} text-white font-bold rounded-full flex items-center justify-center shadow-lg`}
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
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-xl z-10">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <motion.div
                  className={`h-full bg-gradient-to-br ${pkg.popular ? 'from-indigo-600/90 to-purple-600/90' : 'from-slate-800/90 to-gray-800/90'} backdrop-blur-xl rounded-3xl p-8 border ${pkg.popular ? 'border-indigo-400/50' : 'border-gray-600/40'} shadow-2xl flex flex-col`}
                  whileHover={cardHoverVariants.hover}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {pkg.name}
                    </h3>
                    <p className={`${pkg.popular ? 'text-indigo-100' : 'text-gray-300'} mb-6`}>
                      {pkg.description}
                    </p>
                    <div className={`text-5xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-blue-400'}`}>
                      {pkg.price}
                    </div>
                    <p className={`text-sm ${pkg.popular ? 'text-indigo-200' : 'text-gray-400'}`}>
                      {pkg.period}
                    </p>
                  </div>
                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 mr-3 ${pkg.popular ? 'text-white' : 'text-blue-400'}`} />
                        <span className={`${pkg.popular ? 'text-white' : 'text-gray-300'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full py-4 rounded-xl font-bold ${pkg.popular ? 'bg-white text-indigo-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'}`}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your <span className="text-blue-400 font-semibold">vision</span> to life
          </p>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-10 py-4 rounded-xl text-lg font-bold text-white transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Zap className="w-5 h-5 mr-3" />
            Start Your Project
            <ChevronRight className="ml-3 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesPage;