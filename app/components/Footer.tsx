const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#results', label: 'Results' },
  { href: '#get-started', label: 'Get Started' },
];

const services = [
  'Google PPC Management',
  'Meta Ads (Facebook & Instagram)',
  'Landing Page + Funnel Build-Out',
  'Retargeting Campaigns',
  'Motivated Seller Lead Generation',
];

const investors = [
  'We Buy Houses Companies',
  'Real Estate Wholesalers',
  'Fix-and-Flip Investors',
  'Buy-and-Hold Investors',
  'Off-Market Acquisition Teams',
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1e1e1e]">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1a1a1a]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-barlow text-2xl font-bold tracking-widest text-[#f59e0b]">
                ELEVENTH
              </span>
              <span className="font-barlow text-2xl font-bold tracking-widest text-white">
                MEDIA
              </span>
            </div>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
              Paid lead generation for real estate investors. Meta Ads and Google PPC — built exclusively for we buy houses companies, wholesalers, and cash home buyers.
            </p>
            <p className="text-[#f59e0b] text-xs font-semibold uppercase tracking-widest">
              Results-obsessed. No fluff.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#4a4a4a] hover:text-[#f59e0b] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="text-[#4a4a4a] text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Who we serve */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-5">
              Who We Serve
            </h4>
            <ul className="space-y-3">
              {investors.map((s, i) => (
                <li key={i} className="text-[#4a4a4a] text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2a2a2a] text-sm">
            &copy; {new Date().getFullYear()} EleventhMedia. All rights reserved.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 border border-[#f59e0b]/30 text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#080808] font-bold text-sm px-6 py-2.5 rounded transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            Book a Free Strategy Call →
          </a>
        </div>
      </div>
    </footer>
  );
}
