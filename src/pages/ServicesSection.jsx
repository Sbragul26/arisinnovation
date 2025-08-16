import React, { useEffect, useRef } from 'react';
import { Search, BarChart, Code, Zap } from 'lucide-react';

const ProcessSection = () => {
 const sectionRef = useRef(null);
 const cardsRef = useRef([]);

 const processSteps = [
   {
     number: "01",
     title: "Ecommerce",
     description: "Launch high-performance interactive 3D product landing pages that boost engagement and conversions—no code required.",
     icon: <Search className="w-6 h-6 text-white" />,
     color: "#FF6B6B",
     bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
   },
   {
     number: "02", 
     title: "Tech",
     description: "Leverage WebGL visuals and high-performance, best-in-class 3D websites to elevate your online presence—no code required.",
     icon: <BarChart className="w-6 h-6 text-white" />,
     color: "#4A90E2",
     bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
   },
   {
     number: "03",
     title: "Creative", 
     description: "Craft creative, captivating 3D websites with drag-and-drop tools and keyframe animations to wow every visitor.",
     icon: <Code className="w-6 h-6 text-white" />,
     color: "#2ECC71",
     bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
   },
   {
     number: "04",
     title: "Storytelling",
     description: "Bring your vision to life with scroll triggered 3D scenes and interactive animations that keep users engaged.",
     icon: <Zap className="w-6 h-6 text-white" />,
     color: "#9B59B6",
     bgImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=800&q=80"
   }
 ];

 useEffect(() => {
   const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.style.transform = 'translateY(0) scale(1)';
         entry.target.style.opacity = '1';
       }
     });
   }, observerOptions);

   cardsRef.current.forEach((card, index) => {
     if (card) {
       card.style.transform = 'translateY(100px) scale(0.8)';
       card.style.opacity = '0';
       card.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s`;
       observer.observe(card);
     }
   });

   // Parallax scroll effect
   const handleScroll = () => {
     const scrolled = window.pageYOffset;
     const parallax = sectionRef.current;
     if (parallax) {
       const speed = scrolled * 0.5;
       parallax.style.backgroundPositionY = `${speed}px`;
     }

     cardsRef.current.forEach((card, index) => {
       if (card) {
         const rect = card.getBoundingClientRect();
         const scrollProgress = 1 - (rect.top / window.innerHeight);
         
         if (scrollProgress > 0 && scrollProgress < 1) {
           const translateX = Math.sin(scrollProgress * Math.PI) * 50;
           const rotate = scrollProgress * 10 - 5;
           card.style.transform = `translateX(${translateX}px) rotate(${rotate}deg) scale(${0.9 + scrollProgress * 0.1})`;
         }
       }
     });
   };

   window.addEventListener('scroll', handleScroll);

   return () => {
     observer.disconnect();
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);

 const handleMouseEnter = (index) => {
   const card = cardsRef.current[index];
   if (card) {
     card.style.transform = 'translateY(-20px) scale(1.05) rotateY(5deg)';
     card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4)';
   }
 };

 const handleMouseLeave = (index) => {
   const card = cardsRef.current[index];
   if (card) {
     card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
     card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
   }
 };

 return (
   <section
     ref={sectionRef}
     className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
     style={{
       background: `
         radial-gradient(circle at 20% 20%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
         radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
         radial-gradient(circle at 20% 80%, rgba(46, 204, 113, 0.15) 0%, transparent 50%),
         radial-gradient(circle at 80% 80%, rgba(155, 89, 182, 0.15) 0%, transparent 50%),
         linear-gradient(135deg, #0a0a23 0%, #1a1a3a 100%)
       `,
       backgroundAttachment: 'fixed'
     }}
   >
     {/* Animated background elements */}
     <div className="absolute inset-0 overflow-hidden">
       {[...Array(15)].map((_, i) => (
         <div
           key={i}
           className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
           style={{
             width: `${Math.random() * 300 + 100}px`,
             height: `${Math.random() * 300 + 100}px`,
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animation: `float ${Math.random() * 20 + 10}s linear infinite`,
             animationDelay: `${Math.random() * 10}s`
           }}
         />
       ))}
     </div>

     <div className="relative z-10 max-w-7xl mx-auto">
       <div className="text-center mb-20">
         <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
           Services
         </h2>
         <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           Explore our tailored solutions
         </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
         {processSteps.map((step, index) => (
           <div
             key={index}
             ref={el => cardsRef.current[index] = el}
             className={`
               relative rounded-3xl overflow-hidden backdrop-blur-md border border-white/10
               ${index === 0 ? 'md:col-span-1 md:row-span-2 h-[600px]' : ''}
               ${index === 1 ? 'md:col-span-1 h-[280px]' : ''}
               ${index === 2 ? 'md:col-span-1 h-[280px]' : ''}
               ${index === 3 ? 'md:col-span-1 md:row-span-2 h-[600px]' : ''}
               ${index === 1 || index === 2 ? 'h-[350px]' : ''}
             `}
             style={{
               background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
               transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
               transformStyle: 'preserve-3d'
             }}
             onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={() => handleMouseLeave(index)}
           >
             {/* Background Image with Overlay */}
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-20"
               style={{
                 backgroundImage: `url(${step.bgImage})`,
                 filter: 'blur(1px)'
               }}
             />
             
             {/* Gradient Overlay */}
             <div 
               className="absolute inset-0"
               style={{
                 background: `linear-gradient(135deg, ${step.color}40, transparent 70%)`
               }}
             />

             {/* Content */}
             <div className="relative z-10 p-8 h-full flex flex-col justify-between">
               <div>
                 <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-semibold text-white/80 mb-4 backdrop-blur-sm">
                   Services
                 </div>
                 
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                   {step.title}
                 </h3>
                 
                 <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                   {step.description}
                 </p>
               </div>

               <div className="flex items-center justify-between">
                 <button className="flex items-center space-x-2 text-white hover:text-opacity-80 transition-colors group">
                   <span className="font-semibold">Explore Now</span>
                   <svg 
                     className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </button>

                 <div 
                   className="w-12 h-12 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: step.color }}
                 >
                   {step.icon}
                 </div>
               </div>
             </div>

             {/* Floating decoration */}
             <div 
               className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20"
               style={{
                 background: `radial-gradient(circle, ${step.color}, transparent)`,
                 animation: 'pulse 3s ease-in-out infinite'
               }}
             />
           </div>
         ))}
       </div>
     </div>

     <style jsx>{`
       @keyframes float {
         0%, 100% { transform: translateY(0px) rotate(0deg); }
         33% { transform: translateY(-30px) rotate(120deg); }
         66% { transform: translateY(15px) rotate(240deg); }
       }
       
       @keyframes pulse {
         0%, 100% { transform: scale(1); opacity: 0.2; }
         50% { transform: scale(1.1); opacity: 0.3; }
       }
     `}</style>
   </section>
 );
};

export default ProcessSection;