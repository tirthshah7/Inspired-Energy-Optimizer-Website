import { Building, Factory, School, Sprout, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const solutions = [
  {
    icon: Sprout,
    title: 'Greenhouses & Controlled-Environment Agriculture',
    headline: 'Optimize energy without guessing against crop cycles.',
    description:
      'Enerwyse helps greenhouse operators align heating, lighting, ventilation, and dehumidification with real operating patterns — while keeping plant quality and comfort constraints in mind.',
    benefits: [
      'Align lighting and heating schedules with growth stages and tariffs.',
      'Detect off-schedule runtime in fans, boilers, pumps, and dehumidifiers.',
      'Track energy intensity by zone to pinpoint the highest-impact improvements.',
    ],
    image:
      'https://images.unsplash.com/photo-1524593166156-312f362cada0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlfGVufDF8fHx8MTc2NDQ0Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#22c55e',
  },
  {
    icon: Building,
    title: 'Commercial Buildings',
    headline: 'Give your operations team a clear, shared view.',
    description:
      'For offices, mixed-use sites, and retail, the platform helps align energy, operations, and tenant-experience teams around the same live data.',
    benefits: [
      'Uncover scheduling gaps in HVAC and lighting.',
      'Track comfort-related issues against equipment behavior.',
      'Support ESG reporting with simple visual exports.',
    ],
    image:
      'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQzNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#38bdf8',
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    headline: 'See how energy is tied to the way you run lines.',
    description:
      'Connect energy behavior to production schedules to find low-risk ways to trim energy without disrupting throughput.',
    benefits: [
      'Map energy usage to shifts and production runs.',
      'Highlight high-load steps to optimize first.',
      'Flag off-shift loads and leaks.',
    ],
    image:
      'https://images.unsplash.com/photo-1764114235916-74de69e6851f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MzkyNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#a855f7',
  },
  {
    icon: School,
    title: 'Campuses & Multi-Site Operations',
    headline: 'One place to compare, prioritize, and report.',
    description:
      'For campuses and multi-site operations, Enerwyse provides a consistent view across different buildings and systems.',
    benefits: [
      'Benchmark sites on normalized metrics.',
      'Quickly identify the top opportunities to tackle first.',
      'Provide stakeholders with simple, shareable visuals.',
    ],
    image:
      'https://images.unsplash.com/photo-1762264644182-475f505feabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBidWlsZGluZyUyMG5pZ2h0fGVufDF8fHx8MTc2NDQ0Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#38bdf8',
  },
];

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
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
                    className="inline-block mt-8 px-8 py-3 rounded-xl border-2 border-[#334155] text-[#f8fafc] hover:border-[#22c55e] hover:glow-soft transition-all"
                  >
                    {index === 0
                      ? 'Discuss a Greenhouse Setup'
                      : index === 1
                        ? 'Discuss a Commercial Setup'
                        : index === 2
                          ? 'Discuss an Industrial Setup'
                          : 'Discuss a Campus Setup'}
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
                className="px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
              >
                Start a Conversation
              </a>
              <a
                href="/contact"
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
