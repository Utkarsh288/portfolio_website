export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}