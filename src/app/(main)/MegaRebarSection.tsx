"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, ShieldCheck, Clock, ArrowUpRight, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MegaRebarSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-6 md:py-8 font-sans border-b border-zinc-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5 md:space-y-6">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-zinc-800 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block">
                Structural Steel Catalog
              </span>
              <span className="bg-[#CC0000] text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-black flex items-center gap-1 animate-pulse">
                <Clock className="w-2.5 h-2.5" /> Available Soon
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              Rebar Section & <span className="text-[#CC0000]">Reinforcement Bars</span>
            </h2>
          </div>
          <p className="text-white text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            High-tensile deformed rebar matrix profiles engineered for extreme tensile load transfer in heavy concrete infrastructure.
          </p>
        </div>

        {/* --- MAIN CORE ARCHITECTURE DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch w-full">

          {/* LEFT COLUMN: CRITICAL PERFORMANCE FEATURES (8 Cols) */}
          <div className="lg:col-span-8 space-y-3 w-full flex flex-col justify-between">

            {/* Feature 1 */}
            <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-none group hover:border-[#CC0000] hover:bg-zinc-900 transition-all duration-300">
              <div className="w-9 h-9 bg-black border border-zinc-700 flex items-center justify-center text-[#CC0000] shrink-0">
                <Hammer className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-white mb-0.5">
                  High Yield Tensile Grade Steel
                </h4>
                <p className="text-xs text-white leading-relaxed font-light">
                  Forged to ASTM standards for exceptional stress absorption, resisting shear deformation under continuous heavy municipal wheel loads.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-none group hover:border-[#CC0000] hover:bg-zinc-900 transition-all duration-300">
              <div className="w-9 h-9 bg-black border border-zinc-700 flex items-center justify-center text-[#CC0000] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-white mb-0.5">
                  Deformed Ribbed Surface Geometry
                </h4>
                <p className="text-xs text-white leading-relaxed font-light">
                  Precision engineered surface ribs anchor securely into wet concrete pours, creating maximum mechanical bonding force.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-none group hover:border-[#CC0000] hover:bg-zinc-900 transition-all duration-300">
              <div className="w-9 h-9 bg-black border border-zinc-700 flex items-center justify-center text-[#CC0000] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-white mb-0.5">
                  Corrosion Protective Coatings
                </h4>
                <p className="text-xs text-white leading-relaxed font-light">
                  Optionally available with epoxy or galvanization barriers to protect against chemical degradation and ground moisture.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REBAR PREVIEW CARD (4 Cols) */}
          <div className="lg:col-span-4 w-full flex flex-col justify-between gap-3">

            {/* Compact Image Frame */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-[230px] bg-white border border-zinc-800 rounded-none overflow-hidden p-3 flex items-center justify-center group hover:border-[#CC0000] transition-colors duration-300">

              <div className="relative w-full h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber.png`}
                  alt="Structural Steel Rebar Section Profile"
                  fill
                  className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Status Badge Overlay */}
              <div className="absolute top-2 left-2 bg-[#0a0a0a] text-white text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 font-bold z-20 border border-zinc-800">
                Production Q4
              </div>

              {/* Technical Corner Accents */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-400" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-400" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-400" />

              <div className="absolute bottom-2 left-2 right-2 bg-[#0a0a0a]/90 text-[8px] font-mono uppercase font-bold tracking-wider text-white text-center py-1 z-20">
                Deformed Rebar Profile // Launching Soon
              </div>
            </div>

            {/* Action Trigger */}
            <div className="w-full">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-[#CC0000] hover:bg-[#b01e1d] text-white font-black uppercase tracking-wider text-xs h-10 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                  Pre-Order Rebar Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>

          </div>

        </div>

        {/* --- BASE PERFORMANCE SPEC INDEX --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 border-t border-zinc-800 w-full bg-[#0a0a0a] text-center md:text-left">
          <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-none">
            <span className="text-[9px] font-mono uppercase text-white block mb-0.5">Material Composition</span>
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wide">Grade 60 / 75 Steel</span>
          </div>
          <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-none">
            <span className="text-[9px] font-mono uppercase text-white block mb-0.5">Standard Sizes</span>
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wide">#3 to #11 Bar Sizes</span>
          </div>
          <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-none">
            <span className="text-[9px] font-mono uppercase text-white block mb-0.5">Availability Status</span>
            <span className="text-xs sm:text-sm font-black text-[#CC0000] uppercase tracking-wide">In Development</span>
          </div>
        </div>

      </div>
    </section>
  );
}