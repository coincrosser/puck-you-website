
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INTRO', href: '#intro' },
    { name: 'FACES', href: '#gallery' },
    { name: 'WATCH', href: '#socials' },
    { name: 'ROADMAP', href: '#roadmap' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-purple-900/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="font-heading text-2xl md:text-3xl tracking-tighter text-white hover:text-purple-500 transition-colors">
          PUCK<span className="text-purple-600">.</span>YOU
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="font-space text-sm font-bold tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a 
          href="#roadmap" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-all transform hover:scale-105"
        >
          JOIN THE PLAN
        </a>
      </div>
    </header>
  );
};

export default Header;
