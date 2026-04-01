'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do you work with any type of business or only real estate investors?',
    a: "We exclusively work with real estate investor businesses — we buy houses companies, cash home buyers, wholesalers, fix-and-flip operations, and off-market acquisition teams. This specialization is intentional. It means we already know what works, what your sellers respond to, and how to build campaigns that generate qualified leads for your specific deal model.",
  },
  {
    q: 'What services do you offer?',
    a: "We offer two services only: Meta Ads (Facebook and Instagram) and Google PPC (Google Ads). We don't do SEO, web design, email marketing, social media management, branding, or organic content. Paid acquisition is the only thing we focus on, which means every dollar you spend with us goes directly toward generating motivated seller leads.",
  },
  {
    q: 'How quickly can I expect to see leads coming in?',
    a: "Most clients start seeing their first leads within 7 to 14 days of campaign launch. The exact timeline depends on your market, your budget, and whether we're launching Meta, Google, or both. We'll give you a realistic expectation for your specific situation during your strategy call.",
  },
  {
    q: 'What budget do I need to get started?',
    a: "Ad budgets vary depending on your market and goals. In smaller markets, you can generate consistent leads with a lower daily budget. In major metros, you'll typically need a higher budget to compete effectively. We'll walk you through what makes sense for your market during the strategy call. We don't have a one-size-fits-all budget requirement.",
  },
  {
    q: 'Do I own the ad accounts and leads?',
    a: "Yes, absolutely. You own your ad accounts, your audiences, your conversion data, and every lead that comes in. We manage the campaigns inside your accounts, not ours. If you stop working with us, you keep everything — the account history, the data, and all the leads. No hostage situations.",
  },
  {
    q: 'How are you different from other marketing agencies?',
    a: "Most agencies are generalists that list paid ads as one of many services. We are specialists who do nothing else. We understand real estate investor business models, motivated seller psychology, and what makes a homeowner fill out a form. Our campaigns are built on real experience in this specific niche — not adapted from campaigns for unrelated industries.",
  },
  {
    q: 'What does the strategy call cover?',
    a: "The strategy call is a 30-minute conversation focused on your business. We'll ask about your market, your current lead sources, your deal volume goals, and your budget range. Based on that, we'll outline what a realistic paid acquisition strategy looks like for your situation — including which channel to prioritize and what you can expect in terms of lead volume and cost.",
  },
  {
    q: 'Do you require long-term contracts?',
    a: "We don't lock you into long-term commitments by default. We believe results are the best retention tool. We'll discuss engagement terms on your strategy call, but we're not interested in clients who are stuck with us — we want clients who stay because the campaigns are working and the leads are converting.",
  },
  {
    q: 'Can you work in my specific market?',
    a: "We work with real estate investor businesses across the United States. Whether you operate in a single city, a metro area, or multiple markets, we can build campaigns targeted to your specific geographic area. We'll assess your market during the strategy call and let you know what to expect in terms of competition and lead volume.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know before booking your strategy call.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 bg-white border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions? The fastest way to get answers is to book a call.</p>
          <a
            href="#hero"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
