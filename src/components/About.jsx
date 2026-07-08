import { BadgeCheck, BriefcaseBusiness } from "lucide-react";

const points = [
  {
    text: "Senior Software Developer at DcAnalytica since March 2020",
    link: "https://dcanalytica.site/",
  },
  { text: "Experienced across web development, cloud platforms, and cybersecurity" },
  { text: "Focused on helping founders launch dependable digital tools" },
  { text: "Passionate about turning complex ideas into simple, scalable digital products" },
  { text: "Bridges technical execution with business strategy for fast-moving startups" },
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">About the founder</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Building practical technology for ambitious teams.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            I’m Shifanth Jasim, and I help startups and small companies grow with modern technology that is secure, scalable, and easy to use.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My work focuses on building practical systems that help founders move faster, launch with confidence, and stay protected as their businesses grow. I combine hands-on development expertise with thoughtful strategy to create solutions that are not only powerful, but also dependable and easy to maintain.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether it is a modern website, a cloud-based platform, or a security-first foundation, I make sure every project is aligned with the real goals of the business and designed for long-term success.
          </p> 

          <div className="mt-8 space-y-3">
            {points.map((point) => (
              <div key={point.text} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <BadgeCheck size={18} className="mt-0.5 text-cyan-600" />
                {point.link ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-slate-700">{point.text}</span>
                    <a
                      href={point.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-100 hover:text-cyan-800"
                    >
                      Visit website
                    </a>
                  </div>
                ) : (
                  <p className="text-slate-700">{point.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-cyan-100/60">
          <div className="flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-2 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] sm:p-3">
            <img
              src="/shifanth.png"
              alt="Shifanth Jasim"
              className="w-full max-w-[20rem] rounded-[1.1rem] object-contain sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem]"
            />
          </div>

          <div className="mt-6 flex items-center gap-3 text-cyan-700">
            <BriefcaseBusiness size={20} />
            <span className="text-sm uppercase tracking-[0.25em]">Professional focus</span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Senior Software Developer</h3>
              <p className="mt-2 text-sm text-slate-600">Supporting digital transformation work for growing organizations since 2020.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Solo-tech startup</h3>
              <p className="mt-2 text-sm text-slate-600">Focused on clear communication, smart systems, and dependable delivery.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Sri Lanka based</h3>
              <p className="mt-2 text-sm text-slate-600">Working with founders locally and internationally to build reliable digital foundations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
