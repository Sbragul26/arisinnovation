import React from 'react';

const Project5= ({ scrollToSection }) => {
  const projects = [

    {
      title: 'Fitness Tracker',
      description: 'A mobile app to track workouts, nutrition, and health goals with intuitive dashboards.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center  bg-gray-100 py-8">

      <div className="space-y-8 w-full max-w-4xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project5;