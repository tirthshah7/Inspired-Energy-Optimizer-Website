import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#f8fafc] p-2 -mr-2 z-50 relative"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0f172a] border-l border-[#334155] z-50 md:hidden overflow-y-auto">
              <div className="flex flex-col gap-4 p-6 pt-20">
                <Link
                  to="/product"
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
                    isActive('/product')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  Product
                </Link>
                <Link
                  to="/solutions"
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
                    isActive('/solutions')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  Solutions
                </Link>
                <Link
                  to="/about"
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
                    isActive('/about')
                      ? 'text-[#f8fafc] bg-[#22c55e]/10 border border-[#22c55e]/30'
                      : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f2937]'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
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
                    className="block w-full px-4 py-3 rounded-lg gradient-primary text-white hover:glow-soft transition-all text-center"
                  >
                    Book Demo
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
