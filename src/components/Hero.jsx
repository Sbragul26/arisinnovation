import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 3;
    const nextVideoRef = useRef(null);
    const loadingRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prevLoaded) => prevLoaded + 1);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            // Delay the loading completion to show the animation
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [loadedVideos])

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    // Loading animation
    useGSAP(() => {
        if (isLoading) {
            const tl = gsap.timeline({ repeat: -1 });
            
            // Animate the brand name
            tl.fromTo('#loading-brand', 
                { 
                    scale: 0.8, 
                    opacity: 0.7,
                    rotationY: 0 
                },
                { 
                    scale: 1.1, 
                    opacity: 1,
                    rotationY: 360,
                    duration: 2, 
                    ease: 'power2.inOut' 
                }
            );

            // Animate particles
            gsap.set('.particle', {
                x: () => gsap.utils.random(-200, 200),
                y: () => gsap.utils.random(-200, 200),
                scale: () => gsap.utils.random(0.5, 1.5),
                opacity: 0
            });

            gsap.to('.particle', {
                opacity: 0.6,
                duration: 0.5,
                stagger: 0.1,
                yoyo: true,
                repeat: -1,
                ease: 'power2.inOut'
            });

            gsap.to('.particle', {
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: 'none'
            });

            // Floating animation for particles
            gsap.to('.particle', {
                y: '+=20',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                stagger: 0.2
            });

            // Pulse effect for the container
            gsap.to('#loading-container', {
                scale: 1.02,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // Animated text reveal
            gsap.fromTo('#loading-text', 
                { 
                    y: 50, 
                    opacity: 0 
                },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    delay: 0.5,
                    ease: 'power2.out'
                }
            );

            // Progress bar animation
            gsap.to('#progress-bar', {
                width: '100%',
                duration: 3,
                ease: 'power2.inOut',
                repeat: -1
            });
        }
    }, [isLoading]);

    // Loading exit animation
    useGSAP(() => {
        if (!isLoading) {
            gsap.to('#loading-screen', {
                opacity: 0,
                scale: 1.1,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    gsap.set('#loading-screen', { display: 'none' });
                }
            });

            // Animate main content entrance
            gsap.fromTo('#video-frame', 
                { 
                    scale: 0.9, 
                    opacity: 0 
                },
                { 
                    scale: 1, 
                    opacity: 1, 
                    duration: 1, 
                    ease: 'power2.out' 
                }
            );
        }
    }, [isLoading]);

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            });
            gsap.from('#current-video', {
                transformOrigin: 'center center'
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {/* Enhanced Loading Screen */}
            {isLoading && (
                <div id="loading-screen" className='fixed inset-0 z-[100] bg-black overflow-hidden'>
                    <div id="loading-container" className="relative w-full h-full flex items-center justify-center">
                        {/* Animated particles */}
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="particle absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                style={{
                                    filter: 'blur(0.5px)',
                                }}
                            />
                        ))}

                        {/* Main loading content */}
                        <div className="text-center z-10">
                            <div id="loading-brand" className="mb-8">
                                <h1 className='font-serif text-8xl md:text-9xl italic text-white mb-4'>
                                    A<span className="text-blue-400">r</span>is
                                </h1>
                            </div>

                            <div id="loading-text" className="mb-8">
                                <p className="text-white/80 text-xl font-light tracking-wider">
                                    Crafting Excellence
                                </p>
                                <p className="text-white/60 text-sm mt-2">
                                    Loading your creative experience...
                                </p>
                            </div>

                            {/* Progress bar */}
                            <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
                                <div 
                                    id="progress-bar" 
                                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full w-0"
                                ></div>
                            </div>

                            {/* Loading dots */}
                            <div className='loading-container mt-8'>
                                <div className='loading-circle'></div>
                                <div className='loading-circle'></div>
                                <div className='loading-circle'></div>
                                <div className='loading-circle'></div>
                            </div>
                        </div>

                        {/* Background grid pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="grid-pattern"></div>
                        </div>
                    </div>
                </div>
            )}

            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black'>
                <div>
                    <div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div
                            onClick={handleMiniVdClick}
                            className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
                        >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id='current-video'
                                onLoadedData={handleVideoLoad}
                                className='size-64 origin-center scale-150 object-cover object-center'
                            />
                        </div>
                    </div>

                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />

                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        id='current-video'
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                {/* Brand name positioned at bottom right */}
                <h1 className='font-serif text-7xl md:text-8xl italic absolute bottom-5 right-5 z-40 text-blue-75'>
                    A<b>r</b>is
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none text-blue-100'>
                            Cr<b className="font-bold">a</b>fting<br />Excell<b className="font-bold">e</b>nce
                        </h1>
                        <p className='mb-5 max-w-96 font-sans text-xl font-light leading-relaxed text-blue-100'>
                            Your partner in creative solutions.<br />
                            We deliver comprehensive digital & creative<br />
                            services that elevate your brand.
                        </p>
                        <Link to="/services">
                        <Button
                            id="discover-services"
                            title="Discover Our Services"
                            leftIcon={<TiLocationArrow />}
                            containerClass="bg-yellow-300 flex-center gap-1"
                        /></Link>
                    </div>
                </div>
            </div>

            <h1 className='font-bold text-6xl md:text-7xl absolute bottom-5 right-5 text-black'>
                A<b>r</b>is
            </h1>
            
            <style jsx>{`
                .loading-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                
                .loading-circle {
                    width: 12px;
                    height: 12px;
                    background: linear-gradient(45deg, #60a5fa, #a855f7);
                    border-radius: 50%;
                    animation: bounce 1.4s ease-in-out infinite both;
                    box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
                }
                
                .loading-circle:nth-child(1) { animation-delay: -0.32s; }
                .loading-circle:nth-child(2) { animation-delay: -0.16s; }
                .loading-circle:nth-child(3) { animation-delay: 0s; }
                .loading-circle:nth-child(4) { animation-delay: 0.16s; }
                
                @keyframes bounce {
                    0%, 80%, 100% {
                        transform: scale(0.8);
                        opacity: 0.5;
                    }
                    40% {
                        transform: scale(1.2);
                        opacity: 1;
                        box-shadow: 0 0 20px rgba(96, 165, 250, 0.8);
                    }
                }

                .grid-pattern {
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                    width: 100%;
                    height: 100%;
                    animation: moveGrid 20s linear infinite;
                }

                @keyframes moveGrid {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(50px, 50px);
                    }
                }

                .particle {
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
            `}</style>
        </div>
    );
}

export default Hero;