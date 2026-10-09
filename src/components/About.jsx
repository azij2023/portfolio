import SectionTitle from "./SectionTitle";

const strengths = [
  {
    number: "01",
    title: "Analytical thinking",
    text: "Statistics, machine learning, and optimization to frame complex problems clearly.",
  },
  {
    number: "02",
    title: "Decision-focused",
    text: "Connecting rigorous analysis with the operational and strategic decisions it supports.",
  },
  {
    number: "03",
    title: "Built to be useful",
    text: "Turning models and data workflows into tools people can understand and act on.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="A multidisciplinary foundation for solving practical, data-rich problems.">
          About me
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-lg leading-relaxed text-slate-600">
              I&apos;m pursuing a joint Master&apos;s in Data Science &amp;
              Management from <strong className="font-semibold text-slate-900">IIT Ropar</strong> and{" "}
              <strong className="font-semibold text-slate-900">IIM Amritsar</strong>. My work sits at
              the intersection of applied machine learning, operations research,
              and business strategy.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              I enjoy taking an ambiguous challenge, understanding the people
              and data behind it, and building an analytical solution that
              supports better decisions.
            </p>
          </div>

          <div className="grid gap-3">
            {strengths.map((item) => (
              <article
                key={item.number}
                className="card-lift flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="pt-0.5 font-mono text-sm font-bold text-blue-600">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
