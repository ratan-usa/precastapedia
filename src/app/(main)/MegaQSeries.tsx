"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu, Zap, Sliders, Activity, Hammer, ShieldAlert, Lock, CheckCircle2, Download, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QProductVariant {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
}

const Q_SERIES_VARIANTS: QProductVariant[] = [
  {
    id: "q-500",
    name: "Mega Q-500",
    tagline: "High-Velocity Linear Interception Matrix",
    description: "Engineered for intense transit hubs demanding continuous surface drainage. Features a self-locking monolithic seating geometry that drops into existing concrete channels instantly.",
    metric: "F900+",
    metricLabel: "Load Rating Class",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image2.jpeg`
  },
  {
    id: "q-700",
    name: "Mega Q-700",
    tagline: "Seismic-Rated Municipal Distribution Hub",
    description: "Specially formulated from premium nodular ductile iron to withstand unpredictable lateral shifting forces. Optimized for heavy airport taxiways and industrial container shipping ports.",
    metric: "90-Ton",
    metricLabel: "Proof Load Capacity",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image2.jpeg`
  },
  {
    id: "q-alpha",
    name: "Mega Q-Alpha",
    tagline: "Smart IoT-Ready Inspection System",
    description: "Our most advanced foundry design yet. Features integrated low-frequency structural health sensors embedded directly within the iron casting frame to track load cycles in real-time.",
    metric: "0.01mm",
    metricLabel: "Machined Tolerance",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image2.jpeg`
  }
];

export default function MegaQSeries() {
  const [activeVariant, setActiveVariant] = useState<QProductVariant>(Q_SERIES_VARIANTS[0]);
  const [activeSection, setActiveSection] = useState<"q-series" | "fea">("q-series");

  return (
    <section className="bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-6">

        {/* --- MAIN HEADER MATRIX WITH TOP SWITCH BUTTONS --- */}
        <div className="border-b border-gray-200 pb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-[0.35em] font-black text-[#CC0000] block">
                Next-Gen Metallurgical Engineering
              </span>
              <span className="bg-[#CC0000]/10 text-[#CC0000] border border-[#CC0000]/30 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold">
                {activeSection === "q-series" ? "Q-Series Foundry Models" : "FEA Stress Simulation"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] leading-none">
              {activeSection === "q-series" ? (
                <>The New <span className="text-[#CC0000]">Q Series</span></>
              ) : (
                <>Finite Element <span className="text-[#CC0000]">Analysis</span></>
              )}
            </h2>
          </div>

          {/* Top Two Switch Buttons */}
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 border border-gray-200 self-start lg:self-auto">
            <button
              onClick={() => setActiveSection("q-series")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeSection === "q-series"
                  ? "bg-[#CC0000] text-white shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-200"
              }`}
            >
              <Sliders className="w-4 h-4" /> Q-Series Lineup
            </button>
            <button
              onClick={() => setActiveSection("fea")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeSection === "fea"
                  ? "bg-[#0a0a0a] text-white shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-200"
              }`}
            >
              <Activity className={`w-4 h-4 ${activeSection === "fea" ? "text-[#CC0000] animate-pulse" : "text-gray-500"}`} /> FEA Stress Simulation
            </button>
          </div>
        </div>

        {/* --- DYNAMIC SECTION VIEW 1: Q-SERIES INTERACTIVE MATRIX --- */}
        {activeSection === "q-series" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch w-full">

              {/* COLUMN 1: VARIANT SELECTOR (1/3 Width) */}
              <div className="flex flex-col justify-between gap-2 w-full h-full bg-gray-50/50 border border-gray-200 p-3 sm:p-4">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold block mb-1">
                  Select Series Variant:
                </span>

                <div className="flex flex-col justify-between flex-1 gap-2.5">
                  {Q_SERIES_VARIANTS.map((variant) => {
                    const isActive = activeVariant.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => setActiveVariant(variant)}
                        className={`w-full text-left p-3.5 border transition-all duration-200 rounded-none flex items-center justify-between group flex-1
                          ${isActive
                            ? "bg-white border-[#CC0000] shadow-sm ring-1 ring-[#CC0000]/20"
                            : "bg-white/80 border-gray-200 text-gray-400 hover:border-gray-400 hover:text-[#0a0a0a]"
                          }
                        `}
                      >
                        <div>
                          <p className={`text-sm font-black uppercase tracking-tight transition-colors ${isActive ? 'text-[#CC0000]' : 'text-gray-900'}`}>
                            {variant.name}
                          </p>
                          <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mt-0.5">
                            {variant.metric} • {variant.metricLabel}
                          </p>
                        </div>
                        <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'text-[#CC0000] rotate-45' : 'text-gray-300 group-hover:text-gray-600'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* COLUMN 2: ACTIVE VARIANT SPECIFICATION FOCUS SHEET (1/3 Width) */}
              <div className="w-full bg-white border border-gray-200 p-4 sm:p-5 flex flex-col justify-between h-full space-y-3">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 text-gray-600 text-[10px] font-mono uppercase tracking-wider">
                      <Sliders className="w-3 h-3 text-[#CC0000]" /> Dynamic Configuration Unit
                    </div>
                    <span className="text-[10px] font-mono text-[#CC0000] font-bold uppercase">
                      {activeVariant.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0a0a0a] tracking-tight uppercase mb-0.5">
                    {activeVariant.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#CC0000] font-bold mb-2">
                    {activeVariant.tagline}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light mb-3">
                    {activeVariant.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-gray-100">
                  {/* Analytical Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-2.5 border border-gray-100">
                      <span className="text-[9px] font-mono uppercase text-gray-400 block mb-0.5">
                        {activeVariant.metricLabel}
                      </span>
                      <span className="text-base font-black text-[#0a0a0a] font-mono tracking-tight">
                        {activeVariant.metric}
                      </span>
                    </div>

                    <div className="bg-gray-50 p-2.5 border border-gray-100 flex flex-col justify-center">
                      <span className="text-[9px] font-mono uppercase text-gray-400 block mb-0.5">
                        Material Matrix
                      </span>
                      <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                        Nodular Ductile Iron
                      </span>
                    </div>
                  </div>

                  <Link href="/contact" className="block w-full">
                    <Button className="w-full bg-[#CC0000] hover:bg-[#b01e1d] text-white font-black uppercase tracking-widest text-xs h-9 rounded-none transition-all duration-200 flex items-center justify-center gap-2">
                      Request Q-Series Blueprint Specs <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* COLUMN 3: HIGH-CONTRAST CAD PREVIEW (1/3 Width) */}
              <div className="w-full h-full flex flex-col justify-between">
                <div className="relative w-full h-full min-h-[280px] bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-3 flex flex-col justify-between group shadow-inner hover:border-[#CC0000] transition-colors duration-300 flex-1">

                  <div className="flex items-center justify-between z-20 pb-1 border-b border-gray-200/80">
                    <span className="text-[9px] font-mono uppercase font-bold text-zinc-700">
                      3D CAD Blueprint Render
                    </span>
                    <span className="text-[8px] font-mono text-[#CC0000] uppercase font-bold">
                      Active Spec
                    </span>
                  </div>

                  <div className="relative w-full flex-1 my-2 min-h-[160px]">
                    <Image
                      src={activeVariant.image}
                      alt={`${activeVariant.name} Cast Matrix Layout`}
                      fill
                      className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>

                  {/* Blueprint Crosshair Accents */}
                  <div className="absolute top-10 left-2 w-2 h-2 border-t border-l border-gray-300 pointer-events-none" />
                  <div className="absolute top-10 right-2 w-2 h-2 border-t border-r border-gray-300 pointer-events-none" />
                  <div className="absolute bottom-8 left-2 w-2 h-2 border-b border-l border-gray-300 pointer-events-none" />
                  <div className="absolute bottom-8 right-2 w-2 h-2 border-b border-r border-gray-300 pointer-events-none" />

                  <div className="bg-[#0a0a0a]/90 text-[8px] font-mono uppercase font-bold tracking-wider text-zinc-400 text-center py-1 z-20">
                    {activeVariant.name} // High-Tolerance Foundry CAD
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- DYNAMIC SECTION VIEW 2: FINITE ELEMENT ANALYSIS & STRUCTURAL ENGINEERING --- */}
        {activeSection === "fea" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">

              {/* LEFT: FEA OVERVIEW & 3 CORE STRUCTURAL FEATURES (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 w-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#CC0000] mb-1">
                    <Activity className="w-4 h-4 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-black">
                      Advanced Predictive Modeling
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a]">
                    Finite Element Analysis & <span className="text-[#CC0000]">Stress Simulation</span>
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light mt-2">
                    To ensure Mega casting systems deliver continuous fatigue stability under heavy municipal networks, we utilize advanced Finite Element Analysis (FEA) deep within our pipeline prototyping cycles. High-fidelity heat maps illustrate how internal geometric support ribs manage and disperse downward point forces evenly across both cover and frame.
                  </p>
                </div>

                {/* 3 Core Structural Features from FEA Showcase */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-200">
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                      <Hammer className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                        Inverted T-Flange Seating Frame
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">
                        Wide baseline flange securely anchors vault chamber paths and dissipates continuous overhead shear stresses directly into surrounding concrete pours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-200">
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                        Non-Welded, Monolithic Casting Construction
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">
                        Molded completely as an unbroken, solid nodular iron unit. Entirely isolates and eliminates structural heat weld fatigue boundaries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-200">
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                        Inboard Tamper-Proof Locking System
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">
                        Heavy internal compression locking bolts provide comprehensive safety against high-velocity road suction, theft, and unauthorized vault access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: FEA HEAT MAP PREVIEW CARD (5 Cols) */}
              <div className="lg:col-span-5 w-full flex flex-col justify-between gap-3">
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-[280px] bg-[#0a0a0a] border border-zinc-800 rounded-none overflow-hidden p-3 flex items-center justify-center group hover:border-[#CC0000] transition-colors duration-300">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image2.jpeg`}
                    alt="Finite Element Analysis Structural Stress Simulation Heat Map"
                    fill
                    className="object-contain p-2 opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Status Badges */}
                  <div className="absolute top-2.5 left-2.5 bg-[#CC0000] text-white text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 font-bold z-20">
                    FEA Active Strain Map
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-black/80 text-zinc-400 border border-zinc-700 text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 z-20">
                    Mesh: 0.05mm
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 bg-[#0a0a0a]/90 text-[8px] font-mono uppercase font-bold tracking-wider text-zinc-400 text-center py-1 z-20">
                    FEA Stress Dispersion // Real-Time Simulation
                  </div>
                </div>

                {/* Action Trigger for FEA */}
                <div className="p-3 bg-gray-50 border border-gray-200 flex flex-col justify-between gap-2.5">
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    <span className="font-bold text-[#0a0a0a] uppercase tracking-wide block mb-0.5">
                      Micron-Tolerance Strain Dispersion:
                    </span>
                    Structural wall refinements reduce lateral movement and guarantee long-term fatigue resistance before metallic pouring begins.
                  </p>
                  <Link href="/contact" className="block w-full">
                    <Button className="w-full bg-[#0a0a0a] hover:bg-[#CC0000] text-white font-black uppercase tracking-wider text-xs h-9 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                      <Download className="w-3.5 h-3.5" /> Request Full FEA Engineering Dossier <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- PERFORMANCE ASSURANCE MATRIX FLOOR (4 EQUAL CARDS) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 pt-4 border-t border-gray-200 w-full bg-white text-center sm:text-left">
          <div className="p-3 bg-gray-50 border border-gray-100 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-gray-400 block">Standard Validation</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">AASHTO H-20 / F900</span>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-100 flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-gray-400 block">Smart Architecture</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">IoT Sensor Channels</span>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-100 flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-gray-400 block">Mold Precision</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">Parallel Flash-Mold</span>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-100 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div className="min-w-0 text-left">
              <span className="text-[8px] font-mono uppercase text-gray-400 block">Structural Guarantee</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight truncate block">100% Monolithic Ductile</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}