import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send, Clock, CheckCircle, ChevronRight } from 'lucide-react';

const ContactPage = ({ scrollToSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        timeline: '',
      });
    }, 3000);
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6 text-[#FF0000]" />, label: 'Email', value: 'hello@apexagency.com', href: 'mailto:hello@apexagency.com' },
    { icon: <Phone className="w-6 h-6 text-[#FF0000]" />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <MapPin className="w-6 h-6 text-[#FF0000]" />, label: 'Address', value: '123 Innovation Street, Tech District, San Francisco, CA 94105', href: null },
    { icon: <Globe className="w-6 h-6 text-[#FF0000]" />, label: 'Website', value: 'www.apexagency.com', href: 'https://www.apexagency.com' },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Dribbble', icon: '🎨', url: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
      },
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
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -8,
      rotateY: 5,
      boxShadow: "0 15px 30px rgba(36, 26, 122, 0.25)",
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.1,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0A0A23] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} rounded-full`}
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 11}%`,
              background:
                i % 3 === 0
                  ? '#241A7A/30'
                  : i % 3 === 1
                  ? '#241A7A/30'
                  : '#241A7A/20',
            }}
            variants={pulseVariants}
            animate="pulse"
          />
        ))}
      </div>

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#241A7A]/40 to-[#0A0A23]/40 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-tr from-[#241A7A]/40 to-[#0A0A23]/40 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-[#241A7A]/30 to-[#0A0A23]/30 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-[#FFFFFF]"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-light text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed tracking-wide"
            variants={itemVariants}
          >
            Ready to transform your digital presence with{' '}
            <span className="text-[#FF0000] font-semibold">precision</span> and{' '}
            <span className="text-[#FF0000] font-semibold">innovation</span>?
          </motion.p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-3 gap-12 mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <div className="lg:col-span-2">
            <motion.div
              className="relative bg-[#241A7A]/90 backdrop-blur-xl rounded-2xl p-8 border border-[#1A135A]/40 shadow-2xl hover:shadow-[#241A7A]/25"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ perspective: '1000px' }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-black mb-8 text-[#FFFFFF]"
                variants={itemVariants}
              >
                Start Your Project
              </motion.h2>
              {isSubmitted ? (
                <motion.div className="text-center py-12" variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-16 h-16 text-[#2ECC71] mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">Message Sent Successfully!</h3>
                  <p className="text-[#FFFFFF]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF] placeholder-[#FFFFFF]/50"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF] placeholder-[#FFFFFF]/50"
                        placeholder="john@company.com"
                      />
                    </motion.div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF] placeholder-[#FFFFFF]/50"
                        placeholder="Your Company"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF] placeholder-[#FFFFFF]/50"
                        placeholder="+1 (555) 123-4567"
                      />
                    </motion.div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF]"
                      >
                        <option value="" className="bg-[#1A135A]">Select a service</option>
                        <option value="web-development" className="bg-[#1A135A]">Web Development</option>
                        <option value="mobile-app" className="bg-[#1A135A">Mobile App Development</option>
                        <option value="brand-design" className="bg-[#1A135A">Brand Identity & Design</option>
                        <option value="seo-marketing" className="bg-[#1A135A">SEO & Digital Marketing</option>
                        <option value="analytics" className="bg-[#1A135A">Analytics & Strategy</option>
                        <option value="consulting" className="bg-[#1A135A">Digital Consulting</option>
                        <option value="other" className="bg-[#1A135A">Other</option>
                      </select>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF]"
                      >
                        <option value="" className="bg-[#1A135A">Select timeline</option>
                        <option value="asap" className="bg-[#1A135A">ASAP</option>
                        <option value="1-month" className="bg-[#1A135A">Within 1 month</option>
                        <option value="3-months" className="bg-[#1A135A">1-3 months</option>
                        <option value="6-months" className="bg-[#1A135A">3-6 months</option>
                        <option value="flexible" className="bg-[#1A135A">Flexible</option>
                      </select>
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF]"
                    >
                      <option value="" className="bg-[#1A135A">Select budget range</option>
                      <option value="under-5k" className="bg-[#1A135A">Under $5,000</option>
                      <option value="5k-15k" className="bg-[#1A135A">$5,000 - $15,000</option>
                      <option value="15k-50k" className="bg-[#1A135A">$15,000 - $50,000</option>
                      <option value="50k-100k" className="bg-[#1A135A">$50,000 - $100,000</option>
                      <option value="100k-plus" className="bg-[#1A135A">$100,000+</option>
                    </select>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-[#FFFFFF] mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#1A135A]/30 bg-[#1A135A]/30 rounded-xl focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all text-[#FFFFFF] placeholder-[#FFFFFF]/50 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </motion.div>
                  <motion.button
                    onClick={handleSubmit}
                    className="group relative inline-flex items-center bg-gradient-to-r from-[#241A7A] to-[#0A0A23] hover:from-[#FF0000] hover:to-[#241A7A] px-10 py-5 rounded-xl text-lg font-bold text-[#FFFFFF] transition-all duration-300 shadow-xl hover:shadow-[#FF0000]/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF]/20 to-[#FFFFFF]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Send className="w-5 h-5 mr-2 text-[#FFFFFF]" />
                    <span className="relative">Send Message</span>
                    <motion.div
                      className="ml-3 relative"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5 text-[#FFFFFF]" />
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div
              className="relative bg-[#241A7A]/90 backdrop-blur-xl rounded-2xl p-8 border border-[#1A135A]/40 shadow-2xl hover:shadow-[#241A7A]/25"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 text-[#FFFFFF]"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                    <motion.div
                      className="mt-1"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-[#FFFFFF]">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-[#FFFFFF] hover:text-[#FF0000] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#FFFFFF]">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative bg-[#241A7A]/90 backdrop-blur-xl rounded-2xl p-8 border border-[#1A135A]/40 shadow-2xl hover:shadow-[#241A7A]/25"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 flex items-center text-[#FFFFFF]"
                variants={itemVariants}
              >
                <Clock className="w-6 h-6 mr-2 text-[#FF0000]" />
                Office Hours
              </motion.h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center"
                    variants={itemVariants}
                  >
                    <span className="font-medium text-[#FFFFFF]">{schedule.day}</span>
                    <span className="text-[#FFFFFF]">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative bg-[#241A7A]/90 backdrop-blur-xl rounded-2xl p-8 border border-[#1A135A]/40 shadow-2xl hover:shadow-[#241A7A]/25"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 text-[#FFFFFF]"
                variants={itemVariants}
              >
                Follow Us
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-3 p-3 bg-[#1A135A]/30 rounded-xl hover:bg-[#FF0000]/20 hover:text-[#FF0000] transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.span>
                    <span className="font-medium text-[#FFFFFF]">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;