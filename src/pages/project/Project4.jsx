import React from 'react';

const Project4 = ({ scrollToSection }) => {
  const projects = [
    {
      title: 'Travel Booking System',
      description: 'A comprehensive platform for booking flights, hotels, and tours with dynamic pricing.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A23] py-8">
      <div className="space-y-8 w-full max-w-4xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#241A7A] rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project4;