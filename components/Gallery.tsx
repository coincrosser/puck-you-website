
import React from 'react';
import SafeImage from './SafeImage';
import { PUCK_IMAGES, getSrc } from '../constants/images';

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PUCK_IMAGES.GALLERY.map((img, idx) => (
        <div key={img.id} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all hover:border-purple-500/50">
          <div className="aspect-square overflow-hidden">
            <SafeImage 
              src={getSrc(img)} 
              alt={img.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              fallbackText={`LOST: ${img.tag}`}
            />
          </div>
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-zinc-700 tracking-widest uppercase">
              #{img.tag}
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-lg text-zinc-100 group-hover:text-purple-400 transition-colors uppercase">
              {img.caption}
            </h3>
            <p className="text-zinc-500 text-xs mt-2 font-space">
              Expression Matrix: Verified 100% Puck.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
