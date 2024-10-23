import { Linkedin, Github, Mail, Download, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:utka288@gmail.com" className="flex items-center hover:text-blue-400">
                <Mail className="h-5 w-5 mr-2" />
                utka288@gmail.com
              </a>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91-6393584328
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/in/utkarsh-singh-8a90771aa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <a
              href="https://drive.google.com/file/d/1vSc4LK6T3wHZe_s-s150cQxUNvIHcqMG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Utkarsh Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}