import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading with a staggered letter effect
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate description with a slide-up and fade effect
      gsap.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
          x: -20,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Add a subtle parallax effect to the container
      gsap.fromTo(
        containerRef.current,
        {
          y: 50,
          opacity: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black pb-52 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-3 md:px-10" ref={containerRef}>
        <div className="px-5 py-32">
          <h2 
            ref={headingRef}
            className="font-circular-web text-2xl md:text-3xl lg:text-4xl font-bold text-blue-50 mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              Empowering Digital Success
            </span>
          </h2>
          <p 
            ref={descriptionRef}
            className="max-w-2xl font-circular-web text-lg md:text-xl text-blue-50/80 leading-relaxed"
          >
            Discover how <span className="font-semibold text-blue-300">Aris Innovation</span> transforms 
            businesses with cutting-edge digital marketing, full-stack development, stunning graphic design, and more.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] shadow-2xl shadow-purple-500/20">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Digital <b>M</b>arketing
              </>
            }
            description="Boost your brand with tailored strategies, SEO, and social media campaigns that drive engagement and growth."
            isComingSoon
            comingSoonTextColor="text-white font-medium"
          />
        </BentoTilt>
        
        <div className="flex flex-col md:flex-row h-[100vh] w-full grid-cols-2 grid-rows-2 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 h-full md:w-1/2 shadow-xl shadow-blue-500/20">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Full-Stack <b>D</b>evelopment
                </>
              }
              description="Build robust, scalable web and mobile applications with our expert full-stack development services."
              isComingSoon
              comingSoonTextColor="text-white font-medium"
            />
          </BentoTilt>
          <div className="flex flex-col md:w-1/2 h-full gap-7">
            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 md:h-1/2 shadow-lg shadow-green-500/20">
              <BentoCard
                src="videos/feature-3.mp4"
                title={
                  <>
                    Graphic <b>D</b>esign
                  </>
                }
                description="Create visually stunning designs for logos, branding, and marketing materials that captivate your audience."
                isComingSoon
                comingSoonTextColor="text-white font-medium"
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:h-1/2 md:me-0 shadow-lg shadow-pink-500/20">
              <BentoCard
                src="videos/feature-4.mp4"
                title={
                  <>
                    UI/UX <b>D</b>esign
                  </>
                }
                description="Craft intuitive and user-friendly interfaces that enhance user experience and engagement."
                isComingSoon
                comingSoonTextColor="text-white font-medium"
              />
            </BentoTilt>
          </div>
        </div>
        
        <div className="flex flex-row w-full h-full gap-7 mt-7 md:mt-10">
          <BentoTilt className="bento-tilt_2 w-1/2 shadow-xl shadow-cyan-500/20">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Custom <b>S</b>oftware/SaaS
                </>
              }
              description="Develop tailored software and SaaS solutions to streamline operations and enhance business efficiency."
              isComingSoon
              comingSoonTextColor="text-white font-medium"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 w-1/2 shadow-xl shadow-indigo-500/20">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Progressive <b>W</b>eb Apps
                </>
              }
              description="Deliver fast, reliable, and engaging PWAs and websites for seamless cross-platform experiences."
              isComingSoon
              comingSoonTextColor="text-white font-medium"
            />
          </BentoTilt>
        </div>
        
        <div className="flex flex-row w-full h-full gap-7 mt-7 md:mt-10">
          <BentoTilt className="bento-tilt_2 w-1/2 shadow-xl shadow-orange-500/20">
            <BentoCard
              src="videos/feature-5.mp4"
              title={
                <>
                  Brand <b>S</b>culpting
                </>
              }
              description="Shape a powerful digital identity with strategic branding that resonates with your audience."
              isComingSoon
              comingSoonTextColor="text-white font-medium"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 w-1/2 shadow-xl shadow-violet-500/30">
            <div className="flex size-full flex-col justify-between bg-gradient-to-br from-violet-400 to-purple-500 p-5 relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse animation-delay-1000"></div>
              </div>
              
              <h1 className="bento-title special-font max-w-64 text-black font-bold text-xl relative z-10">
                M<b>o</b>re <b>S</b>ervices <b>S</b>oon
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end text-black/80 relative z-10 hover:scale-[5.5] transition-transform duration-300" />
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;