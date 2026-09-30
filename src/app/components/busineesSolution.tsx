"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronsRight, ArrowUpRight, Sparkles, Layers, ShieldCheck, Factory } from "lucide-react";
import { services } from "@/lib/newsData";

const POPULAR_METALS = [
  "Cast Iron (Class 35B)",
  "Ductile Iron (65-45-12)",
  "Nodular Iron (ASTM A536)",
  "High-Tensile Structural Steel",
  "Stainless Steel 316L",
  "Bronze & Gun Metal",
  "Alloy Bar Sections"
];

export default function BusinessSolutions() {
  const [metalIndex, setMetalIndex] = useState(0);
  const [currentSubText, setCurrentSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = POPULAR_METALS[metalIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentSubText(fullText.substring(0, currentSubText.length + 1));
        setTypingSpeed(80);

        if (currentSubText === fullText) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentSubText(fullText.substring(0, currentSubText.length - 1));
        setTypingSpeed(40);

        if (currentSubText === "") {
          setIsDeleting(false);
          setMetalIndex((prev) => (prev + 1) % POPULAR_METALS.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentSubText, isDeleting, metalIndex, typingSpeed]);

  return (
    <section className="bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block">
                World of Metals & Sector Capabilities
              </span>
              <span className="bg-gray-100 text-gray-700 border border-gray-200 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold">
                Multi-Alloy Matrix
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              Cross-Industry <span className="text-[#CC0000]">Foundry Solutions</span>
            </h2>
          </div>

          {/* Dynamic Typewriter Active Metal Pill */}
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 self-start lg:self-auto">
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold">
              Active Metallurgy:
            </span>
            <span className="text-xs font-mono font-black text-[#CC0000] border-r-2 border-[#CC0000] pr-1 animate-pulse">
              {currentSubText || "Cast Iron"}
            </span>
          </div>
        </div>

        {/* --- 4 SECTOR SERVICE CARDS (EQUAL SIZE GRID) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 flex flex-col justify-between group hover:bg-white hover:border-[#CC0000] transition-all duration-200 rounded-none shadow-sm h-full"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-200/80 pb-2.5 mb-3">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Sector // 0{index + 1}
                    </span>
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-[#CC0000] group-hover:border-[#CC0000]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#0a0a0a] group-hover:text-[#CC0000] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 group-hover:text-[#CC0000] transition-colors uppercase tracking-wider text-[11px]"
                  >
                    Procure Specs
                    <ChevronsRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#CC0000] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- PERFORMANCE ASSURANCE MATRIX FLOOR (4 EQUAL CARDS) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-gray-200 w-full bg-white text-center sm:text-left">
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[8px] font-mono uppercase text-gray-400 block mb-0.5">Foundry Formulation</span>
            <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight">10+ Casting Alloys</span>
          </div>

          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[8px] font-mono uppercase text-gray-400 block mb-0.5">CNC Machining</span>
            <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight">0.01mm Tolerance</span>
          </div>

          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[8px] font-mono uppercase text-gray-400 block mb-0.5">Quality Assurance</span>
            <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-tight">Spectrometer Verified</span>
          </div>

          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[8px] font-mono uppercase text-gray-400 block mb-0.5">Scale Delivery</span>
            <span className="text-xs font-black text-[#CC0000] uppercase tracking-tight">Volume Batch Runs</span>
          </div>
        </div>

      </div>
    </section>
  );
}