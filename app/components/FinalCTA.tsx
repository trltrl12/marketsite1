export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
          Last Chance — Don't Leave Without Booking Your Call
        </span>

        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">
          Stop Waiting for Deals<br />to Find You.
        </h2>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          If your deal flow is inconsistent, your lead quality is unreliable, or you're still relying entirely on cold outreach and referrals — you're leaving money on the table every single month. A properly managed paid acquisition system changes that.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          {[
            'More inbound seller leads',
            'More appointments booked',
            'More contracts closed',
          ].map((item, i) => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-xl py-4 px-3 text-sm font-semibold text-white">
              ✓ {item}
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 mb-10 max-w-xl mx-auto">
          <p className="text-white font-semibold text-lg mb-2">
            Here's exactly what happens when you book a call:
          </p>
          <div className="space-y-3 text-left mt-4">
            {[
              'We review your market and your current lead situation',
              'We outline a specific Meta and/or Google strategy for your business',
              'You leave with a clear picture of what\'s possible — no vague promises',
              'No high-pressure sales tactics. We either fit or we don\'t.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-amber-400 font-bold flex-shrink-0">{i + 1}.</span>
                <span className="text-slate-200 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#hero"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-12 py-5 rounded-2xl text-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-amber-900/30"
        >
          Book Your Free Strategy Call Now →
        </a>

        <p className="mt-5 text-slate-400 text-sm">
          Free. No commitment. 30 minutes. For real estate investors only.
        </p>
      </div>
    </section>
  );
}
