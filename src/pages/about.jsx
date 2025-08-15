import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, Briefcase, ChevronRight } from 'lucide-react';

const AboutPage = ({ scrollToSection }) => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Creative Director', image: '👩‍🎨' },
    { name: 'Mike Chen', role: 'Tech Lead', image: '👨‍💻' },
    { name: 'Emma Davis', role: 'Strategy Director', image: '👩‍💼' },
    { name: 'Alex Rodriguez', role: 'Design Lead', image: '👨‍🎨' },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-amber-400" />,
      title: 'Purpose-Driven',
      description: 'Crafting solutions that align with your vision for meaningful impact.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-amber-400" />,
      title: 'Innovation First',
      description: 'Leading with creative designs and advanced technology.',
    },
    {
      icon: <Users className="w-12 h-12 text-amber-400" />,
      title: 'Collaborative',
      description: 'Partnering closely with your team for shared success.',
    },
    {
      icon: <Award className="w-12 h-12 text-amber-400" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality with precision.',
    },
  ];

  const stats = [
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
      icon: <Award className="w-10 h-10 text-white" />, 
      value: '4', 
      label: 'Industry Awards', 
      gradient: 'from-purple-500 to-purple-700',
      shadowColor: 'shadow-purple-500/25'
    },
  ];

  const differentiators = [
    { 
      emoji: '🚀', 
      title: 'Swift Execution', 
      description: 'Seamless delivery from concept to completion with lightning-fast turnaround times.',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      emoji: '🎯', 
      title: 'Precision Strategy', 
      description: 'Data-driven decisions backed by analytics for optimal measurable results.',
      gradient: 'from-emerald-500/20 to-green-500/20'
    },
    { 
      emoji: '🤝', 
      title: 'Enduring Bonds', 
      description: 'Building lasting partnerships that extend far beyond individual projects.',
      gradient: 'from-pink-500/20 to-rose-500/20'
    },
  ];

  // Enhanced animation variants
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
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Enhanced floating elements */}
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

      {/* Enhanced decorative elements */}
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
        {/* Enhanced Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            About{' '}
          </motion.span>
          <motion.span 
            className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Apex
          </motion.span>
        </motion.h1>

        {/* Enhanced Tagline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light mb-16 text-gray-200 max-w-4xl mx-auto leading-relaxed tracking-wide"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Creating exceptional digital experiences with{' '}
          <span className="text-amber-400 font-semibold">precision</span> and{' '}
          <span className="text-teal-400 font-semibold">innovation</span>
        </motion.p>

        {/* Enhanced Story Section */}
        <motion.div 
          className="mb-20 max-w-5xl mx-auto" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-gray-600/30 shadow-2xl"
            variants={cardHoverVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ perspective: '1000px' }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6 font-medium"
              variants={itemVariants}
            >
              Since 2020, Apex Agency has transformed ideas into impactful digital solutions for businesses worldwide.
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg text-gray-200 leading-relaxed mb-8"
              variants={itemVariants}
            >
              With over 50 successful projects, 25+ satisfied clients, and multiple industry awards, we lead with creativity and precision.
            </motion.p>
            
            <motion.div
              className="bg-gradient-to-r from-amber-500/10 to-teal-500/10 rounded-xl p-6 border border-amber-500/20"
              variants={itemVariants}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-400">
                Mission Statement
              </h3>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed italic font-medium">
                "To empower brands with innovative digital experiences that inspire and deliver results."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats - Equal Heights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group h-56"
              variants={itemVariants}
            >
              <motion.div
                className={`relative flex flex-col items-center justify-center h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl border border-gray-600/40 shadow-2xl ${stat.shadowColor} hover:shadow-2xl transition-all duration-500`}
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
                  className="text-3xl md:text-4xl font-black text-white mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-200 font-bold text-lg text-center">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Core Values - Equal Heights */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative group h-56"
                variants={itemVariants}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/40 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 h-full flex flex-col items-center justify-center text-center"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced What Sets Us Apart - Equal Heights */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            What Sets Us Apart
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="relative group h-64"
                variants={itemVariants}
              >
                <motion.div
                  className={`relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl border border-gray-600/40 shadow-2xl hover:shadow-2xl transition-all duration-500 h-full text-center`}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    background: `linear-gradient(135deg, rgba(51, 65, 85, 0.9), rgba(75, 85, 99, 0.9)), ${item.gradient}`
                  }}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.emoji}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Team Members - Equal Heights */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group h-56"
                variants={itemVariants}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-600/40 shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 h-full flex flex-col items-center justify-center"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.image}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-amber-400 font-bold text-sm">{member.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-8 py-3 rounded-xl text-lg font-bold text-white transition-all duration-300 shadow-xl hover:shadow-amber-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Let's Create Together</span>
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

export default AboutPage;