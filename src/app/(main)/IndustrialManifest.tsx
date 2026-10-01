"use client";

import React from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Flame, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ManifestPhase {
  icon: React.ReactNode;
  phaseNumber: string;
  title: string;
  description: string;
}

const MANIFEST_STEPS: ManifestPhase[] = [
  {
    icon: <Cpu className="w-4 h-4 text-[#CC0000]" />,
    phaseNumber: "Phase 01",
    title: "Metallurgical CAD Engine",
    description: "Instant 3D rendering and structural finite element load simulation. Custom casting concepts are parameterized and locked within hours."
  },
  {
    icon: <Flame className="w-4 h-4 text-[#CC0000]" />,
    phaseNumber: "Phase 02",
    title: "Electric Arc Smart Burn",
    description: "Pure nodular graphite nodularization via real-time spectrometer verification. Molecular carbon chains are calibrated before pouring."
  },
  {
    icon: <Zap className="w-4 h-4 text-[#CC0000]" />,
    phaseNumber: "Phase 03",
    title: "Automated Flaskless Casting",
    description: "High-pressure sand molding machines compress and cycle multi-ton forms concurrently, eliminating production bottlenecks."
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-[#CC0000]" />,
    phaseNumber: "Phase 04",
    title: "Proof Load Verification",
    description: "Hydraulic crush beds subject product samples up to 90 tons of raw shear stress with verifiable Fe 50007 compliance."
  }
];

export default function IndustrialManifest() {
  return (
    <section className="bg-[#0a0a0a] text-white py-6 md:py-8 font-sans border-b border-zinc-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-zinc-800 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Foundry Velocity Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              Conception to Inception <span className="text-[#CC0000]">All In One Go</span>
            </h2>
          </div>
          <p className="text-black text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            No intermediary hand-offs. Mega Foundries integrates rapid metallurgical prototyping straight into heavy industrial mass production lines.
          </p>
        </div>

        {/* --- MAIN ARCHITECTURE DISPLAY (IMAGE/CARD LEFT / CONTENT RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch w-full">

          {/* LEFT COLUMN: SPEED-MATRIX MANIFESTO CARD (4 Cols) */}
          <div className="lg:col-span-4 w-full flex flex-col justify-between gap-2.5 bg-zinc-950 border border-zinc-800 p-4 sm:p-5 relative overflow-hidden group hover:border-[#CC0000] transition-colors duration-300">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#CC0000]/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#CC0000] font-bold">
                  The Speed-Matrix
                </span>
                <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                Not One Step But <br />
                <span className="text-[#CC0000]">All Steps on a Flash</span>
              </h3>

              <p className="text-black text-xs leading-relaxed font-light">
                We eliminated the sequential lag of traditional manufacturing by unifying pattern design, alloy formulation, and automated molding in parallel threads.
              </p>
            </div>

            {/* Blueprint Crosshairs */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-700 pointer-events-none" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-700 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-700 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-700 pointer-events-none" />

            {/* Action CTA */}
            <div className="relative z-10 w-full pt-3 border-t border-zinc-800/80">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-[#CC0000] hover:bg-[#b01e1d] text-white font-black uppercase tracking-wider text-xs h-9 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                  Initiate Direct Blast Build <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 SYNCHRONOUS PROCESS PHASES (8 Cols - 2x2 Grid with White Card Backgrounds) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full items-stretch">
            {MANIFEST_STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-3.5 flex flex-col justify-between group hover:border-[#CC0000] transition-all duration-200 rounded-none shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-black font-bold">
                      {step.phaseNumber} // Processing
                    </span>
                    <div className="w-7 h-7 bg-gray-50 border border-gray-200 flex items-center justify-center rounded-none group-hover:border-[#CC0000] transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] group-hover:text-[#CC0000] transition-colors mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-black leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#CC0000] rounded-full animate-pulse" />
                  <span className="text-[8px] font-mono uppercase tracking-widest text-black font-bold">
                    Synchronous Processing Thread
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* --- PERFORMANCE ASSURANCE MATRIX FLOOR (4 EQUAL WHITE CARDS) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-zinc-800 w-full text-center sm:text-left">
          <div className="p-3 bg-white border border-gray-200 flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-black block">CAD Prototyping</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">Zero Drafting Backlog</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-gray-200 flex items-center gap-2.5">
            <Flame className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-black block">Alloy Precision</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">Spectrometer Monitored</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-gray-200 flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-black block">Cycle Velocity</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">Flaskless Sand Molding</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-gray-200 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-black block">Verification Standard</span>
              <span className="text-xs font-black text-[#CC0000] uppercase tracking-tight truncate block">90-Ton Proof Tested</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}