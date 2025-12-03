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
              Product — Inside the Inspired Energy Optimizer
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Your Entire Energy Operations in One Command Center
            </h1>
            <p className="text-xl text-[#94a3b8] mb-8 max-w-3xl mx-auto">
              Inspired Energy Optimizer transforms fragmented building data into a single, intelligent cockpit. 
              Every dashboard, chart, and recommendation is designed to help operators make faster, more informed 
              decisions — without complex tools or hardware dependencies.
            </p>
            <button className="px-8 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all">
              Explore Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Feature Panel 1 - Real-Time Monitoring */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                Live visibility you've never had before.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                See consumption, demand, load profiles, and equipment behavior second-by-second. 
                Across every building. Across your portfolio. From the main dashboard or detailed drilldowns.
              </p>
              <div className="space-y-4">
                {[
                  'Portfolio-wide dashboards',
                  'Live demand tracking',
                  'Equipment-level visibility (if BMS integrated)',
                  'Energy cost estimation in real time',
                  'Multi-site comparison',
                  'Automated updates every 15 seconds',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    <span className="text-[#f8fafc]">{item}</span>
                  </div>
                ))}
              </div>
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
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#0f172a] rounded-lg p-4 border border-[#334155]">
                    <div className="text-[#94a3b8] text-sm mb-1">Total kWh</div>
                    <div className="text-2xl text-[#f8fafc]">12,847</div>
                    <div className="text-[#22c55e] text-sm mt-1">↓ 12%</div>
                  </div>
                  <div className="bg-[#0f172a] rounded-lg p-4 border border-[#334155]">
                    <div className="text-[#94a3b8] text-sm mb-1">Cost/Hour</div>
                    <div className="text-2xl text-[#f8fafc]">$847</div>
                    <div className="text-[#22c55e] text-sm mt-1">↓ 8%</div>
                  </div>
                  <div className="bg-[#0f172a] rounded-lg p-4 border border-[#334155]">
                    <div className="text-[#94a3b8] text-sm mb-1">Buildings</div>
                    <div className="text-2xl text-[#f8fafc]">24</div>
                    <div className="text-[#38bdf8] text-sm mt-1">Active</div>
                  </div>
                </div>

                {/* Buildings Status */}
                <div className="space-y-2">
                  {[
                    { name: 'Building A', status: 'Optimal', color: '#22c55e' },
                    { name: 'Building B', status: 'Warning', color: '#f59e0b' },
                    { name: 'Building C', status: 'Optimal', color: '#22c55e' },
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
                Predict tomorrow, plan today.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Our ML models forecast consumption, demand spikes, and potential cost exposures based on: 
                weather, building schedules, historical trends, and occupancy behaviors.
              </p>
              <div className="space-y-4">
                {[
                  'AI forecasting models',
                  'Peak demand prediction',
                  'Cost exposure modeling',
                  '"What-if" scenario analysis',
                  'Dynamic weather impact modeling',
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
                Find issues before they become expensive.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Inspired Energy Optimizer automatically detects unusual consumption patterns — equipment left on, 
                inefficient cycles, weekend anomalies, unexpected spikes.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time anomaly alerts',
                  'Weekend/holiday misuse detection',
                  'Seasonal deviation detection',
                  'Cross-building anomaly comparison',
                  'Root-cause hints',
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
                    Alert
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
                    Unusual spike detected at 12am — 185% above baseline. Possible equipment left running.
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
                {recommendations.map((rec, index) => {
                  const Icon = rec.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[#0f172a] rounded-xl p-4 border border-[#334155] hover:border-[#22c55e] transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${rec.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: rec.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="text-[#f8fafc]">{rec.title}</h4>
                            <div
                              className="px-2 py-1 rounded text-xs whitespace-nowrap"
                              style={{ backgroundColor: `${rec.color}20`, color: rec.color }}
                            >
                              {rec.impact} Impact
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-[#22c55e]">Savings: {rec.savings}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                We don't just show data. We tell you what to do.
              </h2>
              <p className="text-xl text-[#94a3b8] mb-6">
                Every insight is translated into clear, impact-first actions — prioritized by savings potential.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Pre-built optimization playbooks',
                  'Priority-based recommendations',
                  'Savings quantification',
                  'Alerts with contextual explanations',
                  'Before/after impact measurement',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                    <span className="text-[#f8fafc]">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Savings Gauge */}
              <div className="bg-[#1f2937] rounded-xl p-6 border border-[#334155]">
                <div className="text-[#94a3b8] text-sm mb-2">Total Monthly Savings Potential</div>
                <div className="text-4xl text-[#22c55e] mb-4">$1,350</div>
                <div className="w-full bg-[#0f172a] rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#22c55e] to-[#38bdf8] rounded-full" style={{ width: '68%' }} />
                </div>
                <div className="text-sm text-[#94a3b8] mt-2">68% of recommendations implemented</div>
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
              Ready to see it in action?
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8">
              Schedule a personalized demo and see how Inspired Energy Optimizer can transform your energy operations.
            </p>
            <button className="px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all">
              Book Your Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
