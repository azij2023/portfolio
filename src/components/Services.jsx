import SectionTitle from "./SectionTitle";

const focusAreas = [
  {
    mark: "01",
    title: "Applied data science",
    body: "Exploratory analysis, statistical modeling, and machine learning for real-world questions.",
  },
  {
    mark: "02",
    title: "Decision science",
    body: "Translating business and operational challenges into measurable analytical problems.",
  },
  {
    mark: "03",
    title: "Optimization",
    body: "Mathematical programming and simulation to support resource-allocation decisions.",
  },
  {
    mark: "04",
    title: "AI-powered workflows",
    body: "Building agentic applications with retrieval, checkpoints, and human oversight.",
  },
  {
    mark: "05",
    title: "Data products",
    body: "Connecting data and models to dashboards and usable decision-support interfaces.",
  },
  {
    mark: "06",
    title: "Business analytics",
    body: "Bringing analytical findings into clear, stakeholder-focused recommendations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="The themes that bring my technical and management training together.">
          Areas of focus
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.mark}
              className="card-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="font-mono text-xs font-bold tracking-wider text-blue-600">
                {area.mark}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{area.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
