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
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
];

const NavBar = () => {
  const location = useLocation();
  const navContainer = useRef(null);
  const audioElement = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorVisible, setIsIndicatorVisible] = useState(false);
  const [lastScrolledY, setLastScrolledY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleAudioIndicator = () => {
    setIsAudioPlaying(!isAudioPlaying);
    setIsIndicatorVisible(!isIndicatorVisible);
  };

  useEffect(() => {
    setIsAudioPlaying(false);
    setIsIndicatorVisible(false);
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
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Map NavbarLinks to PillNav items format
  const pillNavItems = NavbarLinks.map((item) => ({
    label: item.title,
    href: item.path,
  }));

  return (
    <div
      ref={navContainer}
      className="fixed inset-x-0 top-4 z-50 h-16 flex border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src={logo} alt="Company Logo" className="w-16 h-auto" />
            <Link to="/products">
              <Button
                id="product-button"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1 text-2xl font-bold py-2 px-4 h-10"
              />
            </Link>
          </div>

          {/* PillNav and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              <PillNav
                logo={null} // Remove duplicate logo since it's already on the left
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

            {/* Audio Indicator - only show on home page */}
            {matchRoute("/") && (
              <button
                className="ml-10 flex items-center space-x-0.5 cursor-pointer h-5 w-4"
                onClick={toggleAudioIndicator}
                aria-label="Toggle background audio"
              >
                <audio ref={audioElement} src="/audio/loop.mp3" className="hidden" loop />
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
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Simple fallback for smaller screens */}
      <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm mt-2 rounded-lg p-4 hidden">
        <div className="flex flex-col gap-2">
          {NavbarLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors ${
                location.pathname === item.path ? 'bg-white/20' : ''
              }`}
            >
              {item.title}
            </Link>
          ))}
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
      `}</style>
    </div>
  );
};

export default NavBar;