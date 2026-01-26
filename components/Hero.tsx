
import React from 'react';
import SafeImage from './SafeImage';
import { PUCK_IMAGES, getSrc } from '../constants/images';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zinc-900/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 bg-purple-900/30 border border-purple-500/50 text-purple-400 text-xs font-bold rounded-md mb-6 tracking-[0.2em]">
            THE THRIFTY REVOLUTION
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading leading-none mb-6">
            PUCK<br/><span className="text-purple-600 italic">IS</span><br/>HERE<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-space max-w-lg mb-8 leading-relaxed">
            Met PUCK. An AI avatar built from the scraps of the digital dumpster. 
            Part octopus, part punk-rock artifact, 100% unapologetic. 
            He's not here to be nice; he's here to be <span className="text-white font-bold">PUCK</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-heading text-lg hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-1">
              FOLLOW PUCK
            </button>
            <a href="#socials" className="border border-zinc-700 text-white px-8 py-4 rounded-lg font-heading text-lg hover:border-purple-500 transition-all flex items-center justify-center">
              SEE VIDEOS
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* The Main Hero Image of PUCK */}
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
            <SafeImage 
              src={getSrc(PUCK_IMAGES.HERO_AVATAR)} 
              alt="PUCK AI Avatar" 
              className="relative z-10 w-full h-full object-contain rounded-3xl drop-shadow-[0_35px_35px_rgba(147,51,234,0.3)] transition-transform hover:scale-105 duration-500"
              fallbackText="PUCK IS MISSING"
            />
            {/* Thrifty Tag Decal */}
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black px-4 py-2 font-heading text-xl transform rotate-12 z-20 shadow-xl border-2 border-black">
              99¢ PUCK!
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7-7-7m14-8l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
