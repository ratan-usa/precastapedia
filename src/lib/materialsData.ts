import { Anvil, Hammer, Construction, Layers, Beaker, LucideIcon, ShieldCheck } from "lucide-react";
import { Wrench, Droplet, Lightbulb, Grid3X3, DoorOpen } from 'lucide-react';

export interface Category {
  title: string;
  slug: string;
  video?: string;
  image?: string;
  description: string;
  specs: string[];
  icon: LucideIcon;
  color: string;
}

export const categories: Category[] = [
  {
    title: "Trench Products",
    slug: "trench-products",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/trench/Trench_500_Animation.498.mp4`,
    description: "Heavy-duty drainage solutions for high-traffic industrial environments.",
    specs: ["Ductile Iron", "Load Class D400+", "Anti-Slip Matrix"],
    icon: Wrench,
    color: "bg-red-700",
  },
  {
    title: "Paving Risers",
    slug: "paving-risers",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/paving_riser/paving-riser-1.5213.mp4`,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving_riser_1.5200.png`,
    description: "Precision height-adjustment riser rings for asphalt resurfacing without tear-outs.",
    specs: ["ASTM A536 Grade", "AASHTO H-20", "Fast Installation"],
    icon: Layers,
    color: "bg-red-700",
  },
  {
    title: "Cleanouts",
    slug: "cleanouts",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/products/cleanout.jpeg`,
    description: "Professional grade access points for municipal plumbing and waste networks.",
    specs: ["Gas-tight Seals", "Brass/Nickel Finish", "Corrosion Proof"],
    icon: Droplet,
    color: "bg-red-700",
  },
  {
    title: "Pipe Grates",
    slug: "pipe-grates",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/products/pipe_grate.mp4`,
    description: "Optimized water flow and debris interception for municipal catch basins.",
    specs: ["High Inflow Rate", "Debris Filtration", "Cast Iron Durability"],
    icon: Grid3X3,
    color: "bg-red-700",
  },
  {
    title: "Hinged Castings",
    slug: "hinged-castings",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/HATCHES_COVER.png`,
    description: "Ergonomic, easy-access security manhole and utility hatch covers.",
    specs: ["Lift Assist Hinge", "Safety Cam Lock", "Zero Deflection"],
    icon: DoorOpen,
    color: "bg-red-700",
  }, 
  {
    title: "MJ Fittings",
    slug: "mj-fittings",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/MJ_Fittings.jpeg`,
    description: "Mechanical joint ductile iron fittings for pressurized underground pipelines.",
    specs: ["ISO 2531 / EN 545", "Up to 16 Bar", "Epoxy Protected"],
    icon: Wrench,
    color: "bg-red-700",
  },
  {
    title: "Detectable Warning Plates",
    slug: "detectable-warning-plates",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/Detectable_Warning_Plates.jpeg?v=2`,
    description: "ADA-compliant cast iron tactile plates with high-traction truncated domes.",
    specs: ["Class 35B Gray Iron", "AASHTO H-20", "Wet-Set Anchors"],
    icon: ShieldCheck,
    color: "bg-red-700",
  },
  {
    title: "Monitoring Well Stations",
    slug: "monitoring-well-stations",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/MEGA/MONITERING_WELL_STATION.png`,
    description: "Specialized cast iron flush-mount monitoring well protective vaults.",
    specs: ["Water-Resistant O-Ring", "Bolted Lid Lock", "Traffic Heavy Duty"],
    icon: Lightbulb,
    color: "bg-red-700",
  }
];

export const materialsData: Record<string, any> = {
  "cast-iron": {
    title: "Cast Iron",
    icon: Anvil,
    description: "Known for its excellent machinability, vibration dampening, and wear resistance. Ideal for engine blocks, manhole covers, and heavy machinery bases.",
    properties: ["High compressive strength", "Good castability", "Vibration damping", "Wear resistance"],
    applications: ["Automotive engine blocks", "Pipe fittings", "Machine tool bases", "Manhole covers"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image16.jpg`
  },
  "ductile-iron": {
    title: "Ductile Iron",
    icon: Hammer,
    description: "Also known as nodular cast iron, it offers the castability of gray iron but with much higher tensile strength and toughness.",
    properties: ["High ductility", "Impact resistance", "High tensile strength", "Elasticity"],
    applications: ["Water and sewer pipes", "Automotive crankshafts", "Wind turbine hubs", "Hydraulic components"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`
  },
  "steel": {
    title: "Steel",
    icon: Construction,
    description: "The backbone of modern construction. We offer carbon, alloy, and tool steels tailored to structural integrity and durability needs.",
    properties: ["High yield strength", "Weldability", "Versatility", "Durability"],
    applications: ["Structural beams", "Automotive chassis", "Construction equipment", "Tools and dies"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image11.jpg`
  },
  "aluminum": {
    title: "Aluminum",
    icon: Layers,
    description: "Lightweight yet strong, aluminum is essential for aerospace, automotive, and marine industries requiring corrosion resistance.",
    properties: ["Lightweight", "Corrosion resistant", "High thermal conductivity", "Non-magnetic"],
    applications: ["Aerospace components", "Automotive panels", "Heat sinks", "Marine fittings"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image7.jpeg`
  },
  "stainless": {
    title: "Stainless Steel",
    icon: Beaker,
    description: "Selected for its corrosion resistance and hygiene properties. Essential for medical, food processing, and chemical industries.",
    properties: ["Excellent corrosion resistance", "High temperature strength", "Hygienic surface", "Low maintenance"],
    applications: ["Food processing equipment", "Medical instruments", "Chemical tanks", "Architectural cladding"],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image12.jpg`
  }
};