const services = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Google PPC Management',
    tag: 'High-Intent Search',
    description:
      'We put your business at the top of Google when motivated homeowners search "sell my house fast" or "cash home buyers near me" — capturing sellers at their highest moment of intent.',
    bullets: [
      'Search campaigns targeting buyer-intent keywords',
      'Negative keyword management to filter tire-kickers',
      'High-converting landing pages built to close',
      'Bid strategy + budget optimization for max lead volume',
      'Call tracking & transparent ROI reporting',
    ],
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.08)',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Meta Ads (Facebook / Instagram)',
    tag: 'Interrupt + Engage',
    description:
      'We reach motivated sellers on Facebook and Instagram before they ever open Google — using behavioral targeting, lookalike audiences, and retargeting to fill your pipeline with inbound leads.',
    bullets: [
      'Lead form ads that capture seller info inside Meta',
      'Custom & lookalike audience targeting by market',
      'Video, image, and carousel creatives that convert',
      'Retargeting sequences for re-engagement',
      'Geographic targeting down to zip code level',
    ],
    accent: '#818cf8',
    accentBg: 'rgba(129,140,248,0.08)',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ),
    title: 'Landing Page + Funnel Build-Out',
    tag: 'Convert Every Click',
    description:
      'A great ad means nothing without a great landing page. We build high-converting, mobile-optimized seller funnels designed specifically for real estate investors — turning ad clicks into qualified conversations.',
    bullets: [
      'Custom landing pages built for motivated sellers',
      'Mobile-first design for maximum conversions',
      'A/B tested headline and offer variations',
      'CRM integration and lead routing setup',
      'Heat mapping + ongoing conversion optimization',
    ],
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#f59e0b] text-xs uppercase tracking-widest font-semibold mb-4 block">
            What We Do
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-bebas text-[clamp(3rem,6vw,5.5rem)] leading-none text-white">
              Three Services.<br />
              One{' '}
              <span className="text-[#f59e0b]">Obsession.</span>
            </h2>
            <p className="text-[#737373] max-w-sm leading-relaxed md:text-right">
              Everything we build is designed to generate inbound motivated seller leads. No SEO, no social media, no branding. Paid acquisition only.
            </p>
          </div>
          <hr className="hr-gold mt-8" />
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-hover relative border border-[#1e1e1e] bg-[#0f0f0f] rounded-sm p-8 flex flex-col group"
            >
              {/* Number */}
              <span className="font-barlow text-[4.5rem] font-bold leading-none text-[#1a1a1a] absolute top-6 right-8 select-none group-hover:text-[#222] transition-colors">
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded flex items-center justify-center mb-6 transition-colors"
                style={{ background: service.accentBg, color: service.accent, border: `1px solid ${service.accent}20` }}
              >
                {service.icon}
              </div>

              {/* Tag */}
              <span
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={{ color: service.accent }}
              >
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="font-barlow text-2xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mt-auto">
                {service.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                    <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-[#f59e0b]" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 border border-[#1e1e1e] bg-[#0f0f0f] rounded-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold mb-1">
              Most clients run{' '}
              <span className="text-[#f59e0b]">Meta + Google simultaneously</span>{' '}
              for full-funnel coverage.
            </p>
            <p className="text-[#737373] text-sm">
              Meta catches sellers before they search. Google captures them when they're ready to act. Together, they dominate your market.
            </p>
          </div>
          <a
            href="#get-started"
            className="flex-shrink-0 border border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#080808] font-bold text-sm px-6 py-3 rounded transition-all duration-200 whitespace-nowrap"
          >
            Build Your System →
          </a>
        </div>
      </div>
    </section>
  );
}
