import { useRef, useLayoutEffect, useState, useEffect, useCallback } from "react";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

// Smooth spring animation hook
function useSpring(value, config = { damping: 50, stiffness: 400 }) {
  const [springValue, setSpringValue] = useState(value);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    let animationId;
    
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const displacement = value - springValue;
      const springForce = displacement * config.stiffness;
      const dampingForce = velocityRef.current * config.damping;
      const acceleration = (springForce - dampingForce) / 100;
      
      velocityRef.current += acceleration * deltaTime;
      
      const newValue = springValue + velocityRef.current * deltaTime;
      setSpringValue(newValue);

      if (Math.abs(displacement) > 0.01 || Math.abs(velocityRef.current) > 0.01) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value, springValue, config.damping, config.stiffness]);

  return springValue;
}

// Velocity tracking hook
function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    let ticking = false;

    const updateVelocity = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;
      const deltaTime = now - lastTime.current;
      const deltaY = currentScrollY - lastScrollY.current;

      if (deltaTime > 0) {
        const currentVelocity = (deltaY / deltaTime) * 16; // Normalize to 60fps
        setVelocity(currentVelocity);
      }

      lastScrollY.current = currentScrollY;
      lastTime.current = now;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVelocity);
        ticking = true;
      }
    };

    // Decay velocity when not scrolling
    const decayInterval = setInterval(() => {
      setVelocity(prev => prev * 0.95);
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(decayInterval);
    };
  }, []);

  return velocity;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  text = "SCROLL • VELOCITY • TEXT", // Changed from texts array to single text string
  velocity = 50,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 3] },
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle = {},
  scrollerStyle = {},
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const [baseX, setBaseX] = useState(0);
    const scrollVelocity = useScrollVelocity();
    const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
    
    // Transform velocity to factor
    const velocityFactor = useCallback((velocity) => {
      const { input, output } = velocityMapping;
      const inputRange = input[1] - input[0];
      const outputRange = output[1] - output[0];
      const normalizedInput = Math.max(0, Math.min(1, (Math.abs(velocity) - input[0]) / inputRange));
      return output[0] + normalizedInput * outputRange;
    }, [velocityMapping]);

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);
    const directionFactor = useRef(1);
    const animationRef = useRef();

    // Wrap function for infinite scroll
    const wrap = useCallback((min, max, v) => {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }, []);

    // Animation loop
    useEffect(() => {
      let lastTime = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const deltaTime = (now - lastTime) / 1000;
        lastTime = now;

        let moveBy = directionFactor.current * baseVelocity * deltaTime;
        
        // Update direction based on scroll velocity
        if (smoothVelocity < -0.1) {
          directionFactor.current = -1;
        } else if (smoothVelocity > 0.1) {
          directionFactor.current = 1;
        }

        // Apply velocity factor
        const factor = velocityFactor(smoothVelocity);
        moveBy += directionFactor.current * moveBy * factor;

        setBaseX(prev => prev + moveBy);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [baseVelocity, smoothVelocity, velocityFactor]);

    // Calculate transform
    const transformX = copyWidth > 0 ? wrap(-copyWidth, 0, baseX) : 0;

    // Generate text copies
    const spans = [];
    for (let i = 0; i < (numCopies ?? 1); i++) {
      spans.push(
        <span
          className={`flex-shrink-0 ${className}`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </span>
      );
    }

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden py-4`}
        style={parallaxStyle}
      >
        <div
          className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem] transition-transform duration-75 ease-out`}
          style={{
            transform: `translateX(${transformX}px)`,
            ...scrollerStyle
          }}
        >
          {spans}
        </div>
      </div>
    );
  }

  return (
    <section className="relative">
      <VelocityText
        className={className}
        baseVelocity={velocity}
        scrollContainerRef={scrollContainerRef}
        damping={damping}
        stiffness={stiffness}
        numCopies={numCopies}
        velocityMapping={velocityMapping}
        parallaxClassName={parallaxClassName}
        scrollerClassName={scrollerClassName}
        parallaxStyle={parallaxStyle}
        scrollerStyle={scrollerStyle}
      >
        {text}&nbsp;
      </VelocityText>
    </section>
  );
};

// Demo component with single text row
export default function App() {
  return (
    <div className="min-h-[300vh] bg-black">
      {/* Hero section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-black text-white mb-4">SMOOTH SCROLL</h1>
          <p className="text-xl text-gray-400">Scroll down to see the velocity effect</p>
        </div>
      </div>

      {/* Single velocity text section */}
      <ScrollVelocity
        text="SCROLL • VELOCITY • TEXT • SCROLL • VELOCITY • TEXT • SCROLL • VELOCITY • TEXT"
        velocity={30}
        className="text-white"
        numCopies={8}
        velocityMapping={{ input: [0, 500], output: [0, 2] }}
        parallaxClassName="bg-black py-8"
      />

      {/* Content sections for scrolling */}
      <div className="bg-gray-900 text-white">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="p-16 border-b border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Section {i + 1}</h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              This is content section {i + 1}. Keep scrolling to see how the velocity text 
              animation responds dynamically to your scroll speed and direction. The smoother 
              and more responsive the scroll, the better the effect looks. Try scrolling at 
              different speeds to see the spring physics in action.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}