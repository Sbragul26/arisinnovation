import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }) => {
  const sectionsRef = useRef(null);

  useEffect(() => {
    const sections = sectionsRef.current;
    const sectionElements = sections.children;

    // Set up horizontal scrolling
    gsap.to(sections, {
      x: () => -(sections.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: sections,
        pin: true,
        scrub: 1,
        end: () => `+=${sections.scrollWidth - window.innerWidth}`,
      },
    });

    // Set each section to full viewport width
    gsap.set(sectionElements, { width: window.innerWidth });

    // Handle window resize to keep sections responsive
    const handleResize = () => {
      gsap.set(sectionElements, { width: window.innerWidth });
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={sectionsRef} className="flex w-[fit-content]">
      {children}
    </div>
  );
};

export default HorizontalScroll;