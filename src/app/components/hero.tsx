"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Factory, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const imageUrl = `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image21.jpeg`;

  return (
    <section className="relative w-full overflow-hidden font-sans border-y border-zinc-800 bg-[#0a0a0a]">
      {/* Background Image Container with Gradient Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90" />

      {/* Main Content Matrix */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-16 md:py-24 flex flex-col items-center justify-center text-center space-y-6 max-w-5xl mx-auto">

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-[#CC0000]/20 border border-[#CC0000]/40 px-3.5 py-1 text-white text-[11px] font-mono uppercase tracking-[0.25em] font-bold shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#CC0000]" />
          <span>Desk to Dock Full-Spectrum Delivery</span>
        </div>

        {/* Primary Headline */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md">
            The Largest Group of <br />
            <span className="text-[#CC0000]">Foundries & Forge Shops</span>
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto">
            Mega Foundries delivers a comprehensive portfolio of infrastructure products—including civil municipal castings, energy & water management systems, and high-tensile structural profiles. Complete end-to-end execution from your desk to your dock.
          </p>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#CC0000] hover:bg-[#b01e1d] text-white font-black uppercase tracking-wider text-xs h-11 px-6 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none shadow-lg">
              Contact Enterprise Desk <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-black/60 hover:bg-black/90 border border-zinc-700 hover:border-zinc-500 text-white font-black uppercase tracking-wider text-xs h-11 px-6 rounded-none transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md">
              Foundry Capacity Matrix <Factory className="w-4 h-4 text-zinc-400" />
            </Button>
          </Link>
        </div>

        {/* Three Micro Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-zinc-800/80 w-full text-left">
          <div className="bg-black/60 border border-zinc-800/80 p-3 flex items-center gap-3 backdrop-blur-sm">
            <Factory className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-400 block">Annual Scale</span>
              <span className="text-xs font-black text-white uppercase tracking-wide">Multi-Foundry Network</span>
            </div>
          </div>

          <div className="bg-black/60 border border-zinc-800/80 p-3 flex items-center gap-3 backdrop-blur-sm">
            <Truck className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-400 block">Logistics Guarantee</span>
              <span className="text-xs font-black text-white uppercase tracking-wide">Desk-to-Dock Direct</span>
            </div>
          </div>

          <div className="bg-black/60 border border-zinc-800/80 p-3 flex items-center gap-3 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
            <div>
              <span className="text-[9px] font-mono uppercase text-zinc-400 block">Compliance</span>
              <span className="text-xs font-black text-white uppercase tracking-wide">AASHTO & ASTM Certified</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
