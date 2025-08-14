import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ClientsPage = ({ scrollToSection }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    { name: "Sarah Mitchell", role: "CEO, TechCorp", company: "TechCorp", content: "Apex Agency transformed our digital presence completely. Their innovative approach and attention to detail resulted in a 300% increase in our online conversions. The team truly understood our vision and delivered beyond expectations.", rating: 5, image: "👩‍💼", results: "300% increase in conversions" },
    { name: "Michael Rodriguez", role: "Founder, GreenLeaf", company: "GreenLeaf", content: "Working with Apex was a game-changer for our sustainability startup. They created a brand identity that perfectly captures our mission and built a platform that our users love. Highly recommended!", rating: 5, image: "👨‍🌱", results: "40% user engagement increase" },
    { name: "Jennifer Chen", role: "CMO, FinanceFlow", company: "FinanceFlow", content: "The team at Apex delivered exceptional results for our fintech platform. Their expertise in both design and development helped us launch ahead of schedule with a product that exceeded our expectations.", rating: 5, image: "👩‍💻", results: "Launched 2 weeks early" },
    { name: "David Thompson", role: "Director, HealthHub", company: "HealthHub", content: "Apex Agency's strategic approach to our healthcare platform was outstanding. They balanced complex functionality with intuitive design, creating a solution that both patients and healthcare providers love.", rating: 5, image: "👨‍⚕️", results: "95% user satisfaction rate" }
  ];

  const caseStudies = [
    { title: "E-commerce Revolution", client: "RetailMax", industry: "Retail", challenge: "Outdated platform with poor mobile experience", solution: "Complete rebuild with modern e-commerce features", results: ["250% increase in mobile sales", "40% faster page load times", "60% reduction in cart abandonment"], image: "🛒" },
    { title: "Healthcare Digital Transformation", client: "HealthHub", industry: "Healthcare", challenge: "Complex patient management system needed modernization", solution: "Streamlined patient portal with telemedicine integration", results: ["80% reduction in admin time", "95% patient satisfaction", "50% increase in appointments"], image: "🏥" },
    { title: "Fintech Innovation", client: "FinanceFlow", industry: "Finance", challenge: "Need for secure, user-friendly trading platform", solution: "Custom trading dashboard with advanced analytics", results: ["200% user growth", "99.9% uptime", "35% increase in trading volume"], image: "📈" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Clients</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Trusted by innovative companies across diverse industries
          </p>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Companies We've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
                <div className="text-4xl mb-3">{client.logo}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{client.name}</h3>
                <p className="text-xs text-gray-500">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-20 -translate-x-20"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <Quote className="w-16 h-16 text-white/30" />
                <div className="flex space-x-2">
                  <button onClick={prevTestimonial} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <p className="text-xl md:text-2xl leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="border-l-4 border-white/30 pl-4">
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-white/80">{testimonials[currentTestimonial].role}</p>
                    <p className="text-white/60">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{testimonials[currentTestimonial].image}</div>
                  <div className="bg-white/20 rounded-2xl p-4">
                    <p className="text-sm text-white/80 mb-1">Key Result:</p>
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🏥
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600 text-sm">Patient portals, telemedicine platforms, healthcare management systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  💰
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Finance</h3>
                <p className="text-gray-600 text-sm">Trading platforms, banking apps, payment solutions, crypto exchanges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🛍️
                </div>
                <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-gray-600 text-sm">Online stores, marketplace platforms, inventory management, POS systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🚀
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-600 text-sm">SaaS platforms, mobile apps, AI solutions, cloud infrastructure</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-6 text-center">{study.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-indigo-600 font-semibold mb-1">{study.client}</p>
                <p className="text-gray-500 text-sm mb-6">{study.industry}</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-black mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-black mb-2">25+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-black mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-black mb-2">250%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's create something amazing together</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-12 py-4 rounded-full text-white text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;