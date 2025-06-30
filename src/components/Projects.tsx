import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-green">my</span>
            <span className="text-text-primary">.projects</span>
            <span className="text-cyber-blue">()</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A collection of games and interactive experiences built with Unity, featuring VR, Web3, and cross-platform technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-card rounded-lg border border-dark-border overflow-hidden hover:border-cyber-blue/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyber-blue/10 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-dark-border">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <button className="text-text-secondary hover:text-cyber-blue transition-colors duration-200">
                      <Github size={18} />
                    </button>
                    <button className="text-text-secondary hover:text-cyber-green transition-colors duration-200">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full font-mono">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Platforms */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyber-green mb-2">Platforms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 bg-dark-bg text-text-secondary text-xs rounded border border-dark-border"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-cyber-blue mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <a
            href="https://github.com/YashD007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-green text-dark-bg font-semibold rounded-md hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;