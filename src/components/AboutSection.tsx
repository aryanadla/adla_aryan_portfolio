import React from 'react';
import { Code, Award, Users } from 'lucide-react';
const AboutSection = () => {
  const highlights = [{
    icon: Code,
    title: "AI-Ops Engineering",
    description: "Building intelligent systems that bridge ML and infrastructure"
  }, {
    icon: Award,
    title: "Research Excellence",
    description: "7 published papers with Best Paper Award recognition"
  }, {
    icon: Users,
    title: "Full-Stack Innovation",
    description: "End-to-end solutions from cloud to frontend"
  }];
  return <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate engineer working at the intersection of <span className="text-cyan-400 font-semibold">AI, Cloud DevOps, and Web3</span>, with a strong focus on AI-Ops and infrastructure automation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building intelligent systems that bridge machine learning, cloud orchestration, and full-stack engineering using platforms like <span className="text-purple-400 font-semibold">Azure, GCP, and Terraform</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8</div>
                <div className="text-gray-300">Research Papers</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10</div>
                <div className="text-gray-300">Certifications</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => <div key={index} className="group bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;