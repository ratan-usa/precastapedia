"use client";

import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import HeroArticle from "@/components/HeroArticle";
import WherePrecastUsed from "@/components/WherePrecastUsed";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* ==================== BREAKING NEWS TICKER ==================== */}
      <BreakingNewsTicker />

      {/* ==================== HERO ARTICLE ==================== */}
      <HeroArticle />

      {/* ==================== WHERE PRECAST PRODUCTS ARE USED ==================== */}
      <WherePrecastUsed />
      
    </div>
  );
}
