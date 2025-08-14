import React from 'react';
import { Palette, Code, Search, BarChart, Smartphone, Globe } from 'lucide-react';

const ServicesPage = ({ scrollToSection }) => {
  const services = [
    { icon: <Palette className="w-12 h-12" />, title: "Brand Identity & Design", description: "Create memorable brand experiences that resonate with your audience and stand out in the marketplace.", benefits: ["Logo & Visual Identity", "Brand Guidelines", "Marketing Materials", "Brand Strategy"], color: "from-pink-500 to-rose-500" },
    { icon: <Code className="w-12 h-12" />, title: "Web Development", description: "Build fast, secure, and scalable websites that convert visitors into customers and grow with your business.", benefits: ["Custom Website Development", "E-commerce Solutions", "CMS Integration", "Performance Optimization"], color: "from-blue-500 to-cyan-500" },
    { icon: <Smartphone className="w-12 h-12" />, title: "Mobile App Development", description: "Develop intuitive mobile applications that provide seamless user experiences across all devices.", benefits: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Maintenance & Support"], color: "from-green-500 to-emerald-500" },
    { icon: <Search className="w-12 h-12" />, title: "SEO & Digital Marketing", description: "Increase your online visibility and drive qualified traffic through strategic SEO and marketing campaigns.", benefits: ["Search Engine Optimization", "Content Marketing", "Social Media Management", "PPC Campaigns"], color: "from-purple-500 to-indigo-500" },
    { icon: <BarChart className="w-12 h-12" />, title: "Analytics & Strategy", description: "Make data-driven decisions with comprehensive analytics and strategic planning for sustainable growth.", benefits: ["Performance Analytics", "User Experience Research", "Growth Strategy", "Conversion Optimization"], color: "from-orange-500 to-yellow-500" },
    { icon: <Globe className="w-12 h-12" />, title: "Digital Consulting", description: "Get expert guidance on digital transformation and technology decisions to future-proof your business.", benefits: ["Technology Consultation", "Digital Transformation", "Process Optimization", "Training & Support"], color: "from-teal-500 to-blue-500" }
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "We deep-dive into your business, goals, and challenges to understand your unique needs." },
    { number: "02", title: "Strategy", description: "Based on our findings, we develop a comprehensive strategy tailored to your objectives." },
    { number: "03", title: "Design & Development", description: "Our team brings your vision to life with stunning design and robust development." },
    { number: "04", title: "Launch & Optimize", description: "We launch your project and continuously optimize for better performance and results." }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive meaningful results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 group">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology that ensures every project delivers exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Service Packages</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for small businesses</p>
                <div className="text-4xl font-bold text-indigo-600 mt-4">$2,999</div>
                <p className="text-sm text-gray-500">Starting from</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">5-page website</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Basic SEO setup</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Mobile responsive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">3 months support</span>
                </div>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gradient-to-b from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl text-white transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-indigo-100">Ideal for growing businesses</p>
                <div className="text-4xl font-bold mt-4">$7,999</div>
                <p className="text-sm text-indigo-200">Starting from</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Custom website design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>E-commerce integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Advanced SEO & Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>6 months support</span>
                </div>
              </div>
              <button className="w-full bg-white text-indigo-600 hover:bg-gray-100 py-3 rounded-xl font-semibold transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">For established companies</p>
                <div className="text-4xl font-bold text-purple-600 mt-4">Custom</div>
                <p className="text-sm text-gray-500">Let's discuss</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Custom development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Advanced integrations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Dedicated support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">12+ months partnership</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help bring your vision to life</p>
          <button
            onClick={() => scrollToSection('clients')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-12 py-4 rounded-full text-white text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;