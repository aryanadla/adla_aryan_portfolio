
import React, { useState } from 'react';
import { Award, Star } from 'lucide-react';

const CertificationsSection = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications = [
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      provider: "Google Cloud",
      icon: "☁️",
      color: "from-blue-400 to-blue-600",
      description: "Comprehensive cloud infrastructure and services expertise"
    },
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      provider: "Microsoft",
      icon: "🤖",
      color: "from-cyan-400 to-blue-500",
      description: "AI solutions design and implementation on Azure platform"
    },
    {
      title: "Oracle AI Vector Search",
      provider: "Oracle",
      icon: "🔍",
      color: "from-red-400 to-orange-500",
      description: "Advanced vector search and AI database technologies"
    },
    {
      title: "MySQL Developer & Admin",
      provider: "Oracle",
      icon: "🗄️",
      color: "from-orange-400 to-yellow-500",
      description: "Database development and administration expertise"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications in cloud computing, AI, and database technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-cyan-400/50 hover:scale-110 hover:bg-gray-800/50 text-center">
                {/* 3D rotating icon */}
                <div className="relative mb-6">
                  <div 
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform transition-all duration-500 ${
                      hoveredCert === index ? 'rotate-y-180 scale-110' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: hoveredCert === index ? 'rotateY(180deg) scale(1.1)' : 'rotateY(0deg) scale(1)'
                    }}
                  >
                    {cert.icon}
                  </div>
                  
                  {/* Floating glow effect */}
                  <div className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-cyan-400 font-medium mb-4">
                  {cert.provider}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>

                {/* Verification badge */}
                <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-xs font-medium">Verified</span>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-400">Cloud Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400">Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2024</div>
            <div className="text-gray-400">Latest Cert</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
