import { Moon, Sun, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Utkarsh Kumar Singh
          </h1>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:utka288@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+916393584328" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/utkarsh-singh-8a90771aa" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}