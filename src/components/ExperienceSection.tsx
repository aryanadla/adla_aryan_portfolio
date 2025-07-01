
import React, { useState } from 'react';
import { MapPin, Calendar, Award, Users, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: "Research Intern",
      company: "IEEE HYDERABAD",
      duration: "June 2024 - Dec 2024",
      location: "Hyderabad, Telangana",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IEEE_logo.svg/320px-IEEE_logo.svg.png",
      gradient: "from-blue-500 to-blue-700",
      achievements: [
        "Contributing to and working on a research project focused on LULC image analysis using time-series satellite data and LSTM for high-accuracy land cover classification.",
        "Participated in the development and submission of research article for IEEE conferences as part of the IEEE Hyderabad Section initiatives.",
        "Developed VMatter, an AI-enabled IoT system for real-time patient monitoring and room automation using BioBERT, DenseNet, and ESP32; received Best Research Paper Award."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "INFOSYS",
      duration: "May 2024 - July 2024",
      location: "Hyderabad, Telangana",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png",
      gradient: "from-orange-500 to-red-600",
      achievements: [
        "Led a team of 14 on a flight price prediction project during a two-month Data Science internship at Infosys.",
        "Conducted data analysis, product analysis, and utilized Power BI for visualization and reporting.",
        "Gained experience in predictive analytics and improved teamwork skills."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey combining research excellence and industry experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredExperience(index)}
              onMouseLeave={() => setHoveredExperience(null)}
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-cyan-400/50 hover:scale-[1.02] hover:bg-gray-800/50">
                
                {/* Company logo and header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-6 mb-4 md:mb-0">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-xl flex items-center justify-center p-2 shadow-lg transform transition-transform duration-300 ${hoveredExperience === index ? 'scale-110 rotate-3' : ''}`}>
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
