import { Calendar, FolderInput, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: Calendar,
    title: 'Understand Your Energy Patterns',
    description: 'Start with a short walkthrough to understand your facility, systems, and energy challenges with the founder.',
    color: '#22c55e',
  },
  {
    icon: FolderInput,
    title: 'Analyze Your Existing Data',
    description: 'We review recent meter and system data to identify usage patterns, inefficiencies, and early opportunities.',
    color: '#38bdf8',
  },
  {
    icon: Brain,
    title: 'Configure Operational Views & Alerts',
    description: 'Dashboards, alerts, and action lists are tailored to your facility’s operating schedule and priorities.',
    color: '#a855f7',
  },
  {
    icon: TrendingUp,
    title: 'Track Actions & Measured Impact',
    description: 'Monitor actions taken, expected savings ranges, and operational improvements over time.',
    color: '#22c55e',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="floating-blob w-80 h-80 bg-[#38bdf8] bottom-20 left-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            How Enerwyse Fits Into Your Operations
          </h2>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#22c55e] via-[#38bdf8] via-[#a855f7] to-[#22c55e] opacity-30 glow-soft" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    {/* Icon Circle */}
                    <div className="relative inline-block mb-6">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 transition-all hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}40 0%, ${step.color}20 100%)`,
                          border: `2px solid ${step.color}`,
                          boxShadow: `0 0 20px ${step.color}40`,
                        }}
                      >
                        <Icon className="w-10 h-10" style={{ color: step.color }} />
                      </div>
                      {/* Step Number */}
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm z-20"
                        style={{
                          backgroundColor: step.color,
                          color: '#ffffff',
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl text-[#f8fafc] mb-3">{step.title}</h3>
                    <p className="text-[#94a3b8]">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}40 0%, ${step.color}20 100%)`,
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                      style={{
                        backgroundColor: step.color,
                        color: '#ffffff',
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#f8fafc] mb-2">{step.title}</h3>
                  <p className="text-[#94a3b8]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="frosted-glass rounded-2xl p-8 inline-block border border-[#334155]">
            <p className="text-[#94a3b8] mb-4">
              Interested in starting with one facility in Ontario or nearby regions?
            </p>
            <Link
              to="/contact#demo-form"
              className="inline-block px-8 py-3 rounded-lg gradient-primary text-white hover:glow-soft transition-all"
            >
              Start with a Facility Walkthrough
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
