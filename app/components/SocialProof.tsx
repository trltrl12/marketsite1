const stats = [
  { value: '$12M+', label: 'Ad Spend Managed' },
  { value: '500+', label: 'Investors Served' },
  { value: '47', label: 'Markets Nationwide' },
  { value: 'Avg. $18', label: 'Cost Per Lead' },
];

const logos = [
  'Google Ads',
  'Meta Business',
  'Facebook Ads',
  'Instagram Ads',
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#0a0a0a] border-y border-[#1e1e1e] overflow-hidden">
      {/* Subtle gold gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1e1e1e]">
          {stats.map((stat, i) => (
            <div key={i} className="py-10 px-6 text-center group">
              <div className="stat-shimmer font-bebas text-5xl md:text-6xl mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-[#737373] text-xs uppercase tracking-widest font-medium group-hover:text-[#a3a3a3] transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="border-t border-[#1e1e1e] py-5 flex flex-wrap items-center justify-center gap-3">
          <span className="text-[#4a4a4a] text-xs uppercase tracking-widest mr-2">
            Certified Partners:
          </span>
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-[#222] bg-[#111] px-3 py-1.5 rounded text-[#737373] text-xs font-medium hover:border-[#f59e0b]/30 hover:text-[#a3a3a3] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/60" />
              {logo}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />
    </section>
  );
}
