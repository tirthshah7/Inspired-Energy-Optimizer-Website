import { BookOpen, AlertTriangle, MessageCircle } from 'lucide-react';

const capabilities = [
  {
    icon: BookOpen,
    title: 'Daily AI briefings in plain English',
    body: 'Every morning, get a clear summary of yesterday\'s energy patterns, anomalies, and cost impacts.',
    example:
      '"Last night your baseload jumped 18% — likely the new HPS lights cycling incorrectly. Estimated cost impact: $340/month."',
    accent: '#22c55e',
  },
  {
    icon: AlertTriangle,
    title: 'GA peak alerts before they hit your bill',
    body: 'Get notified ahead of forecasted IESO coincident peak windows so your team can reduce load when it matters.',
    example:
      '"Tomorrow 2–5 PM is high probability for a coincident peak. Reducing non-critical load could save $8,000+ on your annual GA."',
    accent: '#38bdf8',
  },
  {
    icon: MessageCircle,
    title: 'Ask anything about your energy costs',
    body: 'Get instant, data-backed answers from your own consumption data — with full context on the drivers and an action plan.',
    example: '"Why was February $12K higher than January?"',
    accent: '#a855f7',
  },
];

export function AIManager() {
  return (
    <section className="py-20 px-6 bg-[#111827]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#f8fafc] mb-4">
            An AI energy manager that works for you 24/7
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Enerwyse monitors your meter data around the clock, catches cost
            anomalies in real time, and delivers insights in plain English —
            like having an energy expert on staff, without the overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="group bg-[#1f2937] rounded-xl p-6 border border-[#334155] hover:border-[#22c55e] transition-all relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: cap.accent }}
                />
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${cap.accent}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: cap.accent }} />
                </div>
                <h3 className="text-xl text-[#f8fafc] mb-3">{cap.title}</h3>
                <p className="text-[#94a3b8] mb-4">{cap.body}</p>
                <p className="text-sm text-[#94a3b8] italic border-l-2 pl-3" style={{ borderColor: cap.accent }}>
                  {cap.example}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
