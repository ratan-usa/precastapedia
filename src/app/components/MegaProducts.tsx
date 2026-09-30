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
      className="group relative flex flex-col bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(204,0,0,0.3)] border border-zinc-800 hover:border-[#CC0000] transition-all duration-500"
    >
      {/* Media Container Box - Crisp White Background & 100% Unclipped Visibility */}
      <div className="relative w-full aspect-[16/10] sm:aspect-video bg-white border-b border-zinc-800 overflow-hidden flex items-center justify-center p-4">
        {item.image ? (
          /* STATIC IMAGE MODE - 100% UNCLIPPED CONTENT ON WHITE */
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
            />
          </div>
        ) : (
          /* INTERACTIVE VIDEO MODE - 100% UNCLIPPED CONTENT ON WHITE */
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={item.video}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />

            {/* Video Play Indicator Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                <div className="bg-black/70 backdrop-blur-sm border border-black/20 rounded-full p-3 text-white shadow-lg">
                  <Play className="w-5 h-5 fill-current" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Subtle Technical Corner Accents on White Canvas */}
        <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-neutral-300 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-neutral-300 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-neutral-300 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-neutral-300 pointer-events-none" />

        {/* Top-Right Category Icon Badge */}
        <div className="absolute top-3.5 right-3.5 p-2.5 rounded-xl bg-black text-white shadow-md z-10 border border-zinc-800">
          <IconComponent size={18} className="text-white group-hover:text-[#CC0000] transition-colors" />
        </div>

        {/* Optional Video Tag Badge */}
        {!item.image && (
          <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-black/85 backdrop-blur-sm text-[9px] font-mono uppercase tracking-widest text-white font-bold z-10 border border-zinc-700">
            {isPlaying ? "Playing Video" : "Hover to Preview"}
          </div>
        )}
      </div>

      {/* Main Content Info Block - Black Background & White Text */}
      <div className="p-7 flex flex-col flex-grow bg-[#0a0a0a]">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#CC0000] transition-colors capitalize">
          {item.title.replace(/_/g, ' ')}
        </h3>
        <p className="text-zinc-300 mb-6 flex-grow leading-relaxed font-light text-sm">
          {item.description}
        </p>

        {/* Key Specs Tags */}
        {item.specs && item.specs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.specs.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="text-[10px] font-mono uppercase tracking-wide bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/categories/${item.slug}`}
          className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-zinc-900 hover:bg-[#CC0000] rounded-xl text-white font-black uppercase tracking-widest text-xs transition-all duration-300 border border-zinc-800 hover:border-transparent group-hover:shadow-lg"
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