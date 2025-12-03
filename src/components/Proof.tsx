import { Check } from 'lucide-react';

const proofPoints = [
  'Up to 5–15% savings potential identified annually',
  'No hardware lock-in — works with your existing systems',
  'AI-driven visibility across all buildings',
  'Action-first insights, not more spreadsheets',
  'Scalable for portfolios, campuses, and industrial environments',
];

export function Proof() {
  return (
    <section className="py-20 px-6 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="floating-blob w-96 h-96 bg-[#22c55e] top-20 -right-20" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            Why leading teams choose the Inspired Energy Optimizer
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="frosted-glass rounded-2xl p-8 md:p-12 border border-[#334155]">
            <div className="space-y-6">
              {proofPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22c55e]/20 flex items-center justify-center group-hover:bg-[#22c55e]/30 transition-all">
                    <Check className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <p className="text-lg text-[#f8fafc] pt-0.5">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
