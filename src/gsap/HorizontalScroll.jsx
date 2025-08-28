import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".horizontal-section");

    // Calculate dynamic scrub based on scroll velocity
    const getDynamicScrub = (velocity) => {
      const baseScrub = 0.2;
      const velocityFactor = Math.abs(velocity) / 1000; // Normalize velocity
      return Math.max(0.1, Math.min(baseScrub * (1 + velocityFactor), 0.5)); // Clamp between 0.1 and 0.5
    };

    // GSAP animation for ultra-smooth horizontal scrolling
    const tween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "power1.out", // Subtle easing for smoother feel
      scrollTrigger: {
        trigger: container,
        pin: true, // Pin container during scroll
        scrub: true, // Enable scrub for smooth scroll
        end: () => "+=" + (container.scrollWidth - window.innerWidth), // Adjust end for viewport
        onUpdate: (self) => {
          // Dynamically adjust scrub based on scroll velocity
          const velocity = self.getVelocity();
          if (velocity === 0) return; // Skip if no scroll
          tween.scrollTrigger.scrub = getDynamicScrub(velocity); // Update scrub dynamically
        },
        snap: {
          snapTo: 1 / (sections.length - 1), // Snap to each section
          duration: { min: 0.2, max: 0.4 }, // Smooth snap duration
          ease: "power1.inOut", // Smooth snapping ease
        },
      },
    });

    // Cleanup ScrollTrigger and GSAP instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tween.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex h-screen w-[300vw] overflow-hidden">
      {children}
    </div>
  );
};

export default HorizontalScroll;