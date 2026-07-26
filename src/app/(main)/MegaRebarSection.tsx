"use client";

import React from "react";
import Image from "next/image";
import { Layers, ShieldCheck, Clock, ArrowUpRight, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MegaRebarSection() {
  return (
    <section className="bg-white text-[#0a0a0a] py-16 font-sans border-b border-gray-100 w-full">
      {/* Absolute strict fluid full width padding bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.4em] font-black text-[#cc2221] block">
                Structural Steel Catalog
              </span>
              {/* Coming Soon Indicator Badge */}
              <span className="bg-[#cc2221] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 font-black flex items-center gap-1.5 animate-pulse">
                <Clock className="w-3 h-3" /> Available Soon
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-none">
              Rebar Section <br />
              <span className="text-[#cc2221]">Reinforcement Bars</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base font-light leading-relaxed max-w-xl">
            High-tensile deformed rebar matrix profiles engineered for extreme tensile load transfer in heavy concrete infrastructure, bridge decks, and vault foundations.
          </p>
        </div>

        {/* --- MAIN CORE ARCHITECTURE DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT COLUMN: CRITICAL PERFORMANCE FEATURES (8 Columns Wide) */}
          <div className="lg:col-span-8 space-y-8 w-full">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#cc2221] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#cc2221] shrink-0">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-1">
                  High Yield Tensile Grade Steel
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Forged to ASTM standards for exceptional stress absorption, resisting shear deformation under continuous heavy municipal wheel loads.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#cc2221] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#cc2221] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-1">
                  Deformed Ribbed Surface Geometry
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Precision engineered surface ribs anchor securely into wet concrete pours, creating maximum mechanical bonding force throughout the substrate structure.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#cc2221] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#cc2221] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-1">
                  Corrosion Protective Coatings
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Optionally available with epoxy or galvanization barriers to protect against chemical degradation, de-icing salts, and ground moisture exposure.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REBAR PREVIEW CARD (4 Columns Wide) */}
          <div className="lg:col-span-4 w-full flex flex-col gap-6 items-center lg:items-end">
            
            <div className="relative w-full aspect-square bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-4 flex items-center justify-center group shadow-inner hover:border-[#cc2221] transition-colors duration-300">
              
              {/* Product Visual */}
              <div className="relative w-full h-full opacity-100">
                <Image 
                  src="/reber.png" 
                  alt="Structural Steel Rebar Section Profile"
                  width={800}
                  height={600}
                  className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-100"
                  priority
                />
              </div>

              {/* Status Badge Overlay on Image */}
              <div className="absolute top-4 left-4 bg-[#0a0a0a] text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 font-bold z-20 border border-zinc-800">
                Production Launch Q4
              </div>

              {/* Technical Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gray-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gray-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gray-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gray-300" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/95 text-[9px] font-mono uppercase font-bold tracking-wider text-zinc-400 text-center py-2 z-20">
                Deformed Rebar Profile // Launching Soon
              </div>
            </div>

            {/* Action Trigger */}
            <div className="w-full">
              <Button className="w-full bg-[#0a0a0a] hover:bg-[#cc2221] text-white font-black uppercase tracking-widest text-xs h-12 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                Pre-Order Rebar Specs <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>

        {/* --- BASE PERFORMANCE SPEC INDEX --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Material Composition</span>
            <span className="text-sm font-black text-[#0a0a0a] uppercase tracking-wide">Grade 60 / Grade 75 Carbon Steel</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Standard Sizes</span>
            <span className="text-sm font-black text-[#0a0a0a] uppercase tracking-wide">#3 to #11 Bar Sizes</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Availability Status</span>
            <span className="text-sm font-black text-[#cc2221] uppercase tracking-wide">In Development // Available Soon</span>
          </div>
        </div>

      </div>
    </section>
  );
}