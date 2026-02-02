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
    title: 'Missed Savings',
    description: 'Teams see charts, but don\'t have a prioritized list of actions with expected impact.',
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
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Most facilities don’t need more dashboards — they need clear decisions.
            <br />
            Utility portals, BMS trends, CSV exports — but no clear answer to "what should we do this week?".
          </p>
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
                  Enerwyse turns raw data into a weekly action list.
                </h3>
                <p className="text-xl text-[#94a3b8] mb-6">
                We centralize your energy and operational data, apply forecasting and anomaly detection models, 
                and surface the 3–10 highest-impact actions your team can take — with clear, practical next steps.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">Connects to meters, BMS, and weather APIs</div>
                      <div className="text-sm text-[#94a3b8]">Start with one building or an entire portfolio.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">AI forecasting & anomaly detection</div>
                      <div className="text-sm text-[#94a3b8]">See tomorrow's peaks and unusual patterns early.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">Actionable playbooks</div>
                      <div className="text-sm text-[#94a3b8]">Each alert is tied to a recommended change and estimated impact.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] mt-2" />
                    <div>
                      <div className="text-[#f8fafc] mb-1">Facility-focused insights</div>
                      <div className="text-sm text-[#94a3b8]">Start with one site and expand as your operations grow.</div>
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
