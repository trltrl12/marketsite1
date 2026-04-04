import LeadForm from './LeadForm';

export default function LeadCapture() {
  return (
    <section id="get-started" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-1 absolute rounded-full opacity-[0.09]"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, #d97706 0%, transparent 65%)',
            top: '-300px',
            left: '-200px',
          }}
        />
        <div
          className="blob-2 absolute rounded-full opacity-[0.06]"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)',
            bottom: '-200px',
            right: '-100px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <span className="text-[#f59e0b] text-xs uppercase tracking-widest font-semibold mb-4 block">
              Get Started
            </span>
            <h2 className="font-bebas text-[clamp(3rem,5vw,5rem)] leading-none text-white mb-6">
              Ready to Fill{' '}
              <br />
              Your{' '}
              <span className="text-[#f59e0b]">Pipeline?</span>
            </h2>
            <p className="text-[#737373] leading-relaxed mb-10 max-w-md">
              Book your free 30-minute strategy call. We&rsquo;ll map out a custom Meta + Google
              acquisition plan for your market — no pitch, no pressure, just a clear picture
              of what&rsquo;s possible.
            </p>

            {/* What to expect */}
            <div className="space-y-4 mb-10">
              {[
                {
                  step: '01',
                  text: 'We review your market and current lead situation',
                },
                {
                  step: '02',
                  text: 'We outline a specific paid ad strategy for your business',
                },
                {
                  step: '03',
                  text: 'You leave with a clear, realistic picture of what\'s possible',
                },
                {
                  step: '04',
                  text: 'No high-pressure sales tactics — we either fit or we don\'t',
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="font-barlow text-sm font-bold text-[#f59e0b] min-w-[2rem]">
                    {item.step}
                  </span>
                  <span className="text-[#a3a3a3] text-sm leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                'No long-term contracts',
                'You own your ad accounts',
                'Real estate investors only',
                'Leads in 7–14 days',
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-[#1e1e1e] bg-[#0f0f0f] px-3 py-2.5 rounded text-xs text-[#737373]"
                >
                  <span className="text-[#f59e0b] font-bold">✓</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-[#1e1e1e] bg-[#0f0f0f] rounded-sm p-8">
            {/* Form header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                <span className="text-[#f59e0b] text-xs uppercase tracking-widest font-semibold">
                  Free Strategy Call
                </span>
              </div>
              <h3 className="font-barlow text-2xl font-bold text-white mb-1">
                Book Your 30-Minute Call
              </h3>
              <p className="text-[#737373] text-sm">
                Fill in your info and we&rsquo;ll open your calendar to pick a time.
              </p>
            </div>

            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
