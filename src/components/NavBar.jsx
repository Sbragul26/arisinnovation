import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import PillNav from '../gsap/PillNav'; // Updated import path
import logo from '/img/logo.png';

const NavbarLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/aboutUs",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const NavBar = () => {
  const location = useLocation();
  const navContainer = useRef(null);
  const mobileMenuRef = useRef(null);
  const audioElement = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorVisible, setIsIndicatorVisible] = useState(false);
  const [lastScrolledY, setLastScrolledY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleAudioIndicator = () => {
    setIsAudioPlaying(!isAudioPlaying);
    setIsIndicatorVisible(!isIndicatorVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsAudioPlaying(false);
    setIsIndicatorVisible(false);
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  useEffect(() => {
    if (matchRoute("/")) {
      if (isAudioPlaying && audioElement.current) {
        audioElement.current.play();
      } else if (audioElement.current) {
        audioElement.current.pause();
      }
    }

    return () => {
      if (audioElement.current) {
        audioElement.current.pause();
      }
    };
  }, [isAudioPlaying, location.pathname]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainer.current.classList.remove('floating-nav');
      setLastScrolledY(0);
    } else if (currentScrollY > lastScrolledY) {
      setIsNavVisible(false);
      navContainer.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrolledY) {
      setIsNavVisible(true);
      navContainer.current.classList.add('floating-nav');
    }
    setLastScrolledY(currentScrollY);
  }, [currentScrollY, lastScrolledY]);

  useEffect(() => {
    gsap.to(navContainer.current, {
      y: isNavVisible ? 0 : -80,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: isMobileMenuOpen ? 'auto' : 0,
        opacity: isMobileMenuOpen ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navContainer.current && !navContainer.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Map NavbarLinks to PillNav items format
  const pillNavItems = NavbarLinks.map((item) => ({
    label: item.title,
    href: item.path,
  }));

  return (
    <div
      ref={navContainer}
      className="fixed inset-x-4 top-6 z-50 h-14 border-none transition-all duration-700 sm:inset-x-8 lg:inset-x-12"
    >
      <nav className="flex w-full h-full items-center justify-between px-4 py-2 rounded-xl">
        {/* Logo and Product button */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="w-10 h-auto sm:w-12 cursor-pointer"
            />
          </Link>
          {/*}
          <Link to="/products" className="hidden lg:block">
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 flex items-center justify-center gap-1 text-lg font-bold py-1.5 px-3 h-8"
            />
          </Link>
          */}
        </div>

        {/* Desktop PillNav and Audio Button */}
        <div className="hidden md:flex h-full items-center">
          <PillNav
            logo={null}
            logoAlt=""
            items={pillNavItems}
            activeHref={location.pathname}
            className="rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg"
            ease="power2.easeOut"
            baseColor="rgba(255, 255, 255, 0.1)"
            pillColor="#ffffff"
            hoveredPillTextColor="#000000"
            pillTextColor="#ffffff"
          />
        </div>

        {/* Mobile Menu Toggle and Audio Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Audio Indicator - only show on home page */}
          {matchRoute("/") && (
            <button
              className="flex items-center space-x-0.5 cursor-pointer h-3 w-2.5"
              onClick={toggleAudioIndicator}
              aria-label="Toggle background audio"
            >
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line w-0.5 h-full bg-white rounded-sm transition-all duration-300 ${
                    isIndicatorVisible ? 'animate-pulse' : ''
                  }`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                    height: isIndicatorVisible ? `${Math.random() * 100 + 50}%` : '20%',
                  }}
                />
              ))}
            </button>
          )}

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="bg-black/95 backdrop-blur-sm mt-2 rounded-lg p-3 border border-white/10 shadow-xl">
          <div className="flex flex-col gap-1">
            {/* Mobile Products Link */}
            <Link
              to="/products"
              onClick={closeMobileMenu}
              className={`px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm font-medium ${
                location.pathname === "/products" ? 'bg-white/20' : ''
              }`}
            >
              Products
            </Link>
            
            {/* Divider */}
            <div className="h-px bg-white/10 my-1" />
            
            {/* Navigation Links */}
            {NavbarLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-sm font-medium ${
                  location.pathname === item.path ? 'bg-white/20' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-nav {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.1);
          border-radius: 1rem;
        }

        .indicator-line {
          background: linear-gradient(to top, #ffffff, #3b82f6);
          transition: height 0.3s ease;
        }

        .indicator-line.active {
          animation: audioWave 0.8s ease-in-out infinite alternate;
        }

        @keyframes audioWave {
          0% {
            height: 20%;
          }
          100% {
            height: 100%;
          }
        }

        /* Prevent body scroll when mobile menu is open */
        ${isMobileMenuOpen ? 'body { overflow: hidden; }' : ''}
      `}</style>
    </div>
  );
};

export default NavBar;