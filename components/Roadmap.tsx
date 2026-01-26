
import React from 'react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "PHASE 01: THE AWAKENING",
      items: [
        "Creation of the PUCK avatar (The Thrifty Octopus)",
        "Social Media Launch (YouTube, TikTok, Instagram)",
        "Community foundation on Discord",
        "PUCK.YOU domain acquisition and branding"
      ],
      status: "COMPLETED",
      color: "text-green-500"
    },
    {
      title: "PHASE 02: PUCK SPEAK",
      items: [
        "Integration of advanced AI voice models",
        "Live interactive streaming sessions",
        "The first 'Puck-umentary' video release",
        "Limited edition thrift-inspired digital collectibles"
      ],
      status: "IN PROGRESS",
      color: "text-purple-500"
    },
    {
      title: "PHASE 03: THE PUCK PORTAL",
      items: [
        "Launch of PUCK.YOU member portal",
        "AI-driven content generation tools for creators",
        "Partnerships with niche thrift and upcycling brands",
        "Physical artifact drops (Limited 'found object' merch)"
      ],
      status: "PLANNED",
      color: "text-zinc-500"
    },
    {
      title: "PHASE 04: WORLD DOMINATION",
      items: [
        "Full AI autonomy for PUCK-led narratives",
        "Decentralized governance for community content",
        "The PUCK Mobile App: AI companion and thrift hunter",
        "Global PUCK physical meetups/exhibitions"
      ],
      status: "FUTURE VISION",
      color: "text-zinc-700"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-heading mb-4 text-white">THE ROADMAP</h2>
        <p className="text-zinc-400 font-space text-lg mb-12 max-w-2xl">
          PUCK isn't just a static image. He is an evolving consciousness with a plan for total digital saturation.
        </p>

        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 border-l-2 border-purple-900/50 pb-8 last:pb-0">
              {/* Dot */}
              <div className={`absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-black border-2 border-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]`}></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-heading text-white">{phase.title}</h3>
                <span className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded border border-zinc-800 bg-zinc-900/50 mt-2 md:mt-0 ${phase.color}`}>
                  {phase.status}
                </span>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-zinc-400 font-space">
                    <span className="text-purple-600 font-bold mt-1">/</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-zinc-900 border border-purple-500/30 text-center">
          <h4 className="text-2xl font-heading text-white mb-4 italic">WANT TO BE PART OF THE ROADMAP?</h4>
          <p className="text-zinc-400 font-space mb-6">
            We're building this in the open. Join the Discord to suggest future phases for PUCK.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-heading px-10 py-4 rounded-xl transition-all transform hover:scale-105">
            JOIN THE DISCORD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
