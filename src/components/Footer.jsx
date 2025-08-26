import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  {
    href: 'https://wa.me/6385870211',
    icon: <FaWhatsapp />,
    label: 'WhatsApp'
  },
  {
    href: 'https://instagram.com/arisinnovations',
    icon: <FaInstagram />,
    label: 'Instagram'
  },
  {
    href: 'https://linkedin.com/company/arisinnovation',
    icon: <FaLinkedin />,
    label: 'LinkedIn'
  }
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/aboutUs', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' }
];

const services = [
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/mobile-apps', label: 'Mobile App Development' },
  { href: '/services/digital-marketing', label: 'Digital Marketing' },
  { href: '/services/ui-ux-design', label: 'UI/UX Design' },
  { href: '/services/ecommerce', label: 'E-commerce Solutions' },
  { href: '/services/branding', label: 'Branding & Identity' }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white pt-12 pb-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-1/4 w-48 h-48 bg-violet-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-1/3 w-36 h-36 bg-purple-500 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500 rounded-full blur-xl animate-ping"></div>
        <div className="absolute top-1/4 right-1/2 w-20 h-20 bg-cyan-400 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-emerald-400 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Aris Innovations
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into innovative digital solutions. We create cutting-edge technology experiences that drive business growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-violet-500/50"
                  aria-label={social.label}
                >
                  <span className="text-white group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-violet-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-violet-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-violet-400 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block group text-sm"
                  >
                    <span className="border-b border-transparent group-hover:border-purple-400 transition-all duration-300">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaEnvelope className="text-violet-400 flex-shrink-0" />
                <a href="mailto:info@arisinnovations.com" className="hover:underline">
                  info@arisinnovations.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaPhone className="text-purple-400 flex-shrink-0" />
                <a href="tel:+916385870211" className="hover:underline">
                  +91 63858 70211
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-pink-400 flex-shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">
                  Coimbatore, Tamil Nadu<br />
                  India
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Aris Innovations. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500"></div>
    </footer>
  );
};

export default Footer;