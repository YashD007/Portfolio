import React from 'react';
import { Download, Github, Mail, ArrowDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero: React.FC = () => {
  const techWords = ['Unity', 'WebGL', 'VR', 'Web3', 'C#', 'AWS'];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-cyber-green/30 animate-float">
        <div className="font-mono text-sm">&lt;/Unity&gt;</div>
      </div>
      <div className="absolute top-40 right-20 text-cyber-blue/30 animate-float" style={{ animationDelay: '2s' }}>
        <div className="font-mono text-sm">function(VR)</div>
      </div>
      <div className="absolute bottom-40 left-20 text-cyber-green/30 animate-float" style={{ animationDelay: '4s' }}>
        <div className="font-mono text-sm">class GameDev</div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Greeting */}
        <div className="text-cyber-green font-mono text-lg mb-4 animate-fade-in">
          <span className="text-text-secondary">const</span> greeting = <span className="text-cyber-green">"Hi, I'm"</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-text-primary">Yash</span>{' '}
          <span className="text-cyber-blue animate-glow">Dhanawde</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-text-secondary mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          I build immersive worlds with code
        </h2>

        {/* Bio Tags */}
        <div className="text-lg md:text-xl mb-8 font-mono animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-cyber-green mb-2">Unity Game Developer | Web3 & VR Specialist | C# Programmer</div>
          <div className="text-text-secondary">
            Specializing in:{' '}
            <TypingAnimation words={techWords} className="text-cyber-blue font-semibold" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="/Yash_Dhanawde.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-cyber-blue text-dark-bg font-semibold rounded-md hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/25"
          >
            <Download size={20} className="mr-2" />
            View Resume
          </a>
          <a
            href="https://github.com/YashD007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-cyber-blue text-cyber-blue font-semibold rounded-md hover:bg-cyber-blue hover:text-dark-bg transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            View GitHub
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 border border-cyber-green text-cyber-green font-semibold rounded-md hover:bg-cyber-green hover:text-dark-bg transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-text-secondary hover:text-cyber-blue transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;