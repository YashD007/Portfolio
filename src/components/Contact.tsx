import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Palette, MapPin, Phone } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
 const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID =   import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userID =  import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const iconMap: { [key: string]: any } = {
    github: Github,
    linkedin: Linkedin,
    palette: Palette,
    mail: Mail,
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-green">get</span>
            <span className="text-text-primary">InTouch</span>
            <span className="text-cyber-blue">()</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Interested in collaborating on a project, have a job opportunity, or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-card rounded-lg border border-dark-border p-8">
            <h3 className="text-xl font-bold text-cyber-blue mb-6 flex items-center">
              <Send size={24} className="mr-2" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-md text-text-primary placeholder-text-secondary focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-md text-text-primary placeholder-text-secondary focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-md text-text-primary placeholder-text-secondary focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

               <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-blue to-cyber-green text-dark-bg font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-dark-card rounded-lg border border-dark-border p-8">
              <h3 className="text-xl font-bold text-cyber-green mb-6 flex items-center">
                <Mail size={24} className="mr-2" />
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-text-secondary">
                  <Mail size={20} className="mr-3 text-cyber-blue" />
                  <a 
                    href="mailto:yashdhanawde2000@gmail.com"
                    className="hover:text-cyber-blue transition-colors duration-200"
                  >
                    yashdhanawde2000@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-text-secondary">
                  <MapPin size={20} className="mr-3 text-cyber-green" />
                  Mumbai, India
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-card rounded-lg border border-dark-border p-8">
              <h3 className="text-xl font-bold text-cyber-blue mb-6">
                Social & Professional
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-dark-bg border border-dark-border rounded-md hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Icon size={24} className="mr-3 text-cyber-blue" />
                      <div>
                        <div className="text-text-primary font-semibold text-sm">{social.platform}</div>
                        <div className="text-text-secondary text-xs">Connect</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-dark-card rounded-lg border border-dark-border p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-cyber-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-cyber-green font-semibold">Currently Available</span>
              </div>
              <p className="text-text-secondary text-sm">
                Open to new opportunities in game development, VR/AR projects, and Web3 gaming initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;