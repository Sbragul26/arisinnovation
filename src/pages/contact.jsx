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
    { icon: <Mail className="w-6 h-6 text-amber-400" />, label: 'Email', value: 'hello@apexagency.com', href: 'mailto:hello@apexagency.com' },
    { icon: <Phone className="w-6 h-6 text-amber-400" />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <MapPin className="w-6 h-6 text-amber-400" />, label: 'Address', value: '123 Innovation Street, Tech District, San Francisco, CA 94105', href: null },
    { icon: <Globe className="w-6 h-6 text-amber-400" />, label: 'Website', value: 'www.apexagency.com', href: 'https://www.apexagency.com' },
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Floating decorative elements */}
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
                  ? 'rgba(245, 158, 11, 0.3)'
                  : i % 3 === 1
                  ? 'rgba(20, 184, 166, 0.3)'
                  : 'rgba(139, 69, 193, 0.3)',
            }}
            variants={pulseVariants}
            animate="pulse"
          />
        ))}
      </div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            <motion.span
              className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Let's{' '}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Connect
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed tracking-wide"
            variants={itemVariants}
          >
            Ready to transform your digital presence with{' '}
            <span className="text-amber-400 font-semibold">precision</span> and{' '}
            <span className="text-teal-400 font-semibold">innovation</span>?
          </motion.p>
        </motion.div>

        {/* Form and Sidebar */}
        <motion.div className="grid lg:grid-cols-3 gap-12 mb-20" variants={containerVariants} initial="hidden" animate="visible">
          <div className="lg:col-span-2">
            <motion.div
              className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-amber-500/10"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ perspective: '1000px' }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
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
                    <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-200">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100 placeholder-gray-400"
                        placeholder="john@company.com"
                      />
                    </motion.div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100 placeholder-gray-400"
                        placeholder="Your Company"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100 placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </motion.div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100"
                      >
                        <option value="" className="bg-gray-700">Select a service</option>
                        <option value="web-development" className="bg-gray-700">Web Development</option>
                        <option value="mobile-app" className="bg-gray-700">Mobile App Development</option>
                        <option value="brand-design" className="bg-gray-700">Brand Identity & Design</option>
                        <option value="seo-marketing" className="bg-gray-700">SEO & Digital Marketing</option>
                        <option value="analytics" className="bg-gray-700">Analytics & Strategy</option>
                        <option value="consulting" className="bg-gray-700">Digital Consulting</option>
                        <option value="other" className="bg-gray-700">Other</option>
                      </select>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100"
                      >
                        <option value="" className="bg-gray-700">Select timeline</option>
                        <option value="asap" className="bg-gray-700">ASAP</option>
                        <option value="1-month" className="bg-gray-700">Within 1 month</option>
                        <option value="3-months" className="bg-gray-700">1-3 months</option>
                        <option value="6-months" className="bg-gray-700">3-6 months</option>
                        <option value="flexible" className="bg-gray-700">Flexible</option>
                      </select>
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100"
                    >
                      <option value="" className="bg-gray-700">Select budget range</option>
                      <option value="under-5k" className="bg-gray-700">Under $5,000</option>
                      <option value="5k-15k" className="bg-gray-700">$5,000 - $15,000</option>
                      <option value="15k-50k" className="bg-gray-700">$15,000 - $50,000</option>
                      <option value="50k-100k" className="bg-gray-700">$50,000 - $100,000</option>
                      <option value="100k-plus" className="bg-gray-700">$100,000+</option>
                    </select>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600/30 bg-gray-700/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-100 placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </motion.div>
                  <motion.button
                    onClick={handleSubmit}
                    className="group relative inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-10 py-5 rounded-xl text-lg font-bold text-white transition-all duration-300 shadow-xl hover:shadow-amber-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Send className="w-5 h-5 mr-2" />
                    <span className="relative">Send Message</span>
                    <motion.div
                      className="ml-3 relative"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div
              className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-teal-500/10"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
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
                      <p className="font-semibold text-gray-100">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-gray-200 hover:text-amber-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-teal-500/10"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 flex items-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                <Clock className="w-6 h-6 mr-2 text-amber-400" />
                Office Hours
              </motion.h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center"
                    variants={itemVariants}
                  >
                    <span className="font-medium text-gray-100">{schedule.day}</span>
                    <span className="text-gray-200">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-teal-500/10"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Follow Us
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-xl hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-300"
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
                    <span className="font-medium text-gray-100">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Access Section */}
        <motion.div
          className="relative bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-12 text-center border border-gray-600/40 shadow-2xl hover:shadow-amber-500/10"
          variants={cardHoverVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="text-left" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quick Access
              </h2>
              <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                Scan the QR code to visit our website, view our portfolio, or schedule a consultation directly from your mobile device.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => scrollToSection('cover')}
                  className="relative bg-gray-700/30 text-gray-100 px-6 py-3 rounded-xl font-semibold hover:bg-gray-600/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
                <motion.button
                  className="group relative inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-6 py-3 rounded-xl font-semibold text-white shadow-xl hover:shadow-amber-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Schedule Call</span>
                  <motion.div
                    className="ml-3 relative"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
            <motion.div className="flex justify-center" variants={itemVariants}>
              <motion.div
                className="bg-gray-700/30 p-8 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-48 h-48 bg-gradient-to-br from-amber-500/20 to-teal-500/20 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-2"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      📱
                    </motion.div>
                    <p className="text-gray-100 font-semibold">QR Code</p>
                    <p className="text-gray-300 text-sm">Scan to visit website</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;