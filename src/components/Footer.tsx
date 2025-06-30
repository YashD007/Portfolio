import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-cyber-blue font-mono">
              <span className="text-cyber-green">&lt;</span>
              YD
              <span className="text-cyber-green">/&gt;</span>
            </div>
          </div>

          {/* Made with love */}
          <div className="flex items-center text-text-secondary text-sm font-mono mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-cyber-blue animate-pulse" />
            <span>using</span>
            <Code size={16} className="mx-1 text-cyber-green" />
            <span>and</span>
            <Coffee size={16} className="mx-1 text-cyber-blue" />
          </div>

          {/* Copyright */}
          <div className="text-text-secondary text-sm font-mono">
            © {currentYear} Yash Dhanawde. All rights reserved.
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-6 border-t border-dark-border text-center">
          <p className="text-text-secondary text-xs font-mono">
            <span className="text-cyber-green">console.log(</span>
            <span className="text-cyber-blue">"Thanks for visiting my portfolio!"</span>
            <span className="text-cyber-green">)</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;