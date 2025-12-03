import { Building, Factory, School } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const useCases = [
  {
    icon: Building,
    title: 'Commercial Buildings',
    description: 'Optimize comfort, reduce costs, and identify operational inefficiencies.',
    benefits: [
      'Reduce tenant energy complaints',
      'Optimize HVAC and lighting schedules',
      'Meet ESG reporting requirements',
      'Lower operating costs by 15-25%',
    ],
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQzNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#22c55e',
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    description: 'Spot energy-heavy processes, optimize runtimes, and prevent expensive anomalies.',
    benefits: [
      'Monitor production line energy',
      'Detect equipment inefficiencies',
      'Avoid costly demand charges',
      'Track sustainability metrics',
    ],
    image: 'https://images.unsplash.com/photo-1764114235916-74de69e6851f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MzkyNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#38bdf8',
  },
  {
    icon: School,
    title: 'Campuses & Multi-Site Portfolios',
    description: 'Unify data, benchmark buildings, and prioritize where to act first.',
    benefits: [
      'Unified view across all sites',
      'Benchmark building performance',
      'Coordinate portfolio-wide initiatives',
      'Scale best practices automatically',
    ],
    image: 'https://images.unsplash.com/photo-1762264644182-475f505feabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBidWlsZGluZyUyMG5pZ2h0fGVufDF8fHx8MTc2NDQ0Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#a855f7',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 px-6 bg-[#111827]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            Built for Every Type of Facility
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group frosted-glass rounded-2xl overflow-hidden border border-[#334155] hover:border-[#22c55e] transition-all"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937] to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 p-3 rounded-xl"
                    style={{
                      backgroundColor: `${useCase.color}20`,
                      border: `1px solid ${useCase.color}`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: useCase.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-[#f8fafc] mb-2">{useCase.title}</h3>
                  <p className="text-[#94a3b8] mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: useCase.color }}
                        />
                        <span className="text-[#94a3b8] text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-[#1f2937] rounded-xl p-6 border border-[#334155] text-center">
            <div className="text-3xl text-[#22c55e] mb-2">1,247</div>
            <div className="text-[#94a3b8]">Buildings Connected</div>
          </div>
          <div className="bg-[#1f2937] rounded-xl p-6 border border-[#334155] text-center">
            <div className="text-3xl text-[#38bdf8] mb-2">$47M</div>
            <div className="text-[#94a3b8]">Annual Savings Identified</div>
          </div>
          <div className="bg-[#1f2937] rounded-xl p-6 border border-[#334155] text-center">
            <div className="text-3xl text-[#a855f7] mb-2">18.5%</div>
            <div className="text-[#94a3b8]">Average Energy Reduction</div>
          </div>
          <div className="bg-[#1f2937] rounded-xl p-6 border border-[#334155] text-center">
            <div className="text-3xl text-[#22c55e] mb-2">24k</div>
            <div className="text-[#94a3b8]">Tons CO₂ Avoided</div>
          </div>
        </div>
      </div>
    </section>
  );
}
