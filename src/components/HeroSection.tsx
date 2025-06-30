import React, { useEffect, useRef } from 'react';
import { Github, Mail, Download, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/aryanadla' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/adla-aryan-aa4049216/' },
    { name: 'Email', icon: Mail, url: 'mailto:aryanadla446@gmail.com' },
    { name: 'Resume', icon: Download, url: '#' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 z-10"></div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            <div className="bg-gray-900 rounded-full p-8">
              <Avatar className="w-32 h-32">
                <AvatarImage 
                  src="/profile.jpg" 
                  alt="Adla Aryan"
                  className="object-cover"
                />
                <AvatarFallback className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 text-4xl font-bold text-white">
                  AA
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-scale-in">
          Adla Aryan
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Turning cloud, AI, and DevOps into intelligent solutions
        </p>
        
        <p className="text-lg text-cyan-400 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Cloud Engineer | Backend Dev | AI-Ops Enthusiast
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              className="group relative px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <div className="flex items-center space-x-2">
                <link.icon className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a
            href="#about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
