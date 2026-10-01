"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Droplets,
  Layers,
  Wrench,
  Zap,
  Grid3X3,
  Box,
  Hammer
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface CastingZoneProduct {
  id: string;
  volume: string;
  title: string;
  category: string;
  loadRating: string;
  image: string;
  video?: string;
  icon: React.ComponentType<{ className?: string }>;
  isHero?: boolean;
  isWide?: boolean;
}

// Exactly 11 products filling a 4-column matrix (1 Hero 2x2 + 8 standard 1x1 + 2 wide 2x1 = 16 grid units)
const CASTING_ZONE_PRODUCTS: CastingZoneProduct[] = [
  {
    id: "designer-manhole",
    volume: "VOL. 01",
    title: "Next-Gen Designer Manhole Cover System",
    category: "Municipal Castings",
    loadRating: "F900+ Heavy Traffic",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image10.jpeg`,
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/custom_solutions/5900-E-CN-tower-Brick.478.mp4`,
    icon: Zap,
    isHero: true
  },
  {
    id: "paving-risers",
    volume: "VOL. 02",
    title: "Pro Series Precision Paving Risers",
    category: "Highway Inlets",
    loadRating: "AASHTO H-20 Rated",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving_riser_1.5200.png`,
    icon: Layers
  },
  {
    id: "trench-drain",
    volume: "VOL. 03",
    title: "Heavy-Duty Linear Trench Drain 500",
    category: "Airport Drainage",
    loadRating: "90-Ton Proof Load",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/pre-trench-01.JPG`,
    icon: Droplets
  },
  {
    id: "pipe-grates",
    volume: "VOL. 04",
    title: "High-Flow Hydraulic Vane Pipe Grates",
    category: "Stormwater Systems",
    loadRating: "D400 Heavy Municipal",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/products/pipe_grid.jpeg`,
    icon: Grid3X3
  },
  {
    id: "utility-hatches",
    volume: "VOL. 05",
    title: "Heavy Cast Vault Hatches & Security Covers",
    category: "Vault Infrastructure",
    loadRating: "100-Ton Severe Proof",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/HATCHES_COVER.png`,
    icon: ShieldCheck
  },
  {
    id: "manhole-frames",
    volume: "VOL. 06",
    title: "Ductile Iron Manhole Covers & Rings",
    category: "Sub-Surface Chambers",
    loadRating: "Class 35B / Fe 50007",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image1.jpeg`,
    icon: Box
  },
  {
    id: "tactile-plates",
    volume: "VOL. 07",
    title: "ADA Truncated Dome Detectable Warning Plates",
    category: "Transit Accessibility",
    loadRating: "AASHTO H-20 Wheel Load",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/Detectable_Warning_Plates.jpeg`,
    icon: ShieldCheck
  },
  {
    id: "mj-fittings",
    volume: "VOL. 08",
    title: "Mechanical Joint Ductile Iron MJ Fittings",
    category: "Pipeline Utilities",
    loadRating: "ISO 2531 / 16 Bar",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/MJ_Fittings.jpeg`,
    icon: Wrench
  },
  {
    id: "rebar-sections",
    volume: "VOL. 09",
    title: "Deformed Structural Rebar Reinforcement Bars",
    category: "Concrete Metallurgy",
    loadRating: "Grade 60 / 75 High Yield",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber.png`,
    icon: Hammer
  },
  {
    id: "curb-inlets",
    volume: "VOL. 10",
    title: "Catch Basin & Highway Curb Inlet Assemblies",
    category: "Stormwater Inlets",
    loadRating: "AASHTO M-306 / H-25 Rated",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image3.jpeg`,
    icon: ShieldCheck,
    isWide: true
  },
  {
    id: "telecom-vaults",
    volume: "VOL. 11",
    title: "Sub-Surface Utility & Telecommunication Vaults",
    category: "Grid Infrastructure",
    loadRating: "Heavy Security Class",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image6.jpg`,
    icon: Box,
    isWide: true
  }
];

