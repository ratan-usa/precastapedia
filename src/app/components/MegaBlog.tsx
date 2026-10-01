"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "ductile-iron-vs-cast-iron",
    category: "Metallurgy",
    title: "The Molecular Shift: Why Ductile Iron is Replacing Traditional Castings",
    excerpt: "Structural analysis of nodular graphite formation and how Fe 50007 classification provides exceptional yield strength under seismic stress.",
    date: "June 18, 2026",
    author: "Dr. Marcus Vance",
    readTime: "6 min read",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image1.jpeg`
  },
  {
    id: "2",
    slug: "heavy-traffic-infrastructure-standards",
    category: "Infrastructure",
    title: "90-Ton Load Requirements in High-Velocity Transportation Hubs",
    excerpt: "Breaking down class F900 testing parameters and heavy industrial casting stress distribution on airport taxiways.",
    date: "May 24, 2026",
    author: "Sarah Jenkins, PE",
    readTime: "8 min read",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image2.jpeg`
  },
  {
    id: "3",
    slug: "foundry-sustainability-carbon-reduction",
    category: "Engineering",
    title: "The Green Hearth: Precision Melting & Zero-Waste Mold Castings",
    excerpt: "Automated sand-reclamation technologies and electric arc furnace upgrades reshaping structural iron production.",
    date: "May 02, 2026",
    author: "Chief Engineer Ben",
    readTime: "5 min read",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image3.jpeg`
  }
];

export default function MegaBlog() {
  return (
    <section className="bg-[#0a0a0a] text-white py-8 md:py-10 font-sans border-t border-zinc-900 overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-6">

        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-3 gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Foundry Insights & Engineering
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">
              The Melt <span className="text-[#CC0000]">Logistics</span>
            </h2>
          </div>
          <p className="text-white text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Industrial perspectives, metallurgical studies, and engineering updates directly from Mega Foundries.
          </p>
        </div>

        {/* Minimalistic Timeline Stream */}
        <div className="divide-y divide-zinc-800/80">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={post.id}
              className="group grid grid-cols-1 lg:grid-cols-12 py-4 gap-4 items-center hover:bg-zinc-900/40 transition-all px-2"
            >
              {/* Index & Category */}
              <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start justify-between gap-1">
                <span className="text-2xl font-black font-mono text-white group-hover:text-[#CC0000] transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#CC0000] bg-[#CC0000]/10 px-2 py-0.5">
                  {post.category}
                </span>
              </div>

              {/* Textual Segment */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[11px] text-white mb-1 font-mono">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#CC0000]" /> {post.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-white" /> {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="group-hover:text-[#CC0000] transition-colors">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight text-white line-clamp-1 mb-1">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-white text-xs font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Preview Thumbnail */}
              <div className="lg:col-span-3 flex items-center justify-end">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-full aspect-[16/9] max-w-[220px] bg-zinc-900 border border-zinc-800 overflow-hidden group/thumb block"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 group-hover/thumb:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-end p-2">
                    <span className="bg-[#CC0000] text-white p-1 text-xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}