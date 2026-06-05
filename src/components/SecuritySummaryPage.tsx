import { Shield, Lock, Server, Key, Eye, Database, AlertTriangle, Cloud, CheckCircle } from 'lucide-react';
import { SEO } from './SEO';

export function SecuritySummaryPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <SEO
        title="Security Summary | Enerwyse"
        description="Enerwyse security practices: AES-256 encryption at rest, TLS 1.2+ in transit, RBAC, audit logging, and SOC 2 / ISO 27001 certified sub-processors."
        path="/security"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#38bdf8] top-20 -left-20" />
        <div className="floating-blob w-80 h-80 bg-[#22c55e] top-40 right-20" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] mb-6">
              <Shield className="w-5 h-5 inline-block mr-2" />
              Security Summary
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Your Security is Our Priority
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
                This document outlines the security controls and practices implemented by Enerwyse in support of Green Button Connect My Data (CMD) integration. Our security framework is designed to protect customer information, ensure data integrity, and comply with utility data-sharing requirements.
              </p>
            </div>

            {/* Section 1: System Overview */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <Server className="w-5 h-5 text-[#22c55e]" />
                </div>
                System Overview
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
                  The platform processes utility-authorized Green Button data to deliver analytics, forecasting, and energy optimization recommendations. Customer data flows through secure ingestion pipelines and is stored in encrypted databases hosted in a secure cloud environment.
                </p>
                <p className="text-[#94a3b8] text-lg leading-relaxed font-semibold text-[#22c55e]">
                  Only authorized personnel with appropriate role-based access can interact with customer data.
                </p>
              </div>
            </div>

            {/* Section 2: Infrastructure Security */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-[#38bdf8]" />
                </div>
                Infrastructure Security
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Hosted on secure cloud infrastructure (currently migrating to cloud)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Network security groups restrict inbound access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Production and development environments are isolated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Automated deployment pipelines ensure controlled releases</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Authentication & Access Control */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <Key className="w-5 h-5 text-[#a855f7]" />
                </div>
                Authentication & Access Control
              </h2>
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>All user accounts require strong passwords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Optional MFA (Multi-Factor Authentication) available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Admin access limited to least-privilege roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Access reviews performed regularly</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4: Data Encryption */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#22c55e]" />
                </div>
                Data Encryption
              </h2>
              
              <div className="space-y-4">
                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-3">4.1 In Transit</h3>
                  <p className="text-[#94a3b8] text-lg">
                    All API and data transfers use <span className="text-[#22c55e] font-semibold">TLS 1.2+</span> encryption to ensure secure communication between systems.
                  </p>
                </div>

                <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                  <h3 className="text-xl text-[#f8fafc] mb-3">4.2 At Rest</h3>
                  <p className="text-[#94a3b8] text-lg">
                    All data is encrypted using <span className="text-[#22c55e] font-semibold">AES-256</span> or the cloud provider's default encryption standard.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Logging and Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#38bdf8]" />
                </div>
                Logging and Monitoring
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>All access and data interactions are logged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Security logs are retained for compliance and audit purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Alerts generated for suspicious activity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6: Data Retention and Deletion */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#a855f7]" />
                </div>
                Data Retention and Deletion
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Customer CMD data retained only while authorization is active</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Data deleted within a reasonable timeframe of consent revocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Secure deletion follows industry standards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7: Backup & Disaster Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#22c55e]" />
                </div>
                Backup & Disaster Recovery
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Encrypted backups taken daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Recovery plan tested periodically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-1">•</span>
                    <span>Backups stored in geographically redundant locations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8: Vulnerability Management */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#38bdf8]" />
                </div>
                Vulnerability Management
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Regular software patching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Dependency scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">•</span>
                    <span>Scheduled external security assessments (future commitment acceptable)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 9: Sub-Processors */}
            <div className="mb-12">
              <h2 className="text-3xl text-[#f8fafc] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#a855f7]" />
                </div>
                Sub-Processors
              </h2>
              
              <div className="frosted-glass rounded-xl p-6 border border-[#334155] mb-4">
                <p className="text-[#94a3b8] text-lg mb-4">We use secure and industry-standard service providers:</p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Cloud hosting providers – Hosting and storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Database services – Secure data storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#a855f7] mt-1">•</span>
                    <span>Other tools and platforms as needed for platform operations</span>
                  </li>
                </ul>
              </div>
              
              <div className="frosted-glass rounded-xl p-6 border-2 border-[#22c55e]/50 bg-[#22c55e]/5">
                <p className="text-[#f8fafc] font-semibold text-lg">
                  All sub-processors maintain independent security certifications (SOC 2, ISO 27001, etc.).
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-12">
              <div className="frosted-glass rounded-xl p-8 border border-[#334155]">
                <h2 className="text-2xl text-[#f8fafc] mb-4">Questions About Security?</h2>
                <p className="text-[#94a3b8] text-lg mb-4">
                  If you have any questions about our security practices or would like more information, please contact us.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 rounded-lg gradient-primary text-white hover:glow-soft transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

