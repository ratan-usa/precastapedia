import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroArticle() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-white/10">
      <div className="md:col-span-8 relative aspect-[16/9] bg-[#292929] overflow-hidden group rounded-xl shadow-md border border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Precast concrete manufacturing plant with crane lifting hollowcore slab"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="bg-white text-[#171717] text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-widest border border-white">
            Encyclopedia
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight mt-2 text-white">
            Precast Concrete Products
          </h1>
          <p className="text-sm text-white/85 mt-1 max-w-xl">
            Factory-manufactured concrete elements — cast, cured, and quality-checked before delivery to the construction site.
          </p>
        </div>
      </div>
      <div className="md:col-span-4 flex flex-col justify-center text-white">
        <h2 className="text-lg font-extrabold text-white mb-3 tracking-tight">
          What is Precast Concrete?
        </h2>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          Precast concrete is produced by casting concrete in a reusable mold or form, curing it in a controlled factory environment, then transporting it to the construction site for installation. Unlike cast-in-place concrete, precast elements are manufactured off-site under strict quality control.
        </p>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          Common products include hollowcore slabs, wall panels, beams, columns, stairs, culverts, pipes, and specialty items like tetrapods and sound barriers.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-white/80 transition-colors uppercase tracking-wider"
        >
          Browse All Products A–Z <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
