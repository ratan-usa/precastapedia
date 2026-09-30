"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Cpu, Wrench } from "lucide-react";

export interface RebarLiteProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  materialStandard: string;
  applications: string[];
  image: string;
}

export const REBAR_LITE_PRODUCTS: RebarLiteProduct[] = [
  {
    id: "rebarlite-mesh",
    slug: "rebarlite-mesh",
    name: "RebarLite Mesh™",
    tagline: "High-Tensile Deck Reinforcement",
    description: "Engineered high-tensile mesh grid designed to reduce slab thickness while boosting shear efficiency.",
    materialStandard: "ASTM A1064",
    applications: ["Structural Slabs", "Bridge Decks"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/RebarLite_Mesh.png`
  },
  {
    id: "engineered-welded-wire",
    slug: "engineered-welded-wire",
    name: "Engineered Welded Wire",
    tagline: "Precision Automated Resistance Grid",
    description: "Custom-spaced wire sheets manufactured to exact CAD layouts for accelerated on-site slab placement.",
    materialStandard: "ASTM A1064 Gr 80",
    applications: ["Precast Panels", "Tilt-Up Walls"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Engineered_welded_wire.png`
  },
  {
    id: "construction-mesh",
    slug: "construction-mesh",
    name: "Construction Mesh",
    tagline: "Foundation & Slab Reinforcement",
    description: "Standardized reinforcement mats for commercial footings, grade beams, and heavy industrial pads.",
    materialStandard: "ASTM A185",
    applications: ["Footings", "Basement Slabs"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Construction_mesh.png`
  },
  {
    id: "mining-mesh",
    slug: "mining-mesh",
    name: "Mining Mesh",
    tagline: "Sub-Surface Strata Reinforcement",
    description: "Heavy-gauge, corrosion-resistant mesh mats designed for tunnel stabilization and shaft linings.",
    materialStandard: "High-Yield Steel",
    applications: ["Mine Shafts", "Tunnel Headings"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Mining_mesh.png`
  },
  {
    id: "straight-cut-wire",
    slug: "straight-cut-wire",
    name: "Straight & Cut Wire",
    tagline: "Precision-Cut Structural Tie Wire",
    description: "Custom length straight wire segments manufactured to tight dimensional tolerances for tie-ins and steel cages.",
    materialStandard: "ASTM A82",
    applications: ["Precast Cages", "Masonry Ties"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Straight_cut_wire.png`
  },
  {
    id: "cage-welding-coils",
    slug: "cage-welding-coils",
    name: "Cage-Welding Coils",
    tagline: "Automated Machine Feed Wire",
    description: "Continuous spool coils specially wound for high-speed automated cage welding machinery.",
    materialStandard: "ASTM A1064",
    applications: ["Precast Pipes", "Pilings"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Coils_for_cage-welding_machines.png`
  },
  {
    id: "pipe-manhole-mesh",
    slug: "pipe-manhole-mesh",
    name: "Pipe & Manhole Mesh",
    tagline: "Curved Cylindrical Reinforcement",
    description: "Contoured wire mesh engineered for cylindrical precast pipes, manhole risers, and drainage vaults.",
    materialStandard: "ASTM A1064 Curved",
    applications: ["Storm Drains", "Manholes"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Pipe_and_manhole_mesh.png`
  },
  {
    id: "continuous-high-chairs",
    slug: "continuous-high-chairs",
    name: "Continuous High Chairs",
    tagline: "Precision Rebar Elevation Chairs",
    description: "Stable continuous steel wire chairs engineered to elevate rebar mats at uniform cover heights.",
    materialStandard: "Heavy-Gauge Steel",
    applications: ["Bridge Decks", "Elevated Slabs"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Continuous_high_chairs.png`
  }
];

export default function MegaRebarLiteCatalog() {
  return (
    <section className="bg-white text-[#0a0a0a] py-2   font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-2">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-2 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Steel & Mesh Division Catalog
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a]">
              RebarLite Mesh™ & <span className="text-[#CC0000]">Steel Reinforcements</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            Structural steel wire and mesh solutions engineered for precast infrastructure, mining stabilization, and automated cage welding.
          </p>
        </div>

        {/* --- COMPACT PRODUCT GRID ARCHITECTURE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4 w-full">
          {REBAR_LITE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#0a0a0a] border border-zinc-800 p-3 flex flex-col justify-between group hover:border-[#CC0000] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Compact White Media Container */}
                <div className="relative w-full aspect-[16/10] bg-white border border-zinc-700 overflow-hidden mb-2.5 p-1 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute top-1 left-1 bg-[#0a0a0a]/90 text-white text-[8px] font-mono uppercase px-1.5 py-0.5 font-bold">
                    {product.materialStandard}
                  </div>
                </div>

                {/* Header & Title */}
                <div className="flex items-start justify-between gap-1.5 mb-0.5">
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-white group-hover:text-[#CC0000] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#CC0000] shrink-0 transition-colors" />
                </div>

                <p className="text-[10px] font-mono uppercase tracking-wider text-[#CC0000] font-bold mb-1 line-clamp-1">
                  {product.tagline}
                </p>

                {/* Short Description */}
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-2 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Dynamic Slug Navigation Link */}
              <Link
                href={`/products/rebarlite/${product.slug}`}
                className="w-full bg-zinc-900 group-hover:bg-[#CC0000] text-white font-bold uppercase tracking-wider text-[10px] h-8.5 py-2 rounded-none transition-all duration-200 flex items-center justify-center gap-1.5 mt-1.5"
              >
                <span>View Specs</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* --- PERFORMANCE ASSURANCE FOOTER STRIP --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-2 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
            <div>
              <span className="text-[9px] font-mono uppercase text-gray-400 block mb-0.5">Manufacturing Standard</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-wide">ASTM A1064 / A615</span>
            </div>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#CC0000] shrink-0" />
            <div>
              <span className="text-[9px] font-mono uppercase text-gray-400 block mb-0.5">Machine Integration</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-wide">Cage-Welder Compatible</span>
            </div>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#CC0000] shrink-0" />
            <div>
              <span className="text-[9px] font-mono uppercase text-gray-400 block mb-0.5">Custom Fabrication</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-wide">Tailored Cut & Bend</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}