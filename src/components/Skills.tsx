import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-blue">tech</span>
            <span className="text-text-primary">Stack</span>
            <span className="text-cyber-green">.skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-dark-card rounded-lg border border-dark-border p-6 hover:border-cyber-blue/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyber-blue/10"
            >
              <h3 className="text-lg font-bold text-cyber-blue mb-4 border-b border-dark-border pb-2">
                {skillCategory.category}
              </h3>
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-dark-bg rounded border border-dark-border hover:border-cyber-green/50 transition-colors duration-200"
                  >
                    <span className="text-text-primary font-mono text-sm">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-cyber-green' : 'bg-dark-border'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <div className="bg-dark-card rounded-lg border border-dark-border p-8">
            <h3 className="text-xl font-bold text-cyber-green mb-4">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Unity 2D/3D',
                'VR/AR Development',
                'Web3 Integration',
                'C# Programming',
                'AWS Cloud Services',
                'Performance Optimization',
                'Cross-platform Development',
                'Version Control (Git)',
                'WebGL Deployment',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 text-text-primary rounded-full border border-cyber-blue/30 font-mono text-sm hover:from-cyber-blue/30 hover:to-cyber-green/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;