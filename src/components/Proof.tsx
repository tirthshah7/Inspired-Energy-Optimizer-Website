import { Check } from 'lucide-react';

const proofPoints = [
  'Cloud-based — no new meters or hardware required.',
  'Works alongside existing BMS, utility portals, and spreadsheets.',
  'Designed for small pilots that can expand to portfolio scale.',
  'Founder-led onboarding and support during early customers.',
];

const faqItems = [
  {
    question: 'What does a typical pilot look like?',
    answer: 'Most pilots run for 6–12 weeks with 1–5 buildings. We focus on quick wins and a clear summary of actions, estimated savings ranges, and next steps.',
  },
  {
    question: 'Do we need IT resources to get started?',
    answer: 'Usually not. For most pilots we work with your energy or facilities team to access existing data exports or portals. API integrations can come later.',
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
            Why teams choose Inspired Energy Optimizer for pilots
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
