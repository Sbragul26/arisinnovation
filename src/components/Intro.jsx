import React, { useRef } from 'react'
import AnimatedTitle from '../gsap/AnimatedTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    const containerRef = useRef()
    
    useGSAP(() => {
        // Professional animation sequence with better timing
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })

        // Background elements - Subtle entrance
        tl.from('.bg-element', {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        })

        // Subtitle - Clean fade up with proper delay
        .from('.subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.8")

        // Title - Smooth reveal with better easing
        .from('.title-wrapper', {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.4")

        // Paragraphs - Professional staggered reveal
        .from('.text-reveal', {
            y: 35,
            opacity: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: "power3.out"
        }, "-=0.6")

        // Accent elements - Coordinated animation
        .from('.accent-element', {
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")

        // Subtle ambient animations
        gsap.to('.floating-element', {
            y: -8,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: 0.7
        })

        // Professional glow effect
        gsap.to('.glow-element', {
            opacity: 0.6,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        })

    }, { scope: containerRef })

    return (
        <div className='min-h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center' id='about'>
            {/* Professional background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
            <div className="bg-element absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="bg-element absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="glow-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/3 to-white/3 rounded-full blur-3xl opacity-30"></div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
            }}></div>

            <div ref={containerRef} className='relative flex flex-col items-center gap-12 px-6 py-24 max-w-7xl mx-auto'>
                
                {/* Professional subtitle with better typography */}
                <div className="flex flex-col items-center gap-4">
                    <div className="subtitle flex items-center gap-4 floating-element">
                        <div className="accent-element w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        <h2 className='font-medium text-sm md:text-base uppercase tracking-[0.25em] text-slate-400 text-center'>
                            Excellence in Innovation
                        </h2>
                        <div className="accent-element w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    </div>
                </div>
                
                {/* Enhanced title with professional styling */}
                <div className="title-wrapper floating-element">
                    <AnimatedTitle
                        title="Smart <b>Digital</b> Solutions"
                        containerClass="text-white font-light text-4xl md:text-6xl lg:text-7xl tracking-tight text-center leading-tight"
                    />
                    <div className="accent-element w-24 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-full mx-auto mt-6 opacity-80"></div>
                </div>
                
                {/* Professional content section */}
                <div className="mt-8 space-y-10 max-w-4xl mx-auto">
                    <p className="text-reveal font-light text-xl md:text-2xl text-slate-300 text-center leading-relaxed tracking-wide floating-element">
                        We transform <span className="text-blue-400 font-medium relative">
                            complex challenges
                            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
                        </span> into powerful opportunities through innovation and technical excellence.
                    </p>
                    
                    <p className="text-reveal font-light text-lg md:text-xl text-slate-400 text-center leading-relaxed max-w-3xl mx-auto floating-element">
                        From enterprise-grade engineering to strategic transformation and data-driven insights, we deliver solutions that <span className="text-violet-400 font-medium relative">
                            accelerate sustainable growth
                            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"></div>
                        </span> and measurable impact.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro