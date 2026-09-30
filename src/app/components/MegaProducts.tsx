"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, Category } from '@/lib/materialsData';

interface CategoryCardProps {
  item: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item, index }) => {
  const IconComponent = item.icon;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (!item.image && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Video playback error:", err));
    }
  };

  const handleMouseLeave = () => {
    if (!item.image && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(204,34,33,0.18)] border border-slate-100 hover:border-[#CC0000]/30 transition-all duration-500"
    >
      {/* Media Container Box - Full Aspect Ratio Visibility */}
      <div className="relative w-full aspect-[16/10] sm:aspect-video bg-gradient-to-br from-[#0c0f14] via-[#141820] to-[#080a0d] overflow-hidden flex items-center justify-center p-3">
        {item.image ? (
          /* STATIC IMAGE MODE - 100% UNCLIPPED CONTENT */
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
              priority={index < 3}
            />
          </div>
        ) : (
          /* INTERACTIVE VIDEO MODE - 100% UNCLIPPED CONTENT */
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={item.video}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Video Play Indicator Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                <div className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white/80 shadow-lg">
                  <Play className="w-5 h-5 fill-current" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Technical Corner Accents */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/20 pointer-events-none" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/20 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/20 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/20 pointer-events-none" />

        {/* Top-Right Category Icon Badge (Non-obtrusive) */}
        <div className="absolute top-3.5 right-3.5 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-md z-10">
          <IconComponent size={18} className="text-white group-hover:text-[#CC0000] transition-colors" />
        </div>

        {/* Optional Video Tag Badge */}
        {!item.image && (
          <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-[9px] font-mono uppercase tracking-widest text-zinc-300 font-bold z-10">
            {isPlaying ? "Playing Video" : "Hover to Preview"}
          </div>
        )}
      </div>

      {/* Main Content Info Block */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#CC0000] transition-colors capitalize">
          {item.title.replace(/_/g, ' ')}
        </h3>
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed font-light text-sm">
          {item.description}
        </p>

        {/* Key Specs Tags */}
        {item.specs && item.specs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.specs.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="text-[10px] font-mono uppercase tracking-wide bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/categories/${item.slug}`}
          className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-slate-50 rounded-xl text-[#CC0000] font-black uppercase tracking-widest text-xs hover:bg-[#CC0000] hover:text-white transition-all duration-300 border border-slate-200/60 hover:border-transparent"
        >
          View Details <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
};

export const MegaProducts = () => {
  return (
    <section className="py-24 bg-white overflow-hidden w-full px-4 sm:px-6 lg:px-10">
      <div className="w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-[#CC0000] pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            New products <span className="text-[#CC0000]">Innovations</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base md:text-lg max-w-xl">
            Precision-engineered casting solutions for the world&apos;s most demanding infrastructure.
          </p>
        </motion.div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((item, index) => (
            <CategoryCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};