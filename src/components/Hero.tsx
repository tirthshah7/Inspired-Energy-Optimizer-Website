import { useState, useEffect } from 'react';
import { Play, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { analyticsEvents, trackEvent } from '../lib/analytics';
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

const mockData = [
  { time: '00:00', usage: 145, forecast: 150 },
  { time: '04:00', usage: 120, forecast: 118 },
  { time: '08:00', usage: 280, forecast: 275 },
  { time: '12:00', usage: 320, forecast: 315 },
  { time: '16:00', usage: 290, forecast: 295 },
  { time: '20:00', usage: 180, forecast: 185 },
];

export function Hero() {
  const [animationKey, setAnimationKey] = useState(0);
  const [animateKPIs, setAnimateKPIs] = useState(false);

  // Re-trigger animation every 10 seconds
  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setAnimateKPIs(true), 300);
    
    const interval = setInterval(() => {
      setAnimateKPIs(false);
      setTimeout(() => {
        setAnimationKey(prev => prev + 1);
        setAnimateKPIs(true);
      }, 100);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#111827]">
      {/* Background Decorations */}
      <div className="floating-blob w-96 h-96 bg-[#22c55e] top-20 -left-20" />
      <div className="floating-blob w-80 h-80 bg-[#38bdf8] top-40 right-20" style={{ animationDelay: '5s' }} />
      <div className="floating-blob w-64 h-64 bg-[#a855f7] bottom-20 left-1/3" style={{ animationDelay: '10s' }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] mb-4">
                For Ontario Commercial, Industrial, and Greenhouse Operators
              </div>
              <h1 className="text-5xl lg:text-6xl text-[#f8fafc] tracking-tight">
                Cut your hydro bill by reducing Global Adjustment exposure.
              </h1>
              <p className="text-xl text-[#94a3b8] max-w-xl">
                Enerwyse connects to your existing meter data, forecasts IESO
                coincident peak windows, and tells your operations team when to
                reduce load. No new hardware. Built in Windsor, Ontario.
              </p>
              <p className="text-lg text-[#94a3b8] max-w-xl">
                Typical savings: 5–15% of Global Adjustment charges — roughly
                $10K–$30K per year on a $200K hydro bill.
              </p>

              {/* Value Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 flex-shrink-0" />
                  <span className="text-[#f8fafc]">Forecast IESO coincident peaks before they hit</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 flex-shrink-0" />
                  <span className="text-[#f8fafc]">Detect anomalies and load drift in real time</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 flex-shrink-0" />
                  <span className="text-[#f8fafc]">Turn meter data into a weekly operating action list</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact#demo-form"
                onClick={() => trackEvent(analyticsEvents.demoCtaClick, { location: 'hero_primary' })}
                className="px-8 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
              >
                Book a 20-minute call
              </Link>
              <a
                href="https://youtu.be/V71PE_jFGdU?si=cZBEBzkUNpRjG8O4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(analyticsEvents.videoCtaClick, { location: 'hero_secondary' })}
                className="px-8 py-4 rounded-xl border border-[#334155] text-[#f8fafc] hover:border-[#22c55e] transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch a short Video
              </a>
            </div>

            {/* Mini Trust */}
            <div className="flex items-center gap-2 text-[#94a3b8]">
              <Clock className="w-4 h-4" />
              <span>We respond to every demo request within 24 hours.</span>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative">
            <div className="glow-primary absolute -inset-4 rounded-3xl opacity-30" />
            <div className="frosted-glass rounded-2xl p-6 space-y-6 relative">
              {/* KPI Tiles */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#111827] rounded-lg p-4 border border-[#334155] hover:border-[#22c55e] transition-all duration-300 hover:scale-105">
                  <div className="text-[#94a3b8] text-sm mb-1">Portfolio Load (kW)</div>
                  <div className={`text-2xl text-[#f8fafc] transition-all duration-1000 ${animateKPIs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    2,847
                  </div>
                  <div className={`text-[#22c55e] text-sm mt-1 transition-all duration-1000 delay-100 ${animateKPIs ? 'opacity-100' : 'opacity-0'}`}>
                    ↓ vs. prior week
                  </div>
                </div>
                <div className="bg-[#111827] rounded-lg p-4 border border-[#334155] hover:border-[#38bdf8] transition-all duration-300 hover:scale-105">
                  <div className="text-[#94a3b8] text-sm mb-1">Estimated Cost / Day</div>
                  <div className={`text-2xl text-[#f8fafc] transition-all duration-1000 delay-200 ${animateKPIs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    $3,421
                  </div>
                  <div className={`text-[#22c55e] text-sm mt-1 transition-all duration-1000 delay-300 ${animateKPIs ? 'opacity-100' : 'opacity-0'}`}>
                    Potential savings highlighted
                  </div>
                </div>
                <div className="bg-[#111827] rounded-lg p-4 border border-[#334155] hover:border-[#a855f7] transition-all duration-300 hover:scale-105">
                  <div className="text-[#94a3b8] text-sm mb-1">Opportunities Open</div>
                  <div className={`text-2xl text-[#f8fafc] transition-all duration-1000 delay-400 ${animateKPIs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    9
                  </div>
                  <div className={`text-[#a855f7] text-sm mt-1 transition-all duration-1000 delay-500 ${animateKPIs ? 'opacity-100' : 'opacity-0'}`}>
                    Ranked by impact
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-[#111827] rounded-lg p-4 border border-[#334155]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#f8fafc]">Load Profile — Today (Sample)</div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#22c55e] animate-pulse-slow" />
                    <span className="text-[#22c55e] text-sm">Live</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart key={animationKey} data={mockData}>
                    <defs>
                      <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
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
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stroke="#a855f7"
                      strokeWidth={2}
                      fill="url(#usageGradient)"
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
                    />
                    <Line
                      type="monotone"
                      dataKey="forecast"
                      stroke="#38bdf8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationEasing="ease-in-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Recommendations Panel */}
              <div className="bg-[#111827] rounded-lg p-4 border border-[#334155] space-y-3">
                <div className="text-[#f8fafc] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  Example Recommendations
                </div>
                <div className="space-y-2">
                  {[
                    'Shift EV charging from 4–6 pm to 10 pm–12 am.',
                    'Reduce AHU-2 supply temp by 1°C during low occupancy.',
                    'Investigate weekend base load in Building 3.',
                  ].map((action, i) => (
                    <div key={i} className="text-sm text-[#94a3b8] pl-4 border-l-2 border-[#22c55e]">
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
