"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, TrendingUp, Zap, ShieldCheck, BarChart3, Factory, Globe, Award, 
  ChevronRight, PlayCircle, Building2, Layers, Gauge, Shield, Box, Columns, 
  Footprints, Video, Mic, Tv, BookOpen, CheckCircle2, Sparkles 
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import AlphabetIndex from "@/components/AlphabetIndex";
import AdBanner from "@/components/AdBanner";
import { PRECAST_SECTORS } from "@/data/precastData";

const breakingNews = [
  "🏗️ Hollowcore slab production surpasses 2M units globally in Q2 2026",
  "🌊 New marine-grade precast mix achieves 150+ year saltwater resistance",
  "🤖 AI-powered quality control reduces rejection rates by 40%",
  "🌍 Precast concrete market projected to reach $195B by 2030",
];

const functionStructureItems = [
  {
    title: "Architectural Precast",
    tagline: "Aesthetics, Facades & Cladding",
    desc: "Decorative facade panels, cladding systems, and ornamental concrete finishes engineered for architectural brilliance.",
    icon: <Building2 className="w-6 h-6 text-brand-red" />,
    href: "/function-structure#architectural"
  },
  {
    title: "Structural Precast",
    tagline: "Load Bearing Beams, Columns & Slabs",
    desc: "Heavy-duty structural framing components carrying vertical, lateral, and seismic forces across major infrastructure.",
    icon: <Layers className="w-6 h-6 text-brand-blue" />,
    href: "/function-structure#structural"
  },
  {
    title: "Prestressed Concrete",
    tagline: "High-Span Bridges, Roofs & Girders",
    desc: "Pre-tensioned and post-tensioned members engineered for maximum clear spans and zero active tensile cracking.",
    icon: <Gauge className="w-6 h-6 text-brand-red" />,
    href: "/function-structure#prestressed"
  },
  {
    title: "Insulated Panels",
    tagline: "Solid Walls, Core Slabs & Retaining",
    desc: "Composite sandwich wall panels with built-in thermal insulation foam cores for energy-efficient envelopes.",
    icon: <Shield className="w-6 h-6 text-brand-blue" />,
    href: "/function-structure#insulated"
  }
];

const precastComponentsPreview = [
  { name: "Walls", desc: "Solid, sandwich & noise barrier panels", icon: <Box className="w-5 h-5 text-brand-blue" /> },
  { name: "Slabs", desc: "Hollowcore, solid deck & double tees", icon: <Layers className="w-5 h-5 text-brand-red" /> },
  { name: "Beams", desc: "Girders, inverted T & spandrels", icon: <Box className="w-5 h-5 text-brand-blue" /> },
  { name: "Columns", desc: "Single & multi-story compression pillars", icon: <Columns className="w-5 h-5 text-brand-red" /> },
  { name: "Staircases", desc: "Monolithic flights with anti-slip treads", icon: <Footprints className="w-5 h-5 text-brand-blue" /> },
  { name: "Insulated Panels", desc: "Thermal envelope sandwich walls", icon: <Shield className="w-5 h-5 text-brand-red" /> },
  { name: "Prestressed Units", desc: "Long-span pre-tensioned strands", icon: <Zap className="w-5 h-5 text-brand-blue" /> }
];

const industryTerminology = [
  "Coring", "Pouring", "Cast in Place", "Pour", "Steam Curing", "Concrete Mix", 
  "Cement Ratio", "Steel Rebar", "Lifting Sling", "Suction Cups", "Casting Molds", 
  "Formwork", "Assembly Jig", "Controlled Curing", "Hollowcore Slab"
];

const mediaApplications = [
  {
    title: "Video Library",
    platform: "Vimeo Channel",
    desc: "HD videos of precast plant casting, steam curing, transport logistics, and on-site crane erections.",
    icon: <Video className="w-6 h-6 text-brand-red" />,
    action: "Watch Videos"
  },
  {
    title: "Engineering Podcast",
    platform: "Audio Episodes",
    desc: "In-depth discussions with structural engineers, mix design specialists, and plant managers.",
    icon: <Mic className="w-6 h-6 text-brand-blue" />,
    action: "Listen Now"
  },
  {
    title: "Technical Webinars",
    platform: "Live & On-Demand",
    desc: "Continuing education credits (CEU) covering AASHTO specs, UHPC mix design, and BIM workflows.",
    icon: <Tv className="w-6 h-6 text-brand-red" />,
    action: "Register Free"
  }
];

