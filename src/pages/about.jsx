import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const AboutPage = ({ scrollToSection }) => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "Creative Director", image: "👩‍🎨" },
    { name: "Mike Chen", role: "Tech Lead", image: "👨‍💻" },
    { name: "Emma Davis", role: "Strategy Director", image: "👩‍💼" },
    { name: "Alex Rodriguez", role: "Design Lead", image: "👨‍🎨" }
  ];

  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Purpose-Driven", description: "Every project starts with understanding your goals and ends with measurable impact." },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation First", description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve." },
    { icon: <Users className="w-8 h-8" />, title: "Collaborative", description: "Your success is our success. We work as an extension of your team, not just a vendor." },
    { icon: <Award className="w-8 h-8" />, title: "Excellence", description: "We don't just meet expectations – we exceed them with attention to detail and quality." }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Apex</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Born from a vision to bridge the gap between creativity and technology
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2020 by a team of passionate designers and developers, Apex Agency emerged from a simple belief: 
              that great digital experiences shouldn't be a luxury reserved for Fortune 500 companies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small collective of creatives has grown into a full-service digital agency, 
              helping brands of all sizes tell their stories through innovative design, robust development, 
              and strategic thinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're proud to have delivered 50+ successful projects, earned the trust of 25+ clients, 
              and won several industry awards for our work in digital innovation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Mission Statement</h3>
            <p className="text-lg leading-relaxed mb-6">
              "To empower businesses through exceptional digital experiences that not only look stunning 
              but drive real, measurable results."
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm opacity-90">Industry Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-indigo-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 mb-20 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Rapid Execution</h3>
              <p className="text-gray-300">From concept to launch in record time without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
              <p className="text-gray-300">Every decision backed by analytics and user research for maximum impact.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">True Partnership</h3>
              <p className="text-gray-300">We don't just deliver projects; we build long-term relationships.</p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-12 py-4 rounded-full text-white text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Discover Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;