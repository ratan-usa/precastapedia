"use client";

import React from "react";

const breakingNews = [
  "Hollowcore slab production surpasses 2M units globally in Q2 2026",
  "New marine-grade precast mix achieves 150+ year saltwater resistance",
  "New ASTM C1577 standards released for precast box culverts design loads",
  "Precast concrete market projected to reach $195B by 2030",
];

export default function BreakingNewsTicker() {
  return (
    <div className="bg-[#292929] text-white py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full  overflow-hidden rounded-lg shadow-sm border border-white/10">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <span className="bg-white text-[#171717] text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-widest shrink-0">
          Breaking
        </span>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-12 animate-marquee">
            {breakingNews.map((news, idx) => (
              <span key={idx} className="text-sm font-medium">{news}</span>
            ))}
            {breakingNews.map((news, idx) => (
              <span key={`dup-${idx}`} className="text-sm font-medium">{news}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
