"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Cpu, Wrench, CheckCircle2 } from "lucide-react";

export interface RebarLiteProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  materialStandard: string;
  keyFeatures: string[];
  applications: string[];
  image: string;
}

export const REBAR_LITE_PRODUCTS: RebarLiteProduct[] = [
  {
    id: "rebarlite-mesh",
    slug: "rebarlite-mesh",
    name: "RebarLite Mesh™",
    tagline: "Ultra-Lightweight Structural Reinforcement",
    description: "Engineered high-tensile mesh grid designed to reduce concrete slab thickness while increasing overall shear loading efficiency. Perfect for high-efficiency structural decks.",
    materialStandard: "ASTM A1064 / High Tensile Steel",
    keyFeatures: [
      "Optimized wire profile for maximum bond strength",
      "Up to 20% weight reduction vs standard rebar mats",
      "Resistant to high impact shear stresses"
    ],
    applications: ["Structural Concrete Slabs", "Bridge Decks", "Industrial Flooring"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/RebarLite_Mesh.png`
  },
  {
    id: "engineered-welded-wire",
    slug: "engineered-welded-wire",
    name: "Engineered Welded Wire",
    tagline: "Precision Automated Resistance Welded Grid",
    description: "Custom-spaced wire reinforcement sheets produced to exact structural CAD layouts for accelerated on-site slab placements and labor savings.",
    materialStandard: "ASTM A1064 Grade 80",
    keyFeatures: [
      "Automated electric-resistance welded joints",
      "Eliminates manual rebar tying on site",
      "Tailored pitch and spacing parameters"
    ],
    applications: ["Precast Concrete Panels", "Tilt-Up Wall Construction", "Highway Paving"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Engineered_welded_wire.png`
  },
  {
    id: "construction-mesh",
    slug: "construction-mesh",
    name: "Construction Mesh",
    tagline: "Heavy-Duty Foundation & Slab Reinforcement",
    description: "Standardized concrete reinforcement mats engineered for commercial driveways, footings, grade beams, and heavy industrial building pads.",
    materialStandard: "ASTM A185 / Deformed Wire",
    keyFeatures: [
      "Uniform grid spacing for predictable concrete load distribution",
      "Reduces shrink and temperature cracking",
      "Available in sheets or easy-roll rolls"
    ],
    applications: ["Commercial Footings", "Basement Slabs", "Parking Lot Structures"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Construction_mesh.png`
  },
  {
    id: "mining-mesh",
    slug: "mining-mesh",
    name: "Mining Mesh",
    tagline: "Extreme Sub-Surface Rock Reinforcement",
    description: "Heavy-gauge, corrosion-resistant mesh mats designed specifically for tunnel stabilization, shaft linings, rib reinforcement, and underground mining strata support.",
    materialStandard: "High Yield Cold-Drawn Steel / Galvanized",
    keyFeatures: [
      "Flushed edges for safe handling in tight mine shafts",
      "High capacity tensile strength for rock-burst containment",
      "Epoxy or galvanized anti-corrosion finishes"
    ],
    applications: ["Mine Shaft Stabilization", "Tunnel Headings", "Shotcrete Reinforcement"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Mining_mesh.png`
  },
  {
    id: "straight-cut-wire",
    slug: "straight-cut-wire",
    name: "Straight & Cut Wire",
    tagline: "Precision-Cut Structural Tie Wire",
    description: "Custom length straight wire segments manufactured to tight dimensional tolerances for precast tie-ins, structural steel cages, and masonry anchors.",
    materialStandard: "ASTM A82 Cold-Drawn Wire",
    keyFeatures: [
      "Burr-free precision hydraulic shear cuts",
      "Custom gauge sizes from 2 to 16 gauge",
      "Strict straightness tolerances"
    ],
    applications: ["Precast Cage Assembly", "Masonry Ties", "Industrial Steel Binding"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Straight_cut_wire.png`
  },
  {
    id: "cage-welding-coils",
    slug: "cage-welding-coils",
    name: "Coils for Cage-Welding Machines",
    tagline: "High-Speed Automated Feed Wire",
    description: "Continuous wire coils specially wound for automated rebar cage welding machinery used in heavy precast pipe, piling, and pole production.",
    materialStandard: "ASTM A1064 Smooth / Deformed Coils",
    keyFeatures: [
      "Tangle-free continuous spooling for zero machine downtime",
      "Consistent ductility for smooth automated bending",
      "High yield strength under automated resistance welding"
    ],
    applications: ["Precast Concrete Pipes", "Foundation Pilings", "Utility Pole Cages"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Coils_for_cage-welding_machines.png`
  },
  {
    id: "pipe-manhole-mesh",
    slug: "pipe-manhole-mesh",
    name: "Pipe and Manhole Mesh",
    tagline: "Curved Precast Infrastructure Reinforcement",
    description: "Flexibility-optimized wire mesh contoured specifically for cylindrical precast concrete pipes, manhole risers, wet wells, and drainage vaults.",
    materialStandard: "ASTM A1064 Pre-Curved Wire Mesh",
    keyFeatures: [
      "Engineered bend radius for continuous circular reinforcement",
      "Eliminates internal stress fractures during pipe spinning",
      "High resistance to corrosive wastewater environments"
    ],
    applications: ["Storm Drain Pipes", "Sanitary Manholes", "Culverts & Retention Vaults"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Pipe_and_manhole_mesh.png`
  },
  {
    id: "continuous-high-chairs",
    slug: "continuous-high-chairs",
    name: "Continuous High Chairs",
    tagline: "Precision Rebar Elevation Supports",
    description: "Stable, continuous steel wire chairs engineered to elevate heavy rebar mats and welded wire mesh at exact, uniform cover heights during concrete pours.",
    materialStandard: "Heavy-Gauge Steel Wire / Plastic Tipped",
    keyFeatures: [
      "Eliminates point loading and punching through vapor barriers",
      "Continuous support beam design prevents sag between bars",
      "Available with epoxy or plastic-dipped feet for rust prevention"
    ],
    applications: ["Bridge Deck Rebar Placement", "Slab-on-Grade", "Elevated Deck Forms"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/reber/Continuous_high_chairs.png`
  }
];

export default function MegaRebarLiteCatalog() {
  return (
    <section className="bg-white text-[#0a0a0a] py-16 font-sans border-b border-gray-100 w-full">
      {/* Absolute strict fluid full width padding bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#cc2221] block mb-3">
              Steel & Mesh Division Catalog
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-none">
              RebarLite Mesh™ <br />
              <span className="text-[#cc2221]">& Steel Reinforcements</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base font-light leading-relaxed max-w-xl">
            Explore our complete line of structural steel wire and mesh solutions engineered for heavy precast infrastructure, mining stabilization, commercial construction, and automated cage welding.
          </p>
        </div>

        {/* --- PRODUCT GRID ARCHITECTURE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {REBAR_LITE_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="bg-[#cc2221] border border-gray-200 p-6 flex flex-col justify-between group rounded-none hover:border-[#cc2221] hover:bg-black transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Image Frame */}
                <div className="relative w-full aspect-video bg-white border border-gray-100 rounded-none overflow-hidden mb-6 p-2">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  {/* Subtle Grid Corner Accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gray-300" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gray-300" />
                </div>

                {/* Specs Standard Badge */}
                <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold block mb-2">
                  {product.materialStandard}
                </span>

                {/* Product Title & Tagline */}
                <h3 className="text-xl font-black uppercase tracking-tight text-white   transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
                  {product.tagline}
                </p>

                {/* Full Detailed Description */}
                <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Key Specification Bullet Features */}
                <div className="space-y-1.5 mb-6 border-t border-gray-200 pt-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    Engineering Highlights:
                  </span>
                  {product.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#cc2221] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Slug Navigation Link to Open Dedicated Page */}
              <Link 
                href={`/products/rebarlite/${product.slug}`}
                className="w-full bg-[#0a0a0a] group-hover:bg-[#cc2221] text-white font-black uppercase tracking-widest text-[11px] h-11 rounded-none transition-all duration-200 flex items-center justify-center gap-2 border-none mt-4"
              >
                View Full Technical Details <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* --- PERFORMANCE ASSURANCE FOOTER STRIP --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#cc2221] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block">Manufacturing Compliance</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-wide">ASTM A1064 / A615 Certified</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#cc2221] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block">Machine Integration</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-wide">Automated Cage-Welder Compatible</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-3">
            <Wrench className="w-5 h-5 text-[#cc2221] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block">Custom Fabrication</span>
              <span className="text-xs font-black text-[#0a0a0a] uppercase tracking-wide">Tailored Cut & Bend Sheets Available</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}