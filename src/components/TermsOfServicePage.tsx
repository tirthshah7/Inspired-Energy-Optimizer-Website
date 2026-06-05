import { FileText, CheckCircle, Shield, Key, Database, AlertTriangle, XCircle, Mail, Scale } from 'lucide-react';
import { SEO } from './SEO';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <SEO
        title="Terms of Service | Enerwyse"
        description="Terms and conditions for using the Enerwyse energy intelligence platform."
        path="/terms-of-service"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#a855f7] top-20 -left-20" />
        <div className="floating-blob w-80 h-80 bg-[#22c55e] top-40 right-20" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] mb-6">
              <FileText className="w-5 h-5 inline-block mr-2" />
              Terms of Service
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Last updated: December 7th, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <div className="frosted-glass rounded-2xl p-8 mb-12 border border-[#334155]">
              <p className="text-[#f8fafc] text-lg leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your use of the Enerwyse platform ("the Platform"). By creating an account or connecting your utility data using Green Button CMD, you agree to these Terms.
              </p>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#22c55e]" />
                </div>
                Acceptance of Terms
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  By accessing or using the Platform, you agree to comply with and be bound by these Terms.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed font-semibold text-[#ef4444]">
                  If you do not agree, you must discontinue use immediately.
                </p>
              </div>
            </div>

            {/* Section 2: Eligibility */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <span className="text-[#38bdf8] font-bold">2</span>
                </div>
                Eligibility
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-4">You must:</p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Be 18 years or older</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Be legally authorized to access your utility account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Provide accurate information</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Description of Services */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <span className="text-[#a855f7] font-bold">3</span>
                </div>
                Description of Services
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] mb-4">
                <p className="text-[#94a3b8] text-lg mb-4">The Platform provides:</p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Energy analytics and visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Load forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Peak demand analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Optimization suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Support for ICI / DR participation</span>
                  </li>
                </ul>
              </div>
              <div className="frosted-glass rounded-xl p-6 border-2 border-[#ef4444]/50 bg-[#ef4444]/5">
                <p className="text-[#f8fafc] font-semibold text-lg">
                  The Platform <span className="text-[#ef4444]">DOES NOT</span> control or modify your physical equipment or utility account settings.
                </p>
              </div>
            </div>

            {/* Section 4: User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#22c55e]" />
                </div>
                User Responsibilities
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-4">You agree to:</p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Provide accurate account information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Use the Platform lawfully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Not attempt unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Not misuse data or platform services</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: Data Access and Authorization */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <Key className="w-5 h-5 text-[#38bdf8]" />
                </div>
                Data Access and Authorization
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  Use of Green Button CMD requires explicit authorization.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  You may revoke access at any time through your utility or by contacting us.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed">
                  Upon revocation, we will delete your CMD data within a reasonable timeframe.
                </p>
              </div>
            </div>

            {/* Section 6: Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#a855f7]" />
                </div>
                Intellectual Property
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  All algorithms, software, designs, and content on the Platform are owned by Enerwyse.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed font-semibold text-[#ef4444]">
                  You may not copy, reverse-engineer, or resell the platform or its outputs.
                </p>
              </div>
            </div>

            {/* Section 7: Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#38bdf8]" />
                </div>
                Limitation of Liability
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] mb-4">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  The Platform provides insights and recommendations for informational purposes only.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4 font-semibold text-[#ef4444]">
                  We make no guarantee of energy savings, performance improvement, or financial outcome.
                </p>
                <p className="text-[#94a3b8] text-lg mb-4">
                  To the maximum extent permitted by law, we are not liable for:
                </p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Losses from decisions made based on recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Interruptions in utility data availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Technical issues outside our control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8: Termination */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-[#22c55e]" />
                </div>
                Termination
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  We may suspend or terminate accounts that violate these Terms.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  You may delete your account at any time.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed">
                  Upon termination, we delete all customer data according to our <a href="/privacy-policy" className="text-[#22c55e] hover:text-[#38bdf8] transition-colors underline">Privacy Policy</a>.
                </p>
              </div>
            </div>

            {/* Section 9: Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <span className="text-[#a855f7] font-bold">9</span>
                </div>
                Changes to Terms
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  We may update these Terms periodically.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed font-semibold text-[#22c55e]">
                  Continued use of the Platform constitutes acceptance of updated Terms.
                </p>
              </div>
            </div>

            {/* Section 10: Contact */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#22c55e]" />
                </div>
                Contact
              </h2>
              <div className="frosted-glass rounded-xl p-8 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-6">For questions, support, or legal notices:</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#f8fafc] font-semibold text-lg mb-2">Enerwyse</p>
                    <p className="text-[#94a3b8] text-sm mb-2">
                      Operating under 1001435754 ONTARIO INC.
                    </p>
                    <a 
                      href="mailto:theinspiredtechlabs@gmail.com" 
                      className="text-[#22c55e] hover:text-[#38bdf8] transition-colors text-lg"
                    >
                      theinspiredtechlabs@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

