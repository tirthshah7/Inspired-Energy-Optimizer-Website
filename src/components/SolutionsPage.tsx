import { Building, Factory, School, Sprout, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SEO } from './SEO';
import { analyticsEvents, trackEvent } from '../lib/analytics';

const solutions = [
  {
    icon: Sprout,
    title: 'Greenhouses & Controlled-Environment Agriculture',
    badge: 'Now accepting pilots',
    headline: 'Built for Ontario greenhouses that actually pay the GA bill.',
    description:
      'Greenhouse operators in Windsor-Essex, Niagara, and Southern Ontario carry some of the heaviest electricity bills in the province — often $150K to $500K+ per year, with Global Adjustment making up 50–70% of the total. Enerwyse forecasts IESO coincident peak windows, flags inefficiencies in your HPS lighting cycles, heating, ventilation, and dehumidification, and helps your team take action before the bill arrives. Typical pilot finding: $8–30K/year in avoidable GA charges from a single facility.',
    benefits: [
      'Forecast IESO coincident peaks and shift HPS lighting or irrigation schedules to avoid Class A GA exposure.',
      'Detect dehumidifier and ventilation overlap, boiler short-cycling, and after-hours pump runtime that quietly inflates your base load.',
      'Align lighting DLI targets and climate setpoints with off-peak TOU windows without compromising crop quality.',
    ],
    cta: 'Apply for the greenhouse pilot',
    image:
      'https://images.unsplash.com/photo-1524593166156-312f362cada0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlfGVufDF8fHx8MTc2NDQ0Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#22c55e',
  },
  {
    icon: Building,
    title: 'Commercial Buildings',
    badge: 'Now accepting pilots',
    headline: 'Bring your operations, sustainability, and finance teams onto the same page.',
    description:
      'For offices, mixed-use buildings, retail, and healthcare facilities, Enerwyse turns scattered BMS exports, utility portal logins, and monthly invoices into a single view of what\'s actually happening with your energy. Most commercial sites see 8–15% reduction in demand charges and TOU costs within the first 90 days of acting on Enerwyse recommendations — without new hardware or equipment changes.',
    benefits: [
      'Identify AHU, RTU, and chiller scheduling gaps — equipment running outside occupancy hours, weekends, holidays.',
      'Catch demand charge spikes from simultaneous equipment starts and recommend staggered startup sequences.',
      'Generate clean, shareable visuals for ESG reporting, board updates, and tenant communications.',
    ],
    cta: 'Apply for the commercial pilot',
    image:
      'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQzNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#38bdf8',
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    badge: 'Now accepting pilots',
    headline: 'See the link between production schedules and your energy bill.',
    description:
      'Industrial sites have a unique problem: energy use is tied to production, but production schedules don\'t always align with energy cost windows. Enerwyse maps energy intensity to your shifts, production runs, and line-level activity — surfacing the highest-impact opportunities first. Industrial pilots typically uncover 5–12% in process-level energy waste in the first 60 days, plus demand charge optimization opportunities worth thousands per month.',
    benefits: [
      'Map energy usage by shift, production line, and process step to identify high-intensity windows you can shift.',
      'Flag off-shift idle loads — compressors, conveyors, and HVAC running outside production hours.',
      'Optimize motor starts and demand charge exposure during peak tariff windows.',
    ],
    cta: 'Apply for the industrial pilot',
    image:
      'https://images.unsplash.com/photo-1764114235916-74de69e6851f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MzkyNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#a855f7',
  },
  {
    icon: School,
    title: 'Campuses & Multi-Site Operations',
    badge: 'Now accepting pilots',
    headline: 'One place to compare, prioritize, and report across every building.',
    description:
      'For school districts, healthcare networks, universities, and multi-site operators, Enerwyse normalizes energy data across buildings so you can benchmark, prioritize, and report in one view. Multi-site pilots typically identify 10–20% of buildings as the top opportunities for early intervention — letting your team focus budget and attention where the impact is highest.',
    benefits: [
      'Benchmark sites against each other on normalized metrics (kWh per square foot, cost per occupant, peak-to-average ratio).',
      'Surface the top 10–20% of sites driving the majority of waste so your team can prioritize.',
      'Generate consolidated visuals for board reports, ESG filings, and grant compliance (ISO 50001, GHG inventories).',
    ],
    cta: 'Apply for the campus pilot',
    image:
      'https://images.unsplash.com/photo-1762264644182-475f505feabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBidWlsZGluZyUyMG5pZ2h0fGVufDF8fHx8MTc2NDQ0Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#38bdf8',
  },
];

const solutionsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Enerwyse Solutions for Ontario C&I Facilities',
  url: 'https://www.enerwyse.ca/solutions',
  description:
    'Vertical-specific energy intelligence for Ontario greenhouses, commercial buildings, industrial sites, and campuses.',
};

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <SEO
        title="Ontario Energy Solutions for Greenhouses and C&I Facilities | Enerwyse"
        description="GA-aware energy intelligence for Ontario greenhouses, commercial buildings, industrial sites, and campuses. Reduce load during peak windows and catch waste faster."
        path="/solutions"
        keywords={[
          'Ontario greenhouse energy management',
          'commercial building energy Ontario',
          'industrial energy management Ontario',
          'campus energy optimization',
          'Global Adjustment greenhouses',
        ]}
        structuredData={solutionsStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#38bdf8] top-20 -left-20" />
        <div className="floating-blob w-80 h-80 bg-[#22c55e] top-40 right-20" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] mb-6">
              Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Built Around How Your Facility Actually Runs
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Whether you operate a single site or multiple locations, Enerwyse adapts to your data and
              day-to-day workflows — not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={index}
            className={`py-20 px-6 ${isEven ? 'bg-[#111827]' : 'bg-[#0f172a]'}`}
          >
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`${isEven ? 'order-1' : 'order-1 lg:order-2'} relative`}>
                  <div className="glow-soft absolute -inset-4 rounded-3xl opacity-20" style={{ background: `radial-gradient(circle, ${solution.color}40 0%, transparent 70%)` }} />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#334155] hover:border-[#22c55e] transition-all">
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent" />
                    <div
                      className="absolute bottom-6 left-6 p-4 rounded-xl backdrop-blur-sm"
                      style={{ backgroundColor: `${solution.color}20`, border: `1px solid ${solution.color}` }}
                    >
                      <Icon className="w-10 h-10" style={{ color: solution.color }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-sm mb-3">
                    {solution.badge}
                  </div>
                  <div className="inline-block px-4 py-2 rounded-full bg-[#1f2937] border border-[#334155] text-[#94a3b8] mb-4">
                    {solution.title}
                  </div>
                  <h2 className="text-4xl text-[#f8fafc] mb-6">
                    {solution.headline}
                  </h2>
                  <p className="text-xl text-[#94a3b8] mb-8">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${solution.color}20` }}
                        >
                          <Check className="w-4 h-4" style={{ color: solution.color }} />
                        </div>
                        <span className="text-[#f8fafc] text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact#demo-form"
                    onClick={() =>
                      trackEvent(analyticsEvents.solutionCtaClick, {
                        vertical: solution.title,
                      })
                    }
                    className="inline-block mt-8 px-8 py-3 rounded-xl border-2 border-[#334155] text-[#f8fafc] hover:border-[#22c55e] hover:glow-soft transition-all"
                  >
                    {solution.cta}
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Stats Section - Proven Results Across Industries */}
      {/* TODO: Uncomment when ready to show proven results/metrics */}
      {/* 
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#f8fafc] mb-4">
              Proven Results Across Industries
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="frosted-glass rounded-xl p-8 border border-[#334155] text-center">
              <div className="text-5xl text-[#22c55e] mb-3">5-15%</div>
              <div className="text-[#94a3b8]">Average energy savings</div>
            </div>
            <div className="frosted-glass rounded-xl p-8 border border-[#334155] text-center">
              <div className="text-5xl text-[#38bdf8] mb-3">$47M</div>
              <div className="text-[#94a3b8]">Savings identified annually</div>
            </div>
            <div className="frosted-glass rounded-xl p-8 border border-[#334155] text-center">
              <div className="text-5xl text-[#a855f7] mb-3">1,247</div>
              <div className="text-[#94a3b8]">Buildings connected</div>
            </div>
            <div className="frosted-glass rounded-xl p-8 border border-[#334155] text-center">
              <div className="text-5xl text-[#22c55e] mb-3">24k</div>
              <div className="text-[#94a3b8]">Tons CO₂ avoided</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0f172a] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#a855f7] bottom-20 left-20" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-[#f8fafc] mb-6">
              See how this fits your facility.
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8">
              Share your facility type, key systems, and what data you can access today — and we’ll recommend
              a practical first step that matches your operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact#demo-form"
                onClick={() => trackEvent(analyticsEvents.demoCtaClick, { location: 'solutions_bottom_primary' })}
                className="px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
              >
                Start a Conversation
              </a>
              <a
                href="/contact"
                onClick={() => trackEvent(analyticsEvents.demoCtaClick, { location: 'solutions_bottom_secondary' })}
                className="px-10 py-4 rounded-xl border-2 border-[#334155] text-[#f8fafc] hover:border-[#22c55e] transition-all"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
