"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Droplet, Activity, ShieldCheck, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HighFlowGrates() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Hydraulic Performance Logs
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              High Flow Grates & <span className="text-[#CC0000]">Drainage Systems</span>
            </h2>
          </div>
          <p className="text-black text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            Engineered high-velocity runoff interception matrices with minimized fluid turbulence and 100% frontal-flow containment.
          </p>
        </div>

        {/* --- MAIN ARCHITECTURE DISPLAY (IMAGE LEFT / CONTENT RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch w-full">

          {/* LEFT COLUMN: INTERACTIVE VIDEO / LAB DEMO PREVIEW (4 Cols) */}
          <div className="lg:col-span-4 w-full flex flex-col justify-between gap-2.5">
            <div
              className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-[230px] rounded-none overflow-hidden border border-gray-200 bg-[#0a0a0a] flex flex-col justify-between p-3 group hover:border-[#CC0000] transition-colors duration-300"
            >
              {/* Continuous Autoplay Video Element */}
              <video
                ref={videoRef}
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/trench/Trench_500_Animation.498.mp4`}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />

              {/* Ambient Dark Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />

              {/* Floating Top Indicator */}
              <div className="relative z-20 self-start bg-[#CC0000] text-white px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider font-bold">
                Hydraulic Simulation
              </div>

              {/* Lab Outbound Anchor */}
              <a
                href="https://youtu.be/-TLP3uBB55o"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 self-start inline-flex items-center gap-1.5 text-[11px] font-bold text-white hover:text-[#CC0000] transition-colors border-b border-dashed border-white/60 pb-0.5 mt-auto"
              >
                Watch Lab Demonstration <ExternalLink className="w-3 h-3" />
              </a>

              {/* Blueprint Corner Accents */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-500 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-500 z-20 pointer-events-none" />
            </div>

            {/* Action Trigger */}
            <div className="w-full">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-[#0a0a0a] hover:bg-[#CC0000] text-white font-black uppercase tracking-wider text-xs h-9 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                  Request High-Flow Hydraulic Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: ANALYTICAL PERFORMANCE BULLETS (8 Cols) */}
          <div className="lg:col-span-8 space-y-2.5 w-full flex flex-col justify-between">

            {/* Feature 1 */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-300">
              <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#CC0000]">
                <Droplet className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                  High Capacity Inlets for Extra Drainage
                </h4>
                <p className="text-xs text-black font-light leading-relaxed">
                  Engineered to capture maximum runoff volume, clearing pooling surface water rapidly during critical peak downpour events.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-300">
              <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#CC0000]">
                <Activity className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                  Hydraulically Efficient Cast Geometry
                </h4>
                <p className="text-xs text-black font-light leading-relaxed">
                  Advanced casting geometry structures reduce fluid turbulence, driving water down into system infrastructure networks smoothly with minimized resistance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-300">
              <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#CC0000]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                  100% Frontal-Flow Interception
                </h4>
                <p className="text-xs text-black font-light leading-relaxed">
                  The complete horizontal casting matrix barrier alignment blocks bypass flow entirely, guaranteeing all surface water heading towards the grate is safely contained.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* --- BOTTOM ROW: 4 CASTING SPECS MATRIX CARDS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-gray-200 w-full">

          {/* Spec 1: Standard Flat Matrix */}
          <div className="bg-gray-50 border border-gray-100 p-3 flex flex-col justify-between group rounded-none hover:bg-white hover:border-[#CC0000] transition-all duration-300">
            <span className="text-[9px] font-mono tracking-widest text-black uppercase font-bold block mb-2">
              Spec 01 // Inline Profile
            </span>
            <div className="w-full h-24 relative bg-white border border-gray-100 rounded-none overflow-hidden mb-2 p-1.5 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image5.jpeg`}
                alt="Standard Flat High Flow Grate"
                fill
                className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-black uppercase tracking-wide group-hover:text-[#CC0000] transition-colors truncate">
              Standard Flat Grid
            </p>
          </div>

          {/* Spec 2: Single Rear Hood */}
          <div className="bg-gray-50 border border-gray-100 p-3 flex flex-col justify-between group rounded-none hover:bg-white hover:border-[#CC0000] transition-all duration-300">
            <span className="text-[9px] font-mono tracking-widest text-black uppercase font-bold block mb-2">
              Spec 02 // Rear Hood
            </span>
            <div className="w-full h-24 relative bg-white border border-gray-100 rounded-none overflow-hidden mb-2 p-1.5 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image14.jpeg`}
                alt="Rear-Curb Deflection Casting"
                fill
                className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-black uppercase tracking-wide group-hover:text-[#CC0000] transition-colors truncate">
              Rear-Curb Deflector
            </p>
          </div>

          {/* Spec 3: Multi-Window Curb Port */}
          <div className="bg-gray-50 border border-gray-100 p-3 flex flex-col justify-between group rounded-none hover:bg-white hover:border-[#CC0000] transition-all duration-300">
            <span className="text-[9px] font-mono tracking-widest text-black uppercase font-bold block mb-2">
              Spec 03 // Ported Curb
            </span>
            <div className="w-full h-24 relative bg-white border border-gray-100 rounded-none overflow-hidden mb-2 p-1.5 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image18.jpeg`}
                alt="High-Velocity Integrated Weir Unit"
                fill
                className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-black uppercase tracking-wide group-hover:text-[#CC0000] transition-colors truncate">
              Integrated Weir Unit
            </p>
          </div>

          {/* Spec 4: Heavy-Duty Structural Installation Assembly */}
          <div className="bg-gray-50 border border-gray-100 p-3 flex flex-col justify-between group rounded-none hover:bg-white hover:border-[#CC0000] transition-all duration-300">
            <span className="text-[9px] font-mono tracking-widest text-black uppercase font-bold block mb-2">
              Spec 04 // Complete Assembly
            </span>
            <div className="w-full h-24 relative bg-white border border-gray-100 rounded-none overflow-hidden mb-2 p-1.5 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/INLET/Curb_Inlet_renders.1246.png`}
                alt="Complete High Flow Catch Basin Assembly Frame"
                fill
                className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-black uppercase tracking-wide group-hover:text-[#CC0000] transition-colors truncate">
              Catch Basin Assembly
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}