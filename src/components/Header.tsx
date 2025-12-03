import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#334155] bg-[#0f172a]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="gradient-primary p-2.5 rounded-xl glow-soft">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#f8fafc] tracking-tight">Inspired Energy Optimizer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/product"
              className={`transition-colors ${
                isActive('/product') ? 'text-[#f8fafc]' : 'text-[#94a3b8] hover:text-[#f8fafc]'
              }`}
            >
              Product
            </Link>
            <Link
              to="/solutions"
              className={`transition-colors ${
                isActive('/solutions') ? 'text-[#f8fafc]' : 'text-[#94a3b8] hover:text-[#f8fafc]'
              }`}
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-[#f8fafc]' : 'text-[#94a3b8] hover:text-[#f8fafc]'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-[#f8fafc]' : 'text-[#94a3b8] hover:text-[#f8fafc]'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-lg gradient-primary text-white hover:glow-soft transition-all"
            >
              Book Demo
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-[#f8fafc]">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0f172a] border-[#334155] w-80" aria-describedby="mobile-menu-description">
              <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
              <p id="mobile-menu-description" className="sr-only">Main navigation links</p>
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/product"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    isActive('/product')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  Product
                </Link>
                <Link
                  to="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    isActive('/solutions')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  Solutions
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    isActive('/about')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    isActive('/contact')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-[#334155]">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 rounded-lg gradient-primary text-white hover:glow-soft transition-all text-center"
                  >
                    Book Demo
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
