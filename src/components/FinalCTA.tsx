import { ArrowRight, CheckCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="floating-blob w-96 h-96 bg-[#22c55e] top-10 left-10" />
      <div className="floating-blob w-80 h-80 bg-[#38bdf8] bottom-10 right-10" style={{ animationDelay: '5s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="gradient-card frosted-glass rounded-3xl p-12 border-2 border-[#22c55e]/30 glow-primary text-center">
            <h2 className="text-5xl text-[#f8fafc] mb-6">
              Turn Your Energy Data into Intelligence
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
              Ready to uncover hidden savings, prevent waste, and run your buildings smarter?
            </p>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
              {[
                'Setup in under 30 minutes',
                'No credit card required',
                'Free 30-day trial',
                'Cancel anytime',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-[#f8fafc]">
                  <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-4 rounded-xl gradient-primary text-white text-lg hover:glow-soft transition-all flex items-center gap-2 group">
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 rounded-xl border-2 border-[#334155] text-[#f8fafc] text-lg hover:border-[#22c55e] transition-all">
                Join Early Access
              </button>
            </div>

            {/* Trust Indicator - Uncomment when you have customers */}
            {/* <div className="mt-10 pt-8 border-t border-[#334155]">
              <p className="text-[#94a3b8] mb-4">Trusted by energy managers at:</p>
              <div className="flex flex-wrap gap-8 justify-center items-center text-[#94a3b8]">
                <div className="px-6 py-2 bg-[#1f2937] rounded-lg border border-[#334155]">Fortune 500 Companies</div>
                <div className="px-6 py-2 bg-[#1f2937] rounded-lg border border-[#334155]">Leading Universities</div>
                <div className="px-6 py-2 bg-[#1f2937] rounded-lg border border-[#334155]">Healthcare Systems</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
