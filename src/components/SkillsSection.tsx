
import React, { useEffect, useState } from 'react';
import { Code, Award, Users, Star } from 'lucide-react';

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSkills(prev => prev + 1);
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "Java", rating: 4 },
        { name: "JavaScript", rating: 4 },
        { name: "TypeScript", rating: 4 },
        { name: "Python", rating: 5 },
        { name: "SQL", rating: 4 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Award,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Azure", rating: 5 },
        { name: "Google Cloud", rating: 4 },
        { name: "AWS", rating: 3 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Users,
      color: "from-green-400 to-teal-500",
      skills: [
        { name: "Terraform", rating: 5 },
        { name: "Git", rating: 4 },
        { name: "Linux", rating: 4 },
        { name: "N8N", rating: 4 },
        { name: "AKS", rating: 5 }
      ]
    },
    {
      title: "Frameworks & Tech",
      icon: Star,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Flask", rating: 5 },
        { name: "Databricks", rating: 3 },
        { name: "Postman", rating: 4 },
        { name: "Node.js", rating: 4 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern technologies and tools for building scalable, intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category header */}
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 5 + skillIndex;
                  const isVisible = visibleSkills > globalIndex;
                  
                  return (
                    <div
                      key={skillIndex}
                      className={`group relative transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-cyan-400/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i < skill.rating ? `bg-gradient-to-r ${category.color}` : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Floating terminal */}
        <div className="mt-16 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-gray-400 ml-4">~ adla-aryan-terminal</span>
          </div>
          
          <div className="font-mono text-sm space-y-2">
            <div className="text-cyan-400">
              <span className="text-green-400">$</span> whoami
            </div>
            <div className="text-gray-300 ml-4">Cloud Engineer | AI-Ops Enthusiast | Full-Stack Developer</div>
            
            <div className="text-cyan-400">
              <span className="text-green-400">$</span> cat skills.json
            </div>
            <div className="text-gray-300 ml-4">
              <span className="text-purple-400">{`{`}</span><br />
              <span className="ml-4"><span className="text-cyan-400">"expertise"</span>: <span className="text-yellow-400">["AI/ML", "Cloud DevOps", "Full-Stack"]</span>,</span><br />
              <span className="ml-4"><span className="text-cyan-400">"focus"</span>: <span className="text-yellow-400">"Intelligent Infrastructure Automation"</span>,</span><br />
              <span className="ml-4"><span className="text-cyan-400">"status"</span>: <span className="text-green-400">"Building the Future"</span></span><br />
              <span className="text-purple-400">{`}`}</span>
            </div>
            
            <div className="text-cyan-400">
              <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
