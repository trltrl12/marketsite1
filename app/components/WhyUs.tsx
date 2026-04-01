export default function WhyUs() {
  const differentiators = [
    {
      icon: '🏠',
      title: 'We Only Work With Real Estate Investors',
      body: "We don't manage campaigns for dentists, restaurants, or e-commerce stores. Every campaign we build, every ad we write, and every landing page we create is specifically designed for real estate investor businesses that buy houses directly from sellers. This specialization means faster results, less trial and error, and copy that actually resonates with motivated homeowners.",
    },
    {
      icon: '🎯',
      title: 'Paid Ads Is All We Do — Not an Afterthought',
      body: "We are not a generalist agency that offers paid ads as one of 12 services. Meta Ads and Google PPC are the only thing we do. We don't sell you websites, SEO packages, or social media management. That focus means every hour we invest goes directly into driving down your cost per lead and scaling your ad performance.",
    },
    {
      icon: '📊',
      title: 'Performance-First Approach to Every Campaign',
      body: "We track everything that matters: cost per lead, lead-to-appointment rate, and your pipeline ROI. We don't report on impressions or reach. We show you exactly how many leads came in, what they cost, and whether they turned into conversations. If something isn't performing, we fix it — we don't make excuses.",
    },
    {
      icon: '⚡',
      title: 'Fast Setup, Fast Results',
      body: "Most agencies take 30-60 days to launch. We move faster. Our campaigns are built on proven structures that are refined for the real estate investor market specifically — which means we can launch quickly and start driving leads to your pipeline without months of unnecessary runway.",
    },
    {
      icon: '🔬',
      title: 'Data-Driven Creative and Copy',
      body: "We write ad copy and build creatives based on what actually converts motivated sellers — not what looks pretty in a portfolio. Every word in our ads is written to speak directly to a homeowner who needs to sell, creating urgency without gimmicks and generating qualified leads who are ready to have a conversation.",
    },
    {
      icon: '🤝',
      title: 'You Own Your Ad Accounts',
      body: "Your ad accounts, your data, your audiences. We never hold your campaigns hostage or run ads in an account you don't control. If you ever stop working with us, you keep everything — the account history, the audiences, and every lead that came in. That's how it should be.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Why Investors Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Built Exclusively for Real Estate<br className="hidden md:block" /> Investor Businesses
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Most marketing agencies treat your business like any other advertiser. We treat it like the specialized acquisition business it actually is — because that's the only type of client we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to Build a Predictable Seller Lead Pipeline?
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            Book a free strategy call and we'll walk you through exactly how we'd set up your Meta and Google campaigns to generate inbound motivated seller leads in your market.
          </p>
          <a
            href="#hero"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
