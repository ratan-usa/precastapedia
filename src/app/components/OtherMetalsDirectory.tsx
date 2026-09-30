"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Activity, ShieldCheck, ArrowUpRight, Layers } from "lucide-react";

interface MetalProfile {
  id: string;
  tabLabel: string;
  name: string;
  subtitle: string;
  description: string;
  composition: string;
  properties: string[];
  applications: string[];
}

const OTHER_METALS_DATA: Record<string, MetalProfile> = {
  "phosphor-bronze": {
    id: "phosphor-bronze",
    tabLabel: "Phosphor Bronze",
    name: "Phosphor Bronze Alloys",
    subtitle: "High-Fatigue Anti-Corrosive Copper Matrix",
    description: "Superb alloy formulation renowned for its immense fatigue toughness, low coefficient of friction, and fine grain structure. Extensively cast for heavy-duty spring matrices, marine sleeve bushings, electrical contacts, and high-wear components operating in harsh saltwater environments.",
    composition: "Cu + 0.5-11% Sn + 0.01-0.35% P",
    properties: ["High Elastic Limit", "Superb Fatigue Endurance", "Seawater Corrosion Immunity", "Low Friction Coefficient", "Fine Crystalline Grain"],
    applications: ["Marine Impeller Bushings", "Heavy Spring Matrices", "Switchgear Contacts", "Worm Gears"]
  },
  "brass-alloys": {
    id: "brass-alloys",
    tabLabel: "Brass Alloys",
    name: "Precision Brass Alloys",
    subtitle: "Low-Friction Acoustic Zinc Matrix",
    description: "An acoustic and highly machinable combination optimized for precision fluid dynamics and spark-free performance. Used globally in environments requiring spark avoidance, low-friction hydraulic valves, architectural trims, plumbing manifolds, and decorative municipal hardware.",
    composition: "60-70% Cu + 30-40% Zn",
    properties: ["Non-Sparking Safety Profile", "Acoustically Resonant", "Exceptional Machinability", "High Fluid Castability", "Natural Antimicrobial Surface"],
    applications: ["Explosion-Proof Valve Bodies", "Plumbing Manifolds", "Precision Bushings", "Architectural Casings"]
  },
  "leaded-bronze": {
    id: "leaded-bronze",
    tabLabel: "Leaded Bronze",
    name: "High-Velocity Leaded Bronze",
    subtitle: "Emergency Self-Lubricating Bearing Metal",
    description: "Specially formulated casting bronze containing microscopic dispersed globules of free unalloyed lead. Under severe friction or lubrication starvation, the lead extrudes to form an emergency dry lubricant film preventing total shaft galling and catastrophic seizure.",
    composition: "Cu + 10% Sn + 10-25% Pb",
    properties: ["Emergency Dry Self-Lubrication", "High Particle Embeddability", "Exceptional Shaft Conformability", "Anti-Seizure Matrix", "High Thermal Dissipation"],
    applications: ["Turbine Heavy Bearings", "Mining Crusher Bushings", "Locomotive Axle Bearings", "High-Speed Spindles"]
  },
  "tool-steel": {
    id: "tool-steel",
    tabLabel: "Tool Steel",
    name: "Industrial Tool Steel",
    subtitle: "Extreme Carbon Matrix Hardened Shell",
    description: "An elite class of carbon and alloy steels engineered to hold dimensional sharpness under devastating abrasive impact forces. Essential for heavy stamping dies, structural shears, cold extrusion punches, and high-velocity rock drill tooling.",
    composition: "Fe + W + Mo + Cr + High Carbon",
    properties: ["Extreme Abrasive Resistance", "Hot-Hardness Retention", "High Compressive Yield", "Minimal Thermal Distortion", "Deep Hardening Depth"],
    applications: ["Stamping & Punching Dies", "Rotary Cutting Blades", "Extrusion Tooling", "Hydraulic Shear Blades"]
  },
  "zinc-die-cast": {
    id: "zinc-die-cast",
    tabLabel: "Zinc Die Cast",
    name: "Zinc Die Cast Alloys (Zamak)",
    subtitle: "Precision Dimensional Casting Base",
    description: "Favored globally for high-volume die-casting where razor-thin wall sections and ultra-tight structural tolerances are mandatory. Its low melting point enables high production speeds with zero shrinking contraction errors.",
    composition: "Zn + 4% Al + 0.04% Mg + 1% Cu",
    properties: ["Ultra-High Dimensional Precision", "Low Energy Melting Point", "High Impact Strength", "Electroplating Compatibility", "Zero Porosity Density"],
    applications: ["Precision Automotive Housings", "Complex Sensor Brackets", "Fluid Enclosure Castings", "High-Speed Connectors"]
  },
  "babbitt-metal": {
    id: "babbitt-metal",
    tabLabel: "Babbitt Bearing Metal",
    name: "Babbitt Anti-Friction Alloys",
    subtitle: "White Metal Shaft Bearing Inlay",
    description: "Tin or lead-based soft white metal matrix embedded with hard antimony-copper crystals. Designed to absorb foreign grit and mold around rotating steel journals, ensuring ultra-low friction in power generation and marine engines.",
    composition: "89% Sn + 7% Sb + 4% Cu",
    properties: ["Debris Embeddability", "Low Journal Wear", "Anti-Friction Film", "High Thermal Conduction", "Corrosion Resistance"],
    applications: ["Hydroelectric Turbine Bearings", "Marine Crankshaft Journals", "Centrifugal Compressor Pads", "Heavy Generator Mounts"]
  }
};

