import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white mt-12 py-12 border-t border-[#171717] relative z-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Precastapedia</h3>
          <p className="text-sm text-white/60">
            The defining voice of the precast concrete industry. Your complete resource for products, specifications, and insights.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold uppercase tracking-widest text-xs mb-4 text-white/40">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white/80 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-white/80 transition-colors">Products A-Z</Link></li>
            <li><Link href="/industry" className="hover:text-white/80 transition-colors">Industry Insights</Link></li>
            <li><Link href="/quick-links/catalogs" className="hover:text-white/80 transition-colors">Catalogs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold uppercase tracking-widest text-xs mb-4 text-white/40">Sectors</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products?sector=infrastructure" className="hover:text-white/80 transition-colors">Infrastructure</Link></li>
            <li><Link href="/products?sector=roads-bridges" className="hover:text-white/80 transition-colors">Roads & Bridges</Link></li>
            <li><Link href="/products?sector=water-sewer" className="hover:text-white/80 transition-colors">Water & Sewer</Link></li>
            <li><Link href="/products?sector=marine" className="hover:text-white/80 transition-colors">Marine & Coastal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold uppercase tracking-widest text-xs mb-4 text-white/40">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/quick-links/price" className="hover:text-white/80 transition-colors">Price Estimator</Link></li>
            <li><Link href="/quick-links/quotation" className="hover:text-white/80 transition-colors">Get a Quotation</Link></li>
            <li><Link href="/quick-links/drawings" className="hover:text-white/80 transition-colors">CAD & BIM Drawings</Link></li>
            <li><Link href="/quick-links/contact" className="hover:text-white/80 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-sm text-white/40 text-center">
        <p>&copy; {new Date().getFullYear()} Precastapedia. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
