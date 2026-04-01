export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          <div>
            <div className="text-white font-extrabold text-xl mb-3">
              <span className="text-amber-400">Eleventh</span>Media
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Paid lead generation for real estate investors. Meta Ads and Google PPC — exclusively for we buy houses companies, cash home buyers, and real estate investment businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Meta Ads (Facebook & Instagram)</li>
              <li>Google PPC & Search Ads</li>
              <li>PPC Landing Pages</li>
              <li>Retargeting Campaigns</li>
              <li>Paid Lead Generation Strategy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Who We Serve</h4>
            <ul className="space-y-2 text-sm">
              <li>We Buy Houses Companies</li>
              <li>Cash Home Buyers</li>
              <li>Real Estate Wholesalers</li>
              <li>Fix-and-Flip Investors</li>
              <li>Off-Market Acquisition Teams</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} EleventhMedia. All rights reserved.
          </p>
          <a
            href="#hero"
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </footer>
  );
}
