import { Calendar, FolderInput, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: Calendar,
    title: 'Book a Demo',
    description: 'Use the form to schedule a 30-minute walkthrough with the founder.',
    color: '#22c55e',
  },
  {
    icon: FolderInput,
    title: 'Share Sample Data',
    description: 'We review 1–3 months of interval data and building info (under NDA if required).',
    color: '#38bdf8',
  },
  {
    icon: Brain,
    title: 'Configure Your Pilot',
    description: 'We set up dashboards, alerts, and playbooks tailored to your sites.',
    color: '#a855f7',
  },
  {
    icon: TrendingUp,
    title: 'Run a 6–12 Week Pilot',
    description: 'Track actions taken, estimated savings ranges, and next-phase roadmap.',
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
            How a Pilot with Inspired Energy Optimizer Works
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
              Interested in a pilot for 1–5 buildings in Ontario or nearby regions?
            </p>
            <Link
              to="/contact#demo-form"
              className="inline-block px-8 py-3 rounded-lg gradient-primary text-white hover:glow-soft transition-all"
            >
              Request a Pilot Discussion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
