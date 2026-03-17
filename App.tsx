
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';

/**
 * PUCK.YOU CONFIGURATION
 * Edit these variables to update the site assets and links.
 */
const CONFIG = {
  SPLASH_IMAGE: '/hero_art.jpg',
  SPLASH_AUDIO: '/splash_audio.mp3',
  TRAILER_VIDEO: '/trailer.mp4',
  TRAILER_YOUTUBE_URL: 'https://youtube.com/shorts/rFicbjxdqkI?si=KtjFXmZel2oItqxW',
  TRAILER_EMBED_URL: 'https://www.youtube.com/embed/rFicbjxdqkI?autoplay=1&mute=1&loop=1&playlist=rFicbjxdqkI&controls=1&rel=0',
  GAME_URL: 'https://puckyou.netlify.app',
  YOUTUBE_URL: 'https://youtube.com/@robocowden?si=RhBwmC1M9xrTuyU5'
};

const App: React.FC = () => {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const handlePlayNow = () => {
    // Open the existing HTML game file in a new tab/full screen
    window.open(CONFIG.GAME_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white overflow-hidden">
      {!isSplashComplete && (
        <SplashScreen 
          onComplete={() => setIsSplashComplete(true)} 
          logoUrl={CONFIG.SPLASH_IMAGE}
          audioUrl={CONFIG.SPLASH_AUDIO}
        />
      )}

      {isSplashComplete && (
        <Home 
          onPlay={handlePlayNow} 
          youtubeUrl={CONFIG.YOUTUBE_URL} 
          trailerVideoUrl={CONFIG.TRAILER_VIDEO}
          trailerYoutubeUrl={CONFIG.TRAILER_YOUTUBE_URL}
          trailerEmbedUrl={CONFIG.TRAILER_EMBED_URL}
        />
      )}
    </div>
  );
};

export default App;
