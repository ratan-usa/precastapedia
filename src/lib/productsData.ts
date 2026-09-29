const toSlug = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

interface ProductDetail {
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specifications: { label: string; value: string }[];
}

export const productsData: Record<string, ProductDetail> = {
  "biomass-boilers": {
    title: "Biomass Boilers",
    category: "Biomass Energy",
    description: "High-efficiency boilers designed to burn organic material for sustainable heat and power generation.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Automated fuel feeding", "High thermal efficiency", "Low emission technology"],
    specifications: [{ label: "Capacity", value: "500kW - 10MW" }, { label: "Fuel Type", value: "Wood chips, Pellets" }]
  },
  "gasification-equipment": {
    title: "Gasification Equipment",
    category: "Biomass Energy",
    description: "Advanced systems for converting organic or fossil fuel based carbonaceous materials into carbon monoxide, hydrogen and carbon dioxide.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Syngas production", "Waste-to-energy capable", "Modular design"],
    specifications: [{ label: "Efficiency", value: ">85%" }, { label: "Output", value: "Syngas / Thermal" }]
  },

  "cables": {
    title: "Industrial Cables",
    category: "Electrical Energy",
    description: "Heavy-duty electrical cables for power transmission and distribution networks.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["High voltage rating", "Weather resistant", "Copper/Aluminum conductors"],
    specifications: [{ label: "Voltage", value: "11kV - 33kV" }, { label: "Insulation", value: "XLPE" }]
  },
  "switch-gears": {
    title: "Switch Gears",
    category: "Electrical Energy",
    description: "Essential electrical equipment for isolating and protecting power systems.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Arc flash protection", "Remote monitoring", "Compact footprint"],
    specifications: [{ label: "Current Rating", value: "Up to 4000A" }, { label: "Type", value: "Air / Vacuum / SF6" }]
  },

  "solar-panel": {
    title: "Solar Panel",
    category: "Solar Energy",
    description: "High-performance photovoltaic modules for residential and commercial solar projects.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Monocrystalline cells", "High conversion efficiency", "25-year warranty"],
    specifications: [{ label: "Power Output", value: "400W - 650W" }, { label: "Efficiency", value: "21.5%" }]
  },
  "inverters": {
    title: "Solar Inverters",
    category: "Solar Energy",
    description: "Reliable inverters to convert DC output from solar panels into AC for grid utility.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Smart grid ready", "Hybrid capability", "Mobile app monitoring"],
    specifications: [{ label: "Phase", value: "Single / Three Phase" }, { label: "Efficiency", value: "98.6%" }]
  },

  "laser-cutting-machines": {
    title: "Laser Cutting Machines",
    category: "Fabrication Machines",
    description: "Precision fiber laser cutters for steel, aluminum, and brass processing.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["High speed cutting", "Autofocus head", "Low energy consumption"],
    specifications: [{ label: "Power", value: "1kW - 12kW" }, { label: "Bed Size", value: "3000mm x 1500mm" }]
  },
  "fiber-laser-cutting-machine": {
    title: "Fiber Laser Cutting Machine",
    category: "Fabrication Machines",
    description: "State-of-the-art fiber laser technology for superior cutting edge quality.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Zero maintenance source", "High wall-plug efficiency", "Rapid piercing"],
    specifications: [{ label: "Source", value: "IPG / Raycus" }, { label: "Axis Speed", value: "120 m/min" }]
  },

  "diesel": {
    title: "Diesel Generators",
    category: "Generator",
    description: "Robust diesel gensets for continuous and standby power applications.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Silent enclosure", "Automatic Transfer Switch", "Fuel efficient"],
    specifications: [{ label: "Rating", value: "50kVA - 2000kVA" }, { label: "Engine", value: "Cummins / Perkins" }]
  },

};

export function getProductBySlug(slug: string) {
  const exactMatch = productsData[slug];
  if (exactMatch) return exactMatch;

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: title,
    category: "General Products",
    description: `High quality ${title} available for global shipping. Contact us for detailed specifications and bulk pricing.`,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image13.jpg`,
    features: ["Industrial Grade", "Certified Quality", "Global Shipping"],
    specifications: [{ label: "Status", value: "In Stock" }, { label: "MOQ", value: "Contact for details" }]
  };
}


export const productData = [
  { count: "1200+", label: "Manholes Patterns" },
  { count: "4000+", label: "Curb Intet Patterns" },
  { count: "3000+", label: "Catch Basin Patterns" },
  { count: "1500+", label: "Water Works Patterns" },
  { count: "200+", label: "Cleanout Patterns" },
  { count: "5000+", label: "Trench Patterns" },
];