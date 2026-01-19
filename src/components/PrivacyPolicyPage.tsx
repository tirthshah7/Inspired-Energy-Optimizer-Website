import { Shield, Lock, Eye, Trash2, Mail } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#a855f7] top-20 -left-20" />
        <div className="floating-blob w-80 h-80 bg-[#22c55e] top-40 right-20" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] mb-6">
              <Shield className="w-5 h-5 inline-block mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Your Privacy Matters
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
                Enerwyse ("we", "our", "the Platform") is an energy management and optimization platform that enables customers to access, analyze, and optimize their electricity consumption using Green Button Connect My Data (CMD) functionality.
              </p>
              <p className="text-[#f8fafc] text-lg leading-relaxed">
                We are committed to protecting your privacy and ensuring transparent, secure handling of your personal and energy-related information. This Privacy Policy explains how we collect, use, store, and protect your data.
              </p>
            </div>

            {/* Section 1: Definitions */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <span className="text-[#22c55e] font-bold">1</span>
                </div>
                Definitions
              </h2>
              <div className="space-y-4">
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <p className="text-[#f8fafc] font-semibold mb-2">"Customer Data"</p>
                  <p className="text-[#94a3b8]">Information provided by a user, including name, email, business details, and account identifiers.</p>
                </div>
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <p className="text-[#f8fafc] font-semibold mb-2">"Green Button CMD Data"</p>
                  <p className="text-[#94a3b8]">Interval usage, billing, and account information retrieved from your utility through authorized Green Button connections.</p>
                </div>
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <p className="text-[#f8fafc] font-semibold mb-2">"Energy Usage Data"</p>
                  <p className="text-[#94a3b8]">Consumption data, demand intervals, GA/ICI metrics, and optimization-related metadata.</p>
                </div>
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <p className="text-[#f8fafc] font-semibold mb-2">"PII (Personally Identifiable Information)"</p>
                  <p className="text-[#94a3b8]">Any information that identifies an individual.</p>
                </div>
              </div>
            </div>

            {/* Section 2: Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <span className="text-[#38bdf8] font-bold">2</span>
                </div>
                Information We Collect
              </h2>
              <p className="text-[#94a3b8] text-lg mb-6">We may collect the following categories of information:</p>
              
              <div className="space-y-6">
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-4">2.1 User-Provided Information</h3>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#22c55e] mt-1">•</span>
                      <span>Name, email address, business name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#22c55e] mt-1">•</span>
                      <span>Utility account number (only when required for CMD authorization)</span>
                    </li>
                  </ul>
                </div>

                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-4">2.2 Green Button CMD Data</h3>
                  <p className="text-[#94a3b8] mb-4">Once you authorize access, we may receive:</p>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#38bdf8] mt-1">•</span>
                      <span>Interval energy usage data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#38bdf8] mt-1">•</span>
                      <span>Billing data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#38bdf8] mt-1">•</span>
                      <span>Peak demand information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#38bdf8] mt-1">•</span>
                      <span>Meter identifiers</span>
                    </li>
                  </ul>
                </div>

                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-4">2.3 System Metadata</h3>
                  <ul className="space-y-2 text-[#94a3b8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] mt-1">•</span>
                      <span>Device information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] mt-1">•</span>
                      <span>IP address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] mt-1">•</span>
                      <span>Log activity (for security and troubleshooting)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: How We Collect Data */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <span className="text-[#a855f7] font-bold">3</span>
                </div>
                How We Collect Data
              </h2>
              <p className="text-[#94a3b8] text-lg mb-6">Data is collected through:</p>
              
              <div className="space-y-4">
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-3">3.1 Green Button Authorization</h3>
                  <p className="text-[#94a3b8] mb-2">You explicitly authorize data access via your utility's CMD OAuth2 flow.</p>
                  <p className="text-[#94a3b8] font-semibold text-[#22c55e]">We cannot access your data without your consent.</p>
                </div>

                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-3">3.2 Manual Upload</h3>
                  <p className="text-[#94a3b8]">If you manually upload usage files (XML/CSV), we process them for analytics.</p>
                </div>

                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-3">3.3 Account Creation</h3>
                  <p className="text-[#94a3b8]">Information collected when you register on our platform.</p>
                </div>
              </div>
            </div>

            {/* Section 4: How We Use Your Data */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#22c55e]" />
                </div>
                How We Use Your Data
              </h2>
              <p className="text-[#94a3b8] text-lg mb-6">We use your information to:</p>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] mb-4">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Provide energy analytics and optimization insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Generate recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Assist with participation in DR/ICI peak reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Forecast consumption patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Improve platform performance and accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Comply with legal obligations and CMD integration requirements</span>
                  </li>
                </ul>
              </div>
              
              <div className="frosted-glass rounded-xl p-6 border-2 border-[#22c55e]/50 bg-[#22c55e]/5">
                <p className="text-[#f8fafc] font-semibold text-lg">
                  We do <span className="text-[#22c55e]">NOT</span> sell, rent, or trade your data.
                </p>
              </div>
            </div>

            {/* Section 5: Consent */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <span className="text-[#38bdf8] font-bold">5</span>
                </div>
                Consent
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] mb-4">
                <p className="text-[#94a3b8] text-lg mb-4">Your consent is obtained through:</p>
                <ul className="space-y-2 text-[#94a3b8] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Green Button OAuth2 authorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Account creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Agreement to this Privacy Policy</span>
                  </li>
                </ul>
                
                <h3 className="text-xl text-[#f8fafc] mb-3">Revoking Consent</h3>
                <p className="text-[#94a3b8] mb-2">You may revoke Green Button access at any time through your utility or by contacting us.</p>
                <p className="text-[#94a3b8]">Upon revocation, all CMD data is securely deleted within a reasonable timeframe.</p>
              </div>
            </div>

            {/* Section 6: Data Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <span className="text-[#a855f7] font-bold">6</span>
                </div>
                Data Sharing
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] mb-4">
                <p className="text-[#94a3b8] text-lg mb-4">We only share data with:</p>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Necessary sub-processors (e.g., secure cloud hosting providers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Regulatory authorities if legally required</span>
                  </li>
                </ul>
              </div>
              
              <div className="frosted-glass rounded-xl p-6 border-2 border-[#22c55e]/50 bg-[#22c55e]/5">
                <p className="text-[#f8fafc] font-semibold text-lg">
                  We do <span className="text-[#22c55e]">NOT</span> share or sell your energy data for marketing or unrelated purposes.
                </p>
              </div>
            </div>

            {/* Section 7: Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <span className="text-[#22c55e] font-bold">7</span>
                </div>
                Data Retention
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-4">We retain customer and usage data only for as long as needed to provide services, or until you revoke access.</p>
                <p className="text-[#94a3b8] text-lg mb-4">Upon request, we permanently delete:</p>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Personal identifiable information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Usage data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Account identifiers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8: Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#38bdf8]" />
                </div>
                Data Security
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-4">We implement industry-standard security measures including:</p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>AES-256 encryption at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>TLS 1.2+ encryption in transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Strict access control and role-based permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Regular vulnerability reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Audit logging</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 9: Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <span className="text-[#a855f7] font-bold">9</span>
                </div>
                Your Rights (PIPEDA Compliant)
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-4">You may request:</p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Access to your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Correction of inaccuracies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Deletion of your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Revocation of CMD authorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Information on how your data is used</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10: Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#22c55e]" />
                </div>
                Contact Us
              </h2>
              
              <div className="frosted-glass rounded-xl p-8 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg mb-6">For privacy requests or questions:</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#f8fafc] font-semibold text-lg mb-2">Privacy Officer</p>
                    <p className="text-[#f8fafc] text-lg mb-2">Enerwyse</p>
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

