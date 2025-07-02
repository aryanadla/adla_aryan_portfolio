
import React, { useState } from 'react';
import { Github, Code } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "SmartInbox Scheduler",
      description: "N8N + OpenRouter-based AI email classifier with auto-scheduling capabilities for intelligent inbox management.",
      tech: ["N8N", "OpenRouter AI", "Email APIs", "Automation"],
      gradient: "from-cyan-500 to-blue-600",
      icon: "📧",
      githubUrl: "https://github.com/aryanadla/SmartInbox-Scheduler"
    },
    {
      title: "AI-Driven IaaS Provisioning and Monitoring",
      description: "Terraform + Flask application for auto-provisioning AKS clusters with real-time monitoring and intelligent resource management.",
      tech: ["Terraform", "Flask", "Azure AKS", "Monitoring"],
      gradient: "from-purple-500 to-pink-600",
      icon: "☁️",
      githubUrl: "https://github.com/aryanadla/AI-Driven-Workspace-Provisioning-for-IaaS-Compute-and-AKS"
    },
    {
      title: "Shortify",
      description: "Full-stack URL shortener built with Node.js, TypeScript, and PostgreSQL featuring analytics and custom domains.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "React"],
      gradient: "from-green-500 to-teal-600",
      icon: "🔗",
      githubUrl: "https://github.com/aryanadla/Shortify-Scalable_URL_Shortening_Service"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI, cloud infrastructure, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 hover:bg-gray-800/50">
                {/* Floating icon */}
                <div className="absolute -top-6 left-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg transform transition-transform duration-300 ${hoveredProject === index ? 'scale-110 rotate-12' : ''}`}>
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="flex">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/aryanadla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
