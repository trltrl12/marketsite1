export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">The Paid Acquisition Approach</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            How Meta Ads and Google PPC Generate<br className="hidden md:block" /> Motivated Seller Leads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't rely on organic reach, slow SEO, or cold outbound. We put your offer in front of homeowners who are actively looking to sell — using targeted paid advertising that puts you in control of your lead volume.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Meta Ads Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Meta Ads (Facebook & Instagram)</h3>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Meta's ad platform lets us target homeowners in your specific markets based on life events, property ownership, financial signals, and behavioral data. We build lead generation campaigns that interrupt motivated sellers before they ever search Google — putting you ahead of your competition in your market.
            </p>
            <ul className="space-y-2.5">
              {[
                'Hyper-targeted campaigns by zip code, neighborhood, or metro area',
                'Lead form ads that capture seller info inside Facebook and Instagram',
                'Retargeting sequences that re-engage homeowners who showed interest',
                'Video ads, image ads, and carousel formats built to convert',
                'Lookalike audiences built from your best existing leads',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Google PPC Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-8">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Ads & PPC</h3>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Google captures sellers at the highest point of intent. When someone types "sell my house fast" or "cash home buyers near me," they've already made a decision — they need to sell. We position your business at the top of those searches and route them directly into your pipeline.
            </p>
            <ul className="space-y-2.5">
              {[
                'Search campaigns targeting "we buy houses," "sell house fast," and related terms',
                'High-intent keywords that attract motivated, ready-to-sell homeowners',
                'Custom PPC landing pages optimized to convert clicks into leads',
                'Google Display retargeting to stay top-of-mind with past visitors',
                'Bid strategy and budget management to maximize lead volume per dollar',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Combined, Meta + Google Creates a Complete Paid Acquisition Engine
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Meta reaches sellers who haven't started searching yet. Google captures sellers who are ready to act right now. Running both gives your business full-funnel coverage and a consistent, predictable flow of inbound motivated seller leads.
          </p>
          <a
            href="#hero"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            Build Your Paid Lead System →
          </a>
        </div>
      </div>
    </section>
  );
}
