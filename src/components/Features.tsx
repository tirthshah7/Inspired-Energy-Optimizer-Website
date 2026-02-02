import { Activity, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Portfolio, site, and equipment-level views that update as new data flows in.',
    accent: '#22c55e',
  },
  {
    icon: TrendingUp,
    title: 'Smart Forecasting',
    description: 'Forecast demand and cost exposure using weather, schedules, and historical patterns.',
    accent: '#38bdf8',
  },
  {
    icon: AlertTriangle,
    title: 'Anomaly Detection',
    description: 'Alerts for out-of-schedule runs, unusual base loads, and weekend spikes.',
    accent: '#a855f7',
  },
  {
    icon: BookOpen,
    title: 'Actionable Playbooks',
    description: 'Prioritized actions with implementation notes and expected savings ranges.',
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
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Built for energy managers, operators, and sustainability teams who need clear, actionable guidance.
          </p>
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
            <div className="text-4xl text-[#22c55e] mb-2">Deployment-ready</div>
            <div className="text-[#94a3b8]">Ideal for initial facilities and phased rollouts</div>
          </div>
          <div>
            <div className="text-4xl text-[#38bdf8] mb-2">Cloud-hosted & Secure</div>
            <div className="text-[#94a3b8]">Encrypted data handling with controlled access.</div>
          </div>
          <div>
            <div className="text-4xl text-[#a855f7] mb-2">Built to Scale</div>
            <div className="text-[#94a3b8]">Works for one facility or many</div>
          </div>
        </div>
      </div>
    </section>
  );
}
