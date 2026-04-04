const caseStudies = [
  {
    initials: 'MJ',
    name: 'Marcus J.',
    market: 'Dallas–Fort Worth, TX',
    channel: 'Google PPC',
    channelColor: '#f59e0b',
    metric: '23 leads',
    metricSub: 'in 30 days',
    costPerLead: '$14/lead',
    quote:
      "We'd spent money on ads before with zero results. These guys restructured everything — different landing page, different keywords, different copy. Within 4 weeks we had 23 qualified leads and signed 2 contracts. The cost per lead was under $15. I've never seen anything like it.",
    tags: ['23 Leads / 30 Days', '$14 Cost Per Lead', '2 Contracts Signed'],
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    market: 'Atlanta Metro, GA',
    channel: 'Meta Ads',
    channelColor: '#818cf8',
    metric: '47 leads',
    metricSub: 'in 45 days',
    costPerLead: '$19/lead',
    quote:
      "I was skeptical of Facebook ads for real estate — everyone said they don't work. But these campaigns were different. The ads spoke directly to homeowners who needed out fast. 47 inbound leads in 45 days, 3 deals closed. It paid for 6 months of ad spend from the first month alone.",
    tags: ['47 Leads / 45 Days', '$19 Cost Per Lead', '3 Deals Closed'],
  },
  {
    initials: 'RT',
    name: 'Ryan T.',
    market: 'Phoenix, AZ',
    channel: 'Meta + Google',
    channelColor: '#34d399',
    metric: '31 leads',
    metricSub: 'first month',
    costPerLead: '$21/lead',
    quote:
      "Started from scratch — no ad history, no pixel data, no audiences. They built everything from the ground up. By week 3 leads were coming in daily. By the end of month 1 we had 31 motivated sellers in the pipeline. Running both Meta and Google together was the right call. No regrets.",
    tags: ['31 Leads / Month 1', '$21 Cost Per Lead', 'Meta + Google'],
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#f59e0b] text-xs uppercase tracking-widest font-semibold mb-4 block">
            Case Studies
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-bebas text-[clamp(2.8rem,5vw,5rem)] leading-none text-white">
              Real Investors.{' '}
              <br className="hidden md:block" />
              <span className="text-[#f59e0b]">Real Numbers.</span>
            </h2>
            <p className="text-[#737373] max-w-sm leading-relaxed md:text-right text-sm">
              *Results vary by market, budget, and deal model. Stats represent client averages. We'll give you a realistic projection on your call.
            </p>
          </div>
          <hr className="hr-gold mt-8" />
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="card-hover border border-[#1e1e1e] bg-[#0f0f0f] rounded-sm flex flex-col overflow-hidden group"
            >
              {/* Top metric banner */}
              <div className="bg-[#141414] border-b border-[#1e1e1e] px-8 py-5 flex items-center justify-between">
                <div>
                  <div className="font-bebas text-4xl text-white leading-none">
                    {cs.metric}
                  </div>
                  <div className="text-[#737373] text-xs uppercase tracking-wider">
                    {cs.metricSub}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-barlow text-2xl font-bold" style={{ color: cs.channelColor }}>
                    {cs.costPerLead}
                  </div>
                  <div className="text-[#737373] text-xs uppercase tracking-wider">
                    Cost Per Lead
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#a3a3a3] text-sm leading-relaxed flex-grow mb-6">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded border border-[#222] text-[#737373] bg-[#141414]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-3 border-t border-[#1e1e1e] pt-5">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center text-[#080808] font-bold text-sm flex-shrink-0"
                    style={{ background: cs.channelColor }}
                  >
                    {cs.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{cs.name}</div>
                    <div className="text-[#4a4a4a] text-xs">{cs.market}</div>
                  </div>
                  <div className="ml-auto">
                    <span
                      className="text-xs px-2 py-1 rounded border font-medium"
                      style={{ color: cs.channelColor, borderColor: `${cs.channelColor}30`, background: `${cs.channelColor}08` }}
                    >
                      {cs.channel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e]">
          {[
            { value: '23', label: 'Avg. Leads in First Month' },
            { value: '4.2x', label: 'Avg. Return on Ad Spend' },
            { value: '72%', label: 'Lead-to-Appointment Rate' },
            { value: '14 days', label: 'Avg. Time to First Lead' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a] p-6 text-center hover:bg-[#0f0f0f] transition-colors group">
              <div className="stat-shimmer font-bebas text-4xl md:text-5xl mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[#4a4a4a] text-xs uppercase tracking-widest group-hover:text-[#737373] transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
