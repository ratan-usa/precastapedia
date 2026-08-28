"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ChevronRight, Building2, Layers, Box, Columns,
  Footprints, Shield, Zap, Factory, Gauge, Truck, Wrench,
  Ruler, HardHat, Mountain
} from "lucide-react";
import AdBanner from "@/components/AdBanner";

/* ── Product categories based on real precast industry classification ── */

const productCategories = [
  {
    title: "Hollowcore Slabs",
    desc: "Prestressed floor and roof planks with longitudinal voids for reduced weight. Standard widths 1200mm, depths from 150mm to 500mm.",
    icon: <Layers className="w-5 h-5" />,
    href: "/products/hollowcore-slabs",
    specs: ["Spans to 18m", "150–500mm deep", "4-hr fire rated"],
  },
  {
    title: "Double Tee Beams",
    desc: "Wide-flange floor members with two stems. Common in parking structures, warehouses, and commercial floors.",
    icon: <Box className="w-5 h-5" />,
    href: "/products/double-tee",
    specs: ["Spans to 20m", "Prestressed strands", "PCI certified"],
  },
  {
    title: "Sandwich Wall Panels",
    desc: "Three-layer insulated wall panels — outer concrete wythe, rigid foam core, inner concrete wythe. Used as building envelope.",
    icon: <Shield className="w-5 h-5" />,
    href: "/products/sandwich-panels",
    specs: ["R-20+ insulation", "Structural or cladding", "Tilt-up or crane set"],
  },
  {
    title: "Box Culverts",
    desc: "Rectangular precast drainage structures for stormwater, highway underpasses, and utility tunnels. Made per ASTM C1577.",
    icon: <Box className="w-5 h-5" />,
    href: "/products/box-culverts",
    specs: ["1m–6m spans", "ASTM C1577", "Tongue-and-groove joints"],
  },
  {
    title: "Precast Columns",
    desc: "Single-story and multi-story compression members for structural frames. Square, rectangular, or circular cross-sections.",
    icon: <Columns className="w-5 h-5" />,
    href: "/products/columns",
    specs: ["Up to 4 stories", "Corbel connections", "High-strength mix"],
  },
  {
    title: "Spandrel Beams",
    desc: "L-shaped or rectangular beams along building perimeters supporting floor loads and acting as facade elements.",
    icon: <Ruler className="w-5 h-5" />,
    href: "/products/spandrel-beams",
    specs: ["Load-bearing", "Architectural finish", "Hidden connections"],
  },
  {
    title: "Precast Stairs",
    desc: "Factory-cast monolithic staircase flights with landings. Anti-slip nosings, steel embedments for welded connections.",
    icon: <Footprints className="w-5 h-5" />,
    href: "/products/stairs",
    specs: ["Monolithic pour", "Anti-slip treads", "Steel embeds"],
  },
  {
    title: "Prestressed Girders",
    desc: "I-beams, bulb tees, and AASHTO girders for bridge spans. Pre-tensioned with 7-wire strand for high-span capacity.",
    icon: <Gauge className="w-5 h-5" />,
    href: "/products/girders",
    specs: ["AASHTO types I–VI", "Spans to 50m+", "7-wire strand"],
  },
  {
    title: "Retaining Walls",
    desc: "Gravity walls, cantilever walls, and MSE panel systems for earth retention in highways, railways, and site grading.",
    icon: <Mountain className="w-5 h-5" />,
    href: "/products/retaining-walls",
    specs: ["Heights to 12m", "MSE or gravity", "Textured finish"],
  },
  {
    title: "Utility Vaults & Manholes",
    desc: "Below-grade enclosures for electrical, telecom, and water distribution. Watertight joints, HS-20 traffic rated.",
    icon: <Wrench className="w-5 h-5" />,
    href: "/products/utility-vaults",
    specs: ["HS-20 rated", "Watertight", "Custom sizes"],
  },
  {
    title: "Septic Tanks",
    desc: "Residential and commercial wastewater treatment tanks. Single and multi-chamber designs per local health codes.",
    icon: <Box className="w-5 h-5" />,
    href: "/products/septic-tanks",
    specs: ["500–5000 gal", "Single/multi-chamber", "Riser compatible"],
  },
  {
    title: "Tetrapods & Armor Units",
    desc: "Four-legged concrete breakwater units for coastal and harbor defense. Interlocking geometry dissipates wave energy.",
    icon: <Shield className="w-5 h-5" />,
    href: "/products/tetrapods",
    specs: ["1–50 ton units", "Interlocking", "Wave dissipation"],
  },
];

