import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check for mobile/tablet devices
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
      
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top 80%" : isTablet ? "50 bottom" : "100 bottom",
          end: isMobile ? "center 60%" : "center bottom",
          toggleActions: "play none none reverse",
          // Refresh on resize for responsive behavior
          invalidateOnRefresh: true,
        },
      });

      // Set initial state for animated words
      gsap.set(".animated-word", {
        opacity: 0,
        transform: isMobile 
          ? "translate3d(0, 20px, 0) rotateX(10deg)" 
          : "translate3d(0, 0, 0) rotateY(-10deg) rotateX(10deg)",
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: isMobile ? "power1.out" : "power2.inOut",
          stagger: isMobile ? 0.05 : 0.02,
          duration: isMobile ? 0.6 : 0.8,
        },
        0
      );

      // Add a subtle hover effect for desktop
      if (!isMobile) {
        const words = containerRef.current.querySelectorAll('.animated-word');
        words.forEach(word => {
          word.addEventListener('mouseenter', () => {
            gsap.to(word, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out"
            });
          });
          
          word.addEventListener('mouseleave', () => {
            gsap.to(word, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
          });
        });
      }

      // Handle resize events
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-1 xs:gap-2 sm:gap-2 md:gap-3 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word inline-block will-change-transform"
              dangerouslySetInnerHTML={{ __html: word }}
              style={{
                // Ensure proper text rendering on mobile
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            />
          ))}
        </div>
      ))}
      
      <style jsx>{`
        .animated-word {
          transform-origin: center center;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animated-word {
            /* Reduce transform complexity on mobile for better performance */
            transform-style: flat;
          }
          
          .flex-center {
            /* Better text wrapping on mobile */
            word-break: break-word;
            hyphens: auto;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 769px) and (max-width: 1024px) {
          .animated-word {
            transform-style: preserve-3d;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
          .animated-word {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animated-word {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* Portrait orientation adjustments */
        @media (max-width: 768px) and (orientation: portrait) {
          .flex-center {
            gap: 0.25rem;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-width: 768px) and (orientation: landscape) {
          .flex-center {
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTitle;