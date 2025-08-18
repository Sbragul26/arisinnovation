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
                start: "center center",
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
    })

  return (
    <div className='min-h-screen w-screen' id='about'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-thin text-xs uppercase tracking-[0.3em] text-gray-400'>
            Welcome to Creative Excellence
        </h2>
        <AnimatedTitle
          title="Where Creativ<b>i</b>ty Meets <br /> Strategic Innov<b>a</b>tion"
          containerClass="mt-5 !text-black text-center font-extralight text-4xl md:text-6xl lg:text-7xl tracking-wide"
        />
        <div className='about-subtext'>
            <p className='font-thin text-base text-gray-500 text-center max-w-3xl leading-loose'>
                At Aris, we transform your vision into reality through comprehensive creative solutions
            </p>
            <p className='font-thin text-base text-gray-500 text-center max-w-3xl leading-loose'>
                From UI/UX design to digital marketing, we craft experiences that captivate and convert
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