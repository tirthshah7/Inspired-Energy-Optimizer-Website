import { Target, Lightbulb, Users, Shield, Zap, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Impact First',
    description: 'Insights must drive real, measurable outcomes.',
    color: '#22c55e',
  },
  {
    icon: Lightbulb,
    title: 'Simplicity',
    description: 'Interfaces should feel like a cockpit, not a spreadsheet.',
    color: '#38bdf8',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Clear assumptions, explainable models, and human-in-the-loop controls.',
    color: '#a855f7',
  },
  {
    icon: Zap,
    title: 'Scalability',
    description: 'Built to scale from a single site to multi-site operations.',
    color: '#22c55e',
  },
  {
    icon: TrendingUp,
    title: 'Sustainability',
    description: 'Every insight should push the world toward a cleaner grid.',
    color: '#38bdf8',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#22c55e] top-20 -left-20" />
        <div className="floating-blob w-80 h-80 bg-[#a855f7] top-40 right-20" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] mb-6">
              About Us
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Built for the Next Era of Energy Intelligence
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Enerwyse is a machine-learning powered energy intelligence platform being built in Windsor, Ontario — designed with real operators, real facilities, and real grid challenges in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] mb-4">
                Our Vision
              </div>
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                To make every facility run intelligently
              </h2>
              <p className="text-xl text-[#94a3b8] mb-4">
                From greenhouses to commercial sites to light industry — we envision facilities that run more efficiently and sustainably through forecasting, anomaly detection, and operator-friendly insights.
              </p>
              <p className="text-xl text-[#94a3b8]">
                Enerwyse focuses on turning fragmented data into clear, confident decisions — not more dashboards to stare at.
              </p>
            </div>
            <div className="relative">
              <div className="glow-primary absolute -inset-4 rounded-3xl opacity-20" />
              <div className="frosted-glass rounded-2xl p-8 border border-[#334155] relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-5xl text-[#22c55e] mb-2">100%</div>
                    <div className="text-[#94a3b8]">Cloud-ready architecture</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl text-[#38bdf8] mb-2">0</div>
                    <div className="text-[#94a3b8]">Hardware lock-in required</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl text-[#a855f7] mb-2">15 sec*</div>
                    <div className="text-[#94a3b8]">Target data refresh interval</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl text-[#22c55e] mb-2">24/7</div>
                    <div className="text-[#94a3b8]">Monitoring & alerts roadmap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] mb-4">
                Our Mission
              </div>
              <h2 className="text-4xl text-[#f8fafc] mb-6">
                Empower organizations with actionable intelligence
              </h2>
              <p className="text-xl text-[#94a3b8]">
                Our mission is to empower operations and sustainability teams with practical visibility, predictive forecasting, 
                and action-first recommendations that reduce waste, cut operating costs, and support a more resilient grid.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] text-center">
                <div className="w-16 h-16 rounded-xl bg-[#22c55e]/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#22c55e]" />
                </div>
                <h3 className="text-xl text-[#f8fafc] mb-2">Reduce Waste</h3>
                <p className="text-[#94a3b8]">Identify and eliminate energy waste in real-time</p>
              </div>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] text-center">
                <div className="w-16 h-16 rounded-xl bg-[#38bdf8]/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#38bdf8]" />
                </div>
                <h3 className="text-xl text-[#f8fafc] mb-2">Cut Costs</h3>
                <p className="text-[#94a3b8]">Turn data into measurable savings, not more reports.</p>
              </div>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] text-center">
                <div className="w-16 h-16 rounded-xl bg-[#a855f7]/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#a855f7]" />
                </div>
                <h3 className="text-xl text-[#f8fafc] mb-2">Protect the Grid</h3>
                <p className="text-[#94a3b8]">Support grid stability through demand management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-[#f8fafc] mb-6 text-center">
              Why We Built Enerwyse
            </h2>
            <div className="space-y-6 text-xl text-[#94a3b8]">
              <p>
                The energy grid is under unprecedented pressure. Facilities still waste a significant share of the power they consume, 
                and operators are expected to manage increasingly complex systems — often with outdated tools and disconnected data.
              </p>
              <p>
                Enerwyse started from a simple question:{' '}
                <span className="text-[#22c55e]">"What if buildings could think ahead?"</span>
              </p>
              <p>
                We are building a platform that uses machine learning, forecasting, and anomaly detection to turn raw 
                time-series data into actionable intelligence — focused on what to do next, not just what happened yesterday.
              </p>
              <div className="frosted-glass rounded-xl p-8 border-2 border-[#22c55e]/30">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-[#f8fafc] mb-2">No proprietary hardware required.</div>
                  </div>
                  <div>
                    <div className="text-[#f8fafc] mb-2">No heavy IT projects to get started.</div>
                  </div>
                  <div>
                    <div className="text-[#f8fafc] mb-2">Just smarter operations, starting with your first site.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#f8fafc] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group frosted-glass rounded-xl p-6 border border-[#334155] hover:border-[#22c55e] transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl text-[#f8fafc] mb-3">{value.title}</h3>
                  <p className="text-[#94a3b8]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-20 px-6 bg-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#38bdf8] bottom-20 right-20" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#22c55e] to-[#38bdf8] flex items-center justify-center mx-auto mb-6 glow-soft">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl text-[#f8fafc] mb-6">
              Work with us as an early partner
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8">
              We’re looking for forward-thinking facility teams — starting with greenhouse operators — to shape Enerwyse’s early roadmap. As an early partner, you’ll get direct input, founder-led support, and a clear plan to turn your data into measurable operational improvements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all"
              >
                Become an Early Partner
              </a>
              <a
                href="/contact"
                className="px-10 py-4 rounded-xl border-2 border-[#334155] text-[#f8fafc] hover:border-[#22c55e] transition-all"
              >
                Talk to the Founder
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
