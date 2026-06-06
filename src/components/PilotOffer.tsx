import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const included = [
  'Connection to your utility data (Green Button CMD, or CSV upload while CMD is being set up)',
  'Daily AI briefings in plain English',
  'GA peak alerts and recommendations',
  'Direct founder support — 24/7 during pilot',
  'Detailed energy system performance report at Day 90 — yours to keep',
];

const committed = [
  'About 4–5 hours per week for setup, training, and feedback',
  'Sharing your meter data (CMD or CSV)',
  'Honest feedback to help shape the platform',
];

export function PilotOffer() {
  return (
    <section className="py-20 px-6 bg-[#111827] relative overflow-hidden">
      <div className="floating-blob w-80 h-80 bg-[#22c55e] -top-20 -right-20" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] mb-4">
              Now Accepting Pilot Customers
            </div>
            <h2 className="text-3xl md:text-4xl text-[#f8fafc] mb-4">
              Try Enerwyse free for 90 days
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              We're onboarding a small group of Ontario greenhouse and C&I
              operators as pilot customers. No hardware. No obligation. Just
              your meter data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1f2937] rounded-xl p-6 md:p-8 border border-[#334155]">
              <h3 className="text-xl text-[#f8fafc] mb-6">What's included</h3>
              <ul className="space-y-4">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#22c55e]" />
                    </div>
                    <span className="text-[#94a3b8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1f2937] rounded-xl p-6 md:p-8 border border-[#334155]">
              <h3 className="text-xl text-[#f8fafc] mb-6">What you commit</h3>
              <ul className="space-y-4">
                {committed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#38bdf8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#38bdf8]" />
                    </div>
                    <span className="text-[#94a3b8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#64748b] mb-6">
              Limited pilot capacity. Currently onboarding Ontario operators in
              Hydro One, Toronto Hydro, and Alectra service territories.
            </p>
            <Link
              to="/contact#demo-form"
              className="inline-block px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
            >
              Apply for the pilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
