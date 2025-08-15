import React from 'react';

const Project1 = ({ scrollToSection }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully responsive online store with seamless payment integration and user-friendly design.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A23] py-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Projects</h2>
      <div className="space-y-8 w-full max-w-4xl px-4 flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#241A7A] rounded-xl shadow-lg overflow-hidden w-full max-w-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
              <p className="text-gray-200 mb-4 text-center">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project1;