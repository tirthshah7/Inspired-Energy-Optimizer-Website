import { AlertCircle, TrendingDown, DollarSign, Sparkles } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Fragmented Data',
    description: 'You\'re juggling utility portals, BMS dashboards, CSVs, and monthly bills — but never a single source of truth.',
    color: '#ef4444',
  },
  {
    icon: TrendingDown,
    title: 'Reactive Operations',
    description: 'Issues are discovered after the bill arrives, not when the waste happens.',
    color: '#f59e0b',
  },
  {
    icon: DollarSign,
    title: 'Missed Opportunities',
    description: 'Teams have charts, but no clear guidance on what should be done right now.',
    color: '#ef4444',
  },
];

export function ProblemSolution() {
  return (
    <section className="py-20 px-6 bg-[#111827]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            Energy data is everywhere. Insight isn't.
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-[#1f2937] rounded-xl p-6 border border-[#334155] hover:border-[#ef4444] transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${problem.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: problem.color }} />
                </div>
                <h3 className="text-xl text-[#f8fafc] mb-3">{problem.title}</h3>
                <p className="text-[#94a3b8]">{problem.description}</p>
              </div>
            );
          })}
        </div>

        {/* Solution Card */}
        <div className="relative">
          <div className="glow-soft absolute -inset-4 rounded-3xl" />
          <div className="gradient-card frosted-glass rounded-2xl p-8 md:p-12 relative border-2 border-[#22c55e]/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="gradient-primary p-3 rounded-xl glow-soft">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl text-[#f8fafc] mb-4">
                  The Inspired Energy Optimizer solves this.
                </h3>
                <p className="text-xl text-[#94a3b8] mb-6">
                  We centralize all your building and energy data, run advanced AI models on top, and surface live 
                  recommendations that operators can act on immediately — not next month.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">Auto-connects to meters, BMS, weather APIs</div>
                      <div className="text-sm text-[#94a3b8]">No manual data entry required</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">AI detects anomalies and forecasts demand</div>
                      <div className="text-sm text-[#94a3b8]">Prevent issues before they happen</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">Actionable playbooks, not just dashboards</div>
                      <div className="text-sm text-[#94a3b8]">Know exactly what to do and when</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">Portfolio-wide visibility in seconds</div>
                      <div className="text-sm text-[#94a3b8]">All sites, all metrics, one view</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
