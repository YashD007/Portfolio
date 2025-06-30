import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-dark-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-green">my</span>
            <span className="text-text-primary">Education</span>
            <span className="text-cyber-blue">.path</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-dark-card rounded-lg border border-dark-border p-6 hover:border-cyber-blue/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyber-blue/10"
            >
              <div className="flex items-start mb-4">
                <div className="bg-cyber-blue/20 p-3 rounded-lg mr-4 flex-shrink-0">
                  {edu.id === 'unity-cert' ? (
                    <Award className="text-cyber-blue" size={24} />
                  ) : (
                    <GraduationCap className="text-cyber-blue" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1">{edu.degree}</h3>
                  <h4 className="text-cyber-blue font-semibold">{edu.institution}</h4>
                </div>
              </div>

              <div className="flex items-center text-cyber-green text-sm mb-3 font-mono">
                <Calendar size={16} className="mr-2" />
                {edu.duration}
                {edu.id === 'unity-cert' && (
                  <span className="ml-2 px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded">
                    In Progress
                  </span>
                )}
              </div>

              {edu.description && (
                <p className="text-text-secondary text-sm leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;