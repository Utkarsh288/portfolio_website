import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Automation of Flappy Bird Game',
    description: 'Developed an AI-powered Flappy Bird game using Neural Networks for automated gameplay.',
    technologies: ['Python', 'PyGames', 'Neural Networks'],
    category: 'AI/ML',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'Implemented a facial recognition system for automated attendance tracking.',
    technologies: ['Python', 'OpenCV', 'Machine Learning'],
    category: 'Computer Vision',
    githubUrl: '#',
    demoUrl: '#'
  }
];

const categories = ['All', 'AI/ML', 'Computer Vision'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        
        <div className="flex space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}