const featuredProducts = [
  {
    name: "Hollowcore Slabs",
    desc: "Pre-stressed floor and roof elements providing long clear spans with minimal weight. Used in residential, commercial, and industrial construction.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    specs: ["Spans up to 18m", "150mm–500mm depth", "Fire rated 4 hrs"],
  },
  {
    name: "Box Culverts",
    desc: "Rectangular drainage structures engineered for roads, highways, and stormwater management systems.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
    specs: ["Spans 1m–6m", "ASTM C1577", "Watertight joints"],
  },
  {
    name: "Tetrapods",
    desc: "Four-legged concrete armor units for coastal defense and breakwater protection against tidal forces.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    specs: ["1–50 ton units", "Wave dissipation", "Interlocking design"],
  },
  {
    name: "Double Tees",
    desc: "Wide-flange structural floor elements ideal for parking garages, stadiums, and commercial buildings.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    specs: ["Spans up to 20m", "Pre-stressed", "Rapid erection"],
  },
  {
    name: "Utility Vaults",
    desc: "Underground enclosures for electrical, telecommunications, and water distribution infrastructure.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    specs: ["HS-20 load rated", "Watertight", "Custom sizes"],
  },
  {
    name: "Retaining Walls",
    desc: "Gravity and MSE wall systems for earth retention, landscaping, and structural support applications.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    specs: ["Heights to 12m", "Textured finishes", "Segmental / Panel"],
  },
];

const stats = [
  { value: "$165B+", label: "Global Market Size", icon: <BarChart3 className="w-6 h-6" /> },
  { value: "50%", label: "Faster Construction", icon: <Zap className="w-6 h-6" /> },
  { value: "100+", label: "Year Design Life", icon: <ShieldCheck className="w-6 h-6" /> },
  { value: "70%", label: "Less Waste vs CIP", icon: <TrendingUp className="w-6 h-6" /> },
];

const latestArticles = [
  {
    title: "Understanding Prestressed vs Post-Tensioned Concrete",
    category: "Technical",
    author: "Dr. Sarah Mitchell",
    readTime: "7 min",
    excerpt: "A deep dive into the two primary methods of applying compressive forces to concrete elements, their applications, advantages, and when to choose one over the other.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Accelerated Bridge Construction: The ABC Approach",
    category: "Infrastructure",
    author: "James Rodriguez, PE",
    readTime: "10 min",
    excerpt: "How precast concrete is revolutionizing bridge construction with off-site fabrication, minimal traffic disruption, and dramatically shortened project timelines.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Rise of 3D-Printed Precast Formwork",
    category: "Innovation",
    author: "Precastapedia Tech Desk",
    readTime: "6 min",
    excerpt: "Exploring how additive manufacturing is creating complex formwork shapes that were previously impossible or prohibitively expensive with traditional methods.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Self-Healing Concrete: From Lab to Precast Plant",
    category: "Materials Science",
    author: "Prof. Elena Vasquez",
    readTime: "8 min",
    excerpt: "Bacteria-based and mineral-based self-healing admixtures are now being trialed in precast production. Here's what the early results show.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=800&auto=format&fit=crop",
  },
];

