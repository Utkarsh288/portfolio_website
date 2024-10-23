const skills = {
  'Programming Languages': ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Solidity'],
  'Databases': ['MySQL'],
  'Tools & Technologies': ['Visual Studio Code', 'Angular', 'Spring Boot', 'OpenCV', 'REST APIs'],
  'Interests': ['Blockchain', 'Machine Learning', 'Web Development', 'Database Management']
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}