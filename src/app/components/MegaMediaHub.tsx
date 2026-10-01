"use client";

import React from "react";
import { Youtube, ExternalLink } from "lucide-react";

interface MediaAsset {
  id: string;
  title: string;
  source: string; 
  description: string;
  embedUrl: string;
  watchUrl: string;
}

const VIDEO_RESOURCES: MediaAsset[] = [
  {
    id: "hydraulic-grates",
    title: "Hydraulic Interception Lab Test",
    source: "Federal Highway Admin",
    description: "Fluid dynamic test analyzing parallel & curved bar matrices under street surface flows.",
    embedUrl: "https://www.youtube.com/embed/-TLP3uBB55o?start=785",
    watchUrl: "https://www.youtube.com/watch?v=-TLP3uBB55o&t=785s"
  },
  {
    id: "fdm-foundry",
    title: "FDM Tooling & Pattern Modeling",
    source: "Additive Manufacturing",
    description: "Layered thermoplastic matrices constructing precision tooling patterns from CAD.",
    embedUrl: "https://www.youtube.com/embed/WHO6G67GJbM",
    watchUrl: "https://www.youtube.com/watch?v=WHO6G67GJbM"
  },
  {
    id: "iron-casting",
    title: "Ductile Iron Induction Melting",
    source: "Metallurgical Hearth",
    description: "Electric induction furnace melting with nodular graphite inoculation for high tensile strength.",
    embedUrl: "https://www.youtube.com/embed/WHO6G67GJbM",
    watchUrl: "https://www.youtube.com/watch?v=WHO6G67GJbM"
  },
  {
    id: "load-testing",
    title: "Proof Load Stress Testing",
    source: "AASHTO H-20 / F900",
    description: "Hydraulic press simulation testing castings under cyclic 90-ton proof wheel loads.",
    embedUrl: "https://www.youtube.com/embed/WHO6G67GJbM",
    watchUrl: "https://www.youtube.com/watch?v=WHO6G67GJbM"
  }
];

export default function MegaMediaHub() {
  return (
    <section className="bg-white text-[#0a0a0a] py-8 md:py-10 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- HEADER LOGISTICS SECTION --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Technical Streaming Terminal
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a]">
              Simulation <span className="text-[#CC0000]">& Lab Feeds</span>
            </h2>
          </div>
          <p className="text-black text-xs sm:text-sm font-light leading-relaxed max-w-md">
            Live technical benchmarks and simulation streams visualizing foundry dynamics and tooling cycles.
          </p>
        </div>

        {/* --- 4 VIDEOS IN A ROW (COMPACT MINIMALISTIC) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {VIDEO_RESOURCES.map((video) => (
            <div
              key={video.id}
              className="flex flex-col justify-between bg-gray-50 border border-gray-200 p-3 group hover:border-[#CC0000] hover:bg-white transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Compact Video Frame */}
                <div className="relative w-full aspect-video bg-black border border-gray-200 overflow-hidden mb-2.5">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover border-none"
                  />
                </div>

                {/* Minimal Header & Source */}
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#CC0000] font-bold block mb-0.5">
                  {video.source}
                </span>
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#0a0a0a] group-hover:text-[#CC0000] transition-colors line-clamp-1 mb-1">
                  {video.title}
                </h3>
                <p className="text-xs text-black font-light leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </div>

              {/* Minimal Footer */}
              <div className="pt-2 mt-2.5 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-1 text-black text-[10px] font-mono uppercase">
                  <Youtube className="w-3.5 h-3.5 text-[#CC0000]" />
                  <span>HD Stream</span>
                </div>
                <a
                  href={video.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-[#CC0000] hover:text-black uppercase tracking-wider transition-colors"
                >
                  <span>Watch</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}