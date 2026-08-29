import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-[#171717] sticky top-0 bg-[#292929] z-50 shadow-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
        {/* Left: Menu */}
        <div className="flex items-center space-x-4 flex-1">
          <button className="p-2 hover:bg-[#171717] rounded-full" aria-label="Menu">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 hover:bg-[#171717] rounded-full hidden sm:block" aria-label="Search">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-tighter text-white uppercase">
            Precastapedia
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end space-x-4 flex-1">
          <button className="text-sm font-semibold text-white hover:text-white/80 hidden sm:block">
            Sign In
          </button>
          <button className="bg-white text-[#171717] px-4 py-2 text-sm font-semibold rounded hover:bg-white/90 transition-colors hidden sm:block">
            Subscribe
          </button>
          <button className="p-2 hover:bg-[#171717] rounded-full sm:hidden" aria-label="User">
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
 
    </header>
  );
}
