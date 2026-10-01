"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sliders, Activity, ArrowUpRight, Workflow, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CRM_FEATURES = [
  {
    icon: Users,
    title: "Lead Management & Account Tracking",
    description: "Easily organize, track, and nurture high-volume procurement accounts for civil and industrial supply contracts."
  },
  {
    icon: Workflow,
    title: "Automated Procurement Workflows",
    description: "Streamline RFQs, instant quotation generation, and manufacturing batch milestone alerts in real-time."
  },
  {
    icon: BarChart3,
    title: "Real-Time Foundry Analytics",
    description: "Make data-driven purchasing decisions with instant telemetry on production pours, testing certificates, and logistics."
  }
];

export default function CosmoBlog() {
  return (
    <section className="bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              B2B Industrial Platform Suite
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              Mega Foundries <span className="text-[#CC0000]">Enterprise CRM</span>
            </h2>
          </div>
          <p className="text-black text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            Custom-built operations portal engineered for industrial buyers across municipal water, energy, and heavy civil construction sectors.
          </p>
        </div>

        {/* --- MAIN ARCHITECTURE DISPLAY (IMAGE LEFT / CONTENT RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch w-full">

          {/* LEFT COLUMN: CRM INTERFACE PREVIEW CARD (5 Cols) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-between gap-2.5">
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] max-h-[260px] bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-2.5 flex items-center justify-center group hover:border-[#CC0000] transition-colors duration-300">
              <div className="relative w-full h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/cosmoBlog.jpg`}
                  alt="Mega Foundries CRM Live Interface Demonstration"
                  fill
                  className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Status Badge Overlay */}
              <div className="absolute top-2 left-2 bg-[#0a0a0a] text-white text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 font-bold z-20 border border-zinc-800">
                Operations Portal
              </div>

              {/* Technical Corner Crosshairs */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gray-300" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gray-300" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gray-300" />

              <div className="absolute bottom-2 left-2 right-2 bg-[#0a0a0a]/90 text-[8px] font-mono uppercase font-bold tracking-wider text-white text-center py-1 z-20">
                Client Command Center // Real-Time Sync
              </div>
            </div>

            {/* Action Trigger */}
            <div className="w-full">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-[#0a0a0a] hover:bg-[#CC0000] text-white font-black uppercase tracking-wider text-xs h-9 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none">
                  Request Enterprise CRM Access <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: CORE CRM WORKFLOW FEATURES (7 Cols) */}
          <div className="lg:col-span-7 space-y-2.5 w-full flex flex-col justify-between">
            {CRM_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#CC0000] hover:bg-white transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-black leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* --- PERFORMANCE ASSURANCE MATRIX FLOOR (3 EQUAL CARDS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-3 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[9px] font-mono uppercase text-black block mb-0.5">Target Sector Integration</span>
            <span className="text-xs sm:text-sm font-black text-[#0a0a0a] uppercase tracking-wide">Energy, Municipal & Water</span>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[9px] font-mono uppercase text-black block mb-0.5">Workflow Automation</span>
            <span className="text-xs sm:text-sm font-black text-[#0a0a0a] uppercase tracking-wide">100% Digital RFQ Routing</span>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[9px] font-mono uppercase text-black block mb-0.5">Analytics Telemetry</span>
            <span className="text-xs sm:text-sm font-black text-[#CC0000] uppercase tracking-wide">Live Dispatch Tracking</span>
          </div>
        </div>

      </div>
    </section>
  );
}