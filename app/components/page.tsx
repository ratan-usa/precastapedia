import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Layers, Box, Columns, Footprints, Shield, Zap, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";


const componentsList = [
  {
    name: "Walls",
    category: "Vertical Walls & Barriers",
    desc: "Concrete panels used for building outer walls, interior load-bearing walls, sound barriers along highways, and soil-retaining structures.",
    icon: <Box className="w-5 h-5 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    details: ["Solid Load-Bearing Panels", "Sandwich Insulated Walls", "Retaining & MSE Wall Systems", "Acoustic Highway Noise Barriers"],
    badge: "Structural / Enclosure"
  },
  {
    name: "Slabs",
    category: "Horizontal Floor & Roof Decks",
    desc: "Long concrete panels used for building floors and roofs. Many have hollow tubes inside to make them lighter while keeping them strong.",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    details: ["Hollowcore Floor & Roof Slabs", "Solid Structural Deck Slabs", "Ribbed Slabs & Biaxial Planks", "Pre-Stressed Double Tees"],
    badge: "Floor & Roof"
  },
  {
    name: "Beams",
    category: "Horizontal Support Beams",
    desc: "Strong horizontal concrete pieces that support floor and roof slabs, transferring their weight to columns or bridge pillars.",
    icon: <Box className="w-5 h-5 text-amber-400" />,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
    details: ["Prestressed Highway Girders", "Rectangular Structural Beams", "L-Shaped & Inverted T-Beams", "Spandrel Facade Beams"],
    badge: "Load Bearing"
  },
  {
    name: "Columns",
    category: "Vertical Support Columns",
    desc: "Heavy vertical concrete posts that carry the weight of upper floors and transfer it safely down to the foundation.",
    icon: <Columns className="w-5 h-5 text-purple-400" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    details: ["Single-Story Square Columns", "Multi-Story Continuous Columns", "Architectural Formed Columns", "Pre-stressed Concrete Piles"],
    badge: "Vertical Framing"
  },
  {
    name: "Staircases",
    category: "Egress & Access Steps",
    desc: "Complete flights of steps made in a factory. They are safe to use immediately during building construction and resist fire.",
    icon: <Footprints className="w-5 h-5 text-emerald-400" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    details: ["Straight Flight Stair Units", "Spiral & Curved Architectural Stairs", "Integrated Landing Sections", "Non-Slip Molded Treads"],
    badge: "Safety & Egress"
  },
  {
    name: "Insulated Panels",
    category: "Walls with Built-in Foam",
    desc: "Multi-layer concrete wall panels containing a layer of insulation foam inside. This keeps building temperatures stable and saves heating energy.",
    icon: <Shield className="w-5 h-5 text-green-400" />,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=800&auto=format&fit=crop",
    details: ["Sandwich Insulated Panels", "High Thermal Mass Core", "Energy Efficient Enclosures", "Fire-Rated Barrier Envelope"],
    badge: "Thermal Envelope"
  },
  {
    name: "Prestressed Concrete",
    category: "Reinforced Steel Concrete",
    desc: "High-strength concrete elements pulled tight using internal steel cables. This prevents them from cracking under heavy weight.",
    icon: <Zap className="w-5 h-5 text-red-400" />,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    details: ["Pre-tensioned Steel Strands", "Post-tensioned Tendon Cables", "Long-Span Roof Girders", "Heavy Highway Bridge Elements"],
    badge: "High Performance"
  }
];

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* ==================== HERO BANNER ==================== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#292929] to-[#171717] text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-white/10 -mx-4 sm:mx-0">
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Overview
            </Link>
            <span className="bg-white text-[#171717] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1 border border-white">
              <Sparkles className="w-3 h-3" /> PDF Page 85 Reference
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
            Precast Components
          </h1>
          
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-6">
            The fundamental structural, architectural, and environmental building blocks of modern precast concrete engineering — manufactured to millimeter precision in factory-controlled environments.
          </p>
        </div>
      </div>

      {/* ==================== COMPONENTS GRID ==================== */}
      <section className="text-white">
        <div className="mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest block">Structural Elements</span>
            <h2 className="text-2xl font-black text-white tracking-tight">Core Precast Building Components</h2>
          </div>
          <span className="text-xs font-semibold text-white/60">7 Primary Categories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentsList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#292929] border border-white/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Component Image */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#171717]/80 backdrop-blur-md text-white p-2 rounded-lg border border-white/10">
                    {item.icon}
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-white text-[#171717] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-md border border-[#171717]">
                    {item.badge}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-white/80 uppercase tracking-widest font-semibold block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">{item.name}</h3>
                  </div>
                </div>

                {/* Component Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Typical Configurations
                    </h4>
                    <div className="space-y-1.5">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="text-xs text-white/80 bg-[#171717] border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span className="font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="px-6 py-3.5 bg-[#292929] border-t border-white/10 flex items-center justify-between">
                <Link href="/products" className="text-xs font-bold text-white hover:underline uppercase tracking-wider flex items-center gap-1 transition-colors">
                  Explore Products <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/quick-links/drawings" className="text-xs font-bold text-white hover:underline uppercase tracking-wider">
                  CAD Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== AD BANNER ==================== */}
      <div className="my-2">
        <AdBanner format="inline" slotName="Components Directory Sponsor" />
      </div>

      {/* ==================== CTA BANNER ==================== */}
      <section className="bg-gradient-to-r from-[#292929] to-[#171717] text-white rounded-2xl p-8 sm:p-12 text-center -mx-4 sm:mx-0 shadow-xl border border-white/10">
        <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">Need Custom Component Specifications?</h3>
        <p className="text-sm text-white/80 mb-6 max-w-xl mx-auto leading-relaxed">
          Contact our precast engineering team to get custom dimensions, reinforcement details, connection designs, and CAD/BIM models for your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/quick-links/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#171717] px-6 py-3 font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-white/90 transition-all shadow-lg">
            Speak with Precast Engineer
          </Link>
          <Link href="/quick-links/drawings" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm">
            View CAD & BIM Library
          </Link>
        </div>
      </section>
    </div>
  );
}
