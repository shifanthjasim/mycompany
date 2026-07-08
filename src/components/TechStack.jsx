const stack = [
  { name: "AWS", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  { name: "React", color: "bg-sky-50 text-sky-700 border-sky-200" },
  { name: "Angular", color: "bg-rose-50 text-rose-700 border-rose-200" },
  { name: "JavaScript", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { name: "Node.js", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "MongoDB", color: "bg-lime-50 text-lime-700 border-lime-200" },
  { name: "Tailwind", color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Cybersecurity", color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
  { name: "DevOps", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "Docker", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Kubernetes", color: "bg-teal-50 text-teal-700 border-teal-200" },
  { name: "AI", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { name: "Machine Learning", color: "bg-orange-50 text-orange-700 border-orange-200" },
];

function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg shadow-slate-100 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">Tech Stack</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Building modern digital experiences with reliable tools.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            The stack is selected to balance speed, flexibility, security, and long-term maintainability.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((item, index) => (
            <span
              key={item.name}
              className={`tech-badge rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${item.color}`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;