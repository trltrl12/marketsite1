export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Two Services. One Focus:<br className="hidden md:block" /> More Motivated Seller Leads.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't do SEO, web design, social media management, email marketing, or branding. We do one thing: build and manage paid lead generation campaigns that deliver motivated sellers to your pipeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Meta Ads Service */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
            <div className="relative">
              <div className="text-5xl mb-5">📱</div>
              <h3 className="text-3xl font-extrabold mb-4">Meta Ads</h3>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Facebook and Instagram campaigns engineered to reach motivated homeowners in your market before your competitors do. We run lead gen campaigns, retargeting sequences, and audience-based ads that consistently fill your pipeline with inbound seller leads.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Facebook Lead Form Campaigns',
                  'Instagram Traffic & Lead Ads',
                  'Custom & Lookalike Audience Targeting',
                  'Geographic & Behavioral Targeting',
                  'Retargeting & Re-Engagement Sequences',
                  'Ad Copy, Creative & Landing Page Build',
                  'Ongoing Split Testing & Optimization',
                  'Monthly Performance Reporting',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#hero"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105"
              >
                Start Getting Meta Leads →
              </a>
            </div>
          </div>

          {/* Google PPC Service */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-10 text-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
            <div className="relative">
              <div className="text-5xl mb-5">🔍</div>
              <h3 className="text-3xl font-extrabold mb-4">Google PPC</h3>
              <p className="text-amber-50 text-lg mb-6 leading-relaxed">
                Google Search campaigns targeting the exact keywords motivated sellers type when they're ready to sell. When someone in your market searches "sell my house fast" or "cash home buyers," we put your business at the top — and convert that click into a lead with optimized landing pages.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Google Search Campaigns (High-Intent Keywords)',
                  '"Sell My House Fast" & "We Buy Houses" Targeting',
                  'High-Converting PPC Landing Pages',
                  'Google Display Retargeting',
                  'Negative Keyword Management',
                  'Call Tracking & Lead Attribution',
                  'Bid Strategy & Budget Optimization',
                  'Monthly Reporting & Transparent ROI Tracking',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-amber-50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#hero"
                className="inline-block bg-white hover:bg-amber-50 text-orange-600 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105"
              >
                Start Getting Google Leads →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Most of our clients run <span className="text-blue-600">both Meta and Google</span> simultaneously for maximum market coverage.
          </p>
          <p className="text-gray-600">
            Meta targets sellers before they search. Google captures sellers at the moment of intent. Together, they give you a full-funnel acquisition engine that competitors running only one channel simply can't match.
          </p>
        </div>
      </div>
    </section>
  );
}
