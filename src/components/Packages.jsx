import { useEffect, useRef, useState } from "react";

const packages = [
  {
    name: "Web Development Starter",
    price: "$499",
    description: "A polished, responsive business website tailored for modern startups.",
    features: ["Responsive business website", "Up to 5 pages", "Basic SEO setup"],
    href: "https://softcloudlanka.online/#contact",
  },
  {
    name: "Web Development Pro",
    price: "$1,299",
    description: "A custom web application with deeper functionality and growth-focused analytics.",
    features: ["Custom web app", "Backend integration", "Advanced SEO + analytics"],
    featured: true,
    href: "https://softcloudlanka.online/#contact",
  },
  {
    name: "Cloud Solutions Basic",
    price: "$699",
    description: "Reliable cloud hosting setup designed for dependable deployment and scaling.",
    features: ["AWS or Azure hosting", "Scalable deployment", "Operational support"],
    href: "https://softcloudlanka.online/#contact",
  },
  {
    name: "Cybersecurity Audit",
    price: "$399",
    description: "A practical security assessment to uncover vulnerabilities and improve resilience.",
    features: ["Security assessment", "Vulnerability scanning", "Actionable recommendations"],
    href: "https://softcloudlanka.online/#contact",
  },
  {
    name: "Cloud Solutions Enterprise",
    price: "$2,499",
    description: "Complete migration and operational support for businesses needing a stronger foundation.",
    features: ["Full cloud migration", "Security hardening", "24/7 monitoring"],
    href: "https://softcloudlanka.online/#contact",
  },
  {
    name: "IT Consulting",
    price: "$199/session",
    description: "Focused 1-on-1 strategy support for technology planning and execution.",
    features: ["Technical strategy", "Tech stack guidance", "Implementation support"],
    href: "https://softcloudlanka.online/#contact",
  },
];

function Packages() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">Packages</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Clear packages for startups and growing teams.
        </h2>
        <p className="mt-5 text-lg text-slate-600">
          Each engagement is tailored to your goals, whether you need a polished online presence or a more secure digital foundation.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={pkg.name}
            className={`group rounded-3xl border p-6 shadow-lg transition duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl ${pkg.featured ? "border-cyan-300 bg-cyan-50" : "border-slate-200 bg-white"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {pkg.featured && (
              <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                Most Popular
              </span>
            )}
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{pkg.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pkg.description}</p>
            <p className="mt-6 text-3xl font-semibold text-cyan-700">{pkg.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={pkg.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-600 group-hover:text-white"
            >
              Get Started
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;