import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'M.Tech in IT',
    institution: 'NSUT Delhi',
    duration: '2024 - Present',
    score: 'Pursuing'
  },
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Chandigarh Group of Colleges, Landran',
    duration: '2020 - 2024',
    score: '81.9%'
  },
  {
    degree: 'AISSCE (Class XII)',
    institution: 'Kendriya Vidyalaya, Sector 47, Chandigarh',
    duration: '2020',
    score: '83.8%'
  },
  {
    degree: 'AISCE (Class X)',
    institution: 'Air Force School, Chandigarh',
    duration: '2018',
    score: 'CGPA: 10'
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {edu.institution}
              </p>
              
              <div className="flex justify-between text-sm">
                <span className="text-blue-600 dark:text-blue-400">
                  {edu.duration}
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}