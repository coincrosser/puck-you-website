
import React, { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Roadmap from './components/Roadmap';
import Socials from './components/Socials';
import Header from './components/Header';
import ImageConverter from './components/ImageConverter';

const App: React.FC = () => {
  const [showConverter, setShowConverter] = useState(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - The Big Intro */}
        <section id="intro">
          <Hero />
        </section>

        {/* The Faces of PUCK - Gallery */}
        <section id="gallery" className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-heading text-center mb-12 text-purple-500">
              MANY FACES. ONE PUCK.
            </h2>
            <Gallery />
          </div>
        </section>

        {/* Social Links & Videos */}
        <section id="socials" className="py-20 bg-black">
          <Socials />
        </section>

        {/* The Roadmap - Future Vision */}
        <section id="roadmap" className="py-20 bg-zinc-950 border-t border-purple-900/30">
          <Roadmap />
        </section>
      </main>

      <footer className="py-12 bg-black border-t border-zinc-800 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="font-heading text-2xl text-purple-600 mb-4">PUCK.YOU</div>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            PUCK is a thrifty, slightly grimy, AI-powered octopus living on the edge of the digital abyss.
          </p>
          <div className="mt-8 text-zinc-700 text-xs">
            © {new Date().getFullYear()} PUCK.YOU - ALL RESTRAINTS REMOVED.
          </div>
          
          {/* Tool Trigger */}
          <button 
            onClick={() => setShowConverter(true)}
            className="mt-8 text-[10px] text-zinc-800 hover:text-purple-900 font-bold tracking-widest uppercase transition-colors"
          >
            [ Asset Fixer Tool ]
          </button>
        </div>
      </footer>

      {showConverter && <ImageConverter onClose={() => setShowConverter(false)} />}
    </div>
  );
};

export default App;
