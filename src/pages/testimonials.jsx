import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Target, Users, Award, Lightbulb, Briefcase } from 'lucide-react';

const ClientsPage = ({ scrollToSection }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const clientLogos = [
    { name: "TechCorp", logo: "🚀", industry: "Technology" },
    { name: "GreenLeaf", logo: "🌿", industry: "Sustainability" },
    { name: "FinanceFlow", logo: "💰", industry: "Finance" },
    { name: "HealthHub", logo: "🏥", industry: "Healthcare" },
    { name: "EduTech", logo: "📚", industry: "Education" },
    { name: "FoodieHub", logo: "🍕", industry: "Food & Beverage" },
    { name: "RetailMax", logo: "🛍️", industry: "Retail" },
    { name: "SportsPro", logo: "⚽", industry: "Sports" },
    { name: "TravelWise", logo: "✈️", industry: "Travel" },
    { name: "AutoDrive", logo: "🚗", industry: "Automotive" },
    { name: "RealEstate Pro", logo: "🏠", industry: "Real Estate" },
    { name: "MediaWorks", logo: "🎬", industry: "Media" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechCorp",
      company: "TechCorp",
      content:
        "Apex Agency transformed our digital presence completely. Their innovative approach and attention to detail resulted in a 300% increase in our online conversions. The team truly understood our vision and delivered beyond expectations.",
      rating: 5,
      image: "👩‍💼",
      results: "300% increase in conversions"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, GreenLeaf",
      company: "GreenLeaf",
      content:
        "Working with Apex was a game-changer for our sustainability startup. They created a brand identity that perfectly captures our mission and built a platform that our users love. Highly recommended!",
      rating: 5,
      image: "👨‍🌱",
      results: "40% user engagement increase"
    },
    {
      name: "Jennifer Chen",
      role: "CMO, FinanceFlow",
      company: "FinanceFlow",
      content:
        "The team at Apex delivered exceptional results for our fintech platform. Their expertise in both design and development helped us launch ahead of schedule with a product that exceeded our expectations.",
      rating: 5,
      image: "👩‍💻",
      results: "Launched 2 weeks early"
    },
    {
      name: "David Thompson",
      role: "Director, HealthHub",
      company: "HealthHub",
      content:
        "Apex Agency's strategic approach to our healthcare platform was outstanding. They balanced complex functionality with intuitive design, creating a solution that both patients and healthcare providers love.",
      rating: 5,
      image: "👨‍⚕️",
      results: "95% user satisfaction rate"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Revolution",
      client: "RetailMax",
      industry: "Retail",
      challenge: "Outdated platform with poor mobile experience",
      solution: "Complete rebuild with modern e-commerce features",
      results: ["250% increase in mobile sales", "40% faster page load times", "60% reduction in cart abandonment"],
      image: "🛒"
    },
    {
      title: "Healthcare Digital Transformation",
      client: "HealthHub",
      industry: "Healthcare",
      challenge: "Complex patient management system needed modernization",
      solution: "Streamlined patient portal with telemedicine integration",
      results: ["80% reduction in admin time", "95% patient satisfaction", "50% increase in appointments"],
      image: "🏥"
    },
    {
      title: "Fintech Innovation",
      client: "FinanceFlow",
      industry: "Finance",
      challenge: "Need for secure, user-friendly trading platform",
      solution: "Custom trading dashboard with advanced analytics",
      results: ["200% user growth", "99.9% uptime", "35% increase in trading volume"],
      image: "📈"
    }
  ];

  const impactStats = [
    { 
      icon: <Briefcase className="w-10 h-10 text-white" />, 
      value: '50+', 
      label: 'Projects Completed', 
      gradient: 'from-amber-500 to-amber-700',
      shadowColor: 'shadow-amber-500/25'
    },
    { 
      icon: <Users className="w-10 h-10 text-white" />, 
      value: '25+', 
      label: 'Happy Clients', 
      gradient: 'from-teal-500 to-teal-700',
      shadowColor: 'shadow-teal-500/25'
    },
    { 
      icon: <Target className="w-10 h-10 text-white" />, 
      value: '95%', 
      label: 'Client Satisfaction', 
      gradient: 'from-purple-500 to-purple-700',
      shadowColor: 'shadow-purple-500/25'
    },
    { 
      icon: <Award className="w-10 h-10 text-white" />, 
      value: '250%', 
      label: 'Average ROI Increase', 
      gradient: 'from-emerald-500 to-emerald-700',
      shadowColor: 'shadow-emerald-500/25'
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        duration: 0.8
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        damping: 20,
        stiffness: 100
      } 
    },
  };

  const cardHoverVariants = {
    hover: { 
      scale: 1.03, 
      y: -8,
      rotateY: 5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.97,
      transition: {
        duration: 0.1
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="clients"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + i % 3} h-${2 + i % 3} rounded-full`}
            style={{
              top: `${10 + (i * 12)}%`,
              left: `${5 + (i * 11)}%`,
              background: i % 3 === 0 ? 'rgba(245, 158, 11, 0.3)' : i % 3 === 1 ? 'rgba(20, 184, 166, 0.3)' : 'rgba(139, 69, 193, 0.3)'
            }}
            variants={pulseVariants}
            animate="pulse"
          />
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-amber-400/40 to-orange-600/40 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-tr from-teal-500/40 to-cyan-600/40 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Our{' '}
          </motion.span>
          <motion.span 
            className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Clients
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light mb-16 text-gray-200 max-w-4xl mx-auto leading-relaxed tracking-wide"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Trusted by innovative companies across{' '}
          <span className="text-amber-400 font-semibold">diverse industries</span> for{' '}
          <span className="text-teal-400 font-semibold">exceptional results</span>
        </motion.p>

        {/* Companies Section */}
        <motion.div 
          className="mb-20" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Companies We've Worked With
          </motion.h2>
          
          <motion.div 
            className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 shadow-2xl"
            variants={cardHoverVariants}
            whileHover="hover"
          >
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-700/90 to-gray-700/90 backdrop-blur-sm rounded-xl p-4 border border-gray-600/40 shadow-lg text-center flex-shrink-0 mx-2 w-40"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-2">{client.logo}</div>
                  <h3 className="font-bold text-gray-100 text-sm mb-1">{client.name}</h3>
                  <p className="text-xs text-gray-400">{client.industry}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Enhanced Testimonials Section */}
        <motion.div 
          className="mb-20 relative"
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-gray-700/20 shadow-2xl"
                variants={{
                  initial: { opacity: 0, x: 100 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -100 }
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Testimonial Content */}
                  <div className="md:col-span-2 text-left">
                    <motion.div
                      className="absolute top-6 left-6"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-10 h-10 text-gray-300/30" />
                    </motion.div>
                    <p className="text-lg md:text-xl text-gray-100 mb-6 font-medium italic leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400 mr-1" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-4 border-l-4 border-blue-400">
                      <p className="font-bold text-lg text-white">{testimonials[currentTestimonial].name}</p>
                      <p className="text-blue-400 font-semibold">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                  {/* Testimonial Image and Result */}
                  <div className="text-center">
                    <motion.div 
                      className="text-6xl md:text-7xl mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonials[currentTestimonial].image}
                    </motion.div>
                    <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-lg p-4 border border-teal-500/20">
                      <p className="text-sm text-gray-300 mb-1 font-semibold">Key Result</p>
                      <p className="font-bold text-lg text-teal-400">{testimonials[currentTestimonial].results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center -ml-12">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-gradient-to-r from-gray-700/80 to-gray-600/80 rounded-full hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -mr-12">
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-gradient-to-r from-gray-700/80 to-gray-600/80 rounded-full hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div 
          className="mb-20" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Industries We Serve
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏥', title: 'Healthcare', desc: 'Patient portals, telemedicine platforms, healthcare management systems', gradient: 'from-blue-500/20 to-cyan-500/20' },
              { icon: '💰', title: 'Finance', desc: 'Trading platforms, banking apps, payment solutions, crypto exchanges', gradient: 'from-emerald-500/20 to-green-500/20' },
              { icon: '🛍️', title: 'E-commerce', desc: 'Online stores, marketplace platforms, inventory management, POS systems', gradient: 'from-purple-500/20 to-pink-500/20' },
              { icon: '🚀', title: 'Technology', desc: 'SaaS platforms, mobile apps, AI solutions, cloud infrastructure', gradient: 'from-orange-500/20 to-red-500/20' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="relative group h-56"
                variants={itemVariants}
              >
                <motion.div
                  className={`relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/40 shadow-2xl transition-all duration-500 h-full flex flex-col items-center justify-center text-center`}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    background: `linear-gradient(135deg, rgba(51, 65, 85, 0.9), rgba(75, 85, 99, 0.9)), ${industry.gradient}`
                  }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 className="font-bold text-gray-100 mb-3 text-lg">{industry.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{industry.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div 
          className="mb-20" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="relative group h-auto"
                variants={itemVariants}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/40 shadow-2xl transition-all duration-500 h-full"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div 
                    className="text-5xl mb-6 text-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {study.image}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{study.title}</h3>
                  <p className="text-amber-400 font-semibold mb-1">{study.client}</p>
                  <p className="text-gray-400 text-sm mb-6">{study.industry}</p>
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-3 border border-red-500/30">
                      <h4 className="font-semibold text-gray-100 mb-1">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-blue-500/30">
                      <h4 className="font-semibold text-gray-100 mb-1">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg p-4 border border-emerald-500/30">
                    <h4 className="font-semibold text-gray-100 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <motion.div 
                            className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Our Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group h-56"
                variants={itemVariants}
              >
                <motion.div
                  className={`relative flex flex-col items-center justify-center h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl border border-gray-600/40 shadow-2xl ${stat.shadowColor} transition-all duration-500`}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-200 font-bold text-lg text-center">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Let's create something <span className="text-amber-400">amazing</span> together
          </motion.p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-8 py-4 rounded-xl text-lg font-bold text-white transition-all duration-300 shadow-xl hover:shadow-amber-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Start Your Project</span>
            <motion.div
              className="ml-3 relative"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientsPage;