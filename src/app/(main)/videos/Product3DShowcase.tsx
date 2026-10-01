'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Rotate3d,
  ChevronRight,
  Layers,
  Sparkles,
  ShieldCheck,
  Activity,
  FileText
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface PopularProductVideo {
  id: number;
  badge: string;
  title: string;
  category: string;
  description: string;
  materialStandard: string;
  loadClass: string;
  duration: string;
  type: string;
  src: string;
  thumbnail: string;
}

const MOST_POPULAR_PRODUCTS: PopularProductVideo[] = [
  {
    id: 1,
    badge: "#1 Most Popular",
    title: "Pro Series Paving Risers",
    category: "Highway & Asphalt Inlets",
    description: "Our top-selling precision ductile iron height-adjustment riser system. Eliminates pavement tear-outs during resurfacing, saving up to 60% in municipal labor.",
    materialStandard: "ASTM A536 Grade 80-55-06",
    loadClass: "AASHTO H-20 / HS-20 Traffic Rated",
    duration: "0:45",
    type: "360° ROTATION",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/paving_riser/paving-riser-1.5213.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving_riser_1.5200.png`
  },
  {
    id: 2,
    badge: "Top Trench System",
    title: "Heavy-Duty Trench Drain 500",
    category: "Continuous Linear Drainage",
    description: "Engineered monolithic ductile iron trench matrix designed for rapid fluid interception across airport aprons, industrial docks, and highway toll plazas.",
    materialStandard: "EN 1433 / ASTM A48 Class 35B",
    loadClass: "F900 (90-Ton Proof Load)",
    duration: "1:15",
    type: "3D SIMULATION",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/trench/Trench_500_Animation.498.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/pre-trench-01.JPG`
  },
  {
    id: 3,
    badge: "Municipal Standard",
    title: "High-Flow Hydraulic Pipe Grates",
    category: "Stormwater Management",
    description: "High-capacity drainage inlet grate with aerodynamic vane geometry that optimizes surface inflow while blocking debris accumulation in urban catch basins.",
    materialStandard: "Ductile Iron 65-45-12",
    loadClass: "D400 Heavy Municipal Class",
    duration: "0:30",
    type: "HYDRO-DYNAMIC 3D",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/products/pipe_grate.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/products/pipe_grid.jpeg`
  },
  {
    id: 4,
    badge: "High-Load Security",
    title: "Heavy Cast Hatches & Utility Covers",
    category: "Sub-Surface Infrastructure",
    description: "Finite Element Analysis (FEA) verified access hatches and security covers engineered for zero deflection under severe cyclic wheel loading.",
    materialStandard: "Nodular Ductile Iron ASTM A536",
    loadClass: "100-Ton Severe Proof Load",
    duration: "0:30",
    type: "FEA STRESS ANALYSIS",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/Custom_Foundry_Components.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/HATCHES_COVER.png`
  }
];

export default function Product3DShowcase() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = MOST_POPULAR_PRODUCTS[activeVideoIndex];

  // Logic: Handle automatic transitions and infinite looping
  const handleVideoEnd = () => {
    setActiveVideoIndex((prev) => (prev + 1) % MOST_POPULAR_PRODUCTS.length);
  };

  // Effect: Guarantees continuous autoplay configurations on active state alterations
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay context wait:", err);
      });
    }
  }, [activeVideoIndex]);

  return (
    <section className="bg-zinc-950 text-white py-8 border-t border-zinc-900 w-full relative overflow-hidden">
      {/* Subtle Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-6 w-full border-b border-zinc-900 pb-2">
          <div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Most Popular Products of <br className="hidden sm:inline" />
              <span className="text-[#CC0000]  ">
                Mega Foundries
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button className="gap-2 font-black uppercase tracking-widest px-6 h-11 bg-[#CC0000] hover:bg-[#b01e1d] text-white text-xs rounded-none transition-colors">
                <FileText className="w-4 h-4" />
                Request CAD / BIM Files
              </Button>
            </Link>
          </div>
        </div>

        {/* --- MAIN PLAYER & PLAYLIST DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">

          {/* LEFT: Main Interactive Video Showcase (8 Cols) */}
          <div className="lg:col-span-8 w-full space-y-4">
            <div className="relative aspect-video bg-black rounded-none border border-zinc-800 shadow-2xl overflow-hidden group">

              <video
                ref={videoRef}
                key={activeVideo.src}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Top-Left Live Status Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-md border border-zinc-800 px-3 py-1.5 shadow-lg">
                <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-ping shrink-0" />
                <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
                  {activeVideo.badge} • 0{activeVideoIndex + 1}/0{MOST_POPULAR_PRODUCTS.length}
                </span>
              </div>

              {/* Top-Right Visualization Mode */}
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-sm border border-zinc-800 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[#CC0000] font-bold">
                {activeVideo.type}
              </div>
            </div>

            {/* Bottom Technical Specifications Drawer */}
            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-none space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[#CC0000] border-[#CC0000] bg-[#CC0000]/10 rounded-none uppercase text-[10px] tracking-wider font-black">
                    {activeVideo.category}
                  </Badge>
                  <span className="text-xs text-white font-mono tracking-wide">
                    {activeVideo.duration} Run Duration
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-white">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" /> {activeVideo.materialStandard}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-white" /> {activeVideo.loadClass}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {activeVideo.title}
                </h3>
                <p className="text-white text-sm font-light leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Popular Product Playlist Lineup (4 Cols) */}
          <div className="lg:col-span-4 bg-zinc-900/30 rounded-none border border-zinc-800 p-5 flex flex-col justify-between w-full space-y-6">
            <div className="w-full">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <h4 className="text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#CC0000]" />
                  Popular Lineup Playlist
                </h4>
                <span className="text-[10px] font-mono text-white uppercase">
                  Auto-playing sequence
                </span>
              </div>

              <div className="space-y-3 overflow-y-auto pr-1 max-h-[480px]">
                {MOST_POPULAR_PRODUCTS.map((video, idx) => {
                  const isCurrent = activeVideoIndex === idx;
                  return (
                    <div
                      key={video.id}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={cn(
                        "flex gap-3.5 p-3 rounded-none cursor-pointer transition-all border group items-center",
                        isCurrent
                          ? "bg-[#CC0000]/15 border-[#CC0000] shadow-md"
                          : "bg-black/70 border-zinc-900 hover:border-zinc-700 hover:bg-zinc-900/40"
                      )}
                    >
                      {/* Thumbnail Container */}
                      <div className="relative w-24 h-16 bg-white rounded-none overflow-hidden shrink-0 flex items-center justify-center border border-zinc-800 p-1">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-contain p-1 transition-transform group-hover:scale-105"
                        />
                        {isCurrent && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                            <div className="w-2.5 h-2.5 bg-[#CC0000] rounded-full animate-ping" />
                          </div>
                        )}
                      </div>

                      {/* Info Text Element */}
                      <div className="flex flex-col justify-center min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-[#CC0000] font-bold">
                            {video.badge}
                          </span>
                          <span className="text-[9px] font-mono text-white">
                            {video.duration}
                          </span>
                        </div>
                        <h5 className={cn(
                          "font-bold text-xs uppercase tracking-wide leading-tight line-clamp-1 transition-colors",
                          isCurrent ? "text-white font-black" : "text-white group-hover:text-white"
                        )}>
                          {video.title}
                        </h5>
                        <p className="text-[11px] text-white line-clamp-1 font-light mt-0.5">
                          {video.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quick Action */}
            <div className="pt-4 border-t border-zinc-800 text-left w-full space-y-2">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-wider text-xs h-11 rounded-none transition-all flex items-center justify-center gap-2">
                  Get Bulk Quote For Popular Lineup <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}