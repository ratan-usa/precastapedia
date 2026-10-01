"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data';
import { Category, CategoryCardProps } from '@/types';

const CategoryCard: React.FC<CategoryCardProps> = ({ item, index }) => {
  const IconComponent = item.icon;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesList = item.images && item.images.length > 0 
    ? item.images 
    : (item.image ? [item.image] : []);

  const hasVideo = Boolean(item.video);
  const hasMultipleImages = imagesList.length > 1;

  // Automatic slow slideshow for multiple images (cycles every 2.8 seconds)
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!hasVideo && hasMultipleImages) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
      }, 2800);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hasVideo, hasMultipleImages, imagesList.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-[#0a0a0a] rounded-xl overflow-hidden shadow-md hover:shadow-[0_15px_30px_-10px_rgba(204,0,0,0.25)] border border-zinc-800 hover:border-[#CC0000] transition-all duration-300"
    >
      {/* Media Container Box - Crisp White Background & 100% Unclipped Visibility */}
      <div className="relative w-full aspect-[16/10] bg-white border-b border-zinc-800 overflow-hidden flex items-center justify-center">
        {hasVideo ? (
          /* AUTOPLAY VIDEO MODE */
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={item.image}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          /* AUTOMATIC MULTI-IMAGE SLIDER MODE (SLOW & SMOOTH) */
          <div className="relative w-full h-full flex items-center justify-center">
            {imagesList.length > 0 && (
              <Image
                key={imagesList[currentImageIndex]}
                src={imagesList[currentImageIndex]}
                alt={`${item.title} - Slide ${currentImageIndex + 1}`}
                fill
                className="object-contain p-2 transition-opacity duration-700 ease-in-out group-hover:scale-105"
                priority={index < 4}
              />
            )}

            {/* Slide Progress Dots Indicator */}
            {hasMultipleImages && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm">
                {imagesList.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      dotIdx === currentImageIndex
                        ? "w-4 bg-[#CC0000]"
                        : "w-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Subtle Technical Corner Accents on White Canvas */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-300 pointer-events-none" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-300 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-300 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-300 pointer-events-none" />

        {/* Top-Right Category Icon Badge */}
        <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black text-white shadow-sm z-10 border border-zinc-800">
          <IconComponent size={14} className="text-white group-hover:text-[#CC0000] transition-colors" />
        </div>
      </div>

      {/* Main Content Info Block - Black Background & White Text */}
      <div className="p-4 flex flex-col flex-grow bg-[#0a0a0a] justify-between">
        <div>
          <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#CC0000] transition-colors capitalize line-clamp-1">
            {item.title.replace(/_/g, ' ')}
          </h3>
          <p className="text-white mb-3 leading-relaxed font-light text-xs line-clamp-2">
            {item.description}
          </p>

          {/* Key Specs Tags */}
          {item.specs && item.specs.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.specs.slice(0, 2).map((spec: string, i: number) => (
                <span
                  key={i}
                  className="text-[9px] font-mono uppercase tracking-wide bg-zinc-900 border border-zinc-800 text-white px-2 py-0.5 rounded"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/categories/${item.slug}`}
          className="flex items-center justify-center gap-1.5 w-full py-2 bg-zinc-900 hover:bg-[#CC0000] rounded-lg text-white font-bold uppercase tracking-wider text-[11px] transition-all duration-200 border border-zinc-800 hover:border-transparent mt-1"
        >
          <span>View Details</span> <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
};

export const MegaProducts = () => {
  return (
    <section className="py-8 md:py-10 bg-white overflow-hidden w-full px-4 sm:px-6 lg:px-10">
      <div className="w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 border-l-4 border-[#CC0000] pl-4"
        >
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight uppercase">
            New products <span className="text-[#CC0000]">Innovations</span>
          </h2>
          <p className="text-black mt-1 text-xs sm:text-sm max-w-xl">
            Precision-engineered casting solutions for demanding infrastructure.
          </p>
        </motion.div>

        {/* Compact 4-Column Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((item, index) => (
            <CategoryCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};