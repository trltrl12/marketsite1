'use client';

import { useState } from 'react';
import LeadForm from './LeadForm';
import CalendlyEmbed from './CalendlyEmbed';

interface SubmittedData {
  name: string;
  email: string;
}

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);
  const [leadData, setLeadData] = useState<SubmittedData>({ name: '', email: '' });

  const handleFormSubmit = (data: { name: string; companyName: string; phone: string; email: string }) => {
    setLeadData({ name: data.name, email: data.email });
    setSubmitted(true);
    // Scroll to scheduling step
    setTimeout(() => {
      document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (submitted) {
    return (
      <section id="schedule" className="min-h-screen bg-slate-900 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <CalendlyEmbed prefillName={leadData.name} prefillEmail={leadData.email} />
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="bg-slate-900 text-white min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Meta Ads + Google PPC — For Real Estate Investors Only
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              We Help{' '}
              <span className="text-amber-400">We Buy Houses</span>{' '}
              Companies Generate More Motivated Seller Leads
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We build and manage paid lead generation systems for real estate investors who want more qualified seller leads, more inbound appointments, and more opportunities to close deals — using Meta Ads and Google PPC exclusively.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Inbound motivated seller leads delivered to your pipeline',
                'Campaigns built specifically for cash home buying businesses',
                'No long-term contracts. Performance-focused from day one.',
                'We only work with real estate investors — this is all we do',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                    {['TC','MR','DW','AL'][i-1]}
                  </div>
                ))}
              </div>
              <span>Trusted by real estate investors across the US</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Book Your Free Lead Generation Strategy Call
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your business and we'll show you exactly how we can generate more motivated seller leads for your market using paid ads.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
                <span className="text-amber-500 text-lg">⚡</span>
                <p className="text-sm text-amber-800 font-medium">
                  Step 1 of 2 — Fill in your info, then pick a call time
                </p>
              </div>

              <LeadForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
