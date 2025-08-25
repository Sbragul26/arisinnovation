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



const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-8 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/5 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-2xl animate-bounce delay-300"></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-ping delay-600"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
        backgroundSize: '25px 25px'
      }}></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-3xl border border-cyan-500/30 backdrop-blur-lg hover:border-cyan-400/50 hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aris Innovations
              </h3>
              <p className="text-gray-200 text-xs leading-relaxed mb-3">
                Transforming ideas into innovative digital solutions. We create cutting-edge technology experiences that drive business growth.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/40"
                    aria-label={social.label}
                  >
                    <span className="text-black text-sm group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-cyan-300 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-200 hover:text-cyan-300 text-sm font-medium transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-cyan-300 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ul className="space-y-2">
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-cyan-300 relative">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
            </h3>
            <address className="not-italic space-y-2">
              <div className="flex items-center space-x-3 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                <FaEnvelope className="text-cyan-400 flex-shrink-0 text-base" />
                <a href="mailto:info@arisinnovations.com" className="text-xs hover:underline">
                  info@arisinnovations.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                <FaPhone className="text-blue-400 flex-shrink-0 text-base" />
                <a href="tel:+916385870211" className="text-xs hover:underline">
                  +91 63858 70211
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-200">
                <FaMapMarkerAlt className="text-purple-400 flex-shrink-0 mt-0.5 text-base" />
                <span className="text-xs leading-relaxed">
                  Coimbatore, Tamil Nadu<br />
                  India
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-gray-300 text-xs font-light">
            © {new Date().getFullYear()} Aris Innovations. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs">
            <Link
              to="/privacy-policy"
              className="text-gray-200 hover:text-cyan-300 transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-200 hover:text-blue-300 transition-colors duration-300 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;