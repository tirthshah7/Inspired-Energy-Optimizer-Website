import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { SEO } from './SEO';
import { analyticsEvents, trackEvent } from '../lib/analytics';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'tirth.shah@enerwyse.ca',
    href: 'mailto:tirth.shah@enerwyse.ca',
    eventName: analyticsEvents.emailClick,
    color: '#22c55e',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: '+1 (226) 724-2781',
    href: 'tel:+12267242781',
    eventName: analyticsEvents.phoneClick,
    color: '#38bdf8',
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'Windsor, Ontario',
    href: null,
    eventName: null,
    color: '#a855f7',
  },
  {
    icon: Clock,
    title: 'Response Time',
    detail: 'Within 24 hours',
    href: null,
    eventName: null,
    color: '#22c55e',
  },
];

const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Book a 20-minute Enerwyse discovery call',
  url: 'https://www.enerwyse.ca/contact',
  description:
    'Contact Enerwyse to discuss Ontario C&I energy data, Global Adjustment exposure, and pilot options.',
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    facilityType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    trackEvent(analyticsEvents.contactFormSubmit, {
      facility_type: formData.facilityType || 'unspecified',
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2fe8ee12-c486-4c0d-94a6-3091f9142d91',
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          facility_type: formData.facilityType,
          message: formData.message,
          subject: 'New Demo Request - Enerwyse',
          from_name: 'Enerwyse Website Contact Form',
          botcheck: '',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackEvent(analyticsEvents.contactFormSuccess, {
          facility_type: formData.facilityType || 'unspecified',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          facilityType: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        trackEvent(analyticsEvents.contactFormError, {
          facility_type: formData.facilityType || 'unspecified',
          reason: 'non_200_response',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      trackEvent(analyticsEvents.contactFormError, {
        facility_type: formData.facilityType || 'unspecified',
        reason: 'network_or_client_error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <SEO
        title="Contact Enerwyse — Book a Demo | Energy Intelligence for Ontario C&I"
        description="Book a 20-minute call to discuss your energy data, estimate savings potential, and explore a pilot. We respond within 24 hours."
        path="/contact"
        keywords={[
          'book energy demo Ontario',
          'Global Adjustment savings assessment',
          'Ontario C&I energy pilot',
          'greenhouse energy software demo',
        ]}
        structuredData={contactStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
        <div className="floating-blob w-96 h-96 bg-[#38bdf8] top-20 -left-20" />
        <div className="floating-blob w-80 h-80 bg-[#22c55e] top-40 right-20" style={{ animationDelay: '5s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] mb-6">
              Contact Us
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#f8fafc] mb-6">
              Let's Talk Energy Intelligence
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Share a bit about your buildings and current setup, and we'll help you understand your data, 
              assess optimization potential, and map out what a pilot with Enerwyse could look like.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl text-[#f8fafc] mb-6">Get in Touch</h2>
                <p className="text-[#94a3b8] mb-8">
                  We respond within 24 hours. No hard sales pitches — just a clear, honest conversation.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const detail = info.href ? (
                  <a
                    href={info.href}
                    onClick={() => {
                      if (info.eventName) {
                        trackEvent(info.eventName, { location: 'contact_info' });
                      }
                    }}
                    className="text-[#f8fafc] hover:text-[#22c55e] transition-colors"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <div className="text-[#f8fafc]">{info.detail}</div>
                );

                return (
                  <div
                    key={index}
                    className="frosted-glass rounded-xl p-6 border border-[#334155] hover:border-[#22c55e] transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <div className="text-[#94a3b8] text-sm mb-1">{info.title}</div>
                        {detail}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Trust Badges */}
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <div className="text-[#94a3b8] text-sm mb-4">What we can help you with:</div>
                <div className="space-y-3">
                  {[
                    'Understanding your current energy data sources',
                    'Estimating savings and optimization potential',
                    'Exploring pilot or proof-of-concept options',
                    'Seeing a walkthrough of the platform using example data',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                      <span className="text-[#f8fafc] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" id="demo-form">
              <div className="frosted-glass rounded-2xl p-8 md:p-12 border border-[#334155] relative">
                <div className="glow-soft absolute -inset-4 rounded-3xl opacity-10" />
                
                <h3 className="text-2xl text-[#f8fafc] mb-4">Book Your Demo</h3>
                <p className="text-sm text-[#94a3b8] mb-8">
                  Prefer email? Reach Tirth directly at{' '}
                  <a href="mailto:tirth.shah@enerwyse.ca" className="text-[#22c55e] hover:underline">
                    tirth.shah@enerwyse.ca
                  </a>
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  {/* Honeypot field - Web3Forms rejects submissions where this is checked */}
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[#f8fafc] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[#f8fafc] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-[#f8fafc] mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  {/* Facility Type */}
                  <div>
                    <label htmlFor="facilityType" className="block text-[#f8fafc] mb-2">
                      Type of Facility *
                    </label>
                    <select
                      id="facilityType"
                      name="facilityType"
                      required
                      value={formData.facilityType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all"
                    >
                      <option value="">Select a facility type</option>
                      <option value="greenhouse">Greenhouse / Controlled-Environment Agriculture</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial / Manufacturing</option>
                      <option value="campus">Campus / Multi-Site Portfolio</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[#f8fafc] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f8fafc] focus:border-[#22c55e] focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your energy challenges, data sources, and what you'd like to achieve..."
                    />
                  </div>

                  {/* Data Prep Note */}
                  <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-4">
                    <div className="text-[#94a3b8] text-sm mb-2">Optional:</div>
                    <p className="text-[#f8fafc] text-sm">
                      Mention what data you can access today, such as Green Button CMD, interval meter exports, utility portal CSVs, or recent bills.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-xl gradient-primary text-white hover:glow-soft transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Book My Demo'}
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-lg text-[#22c55e] text-center">
                        Thank you! Tirth will be in touch within 24 hours. For urgent matters, you can email tirth.shah@enerwyse.ca directly.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg text-[#ef4444] text-center">
                      Something went wrong. Please email Tirth directly at tirth.shah@enerwyse.ca.
                    </div>
                  )}

                  {/* Privacy Note */}
                  <p className="text-[#94a3b8] text-sm text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-16 px-6 bg-[#0f172a] border-t border-[#334155]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="frosted-glass rounded-2xl p-8 md:p-12 border border-[#334155] text-center">
              <h3 className="text-2xl text-[#f8fafc] mb-4">
                Prefer to talk first?
              </h3>
              <p className="text-[#94a3b8] mb-6">
                Schedule a quick 15-minute intro call to see if a pilot makes sense for your facility.
              </p>
              <a
                href="/contact#demo-form"
                onClick={() => trackEvent(analyticsEvents.demoCtaClick, { location: 'contact_bottom_banner' })}
                className="inline-block px-8 py-3 rounded-xl border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]/10 transition-all"
              >
                Request a Call Slot
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
