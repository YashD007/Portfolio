import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-blue">work</span>
            <span className="text-text-primary">Experience</span>
            <span className="text-cyber-green">.history</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-blue transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-cyber-blue rounded-full border-4 border-dark-bg transform md:-translate-x-2 z-10 shadow-lg shadow-cyber-blue/50"></div>

              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-dark-card rounded-lg border border-dark-border p-6 hover:border-cyber-blue/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyber-blue/10">
                  {/* Company & Position */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-text-primary mb-1">{exp.position}</h3>
                    <h4 className="text-cyber-blue font-semibold text-lg">{exp.company}</h4>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center text-cyber-green text-sm mb-4 font-mono">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-text-secondary text-sm leading-relaxed flex items-start">
                        <span className="text-cyber-green mr-2 mt-1.5 flex-shrink-0">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-cyber-blue mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded font-mono border border-cyber-blue/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;