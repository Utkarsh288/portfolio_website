import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Teaching Assistant (GATE Scholarship)',
    company: 'NSUT Delhi',
    duration: 'July 2024 - Present',
    description: [
      'Assisting professors in teaching and research activities',
      'Conducting tutorials and practical sessions',
      'Helping students with their academic queries'
    ],
    skills: ['Teaching', 'Research', 'Academic Support']
  },
  {
    title: 'Data Science and Analytics Engineer',
    company: 'The Sparks Foundation',
    duration: 'June 2022 - July 2022',
    description: [
      'Worked on data analysis and visualization projects',
      'Implemented machine learning algorithms',
      'Created reports and presentations for stakeholders'
    ],
    skills: ['Python', 'Data Analysis', 'Machine Learning']
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
            >
              <div className="absolute -left-3 top-0">
                <div className="h-6 w-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.duration}
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}