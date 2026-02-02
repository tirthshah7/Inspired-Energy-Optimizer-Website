import { Check } from 'lucide-react';

const proofPoints = [
  'Cloud-based — no new meters or hardware required.',
  'Works alongside your current tools.',
  'Structured to start small, with a clear path to expansion.',
  'Direct founder involvement during early deployments.',
];

const faqItems = [
  {
    question: 'What does getting started look like?',
    answer: 'Most engagements begin with a limited set of facilities over a defined period. The focus is on identifying quick, practical actions, estimating savings ranges, and outlining next steps for continued improvement.',
  },
  {
    question: 'Do we need IT resources to get started?',
    answer: 'Usually not. In most cases, we work directly with energy or facilities teams using existing data exports or portal access. Deeper integrations and APIs can be explored later if needed.',
  },
];

export function Proof() {
  return (
    <section className="py-20 px-6 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="floating-blob w-96 h-96 bg-[#22c55e] top-20 -right-20" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            Why teams Work with Enerwyse
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

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <h3 className="text-xl text-[#f8fafc] mb-3">{item.question}</h3>
                <p className="text-[#94a3b8]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
