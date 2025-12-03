import { Zap, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0f172a] border-t border-[#334155]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="gradient-primary p-2 rounded-lg glow-soft">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#f8fafc]">Inspired Energy Optimizer</span>
            </div>
            <p className="text-[#94a3b8] text-sm mb-4">
              AI Energy Intelligence for Buildings and Industrial Sites
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[#f8fafc] mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Features</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Integrations</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">API</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#f8fafc] mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#use-cases" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Commercial Buildings</a></li>
              <li><a href="#use-cases" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Industrial</a></li>
              <li><a href="#use-cases" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Campuses</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#f8fafc] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">About</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#94a3b8] hover:text-[#22c55e] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94a3b8]">
          <p>&copy; 2025 Inspired Energy Optimizer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#22c55e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#22c55e] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#22c55e] transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
