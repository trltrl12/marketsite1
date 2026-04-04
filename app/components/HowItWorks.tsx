const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    subtitle: '30 minutes. No pitch.',
    description:
      'We learn your market, your deal model, your current lead situation, and your goals. You leave with a clear picture of what a custom Meta + Google strategy looks like for your specific business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Campaign Build',
    subtitle: 'Live in days, not months.',
    description:
      'We build your ad accounts, configure pixel tracking, write ad copy, design creatives, and launch optimized landing pages — all built specifically for motivated seller acquisition in your market.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Leads Flow In',
    subtitle: 'Optimize. Scale. Repeat.',
    description:
      'Motivated seller leads start hitting your pipeline within days. We monitor performance daily, cut what doesn\'t work, scale what does, and send you transparent reports on cost per lead and pipeline impact.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#f59e0b] text-xs uppercase tracking-widest font-semibold mb-4 block">
            The Process
          </span>
          <h2 className="font-bebas text-[clamp(2.8rem,5vw,5rem)] leading-none text-white mb-6">
            How It Works
          </h2>
          <p className="text-[#737373] max-w-xl mx-auto leading-relaxed">
            From your first conversation to a full pipeline — three steps, no fluff.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-px bg-[#1e1e1e]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-[#0a0a0a] p-10 group hover:bg-[#0f0f0f] transition-colors"
            >
              {/* Step number — large background */}
              <div className="font-bebas text-[7rem] leading-none text-[#141414] absolute top-6 right-6 select-none group-hover:text-[#1a1a1a] transition-colors">
                {step.number}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 border border-[#f59e0b]/30 bg-[#f59e0b]/5 text-[#f59e0b] rounded flex items-center justify-center mb-8 group-hover:border-[#f59e0b]/60 group-hover:bg-[#f59e0b]/10 transition-all">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-[#4a4a4a] text-xs uppercase tracking-widest font-semibold mb-2">
                  Step {step.number}
                </div>
                <h3 className="font-barlow text-3xl font-bold text-white mb-1 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#f59e0b] text-sm font-medium mb-4">
                  {step.subtitle}
                </p>
                <p className="text-[#737373] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Right arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 z-20 -translate-y-1/2">
                  <div className="w-12 h-px bg-[#f59e0b]/30" />
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-[#f59e0b]/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5l8 7-8 7V5z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-px bg-[#0f0f0f] border border-[#1e1e1e] border-t-0 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Most clients see their first leads within{' '}
              <span className="text-[#f59e0b]">7–14 days</span> of launch.
            </p>
            <p className="text-[#737373] text-sm">
              Ready to get started? Step 1 takes 30 minutes.
            </p>
          </div>
          <a
            href="#get-started"
            className="flex-shrink-0 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080808] font-bold px-8 py-3.5 rounded transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] whitespace-nowrap"
          >
            Book Your Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
