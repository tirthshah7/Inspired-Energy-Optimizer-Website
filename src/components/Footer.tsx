import { Zap, Linkedin, Github, X, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
      <footer className="py-12 px-6 bg-[#0f172a] border-t border-[#334155]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 items-start">
            {/* LEFT: Brand - Enerwyse */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gradient-primary p-2 rounded-lg glow-soft">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#f8fafc] font-semibold text-lg">Enerwyse</span>
                  <span className="text-[#94a3b8] text-xs">Intelligent Energy</span>
                </div>
              </div>
              <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
                AI Energy Intelligence for Buildings and Industrial Sites
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors" aria-label="X (formerly Twitter)">
                  <X className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors" aria-label="Reddit">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* RIGHT: Tagline - BIG with Glow */}
            <div className="flex flex-col items-center justify-center px-4 md:px-8 py-4">
              <p className="text-[#94a3b8] text-center font-bold italic text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                Dedicated to a Smarter, More Sustainable Energy Future
              </p>
            </div>
          </div>

          {/* Company Row - Below Tagline */}
          {/* TODO: Uncomment when ready to implement Company row */}
          {/* 
          <div className="mb-8 pb-8 border-b border-[#334155]">
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-[#f8fafc] font-semibold text-sm uppercase tracking-wider">Company</h4>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
                <a href="/about" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  About
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  Blog
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  Careers
                </a>
                <a href="/contact" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          */}

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94a3b8]">
          <div className="flex flex-col gap-1">
            <p>&copy; 2025 Enerwyse. All rights reserved.</p>
            <p className="text-xs text-[#64748b]">
              Enerwyse operating under 1001435754 ONTARIO INC.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-[#22c55e] transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#22c55e] transition-colors">Terms of Service</a>
            <a href="/security" className="hover:text-[#22c55e] transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
