import { ArrowRight, CloudCog, ShieldCheck, Sparkles } from "lucide-react";

const highlights = ["Secure by default", "Cloud-ready", "Built to scale"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-50 px-3 py-1 text-sm text-cyan-700" style={{ animationDelay: "0.1s" }}>
            <Sparkles size={16} />
            Empowering businesses with modern technology
          </div>

          <h1 className="hero-fade-up mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.2s" }}>
            Practical software, cloud systems, and security-first growth.
          </h1>

          <p className="hero-fade-up mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl" style={{ animationDelay: "0.3s" }}>
            SoftCloud Lanka helps startups and growing companies launch dependable digital products with modern web development, cloud architecture, and cybersecurity support.
          </p>

          <div className="hero-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-500"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item, index) => (
              <span
                key={item}
                className="hero-fade-up rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                style={{ animationDelay: `${0.5 + index * 0.08}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hero-card-animate rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-100/70" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Systems online and monitored
              </span>
              <span className="font-semibold">24/7</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 text-cyan-700">
                  <CloudCog size={18} />
                  <span className="font-medium">Cloud Deployments</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Reliable hosting and architecture for fast-moving teams.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 text-emerald-700">
                  <ShieldCheck size={18} />
                  <span className="font-medium">Security Reviews</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Practical audits and protection strategies designed for real-world risks.</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Trusted stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'AWS', 'Docker', 'Tailwind', 'Cybersecurity'].map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
