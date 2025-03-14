
import React from "react";
import { Code, Server, Database, Cloud, BrainCircuit, Github, Terminal, Globe } from "lucide-react";

const SkillCategory = ({ title, skills, icon, delay }: { title: string; skills: string[]; icon: React.ReactNode; delay: string }) => {
  return (
    <div 
      className="bg-rich-black rounded-lg p-6 neon-border card-hover opacity-0 animate-fadeIn" 
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center mb-4">
        <div className="text-neon-purple mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="h-1.5 w-1.5 bg-neon-purple rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      delay: "0.1s"
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
      delay: "0.2s"
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
      delay: "0.3s"
    },
    {
      title: "AI/ML",
      icon: <BrainCircuit size={24} />,
      skills: ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision", "AI Agents"],
      delay: "0.4s"
    },
    {
      title: "DevOps",
      icon: <Github size={24} />,
      skills: ["Git", "GitHub Actions", "CI/CD", "Docker", "Kubernetes"],
      delay: "0.5s"
    },
    {
      title: "Cloud Services",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Google Cloud", "Azure", "Serverless", "Netlify/Vercel"],
      delay: "0.6s"
    },
    {
      title: "Tools & Other",
      icon: <Terminal size={24} />,
      skills: ["VS Code", "Postman", "Figma", "Webpack", "NPM/Yarn"],
      delay: "0.7s"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Progressive Web Apps"],
      delay: "0.8s"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-rich-black">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I've accumulated a diverse set of skills over my journey in technology.
            Here's a glimpse of my technical expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
