import SectionTitle from "./SectionTitle";

const projects = [
  {
    domain: "Technical · IIT Ropar",
    title: "OTT Platform User Fatigue & Churn Prediction",
    description:
      "Performed customer cohort analysis and trained predictive models in Python to identify user-fatigue drivers and inform retention strategies.",
  },
  {
    domain: "Management · IIM Amritsar",
    title: "Strategic Analysis & AI Disruption Roadmap of Anduril Industries",
    description:
      "Evaluated competitive positioning using PESTLE and VRIO frameworks, then authored an AI governance and risk-mitigation roadmap.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Selected technical and management projects from my postgraduate studies.">
          Academic projects
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex h-36 items-end bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
                  {project.domain}
                </p>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  Academic project
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
