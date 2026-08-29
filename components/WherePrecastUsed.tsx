import React from "react";
import Link from "next/link";
import { Building, Truck, Droplets, Shield, ArrowRight } from "lucide-react";

interface ApplicationCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  link: string;
}

const categories: ApplicationCategory[] = [
  {
    title: "Building Construction",
    icon: <Building className="w-5 h-5 text-[#171717]" />,
    description: "Structural frames, floors, walls, stairs, and cladding panels for residential, commercial, and institutional buildings.",
    tags: ["Hollowcore Slabs", "Double Tees", "Wall Panels", "Columns", "Beams", "Stairs"],
    link: "/products?sector=commercial",
  },
  {
    title: "Infrastructure & Transport",
    icon: <Truck className="w-5 h-5 text-[#171717]" />,
    description: "Bridge girders, culverts, barriers, sound walls, and segmental tunnel linings for highways, railways, and transit.",
    tags: ["AASHTO Girders", "Box Culverts", "Jersey Barriers", "Sound Walls", "Tunnel Segments"],
    link: "/products?sector=roads-bridges",
  },
  {
    title: "Water & Wastewater",
    icon: <Droplets className="w-5 h-5 text-[#171717]" />,
    description: "Pipes, manholes, septic tanks, wet wells, and treatment plant structures for municipal and private water systems.",
    tags: ["RCP Pipes", "Manholes", "Septic Tanks", "Wet Wells", "Catch Basins"],
    link: "/products?sector=water-sewer",
  },
  {
    title: "Marine & Coastal",
    icon: <Shield className="w-5 h-5 text-[#171717]" />,
    description: "Armor units, dock panels, sheet piles, and seawall caps designed for saltwater exposure and tidal loading.",
    tags: ["Tetrapods", "Dock Panels", "Sheet Piles", "Seawall Caps"],
    link: "/products?sector=marine",
  },
];

export default function WherePrecastUsed() {
  return (
    <section className="bg-white border border-[#171717]/10 rounded-2xl p-8 sm:p-12 text-[#171717] shadow-sm">
      <div className="mb-8">
        <span className="text-[#171717]/50 text-xs font-bold uppercase tracking-widest block mb-2">
          By Application
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
          Where Precast Products Are Used
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#171717]/5 border border-[#171717]/10 p-6 rounded-xl flex flex-col justify-between hover:border-[#171717]/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#171717]/15 flex items-center justify-center group-hover:border-[#171717]/30 transition-colors shrink-0">
                  {cat.icon}
                </div>
                <h3 className="font-extrabold text-lg text-[#171717] group-hover:underline">
                  {cat.title}
                </h3>
              </div>
              
              <p className="text-sm text-[#171717]/70 leading-relaxed mb-5">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cat.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-[#171717] text-white px-2.5 py-1 rounded text-xs select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <Link
                href={cat.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717]/70 hover:text-[#171717] uppercase tracking-wider group-hover:underline transition-colors mt-2"
              >
                View Products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
