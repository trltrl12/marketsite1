export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808] grid-bg"
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob-1 absolute rounded-full opacity-[0.12]"
          style={{
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, #d97706 0%, transparent 65%)',
            top: '-250px',
            right: '-200px',
          }}
        />
        <div
          className="blob-2 absolute rounded-full opacity-[0.07]"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)',
            bottom: '-100px',
            left: '-150px',
          }}
        />
        <div
          className="blob-3 absolute rounded-full opacity-[0.05]"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 65%)',
            top: '40%',
            left: '35%',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 border border-[#f59e0b]/30 bg-[#f59e0b]/5 text-[#f59e0b] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            Meta Ads + Google PPC — For Real Estate Investors Only
          </div>

          {/* Headline */}
          <h1 className="font-bebas text-[clamp(4rem,10vw,9rem)] leading-none tracking-wide text-white mb-6">
            We Fill Your{' '}
            <span className="text-[#f59e0b]">Pipeline</span>
            <br />
            With Motivated{' '}
            <span
              style={{
                WebkitTextStroke: '2px #f59e0b',
                color: 'transparent',
              }}
            >
              Sellers.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[#a3a3a3] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light">
            We build and manage high-performance{' '}
            <span className="text-white font-medium">Meta Ads</span> and{' '}
            <span className="text-white font-medium">Google PPC</span> campaigns
            exclusively for real estate investors, wholesalers, and house flippers
            — generating inbound motivated seller leads on demand.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <a
              href="#get-started"
              className="btn-pulse glow-gold inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080808] font-bold text-base px-8 py-4 rounded transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            >
              Book Your Free Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[#737373] hover:text-white text-sm font-medium transition-colors group"
            >
              <span>See how it works</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-6 border-t border-[#1e1e1e] pt-8">
            {[
              { icon: '✓', text: 'No long-term contracts' },
              { icon: '✓', text: 'Real estate investors only' },
              { icon: '✓', text: 'Leads in 7–14 days' },
              { icon: '✓', text: 'You own your ad accounts' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold text-sm">{item.icon}</span>
                <span className="text-[#737373] text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
