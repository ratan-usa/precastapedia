"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, Download, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REBAR_LITE_PRODUCTS } from "@/app/(main)/MegaRebarLiteCatalog";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function RebarLiteDetailPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = REBAR_LITE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="bg-white text-[#0a0a0a] min-h-screen py-16 font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-12">

        {/* Navigation Breadcrumb */}
        <div>
          <Button
            variant={'outline'}
            onClick={router.back}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#CC0000] hover:text-[#0a0a0a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to RebarLite™ Catalog
          </Button>
        </div>

        {/* HERO TITLE MATRIX */}
        <div className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#CC0000] block mb-2">
              Technical Specification Sheet
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a]">
              {product.name}
            </h1>
            <p className="text-sm font-mono uppercase tracking-wider text-gray-500 font-bold mt-1">
              {product.tagline}
            </p>
          </div>
          <div className="inline-block bg-gray-50 border border-gray-200 px-4 py-3">
            <span className="text-[10px] font-mono uppercase text-gray-400 block">Compliance Standard</span>
            <span className="text-xs font-black text-[#0a0a0a] uppercase font-mono">{product.materialStandard}</span>
          </div>
        </div>

        {/* MAIN PRODUCT DETAIL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: IMAGE & CAD SCHEMATIC PREVIEW (5 Columns Wide) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full aspect-square bg-gray-50 border border-gray-200 p-6 group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gray-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gray-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gray-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gray-300" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/95 text-[9px] font-mono uppercase font-bold tracking-wider text-zinc-400 text-center py-2">
                CAD Render // Spec View
              </div>
            </div>

            {/* Submittal Document Downloads */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full border-gray-200 rounded-none text-xs font-bold uppercase tracking-wider h-11 flex items-center justify-center gap-2 hover:border-[#CC0000]">
                <Download className="w-4 h-4 text-[#CC0000]" /> Submittal Sheet
              </Button>
              <Button variant="outline" className="w-full border-gray-200 rounded-none text-xs font-bold uppercase tracking-wider h-11 flex items-center justify-center gap-2 hover:border-[#CC0000]">
                <FileText className="w-4 h-4 text-[#CC0000]" /> BIM / CAD Model
              </Button>
            </div>
          </div>

          {/* RIGHT: COMPREHENSIVE TECHNICAL OVERVIEW (7 Columns Wide) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#0a0a0a] mb-3">
                Product Engineering Overview
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {product.description} Engineered specifically to withstand severe mechanical stresses in modern industrial and civil construction projects while maintaining dimensional stability.
              </p>
            </div>

            {/* Key Engineering Specifications */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-4">
                Key Performance Characteristics:
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Standard Compliance: {product.materialStandard}</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Engineered High-Tensile Structural Profile</span>
                </div>
              </div>
            </div>

            {/* Target Structural Applications */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-4">
                Approved Structural Applications:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <span key={idx} className="bg-[#0a0a0a] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 font-bold">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Quote Trigger */}
            <div className="border-t border-gray-200 pt-8">
              <Button className="w-full bg-[#CC0000] hover:bg-[#b01e1d] text-white font-black uppercase tracking-widest text-xs h-12 rounded-none transition-all duration-200 flex items-center justify-center gap-2">
                Request Production Batch Quote <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}