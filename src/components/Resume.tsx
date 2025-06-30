import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-dark-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-blue">download</span>
            <span className="text-text-primary">Resume</span>
            <span className="text-cyber-green">.pdf</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>

        <div className="bg-dark-card rounded-lg border border-dark-border p-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyber-blue/20 rounded-full mb-4">
              <FileText className="text-cyber-blue" size={40} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Professional Resume</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Download my complete resume with detailed work experience, education, projects, and technical skills. 
              Perfect for recruiters, hiring managers, and potential collaborators.
            </p>
          </div>

          <div className="bg-dark-bg rounded-lg border border-dark-border p-6 mb-8">
            <div className="font-mono text-sm text-left">
              <div className="text-cyber-green mb-2">
                <span className="text-text-secondary">const</span> resume = {'{'}
              </div>
              <div className="pl-4 space-y-1 text-text-secondary">
                <div><span className="text-cyber-blue">format:</span> <span className="text-cyber-green">"PDF"</span>,</div>
                <div><span className="text-cyber-blue">size:</span> <span className="text-cyber-green">"A4 Standard"</span>,</div>
                <div><span className="text-cyber-blue">sections:</span> [<span className="text-cyber-green">"Experience", "Projects", "Skills", "Education"</span>],</div>
                <div><span className="text-cyber-blue">updated:</span> <span className="text-cyber-green">"January 2025"</span>,</div>
                <div><span className="text-cyber-blue">optimized:</span> <span className="text-cyber-green">true</span></div>
              </div>
              <div className="text-cyber-green">{'}'}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Yash_Dhanawde.pdf"
              download="Yash_Dhanawde_Resume.pdf"
              className="inline-flex items-center px-8 py-3 bg-cyber-blue text-dark-bg font-semibold rounded-md hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/25"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </a>
            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-cyber-green text-cyber-green font-semibold rounded-md hover:bg-cyber-green hover:text-dark-bg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink size={20} className="mr-2" />
              View Online
            </a> */}
          </div>

          <div className="mt-6 text-sm text-text-secondary">
            <p>Resume is regularly updated with latest projects and achievements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;