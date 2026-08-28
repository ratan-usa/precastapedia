"use client";

import React from "react";
import { Megaphone, ExternalLink } from "lucide-react";

interface AdBannerProps {
  format?: "leaderboard" | "rectangle" | "skyscraper" | "inline" | "side-sticky";
  slotName?: string;
  className?: string;
}

export default function AdBanner({
  format = "inline",
  slotName = "Ad Space",
  className = ""
}: AdBannerProps) {
  if (format === "leaderboard") {
    return (
      <div className={`w-full bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 border border-dashed border-gray-300 rounded-md p-4 text-center shadow-inner relative group ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-semibold">
            <Megaphone className="w-4 h-4 text-brand-red animate-pulse" />
            <span>ADVERTISEMENT</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 font-normal">{slotName} (728 x 90 Leaderboard)</span>
          </div>
          <div className="bg-white border border-gray-200 px-4 py-2 rounded text-xs text-gray-600 flex items-center gap-2 shadow-sm font-medium hover:border-brand-blue transition-colors">
            <span>Sponsor / Partner Ad Placement</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>
    );
  }

  if (format === "skyscraper") {
    return (
      <div className={`w-full min-h-[400px] bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 border border-dashed border-gray-300 rounded-md p-4 text-center flex flex-col items-center justify-between shadow-inner relative group ${className}`}>
        <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold pt-2 flex items-center gap-1">
          <Megaphone className="w-3 h-3 text-brand-red" />
          <span>AD {slotName}</span>
        </div>
        <div className="my-auto px-2">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue mx-auto flex items-center justify-center mb-3">
            <Megaphone className="w-6 h-6 text-brand-red" />
          </div>
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Skyscraper Ad Slot</p>
          <p className="text-[11px] text-gray-400">160 x 600 Vertical Banner</p>
          <div className="mt-4 bg-white border border-gray-200 py-2 px-3 rounded text-[11px] font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors cursor-pointer">
            Reserve Space
          </div>
        </div>
        <span className="text-[9px] text-gray-400 pb-2">Precastapedia Ads</span>
      </div>
    );
  }

  if (format === "rectangle") {
    return (
      <div className={`w-full bg-gray-50 border border-dashed border-gray-300 rounded-lg p-5 text-center shadow-inner relative overflow-hidden group ${className}`}>
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold flex items-center gap-1">
            <Megaphone className="w-3 h-3 text-brand-red" /> ADVERTISEMENT
          </span>
          <span className="text-[10px] text-gray-400 font-mono">300x250</span>
        </div>
        <div className="py-6 bg-white border border-gray-200 rounded flex flex-col items-center justify-center gap-2 group-hover:border-brand-blue/40 transition-colors">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">{slotName}</span>
          <span className="text-[11px] text-gray-500">Video / Image / HTML Ad Box</span>
          <button className="mt-2 text-[10px] bg-brand-red text-white px-3 py-1 rounded font-bold uppercase tracking-wider hover:bg-brand-red/90 transition-colors">
            Promote Brand
          </button>
        </div>
      </div>
    );
  }

  if (format === "side-sticky") {
    return (
      <div className={`hidden 2xl:flex flex-col items-center justify-center fixed top-36 w-32 h-[500px] bg-white border border-dashed border-gray-300 rounded-lg shadow-sm p-3 text-center z-40 ${className}`}>
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">AD</span>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-gray-400">
          <Megaphone className="w-5 h-5 text-brand-red" />
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">{slotName}</span>
          <span className="text-[9px]">120x600 Sticky Banner</span>
        </div>
        <span className="text-[9px] text-gray-300">Sponsor</span>
      </div>
    );
  }

  // Default Inline format
  return (
    <div className={`w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center shadow-sm relative ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
            <Megaphone className="w-5 h-5 text-brand-red" />
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">SPONSORED ADVERTISEMENT</div>
            <div className="text-sm font-bold text-brand-blue">{slotName} Placement Area</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 hidden md:inline">Targeted Precast Industry Audience</span>
          <button className="bg-brand-blue text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-brand-blue/90 transition-colors shrink-0">
            Advertise Here
          </button>
        </div>
      </div>
    </div>
  );
}
