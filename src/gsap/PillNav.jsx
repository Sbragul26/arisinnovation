import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PillNav = ({
  logo,
  logoAlt,
  items,
  activeHref,
  className = '',
  ease = 'power2.easeOut',
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#000000',
}) => {
  const navRef = useRef(null);
  const pillRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    pillRefs.current.forEach((pill, index) => {
      const isActive = items[index].href === location.pathname;

      // Initial active state animation
      gsap.to(pill, {
        backgroundColor: isActive ? pillColor : 'transparent',
        color: isActive ? hoveredPillTextColor : pillTextColor,
        duration: 0.3,
        ease,
      });

      // Hover animation
      pill.addEventListener('mouseenter', () => {
        if (!isActive) {
          gsap.to(pill, {
            backgroundColor: pillColor,
            color: hoveredPillTextColor,
            duration: 0.2,
            ease,
          });
        }
      });

      pill.addEventListener('mouseleave', () => {
        if (!isActive) {
          gsap.to(pill, {
            backgroundColor: 'transparent',
            color: pillTextColor,
            duration: 0.2,
            ease,
          });
        }
      });
    });

    // Cleanup event listeners
    return () => {
      pillRefs.current.forEach((pill) => {
        pill.removeEventListener('mouseenter', () => {});
        pill.removeEventListener('mouseleave', () => {});
      });
    };
  }, [location.pathname, items, pillColor, hoveredPillTextColor, pillTextColor, ease]);

  return (
    <nav
      ref={navRef}
      className={`flex items-center gap-4 p-2 ${className}`}
      style={{ backgroundColor: baseColor }}
    >
      {logo && (
        <img src={logo} alt={logoAlt} className="w-10 h-auto" />
      )}
      <div className="flex gap-2">
        {items.map((item, index) => (
          <Link
            key={item.href}
            to={item.href}
            ref={(el) => (pillRefs.current[index] = el)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              item.href === activeHref ? 'active' : ''
            }`}
            style={{
              color: item.href === activeHref ? hoveredPillTextColor : pillTextColor,
              backgroundColor: item.href === activeHref ? pillColor : 'transparent',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default PillNav;