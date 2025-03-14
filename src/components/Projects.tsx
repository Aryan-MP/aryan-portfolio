
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoLink: string;
  index: number;
}

const ProjectCard = ({ title, description, technologies, image, githubLink, demoLink, index }: ProjectProps) => {
  return (
    <div 
      className="bg-dark-charcoal rounded-lg overflow-hidden neon-border card-hover opacity-0 animate-fadeIn"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/10"></div>
        <div 
          className="w-full h-full bg-rich-black"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-neon-purple transition-colors"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github size={20} />
          </a>
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-neon-purple transition-colors"
            aria-label={`View ${title} live demo`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Content Generator",
      description: "A Next.js application that uses OpenAI's API to generate content based on user prompts. Features include content editing, saving, and exporting options.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1677442135796-6454a18544b6?q=80&w=500&auto=format&fit=crop",
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses to monitor sales, inventory, customer data, and other metrics in real-time.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500&auto=format&fit=crop",
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time chat application with features like user authentication, private messaging, group chats, and message notifications.",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=500&auto=format&fit=crop",
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application that helps users track their expenses, income, and financial goals with interactive charts and reports.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts"],
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=500&auto=format&fit=crop",
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides current weather data and forecasts for multiple locations with a clean, intuitive interface.",
      technologies: ["React", "WeatherAPI", "Styled Components", "PWA"],
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=500&auto=format&fit=crop",
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Task Management System",
      description: "A full-featured task management system with boards, lists, cards, due dates, labels, and team collaboration features.",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=500&auto=format&fit=crop",
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-charcoal">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
            Each project represents a different challenge and skill set:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