/* ── Precast by application sector ── */

const applicationSectors = [
  {
    title: "Building Construction",
    desc: "Structural frames, floors, walls, stairs, and cladding panels for residential, commercial, and institutional buildings.",
    icon: <Building2 className="w-6 h-6 text-brand-red" />,
    href: "/products?sector=building",
    products: ["Hollowcore Slabs", "Double Tees", "Wall Panels", "Columns", "Beams", "Stairs"],
  },
  {
    title: "Infrastructure & Transport",
    desc: "Bridge girders, culverts, barriers, sound walls, and segmental tunnel linings for highways, railways, and transit.",
    icon: <Truck className="w-6 h-6 text-brand-blue" />,
    href: "/products?sector=infrastructure",
    products: ["AASHTO Girders", "Box Culverts", "Jersey Barriers", "Sound Walls", "Tunnel Segments"],
  },
  {
    title: "Water & Wastewater",
    desc: "Pipes, manholes, septic tanks, wet wells, and treatment plant structures for municipal and private water systems.",
    icon: <Wrench className="w-6 h-6 text-brand-red" />,
    href: "/products?sector=water",
    products: ["RCP Pipes", "Manholes", "Septic Tanks", "Wet Wells", "Catch Basins"],
  },
  {
    title: "Marine & Coastal",
    desc: "Armor units, dock panels, sheet piles, and seawall caps designed for saltwater exposure and tidal loading.",
    icon: <Shield className="w-6 h-6 text-brand-blue" />,
    href: "/products?sector=marine",
    products: ["Tetrapods", "Dock Panels", "Sheet Piles", "Seawall Caps"],
  },
];

/* ── Industry standards that govern precast production ── */

const standards = [
  { code: "ASTM C1577", name: "Box Culverts" },
  { code: "ASTM C858", name: "Underground Utility Structures" },
  { code: "ASTM C478", name: "Precast Concrete Manholes" },
  { code: "ASTM C1433", name: "Precast Concrete Pipe" },
  { code: "PCI MNL-120", name: "Design Handbook" },
  { code: "PCI MNL-135", name: "Tolerances for Precast" },
  { code: "ACI 318", name: "Structural Concrete Code" },
  { code: "AASHTO LRFD", name: "Bridge Design Specs" },
];

/* ── Precast manufacturing process steps ── */

const processSteps = [
  { step: "01", title: "Mold Setup", desc: "Steel or fiberglass forms are cleaned, oiled, and fitted with reinforcement cages, strand patterns, and embedded hardware." },
  { step: "02", title: "Concrete Placement", desc: "High-strength concrete (typically 5,000–8,000 psi) is batched, mixed, and placed into molds. Vibration consolidates the mix." },
  { step: "03", title: "Curing", desc: "Steam curing or heat-accelerated curing brings concrete to transfer strength (3,500+ psi) within 12–18 hours." },
  { step: "04", title: "Strand Release", desc: "Prestressing strands are cut, transferring compressive force into the concrete. The element cambers upward slightly." },
  { step: "05", title: "Stripping & QC", desc: "Elements are removed from molds, inspected for dimensions, surface quality, and tested for concrete strength." },
  { step: "06", title: "Transport & Erection", desc: "Finished pieces are transported by flatbed and erected on site with mobile or tower cranes." },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* ── HERO: What is Precast Concrete ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-gray-200">
        <div className="md:col-span-8 relative aspect-[16/9] bg-gray-200 overflow-hidden group rounded-xl shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Precast concrete manufacturing plant with crane lifting hollowcore slab"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="bg-brand-red text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-widest">
              Encyclopedia
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight mt-2">
              Precast Concrete Products
            </h1>
            <p className="text-sm text-white/80 mt-1 max-w-xl">
              Factory-manufactured concrete elements — cast, cured, and quality-checked before delivery to the construction site.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <h2 className="text-lg font-extrabold text-brand-blue mb-3 tracking-tight">
            What is Precast Concrete?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Precast concrete is produced by casting concrete in a reusable mold or form, curing it in a controlled factory environment, then transporting it to the construction site for installation. Unlike cast-in-place concrete, precast elements are manufactured off-site under strict quality control.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Common products include hollowcore slabs, wall panels, beams, columns, stairs, culverts, pipes, and specialty items like tetrapods and sound barriers.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-red transition-colors uppercase tracking-wider"
          >
            Browse All Products A–Z <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
 
    </div>
  );
}
