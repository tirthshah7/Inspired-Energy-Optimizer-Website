import { Activity, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Live dashboards that track energy use, load patterns, peak demand, and critical systems across your entire portfolio.',
    accent: '#22c55e',
  },
  {
    icon: TrendingUp,
    title: 'Smart Forecasting',
    description: 'AI models predict tomorrow\'s consumption, demand spikes, and cost exposure — letting you plan instead of react.',
    accent: '#38bdf8',
  },
  {
    icon: AlertTriangle,
    title: 'Anomaly Detection',
    description: 'Instant alerts for unusual patterns, off-schedule equipment, or energy-intensive processes.',
    accent: '#a855f7',
  },
  {
    icon: BookOpen,
    title: 'Actionable Playbooks',
    description: 'Not just charts — clear, prioritized actions tied to measurable savings.',
    accent: '#22c55e',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[#0f172a]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            Your AI-powered Energy Co-pilot
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#1f2937] rounded-xl p-6 border border-[#334155] hover:border-[#22c55e] transition-all relative overflow-hidden"
              >
                {/* Accent Highlight */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: feature.accent }}
                />
                
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${feature.accent}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: feature.accent }} />
                </div>
                
                <h3 className="text-xl text-[#f8fafc] mb-3">{feature.title}</h3>
                <p className="text-[#94a3b8]">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl text-[#22c55e] mb-2">15-min</div>
            <div className="text-[#94a3b8]">Data refresh interval</div>
          </div>
          <div>
            <div className="text-4xl text-[#38bdf8] mb-2">99.9%</div>
            <div className="text-[#94a3b8]">Uptime guarantee</div>
          </div>
          <div>
            <div className="text-4xl text-[#a855f7] mb-2">24/7</div>
            <div className="text-[#94a3b8]">Monitoring & alerts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
