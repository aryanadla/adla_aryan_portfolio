import React, { useState } from 'react';
import { BookOpen, Award, Users, ExternalLink } from 'lucide-react';

const ResearchSection = () => {
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null);

  const papers = [
    {
      title: "Precision Land Use and Land Cover Mapping with a High-Accuracy Time Series LSTM Model",
      description: "Published under guidance of Dr. R.V. Prakash and Dr. Srinivas Aluvala at SR University, Warangal. Honored with Best Research Paper Award.",
      category: "Machine Learning",
      award: "Best Paper Award",
      gradient: "from-yellow-500 to-orange-600",
      icon: "🏆",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:M3NEmzRMIkIC"
    },
    {
      title: "Optimizing Marketing Strategies: Predicting Customer Personality using Advanced Machine Learning Models",
      description: "Mini project coursework under guidance of Dr. Gagan Deep Arora and department faculty as part of college curriculum.",
      category: "Data Science",
      award: null,
      gradient: "from-blue-500 to-purple-600",
      icon: "📊",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:bEWYMUwI8FkC"
    },
    {
      title: "Developing an AI-Based Library Assistant: Enhancing Book Retrieval with Natural Language Processing and Machine Learning",
      description: "Major project coursework under guidance of Dr. Gagan Deep Arora and department faculty with team collaboration.",
      category: "Natural Language Processing",
      award: null,
      gradient: "from-green-500 to-teal-600",
      icon: "📚",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:k_IJM867U9cC"
    },
    {
      title: "VMatter: AI-Enabled IoT-Based Patient Monitoring and Room Automation",
      description: "Developed during TechnoHacks Hackathon, December 2024, Hyderabad. Secured 3rd place. Still Under Publication.",
      category: "IoT & Healthcare",
      award: "3rd Place - TechnoHacks",
      gradient: "from-red-500 to-pink-600",
      icon: "🏥",
      link: "#" // Since this is still under publication
    },
    {
      title: "Enhanced Model for Mango Detection and Quality Classification Using Optimized Feature Extraction Techniques",
      description: "Novel initiative under department faculty guidance, especially Manish Sir (Associate Professor, AIML), addressing agricultural challenges.",
      category: "Computer Vision",
      award: null,
      gradient: "from-green-400 to-yellow-500",
      icon: "🥭",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:maZDTaKrznsC"
    },
    {
      title: "Unveiling the Potential of Machine Learning: Harnessing Machine Learning for Enhanced Coronary Heart Disease Detection and Intervention",
      description: "Product Realization course (2-2 Semester) under department faculty guidance, with special support from Manish Sir and HOD Gagandeep Arora Sir.",
      category: "Healthcare AI",
      award: null,
      gradient: "from-red-400 to-purple-500",
      icon: "❤️",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:TFP_iSt0sucC"
    },
    {
      title: "Sentiment Analysis of Machine Learning Algorithms: A Transformer-Based Approach",
      description: "Student Expo project during 3rd year, 3-1 semester, carried out under guidance of department faculty members.",
      category: "NLP & Sentiment Analysis",
      award: null,
      gradient: "from-purple-500 to-blue-600",
      icon: "💭",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:isC4tDSrTZIC"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            7 published research papers spanning AI, ML, IoT, and healthcare with recognition for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredPaper(index)}
              onMouseLeave={() => setHoveredPaper(null)}
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 hover:bg-gray-800/50">
                {/* Award badge */}
                {paper.award && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>{paper.award}</span>
                    </div>
                  </div>
                )}

                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-400">
                    {paper.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${paper.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg transform transition-transform duration-300 ${hoveredPaper === index ? 'scale-110 rotate-12' : ''}`}>
                    {paper.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-3">
                  {paper.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                  {paper.description}
                </p>

                {/* Action button */}
                <div className="mt-auto">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-105"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Paper</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${paper.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="https://scholar.google.com/citations?user=SDVnhIYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Publications</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