const partners = [
  "PCI (Precast/Prestressed Concrete Institute)",
  "NPCA (National Precast Concrete Association)",
  "ACI (American Concrete Institute)",
  "ASTM International",
  "AASHTO",
  "fib (International Federation for Structural Concrete)",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* ==================== BREAKING NEWS TICKER ==================== */}
      <div className="bg-brand-blue text-white py-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <span className="bg-brand-red text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-widest shrink-0">
            Breaking
          </span>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-12 animate-marquee">
              {breakingNews.map((news, idx) => (
                <span key={idx} className="text-sm font-medium">{news}</span>
              ))}
              {breakingNews.map((news, idx) => (
                <span key={`dup-${idx}`} className="text-sm font-medium">{news}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================== HERO ARTICLE ==================== */}
      <article className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-gray-200">
        <div className="md:col-span-8 relative aspect-[16/9] bg-gray-200 overflow-hidden group rounded-xl shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Modern precast concrete factory"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
            Industry Feature
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded font-semibold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm">
            <PlayCircle className="w-3.5 h-3.5" /> Watch Video
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <Link href="/industry" className="text-brand-red font-bold uppercase tracking-wider text-xs mb-2 hover:underline">
            History & Future of Precast
          </Link>
          <Link href="/industry" className="group">
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight text-brand-blue mb-3 group-hover:text-brand-red transition-colors">
              How Big Data is Shaping Smarter Precast Decisions
            </h1>
          </Link>
          <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
            From predictive analytics driving plant efficiency to AI-powered quality control on the casting bed — the precast concrete industry is entering an era of data-driven transformation.
          </p>
          <div className="flex items-center text-xs font-medium text-gray-500">
            <span className="text-black font-semibold mr-2">By Precastapedia Staff</span>
            <span>•</span>
            <span className="ml-2">8 min read</span>
          </div>
          <Link href="/industry" className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-brand-blue hover:text-brand-red transition-colors uppercase tracking-wider">
            Read Full Article <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {/* ==================== STATS BAR ==================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-brand-blue/40 hover:shadow-md transition-all group">
            <div className="flex justify-center mb-2 text-brand-blue group-hover:text-brand-red transition-colors">{stat.icon}</div>
            <div className="text-2xl sm:text-3xl font-black text-brand-blue">{stat.value}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ==================== FUNCTION & STRUCTURE OF PRECAST (PDF Page 84) ==================== */}
      <section className="bg-gradient-to-br from-brand-blue via-[#182357] to-[#0d1436] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-white/10 -mx-4 sm:mx-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-white/15 pb-4">
          <div>
            <span className="bg-brand-red text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-widest">
              PDF Page 84 Reference
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              Function & Structure of Precast
            </h2>
          </div>
          <Link href="/function-structure" className="text-xs font-bold text-white hover:text-brand-red uppercase tracking-wider flex items-center gap-1 bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/20 transition-all">
            Full Details <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {functionStructureItems.map((item, idx) => (
            <Link key={idx} href={item.href} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-brand-red transition-colors mb-1">{item.title}</h3>
                <span className="text-[11px] font-semibold text-brand-red uppercase tracking-wider block mb-2">{item.tagline}</span>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 flex items-center text-[11px] font-bold text-white/90 group-hover:text-white">
                <span>Explore Category</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== PRECAST COMPONENTS SHOWCASE (PDF Page 85) ==================== */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest block">Building Blocks</span>
            <h2 className="text-2xl font-black text-brand-blue tracking-tight">Precast Components Overview</h2>
          </div>
          <Link href="/components" className="text-xs font-bold text-brand-red hover:underline uppercase tracking-wider flex items-center gap-1">
            View All Components <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {precastComponentsPreview.map((comp, idx) => (
            <Link key={idx} href="/components" className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-brand-blue hover:bg-blue-50/50 hover:shadow-md transition-all group flex flex-col items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                {comp.icon}
              </div>
              <span className="font-bold text-xs text-brand-blue group-hover:text-brand-red transition-colors">{comp.name}</span>
              <span className="text-[10px] text-gray-500 line-clamp-1 mt-1">{comp.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== SECTOR GRID + SIDEBAR ==================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <div className="lg:col-span-8">
          <div className="mb-6 border-b border-brand-blue pb-2 flex items-center justify-between">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-blue">Precast Sectors</h2>
            <Link href="/products" className="text-sm font-bold text-brand-red hover:underline uppercase tracking-wider flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PRECAST_SECTORS.map((sector) => (
              <article key={sector.id} className="group">
                <Link href={`/products?sector=${sector.id}`}>
                  <div className="relative aspect-[3/2] mb-4 overflow-hidden bg-gray-200 rounded-lg shadow-sm">
                    <Image src={sector.image} alt={sector.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-semibold uppercase tracking-wider backdrop-blur-sm">Video / Image</div>
                  </div>
                  <span className="text-brand-red font-bold uppercase tracking-wider text-xs mb-2 block group-hover:underline">
                    {sector.id.replace(/-/g, " ")}
                  </span>
                  <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-brand-blue transition-colors">{sector.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{sector.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.elements.slice(0, 3).map((el, idx) => (
                      <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{el}</span>
                    ))}
                    {sector.elements.length > 3 && (
                      <span className="text-[10px] bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full font-semibold">+{sector.elements.length - 3} more</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* ==================== INDUSTRY TERMINOLOGY TICKER (PDF Pages 2-3) ==================== */}
      <section className="bg-gray-100 border border-gray-200 rounded-xl p-5 shadow-inner">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-brand-blue text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            Industry Terminology
          </span>
          <span className="text-xs text-gray-500 font-semibold">Precast Concrete Technical Terms (PDF Reference)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {industryTerminology.map((term, idx) => (
            <span key={idx} className="bg-white border border-gray-200 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold shadow-xs hover:border-brand-red transition-colors">
              {term}
            </span>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section>
        <div className="mb-6 border-b border-brand-blue pb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-blue">Featured Products</h2>
          <Link href="/products" className="text-sm font-bold text-brand-red hover:underline uppercase tracking-wider flex items-center gap-1">
            Browse All A-Z <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-brand-blue/30 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase">Video / Image</div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[10px] bg-brand-blue/5 text-brand-blue px-2 py-0.5 rounded-full font-semibold border border-brand-blue/10">
                      {spec}
                    </span>
                  ))}
                </div>
                <Link href="/products" className="text-xs font-bold text-brand-red hover:underline uppercase tracking-wider flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== A-Z ENCYCLOPEDIA ==================== */}
      <AlphabetIndex />

      {/* ==================== MID-PAGE INLINE AD BANNER ==================== */}
      <div>
        <AdBanner format="inline" slotName="Mid-Page Sponsored Banner" />
      </div>

      {/* ==================== MEDIA & LEARNING PLATFORMS (PDF Page 39) ==================== */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest block">Multimedia Resources</span>
            <h2 className="text-2xl font-black text-brand-blue tracking-tight">Videos, Podcasts & Webinars</h2>
          </div>
          <span className="text-xs font-semibold text-gray-500">PDF Page 39 Applications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaApplications.map((media, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="bg-white border border-gray-200 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 transition-transform">
                  {media.icon}
                </div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">{media.platform}</span>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{media.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{media.desc}</p>
              </div>
              <Link href="/quick-links/videos" className="inline-flex items-center justify-center gap-1.5 bg-brand-blue text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-brand-blue/90 transition-colors">
                {media.action} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== LATEST ARTICLES ==================== */}
      <section>
        <div className="mb-6 border-b border-brand-blue pb-2">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-blue">Latest Insights & Articles</h2>
        </div>
        <div className="space-y-8">
          {latestArticles.map((article, idx) => (
            <article key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-gray-100 last:border-0 group">
              <div className="md:col-span-4 relative aspect-[3/2] overflow-hidden bg-gray-200 rounded-lg shadow-sm">
                <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 right-3 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase">Video / Image</div>
              </div>
              <div className="md:col-span-8 flex flex-col justify-center">
                <span className="text-brand-red font-bold uppercase tracking-wider text-xs mb-2">{article.category}</span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight mb-2 group-hover:text-brand-blue transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{article.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                  <span className="text-black font-semibold">{article.author}</span>
                  <span>•</span>
                  <span>{article.readTime} read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== WHY PRECAST SECTION ==================== */}
      <section className="bg-brand-blue text-white rounded-2xl p-8 sm:p-12 -mx-4 sm:mx-0 shadow-xl border border-white/10">
        <div className="text-center mb-10">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Why Choose Precast</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">The Advantages of Precast Concrete</h2>
          <p className="text-white/60 mt-3 max-w-2xl mx-auto">Factory-controlled production delivers consistency, durability, and speed that site-cast methods simply cannot match.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Zap className="w-6 h-6" />, title: "Speed of Construction", desc: "Up to 50% faster than conventional cast-in-place. Pre-fabricated elements arrive ready to install, eliminating curing wait times on site." },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "Superior Quality", desc: "Factory-controlled curing, strict QA/QC protocols, and steel-reinforced molds ensure every piece meets exacting tolerances." },
            { icon: <Factory className="w-6 h-6" />, title: "Weather Independence", desc: "Production continues year-round in climate-controlled facilities regardless of outdoor conditions — rain, snow, or extreme heat." },
            { icon: <TrendingUp className="w-6 h-6" />, title: "Cost Efficiency", desc: "Lower life-cycle costs through reduced on-site labor, minimal formwork, less material waste, and faster project delivery." },
            { icon: <Globe className="w-6 h-6" />, title: "Sustainability", desc: "Reduced material waste (70% less vs CIP), recyclable forms, carbon-efficient mixes, and closed-loop water recycling in modern plants." },
            { icon: <Award className="w-6 h-6" />, title: "Durability & Longevity", desc: "100+ year design life with proper maintenance. Precast resists fire, moisture, pests, and seismic forces better than many alternatives." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-brand-red mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== INDUSTRY PARTNERS ==================== */}
      <section>
        <div className="text-center mb-8">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Trusted Standards</span>
          <h2 className="text-2xl font-bold tracking-tight text-brand-blue mt-2">Industry Organizations & Standards Bodies</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-brand-blue/30 hover:shadow-md transition-all flex items-center justify-center min-h-[80px]">
              <span className="text-xs font-semibold text-gray-600 leading-tight">{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== NEWSLETTER CTA ==================== */}
      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-blue mb-3 tracking-tight">Stay Updated with Precastapedia</h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">Get the latest precast industry news, product updates, and technical articles delivered to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
          />
          <button className="bg-brand-red text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-red/90 transition-colors shadow-sm">
            Subscribe
          </button>
        </div>
        <p className="text-[11px] text-gray-400 mt-3">No spam. Unsubscribe at any time.</p>
      </section>
    </div>
  );
}
