import React, { useEffect, useRef } from 'react';
import { Search, BarChart, Code, Zap } from 'lucide-react';

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const processSteps = [
    {
      number: "01",
      title: "Ecommerce",
      description: "Launch high-performance interactive 3D product landing pages that boost engagement and conversions—no code required.",
      icon: <Search className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#FF6B6B]",
      shadowColor: "#FF6B6B"
    },
    {
      number: "02",
      title: "Tech",
      description: "Leverage WebGL visuals and high-performance, best-in-class 3D websites to elevate your online presence—no code required.",
      icon: <BarChart className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#4A90E2]",
      shadowColor: "#4A90E2"
    },
    {
      number: "03",
      title: "Creative",
      description: "Craft creative, captivating 3D websites with drag-and-drop tools and keyframe animations to wow every visitor.",
      icon: <Code className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#2ECC71]",
      shadowColor: "#2ECC71"
    },
    {
      number: "04",
      title: "Storytelling",
      description: "Bring your vision to life with scroll triggered 3D scenes and interactive animations that keep users engaged.",
      icon: <Zap className="w-8 h-8 text-[#FFFFFF]" />,
      color: "bg-[#9B59B6]",
      shadowColor: "#9B59B6"
    }
  ];

  useEffect(() => {
    // Create GSAP timeline
    const tl = window.gsap?.timeline({ 
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    if (window.gsap && window.ScrollTrigger) {
      // Animate title and subtitle
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Animate timeline line
      tl.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.2");

      // Animate cards and dots with stagger
      cardsRef.current.forEach((card, index) => {
        if (card && dotsRef.current[index]) {
          tl.from(dotsRef.current[index], {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
          }, `-=${index === 0 ? 0.8 : 0.6}`)
          .from(card, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.2")
          .to(dotsRef.current[index], {
            boxShadow: `0 0 20px ${processSteps[index].shadowColor}`,
            duration: 0.3,
            ease: "power2.out"
          }, "-=0.1");
        }
      });

      // Add floating animation to cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          window.gsap.to(card, {
            y: -10,
            duration: 2 + index * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2
          });
        }
      });
    }

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      {/* Load GSAP and ScrollTrigger */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      
      <section
        ref={sectionRef}
        id="process"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A23] relative overflow-hidden min-h-screen"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6B6B] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4A90E2] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-[#2ECC71] rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#FFFFFF] tracking-tight"
            >
              Use Cases
            </h2>
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our tailored solutions
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div 
              ref={lineRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF6B6B] via-[#4A90E2] via-[#2ECC71] to-[#9B59B6] opacity-60"
              style={{ height: '100%', minHeight: '800px' }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline Dot */}
                    <div 
                      ref={el => dotsRef.current[index] = el}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${step.color} rounded-full z-20 border-4 border-[#0A0A23] shadow-lg`}
                    ></div>

                    {/* Step Number */}
                    <div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${step.color} rounded-full flex items-center justify-center z-30 font-bold text-white text-lg shadow-2xl`}
                      style={{ top: '-12px' }}
                    >
                      {step.number}
                    </div>

                    {/* Card */}
                    <div 
                      ref={el => cardsRef.current[index] = el}
                      className={`w-full max-w-md ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                    >
                      <div 
                        className="bg-[#241A7A]/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#1A135A]/50 hover:border-[#1A135A] transition-all duration-300 group cursor-pointer"
                        onMouseEnter={(e) => {
                          if (window.gsap) {
                            window.gsap.to(e.currentTarget, {
                              scale: 1.05,
                              boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${step.shadowColor}20`,
                              duration: 0.3,
                              ease: "power2.out"
                            });
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (window.gsap) {
                            window.gsap.to(e.currentTarget, {
                              scale: 1,
                              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                              duration: 0.3,
                              ease: "power2.out"
                            });
                          }
                        }}
                      >
                        {/* Icon */}
                        <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {step.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 group-hover:text-opacity-90 transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-[#FFFFFF]/80 text-base leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* CTA */}
                        <div className="pt-4 border-t border-[#FFFFFF]/10">
                          <a 
                            href="#" 
                            className="inline-flex items-center text-[#FFFFFF] hover:text-[#FFFFFF]/80 transition-colors font-semibold group-hover:translate-x-1 transform transition-transform duration-300"
                          >
                            Explore Now
                            <svg 
                              className="w-4 h-4 ml-2 group-hover:translate-x-1 transform transition-transform duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line to Dot */}
                    <div 
                      className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-${isEven ? 'r' : 'l'} from-[#FFFFFF]/20 to-transparent w-16 ${isEven ? 'left-1/2 ml-3' : 'right-1/2 mr-3'}`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#FFFFFF]/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProcessSection;