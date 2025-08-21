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

    const handleVideoLoad = () => {
        setLoadedVideos((prevLoaded) => prevLoaded + 1);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

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
            {isLoading && (
                <div className='flex-center absolute-center z-[100] h-dvh w-screen overflow-hidden bg-white'>
                    <div className='loading-container'>
                        <div className='loading-circle'></div>
                        <div className='loading-circle'></div>
                        <div className='loading-circle'></div>
                        <div className='loading-circle'></div>
                    </div>
                </div>
            )}

            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
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
                    background: #3B82F6;
                    border-radius: 50%;
                    animation: bounce 1.4s ease-in-out infinite both;
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
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}

export default Hero;