import React, { useEffect, useRef } from 'react';

const MouseLightEffect = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (lightRef.current) {
        const { clientX, clientY } = e;
        
        // Update the position of the light effect
        lightRef.current.style.left = `${clientX}px`;
        lightRef.current.style.top = `${clientY}px`;
      }
    };

    // Add event listener to the entire document
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed top-0 left-0 z-50 transition-all duration-75 ease-out"
      style={{
        width: '600px',
        height: '600px',
        background: `
          radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.15) 0%,
            rgba(168, 85, 247, 0.1) 25%,
            rgba(59, 130, 246, 0.05) 50%,
            transparent 70%
          )
        `,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        filter: 'blur(1px)',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default MouseLightEffect;