
import React from 'react';
import { Award, Star, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      year: "2018",
      title: "INMO Qualified",
      description: "International Mathematical Olympiad Qualification",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      year: "2019",
      title: "NTSE Scholar",
      description: "National Talent Search Examination - Top 500",
      icon: "🎓",
      color: "from-blue-400 to-cyan-500"
    },
    {
      year: "2024",
      title: "Centific Hackathon",
      description: "Top 10 Finalist in National Hackathon",
      icon: "💻",
      color: "from-purple-400 to-pink-500"
    },
    {
      year: "2024",
      title: "TechnoHacks Winner",
      description: "3rd Place in AI-IoT Innovation Challenge",
      icon: "🚀",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition in academics, competitions, and innovative projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 border-4 border-cyan-400 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
                    {/* Year badge */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${achievement.color} rounded-full text-white font-bold text-sm mb-4`}>
                      {achievement.year}
                    </div>

                    {/* Icon */}
                    <div className="text-4xl mb-4">{achievement.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {achievement.description}
                    </p>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">4+</div>
            <div className="text-gray-400">Major Awards</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">Top 10</div>
            <div className="text-gray-400">Hackathon Finish</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-2">500</div>
            <div className="text-gray-400">NTSE Rank</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">3rd</div>
            <div className="text-gray-400">Place Winner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
