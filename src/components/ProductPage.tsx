import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Activity, TrendingUp, AlertTriangle, Lightbulb, Building2, Zap, Shield } from 'lucide-react';

const forecastData = [
  { time: '00:00', actual: 145, forecast: null },
  { time: '04:00', actual: 120, forecast: null },
  { time: '08:00', actual: 280, forecast: null },
  { time: '12:00', actual: 320, forecast: null },
  { time: '16:00', actual: null, forecast: 295 },
  { time: '20:00', actual: null, forecast: 185 },
  { time: '24:00', actual: null, forecast: 155 },
];

const anomalyData = [
  { time: '12am', usage: 145 },
  { time: '4am', usage: 120 },
  { time: '8am', usage: 280 },
  { time: '12pm', usage: 320 },
  { time: '4pm', usage: 290 },
  { time: '8pm', usage: 180 },
  { time: '12am', usage: 420 }, // Anomaly spike
];

const recommendations = [
  {
    icon: Lightbulb,
    title: 'Reduce chiller load by 5% between 2–5 pm',
    savings: '$420/mo',
    impact: 'High',
    color: '#22c55e',
  },
  {
    icon: AlertTriangle,
    title: 'Investigate HVAC on Floor 4 — running outside schedule',
    savings: '$280/mo',
    impact: 'Medium',
    color: '#f59e0b',
  },
  {
    icon: TrendingUp,
    title: 'Shift equipment schedule to avoid upcoming peak demand window',
    savings: '$650/mo',
    impact: 'High',
    color: '#38bdf8',
  },
];

