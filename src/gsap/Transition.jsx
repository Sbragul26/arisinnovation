import React from 'react';

const Transition = ({ overlayRef, activeSection }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 40 }}>
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'black',
          transform: 'translateY(100%)', // Always start from bottom
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px', // Curved border
          boxSizing: 'border-box',
          padding: '20px', // Padding for content
        }}
      >
        {activeSection && (
          <p
            style={{
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            {activeSection === 'cover' ? 'Home' : activeSection}
          </p>
        )}
      </div>
    </div>
  );
};

export default Transition;