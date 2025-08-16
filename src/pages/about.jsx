import React from 'react';
import CardGallery from '../gsap/CardGallery';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Alex is a full-stack developer with 10 years of experience in building scalable web applications.",
    },
    {
      name: "Sarah Lee",
      role: "UI/UX Designer",
      bio: "Sarah specializes in creating intuitive and visually appealing user interfaces.",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      bio: "Michael leverages data to drive insights and optimize user experiences.",
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      bio: "Emily ensures projects are delivered on time and meet client expectations.",
    },
    {
      name: "David Patel",
      role: "DevOps Engineer",
      bio: "David streamlines deployment processes and maintains robust infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0A0A23] text-[#FFFFFF] space-y-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Our Team</h1>
      
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg md:text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto leading-relaxed text-center mb-12">
          We are a passionate team dedicated to building innovative solutions that make a difference.
        </p>
        
        <CardGallery members={teamMembers} />
      </div>
      
      <p className="text-lg md:text-xl">We're always innovating!</p>
    </div>
  );
};

export default AboutPage;