export function MegaStories() {
  const heroProduct = CASTING_ZONE_PRODUCTS[0]; // Vol 01
  const topGridProducts = CASTING_ZONE_PRODUCTS.slice(1, 5); // 4 items (Vol 02 - 05) in 2x2 grid
  const bottomRowProducts = CASTING_ZONE_PRODUCTS.slice(5, 9); // 4 items (Vol 06 - 09) in 1 row

  return (
    <section className="w-full bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Foundry Production Catalog
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              Casting Zone & <span className="text-[#CC0000]">Product Volumes</span>
            </h2>
          </div>
          
          {/* Two Buttons on Top Right */}
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button variant="outline" className="border-zinc-300 text-black hover:border-black hover:bg-zinc-100 rounded-none text-xs font-black uppercase tracking-wider h-9 px-3">
                Download Master Spec
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-[#CC0000] hover:bg-[#AA0000] text-white rounded-none text-xs font-black uppercase tracking-wider h-9 px-4 flex items-center gap-1.5 shadow-sm">
                Request Volume Quote <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* --- INDUSTRIAL BOOKSHELF / GRID CONTAINER (White Background) --- */}
        <div className="border border-gray-200 bg-white shadow-sm relative rounded-none overflow-hidden">

          {/* Bookshelf Header Strip */}
          <div className="w-full bg-zinc-50 border-b border-gray-200 text-black py-2.5 px-4 sm:px-6 flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black">
                VOLUMES 01 – 09 // PRODUCTION MATRIX
              </h3>
            </div>
            
            {/* Top Right Badges */}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold">
              <span className="bg-white border border-gray-200 text-black px-2 py-0.5 rounded-none">
                9 Active Volumes
              </span>
              <span className="bg-zinc-900 text-white px-2 py-0.5 rounded-none">
                AASHTO / ASTM Certified
              </span>
            </div>
          </div>

          {/* Grid Container (Clean White Background, Red-Bordered White Cards) */}
          <div className="p-3 sm:p-4 bg-zinc-50/40 space-y-3.5">

            {/* === TOP BLOCK: 50% Hero Left + 50% (2x2 Grid) Right === */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">

              {/* --- 1 HERO CARD ON LEFT (50% = 6 cols) --- */}
              <div className="lg:col-span-6 h-full min-h-[510px] flex flex-col">
                <Card className="h-full w-full overflow-hidden border-2 border-[#CC0000] bg-white text-black rounded-none shadow-sm flex flex-col justify-between p-3.5 group relative hover:shadow-md transition-all duration-300">

                  {/* Top Header */}
                  <div className="flex items-center justify-between z-20 pb-2 border-b border-gray-100">
                    <Badge className="bg-[#CC0000] text-white rounded-none text-[10px] font-mono uppercase tracking-wider font-bold border-none px-2.5 py-0.5">
                      {heroProduct.volume} // TOP SELLER
                    </Badge>
                    <span className="text-[11px] font-mono text-black uppercase font-bold">
                      {heroProduct.category}
                    </span>
                  </div>

                  {/* Video Media Container */}
                  <div className="relative w-full flex-1 my-2.5 bg-black border border-gray-200 rounded-none overflow-hidden min-h-[290px] flex items-center justify-center">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                    >
                      <source
                        src={heroProduct.video || `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/NEW_NEXT_GENERATION_DESIGNER_D-BOXES.mp4`}
                        type="video/mp4"
                      />
                    </video>

                    {/* Blueprint Coordinates Overlay */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-white/60 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-white/60 pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white/60 pointer-events-none" />
                  </div>

                  {/* Content Footer */}
                  <div className="pt-2.5 border-t border-gray-100 flex flex-col gap-1.5 z-20">
                    <h4 className="text-lg sm:text-xl font-black leading-tight text-[#0a0a0a] uppercase tracking-tight group-hover:text-[#CC0000] transition-colors">
                      {heroProduct.title}
                    </h4>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-black font-mono text-[11px] uppercase">
                        Spec: <strong className="text-black font-sans font-bold">{heroProduct.loadRating}</strong>
                      </span>
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CC0000] hover:text-black uppercase tracking-wider">
                        Procure Volume <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>

              {/* --- 2x2 (4 CARDS: 2 ROWS x 2 COLUMNS) ON RIGHT (50% = 6 cols) --- */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topGridProducts.map((product) => {
                  const Icon = product.icon;
                  return (
                    <Card
                      key={product.id}
                      className="group flex flex-col justify-between overflow-hidden border-2 border-[#CC0000] bg-white text-black rounded-none shadow-sm hover:shadow-md transition-all duration-200 min-h-[275px] p-2.5"
                    >
                      {/* Top Volume Tag & Full Category */}
                      <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 mb-1 gap-2">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#CC0000] shrink-0">
                          {product.volume}
                        </span>
                        <span className="text-[9px] font-mono text-black uppercase font-semibold text-right leading-tight">
                          {product.category}
                        </span>
                      </div>

                      {/* Image Container */}
                      <div className="relative w-full flex-1 bg-zinc-50/70 border border-gray-100 rounded-none overflow-hidden my-1 min-h-[140px] flex items-center justify-center p-1.5">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain p-1 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>

                      {/* Details Footer */}
                      <CardContent className="p-0 pt-1.5 border-t border-gray-100 flex flex-col justify-between gap-1 bg-transparent">
                        <h5 className="font-bold text-[12px] leading-snug line-clamp-2 min-h-[32px] text-[#0a0a0a] group-hover:text-[#CC0000] transition-colors uppercase">
                          {product.title}
                        </h5>

                        <div className="flex items-center justify-between text-[10px] text-black pt-0.5 border-t border-gray-50">
                          <span className="flex items-center gap-1 text-black font-mono text-[9.5px]">
                            <Icon className="w-3.5 h-3.5 text-[#CC0000] shrink-0" />
                            <span className="font-semibold">{product.loadRating}</span>
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#CC0000] shrink-0 transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

            </div>

            {/* === BOTTOM BLOCK: 4 CARDS ALL IN ONE ROW === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {bottomRowProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <Card
                    key={product.id}
                    className="group flex flex-col justify-between overflow-hidden border-2 border-[#CC0000] bg-white text-black rounded-none shadow-sm hover:shadow-md transition-all duration-200 min-h-[275px] p-2.5"
                  >
                    {/* Top Volume Tag & Full Category */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 mb-1 gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#CC0000] shrink-0">
                        {product.volume}
                      </span>
                      <span className="text-[9px] font-mono text-black uppercase font-semibold text-right leading-tight">
                        {product.category}
                      </span>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full flex-1 bg-zinc-50/70 border border-gray-100 rounded-none overflow-hidden my-1 min-h-[140px] flex items-center justify-center p-1.5">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>

                    {/* Details Footer */}
                    <CardContent className="p-0 pt-1.5 border-t border-gray-100 flex flex-col justify-between gap-1 bg-transparent">
                      <h5 className="font-bold text-[12px] leading-snug line-clamp-2 min-h-[32px] text-[#0a0a0a] group-hover:text-[#CC0000] transition-colors uppercase">
                        {product.title}
                      </h5>

                      <div className="flex items-center justify-between text-[10px] text-black pt-0.5 border-t border-gray-50">
                        <span className="flex items-center gap-1 text-black font-mono text-[9.5px]">
                          <Icon className="w-3.5 h-3.5 text-[#CC0000] shrink-0" />
                          <span className="font-semibold">{product.loadRating}</span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#CC0000] shrink-0 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

          </div>

          {/* Bottom Shelf Lip */}
          <div className="h-1.5 bg-zinc-100 w-full border-t border-gray-200" />
        </div>

      </div>
    </section>
  );
}