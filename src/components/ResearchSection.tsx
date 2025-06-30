
import React, { useState } from 'react';
import { Star, Award, Book } from 'lucide-react';

const ResearchSection = () => {
  const [hoveredPaper, setHoveredPaper] = useState<number | null>(null);

  const papers = [
    {
      title: "Precision Land Use and Land Cover Mapping with a High-Accuracy Time Series LSTM Model",
      authors: "Under guidance of Dr. R.V. Prakash and Dr. Srinivas Aluvala",
      award: "Best Research Paper Award",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:M3NEmzRMIkIC",
      category: "AI/ML",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Optimizing Marketing Strategies: Predicting Customer Personality using Advanced Machine Learning Models",
      authors: "Under guidance of Dr. Gagan Deep Arora (HOD)",
      award: null,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:bEWYMUwI8FkC",
      category: "ML",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Developing an AI-Based Library Assistant: Enhancing Book Retrieval with Natural Language Processing",
      authors: "Major project under Dr. Gagan Deep Arora (HOD)",
      award: null,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:k_IJM867U9cC",
      category: "NLP",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "VMatter: AI-Enabled IoT-Based Patient Monitoring and Room Automation",
      authors: "TechnoHacks Hackathon (3rd Place)",
      award: "3rd Place Winner",
      link: "#",
      category: "IoT/AI",
      gradient: "from-green-400 to-teal-500",
      status: "In Publication (Springer)"
    },
    {
      title: "Enhanced Model for Mango Detection and Quality Classification Using Optimized Feature Extraction",
      authors: "Under guidance of Manish Sir (Associate Professor, AIML)",
      award: null,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:maZDTaKrznsC",
      category: "Computer Vision",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Unveiling the Potential of Machine Learning: Enhanced Coronary Heart Disease Detection",
      authors: "Under guidance of Dr. Gagan Deep Arora and Manish Sir",
      award: null,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:TFP_iSt0sucC",
      category: "Healthcare AI",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "Sentiment Analysis of Machine Learning Algorithms: A Transformer-Based Approach",
      authors: "Student Expo Project (3rd Year)",
      award: null,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SDVnhIYAAAAJ&citation_for_view=SDVnhIYAAAAJ:isC4tDSrTZIC",
      category: "NLP",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Cutting-edge research in AI, ML, and emerging technologies with published papers and award recognition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredPaper(index)}
              onMouseLeave={() => setHoveredPaper(null)}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 hover:bg-gray-800/50">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 bg-gradient-to-r ${paper.gradient} rounded-full text-xs font-semibold text-white`}>
                    {paper.category}
                  </span>
                  {paper.award && (
                    <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-xs font-medium">Award Winner</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {paper.title}
                </h3>

                {/* Authors */}
                <p className="text-gray-400 mb-4 text-sm">
                  {paper.authors}
                </p>

                {/* Award info */}
                {paper.award && (
                  <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-medium text-sm">{paper.award}</span>
                    </div>
                  </div>
                )}

                {/* Status */}
                {paper.status && (
                  <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <span className="text-blue-400 font-medium text-sm">{paper.status}</span>
                  </div>
                )}

                {/* Action button */}
                <div className="mt-6">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-105"
                  >
                    <Book className="w-4 h-4" />
                    <span>Read Paper</span>
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
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Star className="w-5 h-5" />
            <span>View Google Scholar Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
