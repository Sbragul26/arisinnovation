import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "top center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: '0%',
        })

        // Add fade-in animation for subtitle text
        gsap.fromTo('.about-subtext', {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out"
        })
    })

  return (
    <div className='min-h-screen w-screen' id='about'>
      <div className='relative mb-20 mt-36 flex flex-col items-center gap-8'>
        <h2 className='font-thin text-xs uppercase tracking-[0.3em] text-gray-400'>
            Welcome to Creative Excellence
        </h2>
        <AnimatedTitle
          title="Where Creativ<b>i</b>ty Meets <br /> Strategic Innov<b>a</b>tion"
          containerClass="mt-5 !text-black text-cefnter font-extralight text-4xl md:text-6xl lg:text-7xl tracking-wide"
        />
        <div className='about-subtext mt-8 space-y-6 px-4'>
            <div className='relative'>
                <p className='font-medium text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed tracking-wide'>
                    At Aris, we transform your vision into reality through 
                    <span className='text-black font-semibold'> comprehensive creative solutions</span>
                </p>
                <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
            </div>
            
            <p className='font-medium text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed tracking-wide mt-8'>
                From UI/UX design to digital marketing, we craft experiences that 
                <span className='text-black font-semibold'> captivate and convert</span>
            </p>
        </div>
      </div>

      <div className='h-dvh w-screen' id="clip">
        <div className='mask-clip-path about-image'>
            <img 
            src="img/intro.jpg"
            alt="Creative design workspace showcasing Aris agency excellence"
            className='absolute left-0 top-0 size-full object-cover'
            />
        </div>
      </div>
    </div>
  )
}

export default Intro