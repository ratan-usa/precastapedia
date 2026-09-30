'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Box, CheckCircle2, Rotate3d, ArrowUpRight, ShieldCheck, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";

// --- DYNAMIC IMPORT FOR 3D MODEL VIEWER ---
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50 text-xs text-gray-400 gap-2 font-mono">
      <Rotate3d className="w-6 h-6 animate-spin text-[#CC0000]" />
      <span>Loading 3D Metallurgical Engine...</span>
    </div>
  )
});

// --- POPULAR PRODUCTS ASSET LIBRARY (Real Popular Products & Assets Only) ---
export interface PopularCastingAsset {
  id: string;
  name: string;
  category: string;
  loadClass: string;
  materialStandard: string;
  modelUrl: string;
  thumbnail: string;
  description: string;
}

const POPULAR_ASSETS: PopularCastingAsset[] = [
  {
    id: 'paving-risers',
    name: 'Pro Series Paving Risers',
    category: 'Highway & Asphalt Inlets',
    loadClass: 'AASHTO H-20 Traffic Rated',
    materialStandard: 'ASTM A536 Grade 80-55-06',
    modelUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib_files/black1.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving_riser_1.5200.png`,
    description: 'Precision ductile iron height-adjustment riser system. Eliminates pavement tear-outs during resurfacing, saving up to 60% in municipal labor.'
  },
  {
    id: 'trench-drain',
    name: 'Heavy-Duty Trench Drain 500',
    category: 'Continuous Linear Drainage',
    loadClass: 'F900 (90-Ton Proof Load)',
    materialStandard: 'EN 1433 / ASTM A48 Class 35B',
    modelUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib_files/black1.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/pre-trench-01.JPG`,
    description: 'Engineered monolithic ductile iron trench matrix designed for rapid fluid interception across airport aprons and industrial docks.'
  },
  {
    id: 'pipe-grate',
    name: 'High-Flow Hydraulic Pipe Grates',
    category: 'Stormwater Management',
    loadClass: 'D400 Heavy Municipal Class',
    materialStandard: 'Ductile Iron 65-45-12',
    modelUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib_files/black1.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/products/pipe_grid.jpeg`,
    description: 'High-capacity drainage inlet grate with aerodynamic vane geometry that optimizes surface inflow while blocking debris accumulation.'
  },
  {
    id: 'hatches-covers',
    name: 'Heavy Cast Hatches & Utility Covers',
    category: 'Sub-Surface Infrastructure',
    loadClass: '100-Ton Severe Proof Load',
    materialStandard: 'Nodular Ductile Iron ASTM A536',
    modelUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib_files/black1.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/HATCHES_COVER.png`,
    description: 'FEA verified access hatches and security covers engineered for zero deflection under severe cyclic highway wheel loading.'
  },
  {
    id: 'hinged-castings',
    name: 'Ductile Iron Hinged Castings',
    category: 'Municipal Vault Assemblies',
    loadClass: 'AASHTO H-20 / HS-20',
    materialStandard: 'Class 35B / Ductile Iron',
    modelUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib_files/black1.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image1.jpeg`,
    description: 'Assisted lift hinged iron assemblies engineered for ergonomic operator inspection access with integrated anti-theft locking.'
  },
  {
    id: 'tactile-plates',
    name: 'Detectable Warning Tactile Plates',
    category: 'ADA Transit Accessibility',
    loadClass: 'AASHTO H-20 Wheel Load',
    materialStandard: 'Class 35B Gray Iron',
    modelUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib_files/black1.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/Detectable_Warning_Plates.jpeg`,
    description: 'ADA-compliant cast iron warning plates with slip-resistant truncated domes and wet-set lug anchors for permanent substrate bonding.'
  }
];

