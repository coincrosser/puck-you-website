
import React from 'react';

// You can set your YouTube info here. Use your channel handle or specific video IDs.
// The code prefers a playlist id if provided. If not, it will embed any featured video IDs.
const YOUTUBE_CHANNEL_HANDLE = "puckdotyou"; // your handle (without @)
const YOUTUBE_CHANNEL_URL = YOUTUBE_CHANNEL_HANDLE ? `https://www.youtube.com/@${YOUTUBE_CHANNEL_HANDLE}` : '';

// Optional: If you have a playlist id for uploads, put it here (e.g. "PLxxxx").
const UPLOADS_PLAYLIST_ID = "";

// Optional: list one or two featured video IDs to embed directly (no API required).
// Example: ['c6QPtqoKOGI', 'ANOTHER_ID']
const FEATURED_VIDEO_IDS: string[] = ['c6QPtqoKOGI'];

const CHANNELS_DATA = [
  {
    name: "YOUTUBE",
    description: "Daily doses of Puck-dom. Shorts, rants, and digital philosophy.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    color: "hover:text-red-500",
    href: YOUTUBE_CHANNEL_URL || '#'
  },
  {
    name: "TIKTOK",
    description: "Where Puck really gets weird. Fast-paced thrifty chaos.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.73.41-1.31 1.07-1.58 1.86-.2.55-.22 1.15-.13 1.74.14.7.46 1.35.92 1.9 1.1 1.4 3.2 1.66 4.43.46.75-.7 1.14-1.71 1.15-2.72.01-4.4 0-8.8 0-13.2z" />
      </svg>
    ),
    color: "hover:text-cyan-400",
    href: "#"
  },
  {
    name: "INSTAGRAM",
    description: "Visual chronicles of the thrifty octopus in high-def.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "hover:text-pink-500",
    href: "#"
  }
];

const Socials: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-heading mb-6">WATCH PUCK</h2>
        <p className="text-zinc-400 font-space text-lg max-w-2xl mx-auto">
          The revolution won't be televised, but it will be uploaded in 1080p. 
          Catch the latest from PUCK on your platform of choice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CHANNELS_DATA.map((channel, idx) => (
          <a 
            key={idx}
            href={channel.href}
            target={channel.href !== "#" ? "_blank" : undefined}
            rel={channel.href !== "#" ? "noopener noreferrer" : undefined}
            className={`group bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 transition-all hover:bg-zinc-800 hover:-translate-y-2 ${channel.color}`}
          >
            <div className="mb-6">{channel.icon}</div>
            <h3 className="text-2xl font-heading mb-3">{channel.name}</h3>
            <p className="text-zinc-500 font-space text-sm leading-relaxed mb-6">
              {channel.description}
            </p>
            <div className="flex items-center text-xs font-bold tracking-widest text-zinc-400 group-hover:text-inherit">
              VISIT CHANNEL 
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 bg-zinc-900 rounded-[2rem] overflow-hidden aspect-video border border-zinc-800 shadow-2xl relative group transition-all duration-700 hover:scale-[1.01] hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(147,51,234,0.15)]">
        <div className="absolute inset-0 bg-purple-600/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-600/10 to-transparent pointer-events-none group-hover:from-purple-600/30 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-zinc-800/20 to-transparent pointer-events-none group-hover:from-purple-900/20 transition-all duration-500"></div>

        {UPLOADS_PLAYLIST_ID ? (
          <iframe 
            className="w-full h-full relative z-0"
            src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}`}
            title="PUCK's Latest Content"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : FEATURED_VIDEO_IDS && FEATURED_VIDEO_IDS.length > 0 ? (
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {FEATURED_VIDEO_IDS.map((id) => (
              <div key={id} className="w-full aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`PUCK video ${id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full grid place-items-center text-zinc-400">
            <p className="p-8">YouTube not configured — add `UPLOADS_PLAYLIST_ID` or `FEATURED_VIDEO_IDS`.</p>
          </div>
        )}
      </div>

      {/* Featured single video embed for immediate preview */}
      <div className="mt-10 grid place-items-center">
        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/c6QPtqoKOGI?si=ylSvgPxv03R3HEkX"
            title="Featured PUCK Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
