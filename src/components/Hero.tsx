import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hello, I'm Utkarsh
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          M.Tech IT Student at NSUT Delhi | Full Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1vSc4LK6T3wHZe_s-s150cQxUNvIHcqMG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
          >
            Download CV
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </section>
  );
}