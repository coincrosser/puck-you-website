
import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ src, alt, className, fallbackText = "IMAGE LOST", ...props }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-900 border-2 border-dashed border-zinc-800 text-zinc-600 font-heading p-4 text-center ${className}`}>
        <div className="text-4xl mb-2 opacity-20">?</div>
        <div className="text-[10px] tracking-tighter uppercase">{fallbackText}</div>
        <div className="mt-2 text-[8px] opacity-30 font-space uppercase">Check Asset Path</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        {...props}
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

export default SafeImage;
