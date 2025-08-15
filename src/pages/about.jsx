import React, { useEffect, useRef } from 'react';
import { Target, Users, Award, Lightbulb, Briefcase, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutPage = ({ scrollToSection }) => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Creative Director', image: '👩‍🎨' },
    { name: 'Mike Chen', role: 'Tech Lead', image: '👨‍💻' },
    { name: 'Emma Davis', role: 'Strategy Director', image: '👩‍💼' },
    { name: 'Alex Rodriguez', role: 'Design Lead', image: '👨‍🎨' },
  ];

  const values = [
    { icon: <Target className="w-12 h-12 text-[#FFFFFF]" />, title: 'Purpose-Driven', description: 'Crafting solutions that align with your vision for meaningful impact.' },
    { icon: <Lightbulb className="w-12 h-12 text-[#FFFFFF]" />, title: 'Innovation First', description: 'Leading with creative designs and advanced technology.' },
    { icon: <Users className="w-12 h-12 text-[#FFFFFF]" />, title: 'Collaborative', description: 'Partnering closely with your team for shared success.' },
    { icon: <Award className="w-12 h-12 text-[#FFFFFF]" />, title: 'Excellence', description: 'Delivering exceptional quality with precision.' },
  ];

  const stats = [
    { icon: <Briefcase className="w-10 h-10 text-[#FFFFFF]" />, value: '50+', label: 'Projects Completed', gradient: 'from-[#241A7A] to-[#1A135A]', shadowColor: 'shadow-[#241A7A]/25' },
    { icon: <Users className="w-10 h-10 text-[#FFFFFF]" />, value: '25+', label: 'Happy Clients', gradient: 'from-[#1A135A] to-[#241A7A]', shadowColor: 'shadow-[#1A135A]/25' },
    { icon: <Award className="w-10 h-10 text-[#FFFFFF]" />, value: '4', label: 'Industry Awards', gradient: 'from-[#241A7A] to-[#1A135A]', shadowColor: 'shadow-[#241A7A]/25' },
  ];

  const differentiators = [
    { emoji: '🚀', title: 'Swift Execution', description: 'Seamless delivery from concept to completion with lightning-fast turnaround times.', gradient: 'from-[#241A7A]/20 to-[#1A135A]/20' },
    { emoji: '🎯', title: 'Precision Strategy', description: 'Data-driven decisions backed by analytics for optimal measurable results.', gradient: 'from-[#1A135A]/20 to-[#241A7A]/20' },
    { emoji: '🤝', title: 'Enduring Bonds', description: 'Building lasting partnerships that extend far beyond individual projects.', gradient: 'from-[#241A7A]/20 to-[#1A135A]/20' },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const storyRef = useRef(null);
  const teamRefs = useRef(teamMembers.map(() => React.createRef()));

  useEffect(() => {
    // Split Text Reveal for Headings
    const split = new SplitText(headingRef.current, { type: 'chars, words' });
    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play pause resume reset' }
    });

    // Split Text for Section Headings
    const sectionHeadings = document.querySelectorAll('.section-heading');
    sectionHeadings.forEach(heading => {
      const splitSection = new SplitText(heading, { type: 'words' });
      gsap.from(splitSection.words, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play pause resume reset' }
      });
    });

    // Image Parallax Entrance for Team Members
    teamRefs.current.forEach((ref, index) => {
      gsap.fromTo(ref.current, 
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 90%', end: 'top 30%', scrub: 1, toggleActions: 'play pause resume reset' } }
      );
    });

    // Subtle Floating Decorative Elements
    const floaters = document.querySelectorAll('.floater');
    floaters.forEach((floater, index) => {
      gsap.to(floater, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-10, 10),
        rotation: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      });
    });

    // Scroll-Triggered Story Timeline
    const storyElements = storyRef.current.querySelectorAll('.story-element');
    gsap.timeline({
      scrollTrigger: { trigger: storyRef.current, start: 'top 70%', end: 'bottom 30%', scrub: 1, toggleActions: 'play pause resume reset' }
    }).from(storyElements, { y: 50, opacity: 0, stagger: 0.3, duration: 1, ease: 'power2.out' });

    // Card Hover Effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.03, y: -8, rotateY: 5, duration: 0.3, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, y: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center justify-center bg-[#0A0A23] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`floater absolute w-${2 + i % 3} h-${2 + i % 3} rounded-full`} style={{ top: `${10 + (i * 12)}%`, left: `${5 + (i * 11)}%`, background: i % 3 === 0 ? '#241A7A/30' : i % 3 === 1 ? '#1A135A/30' : '#FFFFFF/30' }} />
        ))}
      </div>
      <div className="floater absolute top-20 right-20 w-32 h-32 bg-[#241A7A]/40 rounded-full blur-3xl" />
      <div className="floater absolute bottom-32 left-16 w-40 h-40 bg-[#1A135A]/40 rounded-full blur-3xl" />
      <div className="floater absolute top-1/2 right-1/3 w-24 h-24 bg-[#FFFFFF]/30 rounded-full blur-2xl" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-[#FFFFFF]">About Apex</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-16 text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed tracking-wide">
          Creating exceptional digital experiences with <span className="text-[#FFFFFF] font-semibold">precision</span> and <span className="text-[#FFFFFF] font-semibold">innovation</span>
        </p>
        <div ref={storyRef} className="mb-20 max-w-5xl mx-auto">
          <div className="card relative bg-[#241A7A]/80 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-[#1A135A]/30 shadow-2xl">
            <h2 className="section-heading story-element text-3xl md:text-4xl font-black mb-6 text-[#FFFFFF]">Our Story</h2>
            <p className="story-element text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-6 font-medium">Since 2020, Apex Agency has transformed ideas into impactful digital solutions for businesses worldwide.</p>
            <p className="story-element text-base md:text-lg text-[#FFFFFF] leading-relaxed mb-8">With over 50 successful projects, 25+ satisfied clients, and multiple industry awards, we lead with creativity and precision.</p>
            <div className="story-element bg-gradient-to-r from-[#241A7A]/10 to-[#1A135A]/10 rounded-xl p-6 border border-[#1A135A]/20">
              <h3 className="section-heading text-xl md:text-2xl font-bold mb-4 text-[#FFFFFF]">Mission Statement</h3>
              <p className="text-lg md:text-xl text-[#FFFFFF] leading-relaxed italic font-medium">"To empower brands with innovative digital experiences that inspire and deliver results."</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="relative group h-56">
              <div className={`card relative flex flex-col items-center justify-center h-full p-6 rounded-2xl bg-[#241A7A]/90 backdrop-blur-xl border border-[#1A135A]/40 shadow-2xl ${stat.shadowColor} transition-all duration-500`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3">{stat.value}</div>
                <div className="text-[#FFFFFF] font-bold text-lg text-center">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-20">
          <h2 className="section-heading text-3xl md:text-4xl font-black mb-12 text-[#FFFFFF]">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="relative group h-56">
                <div className="card relative bg-[#241A7A]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#1A135A]/40 shadow-2xl hover:shadow-[#241A7A]/10 transition-all duration-500 h-full flex flex-col items-center justify-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">{value.title}</h3>
                  <p className="text-[#FFFFFF] leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="section-heading text-3xl md:text-4xl font-black mb-12 text-[#FFFFFF]">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="relative group h-64">
                <div className={`card relative flex flex-col items-center justify-center p-6 rounded-2xl bg-[#241A7A]/90 backdrop-blur-xl border border-[#1A135A]/40 shadow-2xl transition-all duration-500 h-full text-center`} style={{ background: `linear-gradient(135deg, #241A7A/90, #1A135A/90), ${item.gradient}` }}>
                  <div className="text-4xl md:text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">{item.title}</h3>
                  <p className=" естественно

System: text-[#FFFFFF] leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="section-heading text-3xl md:text-4xl font-black mb-12 text-[#FFFFFF]">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group h-56">
                <div ref={teamRefs.current[index]} className="card relative bg-[#241A7A]/90 backdrop-blur-xl rounded-2xl p-6 text-center border border-[#1A135A]/40 shadow-2xl hover:shadow-[#241A7A]/10 transition-all duration-500 h-full flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-5xl mb-4">{member.image}</div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">{member.name}</h3>
                  <p className="text-[#FFFFFF] font-bold text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center bg-gradient-to-r from-[#241A7A] to-[#1A135A] hover:from-[#1A135A] hover:to-[#241A7A] px-8 py-3 rounded-xl text-lg font-bold text-[#FFFFFF] transition-all duration-300 shadow-xl hover:shadow-[#241A7A]/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/0 via-[#FFFFFF]/20 to-[#FFFFFF]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Let's Create Together</span>
            <div className="ml-3 relative">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;