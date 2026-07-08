import { CloudCog, Code2, Cpu, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Responsive, high-performance websites and applications designed for growth and clarity.",
  },
  {
    icon: CloudCog,
    title: "Cloud Solutions",
    description: "Reliable cloud architecture and deployment strategies that help operations scale smoothly.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Practical security reviews and protection strategies for modern digital businesses.",
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    description: "Clear strategy and implementation support for startups and small teams navigating technical choices.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">Services</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Technology support built for modern growth.
        </h2>
        <p className="mt-5 text-lg text-slate-600">
          Whether you need a polished launch, stronger cloud infrastructure, or a security review, the work is tailored around your goals.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;