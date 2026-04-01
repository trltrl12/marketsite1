export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Strategy Call & Market Analysis',
      description:
        "We start by learning your business — your market, your deal model, your budget, and your goals. We analyze your local market, evaluate competitor ad strategies, and identify the highest-leverage targeting opportunities for your specific area. No cookie-cutter approach.",
    },
    {
      number: '02',
      title: 'Campaign Architecture & Setup',
      description:
        "We build your ad accounts, configure tracking, and set up your campaign structure across Meta and/or Google. This includes pixel installation, conversion tracking, audience setup, keyword research, and landing page configuration — everything needed to launch with a solid foundation.",
    },
    {
      number: '03',
      title: 'Ad Creative & Copy Development',
      description:
        "We write all ad copy and build all creative assets specifically for your market. Our ads speak directly to homeowners who need to sell quickly — using language, angles, and offers that consistently generate motivated seller responses. We test multiple variations from the start.",
    },
    {
      number: '04',
      title: 'Launch & Initial Optimization',
      description:
        "We launch your campaigns and monitor performance closely during the critical early phase. We analyze impression data, click behavior, and lead quality signals to make rapid adjustments that improve performance in the first weeks — so you're not sitting on a stale campaign waiting for results.",
    },
    {
      number: '05',
      title: 'Ongoing Management & Scaling',
      description:
        "Once campaigns are producing consistent results, we optimize for scale — increasing lead volume, reducing cost per lead, and expanding targeting into additional audiences or markets. We meet with you regularly to review performance, adjust strategy, and ensure your pipeline stays full.",
    },
    {
      number: '06',
      title: 'Reporting & Transparent ROI Tracking',
      description:
        "You get clear, no-nonsense reporting that shows you exactly what's working. We track cost per lead, lead volume, and pipeline impact so you always know what your ad spend is returning. We don't hide behind vanity metrics — we show you the numbers that matter to your business.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            How We Build and Manage Your<br className="hidden md:block" /> Paid Lead Generation System
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial strategy to ongoing campaign management, here's how we build a paid acquisition engine that consistently delivers motivated seller leads to your pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:shadow-md transition-shadow">
              <div className="text-6xl font-extrabold text-slate-100 leading-none mb-3 select-none">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Most clients see their first leads within the first 7-14 days of campaign launch. Ready to get started?
          </p>
          <a
            href="#hero"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            Start Your Strategy Call Today
          </a>
        </div>
      </div>
    </section>
  );
}
