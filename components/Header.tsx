import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
        {/* Left: Menu */}
        <div className="flex items-center space-x-4 flex-1">
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Menu">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block" aria-label="Search">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-tighter text-brand-blue uppercase">
            Precastapedia
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end space-x-4 flex-1">
          <button className="text-sm font-semibold text-gray-700 hover:text-brand-blue hidden sm:block">
            Sign In
          </button>
          <button className="bg-brand-red text-white px-4 py-2 text-sm font-semibold rounded hover:bg-brand-red/90 transition-colors hidden sm:block">
            Subscribe
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full sm:hidden" aria-label="User">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
 
    </header>
  );
}
