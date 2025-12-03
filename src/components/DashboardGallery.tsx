import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Building2, Lightbulb, TrendingDown } from 'lucide-react';

const portfolioData = [
  { name: 'Building A', value: 450 },
  { name: 'Building B', value: 380 },
  { name: 'Building C', value: 290 },
  { name: 'Building D', value: 520 },
];

const timeSeriesData = [
  { month: 'Jan', baseline: 400, actual: 380 },
  { month: 'Feb', baseline: 420, actual: 390 },
  { month: 'Mar', baseline: 410, actual: 370 },
  { month: 'Apr', baseline: 390, actual: 360 },
  { month: 'May', baseline: 380, actual: 340 },
  { month: 'Jun', baseline: 370, actual: 330 },
];

const pieData = [
  { name: 'HVAC', value: 42, color: '#a855f7' },
  { name: 'Lighting', value: 28, color: '#38bdf8' },
  { name: 'Equipment', value: 20, color: '#22c55e' },
  { name: 'Other', value: 10, color: '#94a3b8' },
];

const recommendations = [
  {
    icon: Lightbulb,
    title: 'Optimize HVAC Schedule',
    description: 'Potential savings: $2,400/month',
    impact: 'High',
  },
  {
    icon: TrendingDown,
    title: 'Reduce Peak Demand',
    description: 'Shift EV charging to off-peak',
    impact: 'Medium',
  },
  {
    icon: Building2,
    title: 'Building 3 Baseline Review',
    description: 'Usage 15% above expected',
    impact: 'High',
  },
];

export function DashboardGallery() {
  return (
    <section id="product" className="py-20 px-6 bg-[#111827] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="floating-blob w-96 h-96 bg-[#a855f7] top-10 right-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f8fafc] mb-4">
            See Your Buildings in Command Mode
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            The Inspired Energy Optimizer transforms raw data into a mission-ready control panel. Explore live metrics, 
            time-series charts, alerts, and an intelligent recommendation feed that helps teams make fast, confident decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Portfolio Overview */}
          <div className="frosted-glass rounded-2xl p-6 border-2 border-[#a855f7]/20 glow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-[#f8fafc]">Portfolio Overview</h3>
              <div className="text-sm text-[#94a3b8]">Last 24 hours</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={portfolioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(31, 41, 55, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                  }}
                  labelStyle={{
                    color: '#f8fafc',
                    fontWeight: '600',
                    marginBottom: '4px',
                  }}
                  itemStyle={{
                    color: '#f8fafc',
                  }}
                />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Energy Breakdown */}
          <div className="frosted-glass rounded-2xl p-6 border-2 border-[#38bdf8]/20 glow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-[#f8fafc]">Energy Distribution</h3>
              <div className="text-sm text-[#94a3b8]">Current</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(31, 41, 55, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
                  }}
                  labelStyle={{
                    color: '#f8fafc',
                    fontWeight: '600',
                    marginBottom: '4px',
                  }}
                  itemStyle={{
                    color: '#f8fafc',
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ color: '#94a3b8' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time Series Chart */}
        <div className="frosted-glass rounded-2xl p-6 border-2 border-[#22c55e]/20 glow-soft mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-[#f8fafc]">Performance vs. Baseline</h3>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#94a3b8]" />
                <span className="text-[#94a3b8]">Baseline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <span className="text-[#94a3b8]">Actual</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(31, 41, 55, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)',
                }}
                labelStyle={{
                  color: '#f8fafc',
                  fontWeight: '600',
                  marginBottom: '4px',
                }}
                itemStyle={{
                  color: '#f8fafc',
                }}
              />
              <Line
                type="monotone"
                dataKey="baseline"
                stroke="#94a3b8"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <div className="text-2xl text-[#22c55e]">↓ 12.8%</div>
            <div className="text-[#94a3b8]">Below baseline (6 months)</div>
          </div>
        </div>

        {/* Recommendations Panel */}
        <div className="frosted-glass rounded-2xl p-6 border-2 border-[#a855f7]/20">
          <h3 className="text-xl text-[#f8fafc] mb-6">AI-Powered Recommendations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              return (
                <div
                  key={index}
                  className="bg-[#111827] rounded-lg p-4 border border-[#334155] hover:border-[#22c55e] transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#22c55e]/20">
                      <Icon className="w-5 h-5 text-[#22c55e]" />
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        rec.impact === 'High'
                          ? 'bg-[#22c55e]/20 text-[#22c55e]'
                          : 'bg-[#38bdf8]/20 text-[#38bdf8]'
                      }`}
                    >
                      {rec.impact} Impact
                    </div>
                  </div>
                  <div className="text-[#f8fafc] mb-2">{rec.title}</div>
                  <div className="text-sm text-[#94a3b8]">{rec.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
