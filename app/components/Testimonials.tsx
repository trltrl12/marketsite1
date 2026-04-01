export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Before working with them, we were completely dependent on cold calling and direct mail. Within 60 days of running Meta Ads through their system, we had more inbound seller calls than our acquisition team could handle. The quality is different — these people actually want to sell.",
      name: 'Travis C.',
      company: 'Cash Home Buyers — Dallas, TX',
      initials: 'TC',
    },
    {
      quote:
        "We'd tried Google Ads before with another agency and wasted $8,000 with almost nothing to show. These guys restructured our entire campaign, rewrote the landing pages, and within the first month we had 23 qualified leads at a cost I actually felt good about. Night and day difference.",
      name: 'Marcus R.',
      company: 'We Buy Houses Fast — Atlanta, GA',
      initials: 'MR',
    },
    {
      quote:
        "What I appreciate most is the specialization. They understand what a motivated seller actually looks like and they know how to write ads that speak to those homeowners specifically. Our ad costs went down and our lead-to-appointment rate went up. That's all I care about.",
      name: 'Dana W.',
      company: 'Off-Market Acquisitions — Phoenix, AZ',
      initials: 'DW',
    },
  ];

  const stats = [
    { value: '23', label: 'Avg. Leads in First Month' },
    { value: '4.2x', label: 'Avg. Return on Ad Spend' },
    { value: '72%', label: 'Lead-to-Appointment Rate' },
    { value: '14', label: 'Days to First Lead (Avg.)' },
  ];

  return (
    <section id="results" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">Results That Matter</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Real Estate Investors Getting Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We measure success the same way you do — more qualified seller conversations, more contracts, and more deals in the pipeline.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-center">
          <p className="text-white text-lg font-semibold mb-2">
            *Results vary based on market, budget, and campaign setup. Stats represent averages across active clients.
          </p>
          <p className="text-blue-100 text-sm">
            We'll give you a realistic projection for your market on your strategy call.
          </p>
        </div>
      </div>
    </section>
  );
}
