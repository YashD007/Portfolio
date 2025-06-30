import React from 'react';
import { MapPin, Award, Code, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Based in Mumbai, India',
      description: 'Working with global teams and clients',
    },
    {
      icon: Gamepad2,
      title: 'VR & WebGL Specialist',
      description: 'Quest 2 optimization and WebXR development',
    },
    {
      icon: Code,
      title: 'AWS Cloud Expert',
      description: 'S3, EC2, CloudFront deployment experience',
    },
    {
      icon: Award,
      title: 'Unity Certification',
      description: 'Pursuing Professional Level certification',
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-green">about(</span>
            <span className="text-text-primary">me</span>
            <span className="text-cyber-green">)</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6">
            <div className="font-mono text-cyber-green text-sm">
              <span className="text-text-secondary">const</span> developer = {'{'}
            </div>
            <div className="pl-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                <span className="text-cyber-blue">name:</span> <span className="text-cyber-green">"Yash Dhanawde"</span>,
              </p>
              <p>
                <span className="text-cyber-blue">role:</span> <span className="text-cyber-green">"Unity Game Developer"</span>,
              </p>
              <p>
                <span className="text-cyber-blue">location:</span> <span className="text-cyber-green">"Mumbai, India"</span>,
              </p>
              <p>
                <span className="text-cyber-blue">specialization:</span> [
                <span className="text-cyber-green">"VR/WebXR", "Web3", "Cross-platform"</span>],
              </p>
              <p>
                <span className="text-cyber-blue">passion:</span> <span className="text-cyber-green">"Performance optimization & immersive mechanics"</span>,
              </p>
              <p>
                <span className="text-cyber-blue">currentFocus:</span> <span className="text-cyber-green">"Unity Certified Programmer (Professional)"</span>
              </p>
            </div>
            <div className="font-mono text-cyber-green text-sm">
              {'}'}
            </div>

            <div className="mt-8 p-6 bg-dark-card rounded-lg border border-dark-border">
              <p className="text-text-primary leading-relaxed">
                I'm a passionate Unity Game Developer specializing in VR (Quest/WebXR), WebGL, Web3, and 
                cross-platform game development. With strong experience in Amazon AWS for game deployment 
                and asset hosting, I contribute actively to GitHub workflows and project pipelines.
              </p>
              <p className="text-text-secondary mt-4">
                My expertise lies in performance optimization, level design, and creating immersive gaming 
                experiences that push the boundaries of what's possible in virtual environments.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-dark-card rounded-lg border border-dark-border hover:border-cyber-blue/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyber-blue/10"
                >
                  <div className="flex items-center mb-3">
                    <Icon className="text-cyber-blue mr-3" size={24} />
                    <h3 className="text-text-primary font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;