export default function PainPoints() {
  const pains = [
    {
      icon: '📉',
      problem: 'Inconsistent Lead Flow',
      description:
        'Some weeks your pipeline is full. Other weeks it runs dry. You can\'t scale a real estate business when your lead volume is unpredictable and tied to referrals or cold outreach.',
      solution: 'A properly managed paid ads system creates consistent, predictable lead volume you can count on every single month — regardless of market conditions.',
    },
    {
      icon: '🗑️',
      problem: 'Bad Lead Quality & Wasted Spend',
      description:
        'You\'ve tried running ads before and ended up with tire-kickers, people nowhere near your market, or leads that never answer the phone. Every bad lead is wasted time and money.',
      solution: 'We build campaigns with precise targeting, qualifying copy, and conversion-focused landing pages that filter out low-intent traffic before they ever hit your pipeline.',
    },
    {
      icon: '🔁',
      problem: 'Dependence on Lists, Cold Calling, or Referrals',
      description:
        'Driving for dollars, direct mail, and cold calling still work — but they don\'t scale and they don\'t compound. Your acquisition channel is only as good as your next batch of lists.',
      solution: 'Paid ads create an inbound channel where motivated sellers come to you. No dialing, no driving, no chasing. Sellers who are ready to talk fill out your form.',
    },
    {
      icon: '💸',
      problem: 'No Paid Acquisition System Built for Investors',
      description:
        'Generic marketing agencies don\'t understand your business. They don\'t know how to speak to motivated sellers, build offers that convert, or structure campaigns for your deal model.',
      solution: 'We exclusively work with real estate investor businesses. Every ad, every landing page, every campaign we build is designed around motivated seller acquisition — not clicks or impressions.',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">Stop Leaving Deals on the Table</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            If Any of These Sound Familiar,<br className="hidden md:block" /> You Need a Better Paid Acquisition System
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These are the problems we solve every day for "we buy houses" companies, wholesalers, and cash home buyers across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.problem}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 rounded-r-lg">
                <p className="text-blue-800 text-sm font-medium">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#hero"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            Fix Your Lead Flow — Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