export function ProductPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#a855f7] top-20 right-20" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] mb-6">
              Product · Inside Inspired Energy Optimizer
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Your Energy Operations in One Command Center
            </h1>
            <p className="text-xl text-[#94a3b8] mb-8 max-w-3xl mx-auto">
              Go beyond static reports. Inspired Energy Optimizer gives your team a single place to
              monitor buildings, spot anomalies, and act on the biggest opportunities each week.
            </p>
            <a 
              href="/contact#demo-form"
              className="inline-block px-8 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
            >
              See the Product in a Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Feature Panel 1 - Real-Time Monitoring */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                Live visibility you can actually use in meetings.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Move from screenshots and copied charts to a live view you can pull up in
                weekly operations or sustainability check-ins.
              </p>
              <div className="space-y-4">
                {[
                  'Portfolio dashboard with key KPIs',
                  'Site-level trends and drill-downs',
                  'Equipment views when BMS data is available',
                  'Estimated cost overlays on load profiles',
                  'Multi-site comparison views',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    <span className="text-[#f8fafc]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#94a3b8] mt-6 italic">
                During a demo, we walk through these views using sample data or a sanitized data set you provide.
              </p>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="glow-primary absolute -inset-4 rounded-3xl opacity-20" />
              <div className="frosted-glass rounded-2xl p-6 space-y-6 relative border border-[#334155]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#f8fafc]">Portfolio Overview</div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#22c55e] animate-pulse-slow" />
                    <span className="text-[#22c55e] text-sm">Live</span>
                  </div>
                </div>
                
                {/* KPI Tiles */}
                <div className="space-y-4 mb-4">
                  <div className="text-[#94a3b8] text-sm">Load, cost, and open opportunities at a glance</div>
                  <div className="text-[#94a3b8] text-sm">Highlight buildings that require attention this week</div>
                </div>

                {/* Buildings Status */}
                <div className="space-y-2">
                  {[
                    { name: 'Sample Building A', status: 'Stable', color: '#22c55e' },
                    { name: 'Sample Building B', status: 'Watch', color: '#f59e0b' },
                    { name: 'Sample Building C', status: 'Optimize', color: '#a855f7' },
                  ].map((building, i) => (
                    <div key={i} className="flex items-center justify-between bg-[#0f172a] rounded-lg p-3 border border-[#334155]">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#94a3b8]" />
                        <span className="text-[#f8fafc]">{building.name}</span>
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${building.color}20`, color: building.color }}>
                        {building.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Panel 2 - Smart Forecasting */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Chart First on Desktop */}
            <div className="order-2 lg:order-1 relative">
              <div className="glow-soft absolute -inset-4 rounded-3xl opacity-20" />
              <div className="frosted-glass rounded-2xl p-6 relative border border-[#334155]">
                <h3 className="text-[#f8fafc] mb-4">24-Hour Forecast</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={forecastData}>
                    <defs>
                      <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      stroke="#a855f7"
                      strokeWidth={2}
                      dot={{ fill: '#a855f7', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="forecast"
                      stroke="#38bdf8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#38bdf8', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#a855f7]" />
                    <span className="text-[#94a3b8]">Actual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#38bdf8]" />
                    <span className="text-[#94a3b8]">Forecast</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                Know tomorrow's peaks before they hit.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Forecasting models combine weather, calendar schedules, and historical usage to highlight
                expected peaks and exposure windows.
              </p>
              <div className="space-y-4">
                {[
                  'Daily and weekly demand forecasts',
                  '"At risk" windows for cost or demand charges',
                  'Scenario views (e.g., schedule changes, setpoint tweaks)',
                  'Portfolio-wide view of upcoming peaks',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    <span className="text-[#f8fafc]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Panel 3 - Anomaly Detection */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                Catch issues before they roll into bills.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Instead of discovering problems through invoices, anomaly detection flags unusual behavior closer to real time.
              </p>
              <div className="space-y-4">
                {[
                  'Weekend and holiday spikes',
                  'Equipment running outside schedule',
                  'Base-load drift compared to baseline',
                  'Cross-site pattern comparison',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                    <span className="text-[#f8fafc]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anomaly Chart */}
            <div className="relative">
              <div className="glow-soft absolute -inset-4 rounded-3xl opacity-20" style={{ background: 'radial-gradient(circle, #ef444440 0%, transparent 70%)' }} />
              <div className="frosted-glass rounded-2xl p-6 relative border border-[#ef4444]/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#f8fafc]">Anomaly Detected</h3>
                  <div className="px-3 py-1 rounded-full bg-[#ef4444]/20 text-[#ef4444] text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Example: After-hours spike
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={anomalyData}>
                    <defs>
                      <linearGradient id="anomalyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stroke="#a855f7"
                      strokeWidth={2}
                      fill="url(#anomalyGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg p-4">
                  <p className="text-[#ef4444] text-sm">
                    Usage significantly above normal for this time. Possible equipment left on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Panel 4 - Actionable Playbooks */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Recommendations Panel */}
            <div className="order-2 lg:order-1 relative">
              <div className="glow-primary absolute -inset-4 rounded-3xl opacity-20" />
              <div className="frosted-glass rounded-2xl p-6 space-y-4 relative border border-[#334155]">
                <h3 className="text-[#f8fafc] mb-4">Priority Recommendations</h3>
                {[
                  {
                    title: 'Adjust chiller schedule by 1 hour on weekdays',
                    savings: 'Shows estimated monthly impact based on recent data.',
                    impact: 'High',
                    color: '#22c55e',
                  },
                  {
                    title: 'Investigate AHU-2 after 8 pm',
                    savings: 'Flagged as running outside normal occupancy hours.',
                    impact: 'Medium',
                    color: '#f59e0b',
                  },
                ].map((rec, index) => (
                  <div
                    key={index}
                    className="bg-[#0f172a] rounded-xl p-4 border border-[#334155] hover:border-[#22c55e] transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-[#f8fafc]">{rec.title}</h4>
                      <div
                        className="px-2 py-1 rounded text-xs whitespace-nowrap"
                        style={{ backgroundColor: `${rec.color}20`, color: rec.color }}
                      >
                        {rec.impact} Impact
                      </div>
                    </div>
                    <div className="text-sm text-[#94a3b8]">
                      {rec.savings}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                Turn alerts into an action list your team can track.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Each recommendation can be tagged as "planned", "in progress", or "completed", with notes added
                by your operations team.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Prioritized list by impact and ease of implementation',
                  'Tags and ownership for each action',
                  'Simple before/after view to show improvement',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                    <span className="text-[#f8fafc]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-[#f8fafc] mb-6">
              Want to see how this would look for your buildings?
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8">
              In a product session, we'll walk you through the UI and discuss how it maps to your portfolio,
              data sources, and energy goals.
            </p>
            <a
              href="/contact#demo-form"
              className="inline-block px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
            >
              Book a Product Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