export default function ProductPage() {
  const [selectedAsset, setSelectedAsset] = useState<PopularCastingAsset>(POPULAR_ASSETS[0]);

  return (
    <section className="bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-5">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-3 flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block">
                3D CAD Prototyping Engine
              </span>
              <span className="bg-[#CC0000]/10 text-[#CC0000] border border-[#CC0000]/30 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold flex items-center gap-1">
                <Rotate3d className="w-3 h-3" /> 360° Interactive
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              Popular Products <span className="text-[#CC0000]">3D Model Inspector</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            Inspect precision 3D CAD dimensional models for our most popular municipal casting profiles. Rotate and examine tolerances in real-time.
          </p>
        </div>

        {/* --- MAIN 3D WORKSPACE (VIEWER LEFT / ASSET SELECTOR RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch w-full">

          {/* LEFT: 3D MODEL VIEWER WORKBENCH (7 Cols) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-between bg-gray-50 border border-gray-200 p-3.5 relative rounded-none shadow-sm min-h-[360px]">

            {/* Top Inspector Status Bar */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
                <span className="text-xs font-black uppercase tracking-tight text-[#0a0a0a]">
                  {selectedAsset.name}
                </span>
              </div>
              <span className="text-[9px] font-mono uppercase font-bold text-gray-400 bg-white border border-gray-200 px-2 py-0.5">
                GLB // 3D Render
              </span>
            </div>

            {/* 3D Canvas Container */}
            <div className="relative w-full flex-1 min-h-[340px] bg-[#0a0a0a] border border-gray-200 rounded-none overflow-hidden flex items-center justify-center">
              <ModelViewer
                src={selectedAsset.modelUrl}
                poster={selectedAsset.thumbnail}
                alt={selectedAsset.name}
              />

              {/* Technical Blueprint Corner Crosshairs */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-600 pointer-events-none z-20" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-600 pointer-events-none z-20" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-600 pointer-events-none z-20" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-600 pointer-events-none z-20" />
            </div>

            {/* Bottom Active Spec Info Strip */}
            <div className="mt-2.5 pt-2 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-gray-400 uppercase">
                  Standard: <strong className="text-gray-800 font-sans">{selectedAsset.materialStandard}</strong>
                </span>
                <span className="font-mono text-[10px] text-gray-400 uppercase">
                  Rating: <strong className="text-[#CC0000] font-sans">{selectedAsset.loadClass}</strong>
                </span>
              </div>

              <Link href="/contact">
                <Button className="bg-[#CC0000] hover:bg-[#b01e1d] text-white font-black uppercase tracking-wider text-[11px] h-8 px-3 rounded-none transition-all duration-200 flex items-center gap-1.5 border-none">
                  Request Blueprint <ArrowUpRight className="w-3 h-3" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: POPULAR PRODUCT ASSETS SELECTOR (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2 w-full">
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold block">
              Select Popular Casting Asset:
            </span>

            <div className="flex flex-col gap-2 flex-1 justify-between">
              {POPULAR_ASSETS.map((asset) => {
                const isSelected = selectedAsset.id === asset.id;
                return (
                  <div
                    key={asset.id}
                    onClick={() => setSelectedAsset(asset)}
                    className={`flex items-center gap-3 p-2.5 border transition-all duration-200 rounded-none cursor-pointer group flex-1
                      ${isSelected
                        ? 'border-[#CC0000] bg-gray-50 shadow-sm ring-1 ring-[#CC0000]/20'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                      }
                    `}
                  >
                    {/* Thumbnail Frame */}
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-none overflow-hidden flex-shrink-0 relative flex items-center justify-center p-1">
                      <Image
                        src={asset.thumbnail}
                        alt={asset.name}
                        fill
                        className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>

                    {/* Meta Details */}
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs sm:text-sm font-black uppercase tracking-tight truncate transition-colors ${isSelected ? 'text-[#CC0000]' : 'text-gray-900'}`}>
                        {asset.name}
                      </p>
                      <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider truncate mt-0.5">
                        {asset.category} • {asset.loadClass}
                      </p>
                    </div>

                    {/* Selection Indicator */}
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 shrink-0 transition-transform duration-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}