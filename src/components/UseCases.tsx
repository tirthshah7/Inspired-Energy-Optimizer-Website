import { Building, Factory, Leaf, ShieldCheck, Lock, PlugZap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const useCases = [
  {
    icon: Leaf,
    title: 'Greenhouses & Climate-Controlled Facilities',
    description:
      'Reduce heating and ventilation waste while protecting comfort, yields, and operating consistency.',
    benefits: [
      'Flag heat + vent overlaps that quietly waste energy.',
      'Detect setpoint drift and schedule mismatches (day/night, zones).',
      'Spot unexpected after-hours runtime and standby load creep.',
    ],
    image:
      'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlfGVufDF8fHx8MTc2NDQ0Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#22c55e',
    badge: 'Primary focus',
  },
  {
    icon: Building,
    title: 'Commercial Buildings',
    description: 'Optimize comfort, reduce costs, and identify operational inefficiencies.',
    benefits: [
      'Reduce tenant comfort complaints linked to HVAC issues.',
      'Find scheduling gaps in AHUs, RTUs, and lighting.',
      'Support ESG and sustainability reporting with clear charts.',
    ],
    image:
      'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQzNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#38bdf8',
    badge: 'Expanding soon',
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    description:
      'Spot energy-heavy processes, optimize runtimes, and prevent expensive anomalies.',
    benefits: [
      'Monitor line-level energy intensity over time.',
      'Catch off-shift equipment that is left running.',
      'Support demand-management strategies with clear forecasts.',
    ],
    image:
      'https://images.unsplash.com/photo-1764114235916-74de69e6851f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MzkyNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#a855f7',
    badge: 'Expanding soon',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 px-6 bg-[#111827]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f8fafc] mb-4">Built for Every Type of Facility</h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Start with one site. As you grow, Enerwyse can extend the same approach to other facility types.
          </p>
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
                  {useCase.badge ? (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1 rounded-full border border-[#334155] bg-[#0f172a]/60 text-[#f8fafc]">
                        {useCase.badge}
                      </span>
                    </div>
                  ) : null}
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

        
      
      </div>
    </section>
  );
}
