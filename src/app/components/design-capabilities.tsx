import Image from "next/image"
import { cn } from "@/lib/utils"
import { menuData } from "@/lib/menuData2"

// Data modeled after "Mega Foundries" capabilities
const tagLines = [
  {
    id: 1,
    lines: "Be bold. Be powerful. The Futuristic Mega Force.",
    description: "Represents Mega Foundries’ commitment to bold innovation, powerful engineering, and a futuristic vision. It reflects our focus on pioneering technologies, next-generation materials, and advanced manufacturing systems that position us as a global force transforming the future of metal and industrial engineering.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image1.jpeg`
  },
  {
    id: 2,
    lines: "Mega Options. Mega Outcomes.",
    description: "Highlights the extensive variety of products, solutions, and industrial services Mega Foundries offers. From raw materials to advanced manufacturing systems, the company consistently delivers high-value outcomes that exceed expectations through versatility, innovation, and precision engineering.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/Curb_Inlet_renders.1246.png`
  },
  {
    id: 3,
    lines: "A Force to Reckon With.",
    description: "Positions Mega Foundries as a dominant and reliable global leader. This tagline reflects our strong industrial capabilities, consistent product performance, and our established reputation in global markets as a trustworthy and powerful industrial partner.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image3.jpeg`
  },
  {
    id: 4,
    lines: "Learning Never Ends. Excellence Never Stops.",
    description: "Represents Mega Foundries’ internal culture of continuous learning, modern training, R&D enhancement, skill development, and dedication to industry-leading standards. Excellence is a process, not a destination.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image4.jpg`
  },
  {
    id: 5,
    lines: "Always Delivering Beyond Expectations.",
    description: "Emphasizes Mega Foundries’ reputation for exceeding industry standards and client expectations. The company consistently delivers superior quality, innovative solutions, and high-performance engineering across all product lines.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image5.jpeg`
  },
  {
    id: 6,
    lines: "The Mega Guarantee.",
    description: "Assures customers of long-term durability, reliability, and flawless engineering. The Mega Guarantee symbolizes trust and confidence in the performance, safety, and structural strength of every product.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image6.jpg`
  },
  {
    id: 7,
    lines: "Mega Savings. Zero Compromise.",
    description: "Communicates cost-efficiency paired with premium quality. It highlights Mega Foundries’ ability to provide competitive pricing without compromising on material strength, safety, or engineering excellence.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image7.jpeg`
  },
  {
    id: 8,
    lines: "Boundless Possibilities.",
    description: "Reflects the limitless technological, engineering, and industrial capabilities of Mega Foundries. Whether scaling production or innovating with new materials, the potential for growth is endless.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image3.jpeg`
  },
  {
    id: 9,
    lines: "Your Vision. Our Undertaking.",
    description: "Shows a client-centered approach where Mega Foundries converts customer concepts into real, functioning industrial solutions. This tagline reflects commitment, precision execution, and a long-term partnership mindset.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image3.jpeg`
  },
  {
    id: 10,
    lines: "Comforting the Future.",
    description: "Symbolizes the long-term sustainability, safety, and reliability built into Mega Foundries’ engineering processes and product designs—ensuring the future is strong, stable, and secure.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image10.jpeg`
  },
  {
    id: 11,
    lines: "Manage Your Foundries Seamlessly.",
    description: "Represents modern digital transformation, automation, and operational efficiency. This tagline is ideal for sections covering software systems, dashboards, workflow automation, and digital foundry management.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image11.jpg`
  },
  {
    id: 12,
    lines: "Retire the Vintage. Step Into Modern.",
    description: "Encourages industries to upgrade from outdated machinery and legacy systems to advanced, efficient, and future-ready solutions created by Mega Foundries.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image12.jpg`
  },
  {
    id: 13,
    lines: "Non-Stop Innovations. Non-Stop Progress.",
    description: "Highlights Mega Foundries’ continuous investment in R&D, new materials, enhanced engineering methods, and innovative industrial solutions that advance global manufacturing standards.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image3.jpeg`
  },
  {
    id: 14,
    lines: "Always Ahead of the Industry.",
    description: "Positions Mega Foundries as an industry leader in innovation, global expansion, and next-generation engineering. This tagline reflects a future-focused mindset and competitive advantage.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image14.jpeg`
  },
  {
    id: 15,
    lines: "Our Investment Today, Your Reward Tomorrow.",
    description: "Shows Mega Foundries’ long-term value approach. Every product is engineered to deliver consistent, high-performance results for years or decades—ensuring customers benefit long after installation.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image15.jpeg`
  },
  {
    id: 16,
    lines: "Price is Right. Commitments Are Everlasting.",
    description: "Reflects transparent pricing, ethical business practices, and commitment to long-term partnerships. Mega Foundries values trust and delivers continuous support throughout the customer lifecycle.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image16.jpg`
  },
  {
    id: 17,
    lines: "Mother Earth to Your Dock.",
    description: "Perfect for sourcing and logistics sections. It represents Mega Foundries’ global supply chain strength, where raw materials and products move reliably from international sources directly to client facilities.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image17.jpg`
  },
  {
    id: 18,
    lines: "Mega Strength. Mega Standards.",
    description: "Defines the exceptional quality, structural strength, durability, and strict compliance standards that Mega Foundries maintains across all operational and manufacturing processes.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image18.jpeg`
  },
  {
    id: 19,
    lines: "Crafting the Future With Precision.",
    description: "Emphasizes precise engineering, advanced tools, and meticulous craftsmanship. Every product is designed with future applications and evolving industrial needs in mind.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image19.jpeg`
  },
  {
    id: 20,
    lines: "Engineering Beyond Boundaries.",
    description: "Reflects global scalability. Mega Foundries designs and manufactures industrial solutions capable of serving international sectors without limitations on geography, complexity, or scale.",
    imgUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/image20.jpeg`
  }
];

export function DesignCapabilities() {
  const allCategories = Object.values(menuData).flatMap(section =>
    section.categories.map(cat => cat.name)
  );

  return (
    <section className="w-full bg-white text-[#0a0a0a] py-6 md:py-8 font-sans border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-4">

        {/* Section Heading */}
        <div className="border-b border-gray-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3 w-full">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#CC0000] block mb-1">
              Manufacturing Capabilities & Core Standards
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight">
              The Mega <span className="text-[#CC0000]">Philosophy</span>
            </h2>
          </div>
          <span className="text-black font-mono text-[11px] uppercase font-bold hidden sm:block">
            20 Core Pillars // Global Engineering Standards
          </span>
        </div>

        {/* The Grid Layout (2 Columns, Tight Spacing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {tagLines.map((item, index) => {
            const categoryTitle = allCategories[index % allCategories.length];

            return (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row border border-gray-200 bg-white shadow-sm hover:border-[#CC0000] hover:shadow-md transition-all duration-300 rounded-none overflow-hidden"
              >
                {/* Left Side: Image */}
                <div className="relative w-full sm:w-[32%] sm:min-w-[32%] min-h-[150px] sm:min-h-full bg-zinc-100 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <Image
                    src={item.imgUrl}
                    alt={item.lines}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between">
                  <div>
                    {/* Category Title */}
                    <span className="text-[10px] font-mono font-bold text-[#CC0000] uppercase tracking-wider mb-1 block">
                      {categoryTitle}
                    </span>

                    <h3 className="text-sm sm:text-base font-bold text-[#0a0a0a] mb-1.5 leading-snug group-hover:text-[#CC0000] transition-colors uppercase">
                      {item.lines}
                    </h3>
                  </div>

                  <p className="text-xs text-black leading-relaxed pt-1 border-t border-gray-50">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}