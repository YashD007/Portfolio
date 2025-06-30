import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;