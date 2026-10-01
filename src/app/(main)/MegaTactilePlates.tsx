"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grip, Accessibility, ShieldAlert, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MegaTactilePlates() {
  return (
    <section className="bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5 md:space-y-6">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Infrastructure Accessibility Index
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              Tactile Plates & <span className="text-[#CC0000]">Detectable Warnings</span>
            </h2>
          </div>
          <p className="text-black text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            ADA-compliant infrastructure castings built with high-fidelity truncated domes to secure busy transit paths.
          </p>
        </div>

        {/* --- MAIN CORE ARCHITECTURE DISPLAY (IMAGE LEFT / CONTENT RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch w-full">

          {/* LEFT COLUMN: COMPACT IMAGE & ACTION (4 Cols) */}
          <div className="lg:col-span-4 w-full flex flex-col justify-between gap-3">

            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-[230px] bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-3 flex items-center justify-center group shadow-inner hover:border-[#CC0000] transition-colors duration-300">
              <div className="relative w-full h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/detectable_plates/detectable_warning_plate_1.jpeg`}
                  alt="Cast Iron Tactile Plate Mechanical Profile"
                  fill
                  className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Grid Crosshair Indicators */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-gray-300" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-gray-300" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-gray-300" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-gray-300" />

              <div className="absolute bottom-2 left-2 right-2 bg-[#0a0a0a]/90 text-[8px] font-mono uppercase font-bold tracking-wider text-white text-center py-1 z-20">
                Component Blueprint Configuration Preview
              </div>
            </div>

            {/* Action Button */}
            <div className="w-full">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-[#0a0a0a] hover:bg-[#CC0000] text-white font-black uppercase tracking-wider text-xs h-10 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                  Download ADA Blueprint Matrices <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: CRITICAL PERFORMANCE FEATURES (8 Cols) */}
          <div className="lg:col-span-8 space-y-3 w-full flex flex-col justify-between">

            {/* Feature 1 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-300">
              <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                <Accessibility className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                  ADA Truncated Dome Compliance
                </h4>
                <p className="text-xs text-black leading-relaxed font-light">
                  Features clean, dimensionally strict raised domes matching municipal accessibility laws. Delivers immediate orientation feedback for white canes and pedestrian foot travel.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-300">
              <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                <Grip className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                  Slip-Resistant Micro Texture Ground
                </h4>
                <p className="text-xs text-black leading-relaxed font-light">
                  The primary spacing floor matrix is cast using raw structural texturing elements, preventing traction slippage during severe freezing rain or oil wash overruns.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-300">
              <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                  Monolithic Wet-Set Lug Anchors
                </h4>
                <p className="text-xs text-black leading-relaxed font-light">
                  Heavy bottom iron anchors drop directly into wet municipal concrete pours, creating a unified substrate bond that entirely stops mechanical displacement.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* --- BASE PERFORMANCE SPEC INDEX --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[9px] font-mono uppercase text-black block mb-0.5">Material Core</span>
            <span className="text-xs sm:text-sm font-black text-[#0a0a0a] uppercase tracking-wide">Class 35B Gray Iron</span>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[9px] font-mono uppercase text-black block mb-0.5">Load Limits</span>
            <span className="text-xs sm:text-sm font-black text-[#0a0a0a] uppercase tracking-wide">AASHTO H-20 Wheel Load</span>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[9px] font-mono uppercase text-black block mb-0.5">Coating Finish</span>
            <span className="text-xs sm:text-sm font-black text-[#0a0a0a] uppercase tracking-wide">Natural Patina or Safety Red</span>
          </div>
        </div>

      </div>
    </section>
  );
}