const SIDEBAR_TABS = [
  { id: "phosphor-bronze", label: "Phosphor Bronze Alloys" },
  { id: "brass-alloys", label: "Precision Brass Alloys" },
  { id: "leaded-bronze", label: "Leaded Bearing Bronze" },
  { id: "tool-steel", label: "Industrial Tool Steel" },
  { id: "zinc-die-cast", label: "Zinc Die Cast (Zamak)" },
  { id: "babbitt-metal", label: "Babbitt Bearing Metal" }
];

export default function OtherMetalsDirectory() {
  const [activeTab, setActiveTab] = useState("phosphor-bronze");

  const currentContent = OTHER_METALS_DATA[activeTab] || OTHER_METALS_DATA["phosphor-bronze"];

  return (
    <section className="bg-[#0a0a0a] text-zinc-300 py-10 font-sans border-t border-zinc-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">

        {/* TOP ROW: Header Banner */}
        <div className="w-full bg-[#141414] border border-zinc-900 p-5 mb-8 flex flex-col md:flex-row items-center justify-between rounded-none gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
              MEGA <span className="text-[#CC0000]">FOUNDRIES</span>
            </div>
            <div className="h-5 w-[1px] bg-zinc-800 hidden md:block" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              Secondary & Custom Alloy Directory
            </span>
          </div>
          <div className="text-center md:text-right text-xs text-zinc-400 font-mono">
            CUSTOM CASTINGS DESK <span className="mx-2 text-zinc-700">•</span> CALL: (512) 782-8880
          </div>
        </div>

        {/* MAIN 3-COLUMN STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* COLUMN 1: LEFT SIDEBAR TABS (3 Cols) */}
          <div className="md:col-span-3 bg-[#141414] border border-zinc-900 rounded-none overflow-hidden shadow-xl flex flex-col justify-between">
            <div>
              <div className="bg-[#1c1c1c] p-3.5 border-b border-zinc-900 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Secondary Alloys <span className="text-[#CC0000]">Matrix</span>
                </h3>
                <Layers className="w-3.5 h-3.5 text-[#CC0000]" />
              </div>
              <nav className="flex flex-col">
                {SIDEBAR_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 text-xs font-medium border-l-2 transition-all duration-200 flex items-center justify-between
                        ${isActive
                          ? "bg-[#0a0a0a] text-[#CC0000] border-[#CC0000] font-bold"
                          : "bg-transparent text-zinc-400 border-transparent hover:bg-[#1a1a1a] hover:text-white"
                        }
                      `}
                    >
                      <span>{tab.label}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'text-[#CC0000] rotate-45' : 'text-zinc-700'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="p-3.5 bg-[#101010] border-t border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase">
              // Strict ISO/ASTM Metallurgy Specs
            </div>
          </div>

          {/* COLUMN 2: CENTER READING PANEL (6 Cols) */}
          <div className="md:col-span-6 bg-[#141414]/50 border border-zinc-900 p-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                    Active Alloy Specimen
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#CC0000] bg-[#CC0000]/10 px-2 py-0.5 font-bold uppercase">
                  Technical Log
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase mb-1">
                {currentContent.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-[#CC0000] font-bold mb-4">
                {currentContent.subtitle}
              </p>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                {currentContent.description}
              </p>

              {/* Elemental Composition Badge */}
              <div className="p-3 bg-[#0a0a0a] border border-zinc-800 mb-4">
                <span className="text-[9px] font-mono uppercase text-zinc-500 block mb-1 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-[#CC0000]" /> Elemental Chemical Formula
                </span>
                <span className="text-sm font-mono font-black text-white">
                  {currentContent.composition}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider text-[#CC0000] hover:text-white transition-colors inline-flex items-center gap-1.5 border-b border-dashed border-[#CC0000] pb-0.5"
              >
                <span>Request Custom Alloy Metallurgy Heat</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* COLUMN 3: RIGHT PROPERTIES & APPLICATIONS PANEL (3 Cols) */}
          <div className="md:col-span-3 bg-[#141414] border border-zinc-900 p-5 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-zinc-900 pb-2.5 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" />
                Mechanical Traits
              </h4>
              <ul className="space-y-2 mb-5">
                {currentContent.properties.map((prop, idx) => (
                  <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CC0000] rounded-full shrink-0 mt-1.5" />
                    <span className="font-light">{prop}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-zinc-900 pb-2 mb-2.5">
                Primary Applications
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentContent.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-none"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
              Lab Verified ISO 9001:2015
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}