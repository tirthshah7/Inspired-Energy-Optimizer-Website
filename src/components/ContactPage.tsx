import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'theinspiredtechlabs@gmail.com',
    color: '#22c55e',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: '+1 (226) 724-2781',
    color: '#38bdf8',
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'Windsor, Ontario',
    color: '#a855f7',
  },
  {
    icon: Clock,
    title: 'Response Time',
    detail: 'Within 24 hours',
    color: '#22c55e',
  },
];

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

    try {
      const response = await fetch('https://formspree.io/f/mvgerekn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Demo Request - Inspired Energy Optimizer',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
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
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
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
              Fill out the form and our team will help you understand your energy data, assess your optimization 
              potential, and explore real use cases for your building type.
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
                  We respond within 24 hours. No sales pressure — just insights.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
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
                        <div className="text-[#f8fafc]">{info.detail}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Trust Badges */}
              <div className="frosted-glass rounded-xl p-6 border border-[#334155]">
                <div className="text-[#94a3b8] text-sm mb-4">What we'll help you with:</div>
                <div className="space-y-3">
                  {[
                    'Understand your energy data',
                    'Assess optimization potential',
                    'Explore use cases',
                    'See a tailored platform demo',
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
            <div className="lg:col-span-2">
              <div className="frosted-glass rounded-2xl p-8 md:p-12 border border-[#334155] relative">
                <div className="glow-soft absolute -inset-4 rounded-3xl opacity-10" />
                
                <h3 className="text-2xl text-[#f8fafc] mb-8">Book Your Demo</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  {/* Honeypot field - prevents spam */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  
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
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial / Manufacturing</option>
                      <option value="campus">Campus / Multi-Site Portfolio</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="education">Educational Institution</option>
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
                      placeholder="Tell us about your energy challenges and goals..."
                    />
                  </div>

                  {/* File Upload Suggestion */}
                  <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-4">
                    <div className="text-[#94a3b8] text-sm mb-2">Optional:</div>
                    <p className="text-[#f8fafc] text-sm">
                      Attach a month of sample energy data to receive insights in your demo
                    </p>
                    <button
                      type="button"
                      className="mt-3 px-4 py-2 border border-[#334155] rounded-lg text-[#f8fafc] text-sm hover:border-[#22c55e] transition-all"
                    >
                      Upload Data (CSV, PDF)
                    </button>
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
                      ✓ Thank you! We'll be in touch within 24 hours.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg text-[#ef4444] text-center">
                      Something went wrong. Please email us directly at theinspiredtechlabs@gmail.com
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
                Schedule a quick 15-minute call to discuss your needs before the full demo.
              </p>
              <button className="px-8 py-3 rounded-xl border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]/10 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
