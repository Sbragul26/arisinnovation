import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardGallery = ({ members }) => {
  const galleryRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMouseInContainer, setIsMouseInContainer] = useState(false);
  const animationRef = useRef(null);
  const lastPausedTimeRef = useRef(0); // Store the animation time when paused

  useEffect(() => {
    const cards = cardRefs.current;
    const totalCards = members.length;
    if (totalCards === 0) return;

    const container = galleryRef.current;
    const cardWidth = cards[0].offsetWidth + 32; // Card width + gap (gap-8 = 32px)
    const totalWidth = cardWidth * totalCards;

    // Set up initial card positions
    gsap.set(cards, { x: 0 });

    // Create seamless loop animation
    animationRef.current = gsap.to(cards, {
      x: `-=${totalWidth}`,
      ease: 'none',
      duration: totalCards * 2,
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
      onUpdate: () => {
        cards.forEach((card) => {
          const xPos = gsap.getProperty(card, 'x');
          if (xPos <= -totalWidth) {
            gsap.set(card, { x: xPos + totalWidth * 2 });
          }
        });
      },
    });

    // Pause/resume animation based on mouse presence
    if (isMouseInContainer) {
      lastPausedTimeRef.current = animationRef.current.time(); // Store current animation time
      animationRef.current.pause();
    } else {
      if (lastPausedTimeRef.current > 0) {
        // Resume from the last paused position
        animationRef.current.time(lastPausedTimeRef.current);
      }
      animationRef.current.play();
    }

    // Handle navigation to next card
    const goToNextCard = () => {
      animationRef.current.pause();
      lastPausedTimeRef.current = animationRef.current.time(); // Update paused time
      gsap.to(cards, {
        x: `-=${cardWidth}`,
        duration: 3,
        ease: 'power2.out',
        onComplete: () => {
          cards.forEach((card) => {
            const xPos = gsap.getProperty(card, 'x');
            if (xPos <= -totalWidth) {
              gsap.set(card, { x: xPos + totalWidth * 2 });
            }
          });
          // Update the animation time to reflect the new position
          lastPausedTimeRef.current = animationRef.current.time();
        },
      });
    };

    // Handle navigation to previous card
    const goToPrevCard = () => {
      animationRef.current.pause();
      lastPausedTimeRef.current = animationRef.current.time(); // Update paused time
      gsap.to(cards, {
        x: `+=${cardWidth}`,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          cards.forEach((card) => {
            const xPos = gsap.getProperty(card, 'x');
            if (xPos >= totalWidth) {
              gsap.set(card, { x: xPos - totalWidth * 2 });
            }
          });
          // Update the animation time to reflect the new position
          lastPausedTimeRef.current = animationRef.current.time();
        },
      });
    };

    // Handle mouse enter to pause animation
    const handleMouseEnter = () => {
      setIsMouseInContainer(true);
    };

    // Handle mouse leave to resume animation after delay
    const handleMouseLeave = () => {
      setTimeout(() => {
        setIsMouseInContainer(false);
      }, 5000);
    };

    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Add click listeners to buttons
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');
    prevButton.addEventListener('click', goToPrevCard);
    nextButton.addEventListener('click', goToNextCard);

    // Cleanup
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      prevButton.removeEventListener('click', goToPrevCard);
      nextButton.removeEventListener('click', goToNextCard);
      animationRef.current?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMouseInContainer, members]);

  return (
    <div className="relative flex items-center justify-center">
      <button
        id="prevButton"
        className="bg-[#2A2A5D] text-white p-2 rounded-full hover:bg-[#3A3A7D] transition-colors mr-4"
      >
        &larr; Prev
      </button>
      <div ref={galleryRef} className="w-full overflow-hidden">
        <div className="flex flex-row gap-8">
          {[...members, ...members].map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-[#1A1A3D] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[280px]"
            >
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{member.role}</p>
              <p className="text-base text-white">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        id="nextButton"
        className="bg-[#2A2A5D] text-white p-2 rounded-full hover:bg-[#3A3A7D] transition-colors ml-4"
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default CardGallery;