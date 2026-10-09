import SectionTitle from "./SectionTitle";

const skills = [
  {
    title: "Analytics & techniques",
    body: "Time-series forecasting, Decision trees, Predictive modeling, A/B testing, Optimization",
  },
  {
    title: "Technical tools",
    body: "Python, scikit-learn, Power BI, Tableau, Excel, MySQL, Git, R, MATLAB, LaTeX",
  },
  {
    title: "Business competencies",
    body: "Structured problem solving, Stakeholder management, Metric validation & QA, Executive dashboards",
  },
  {
    title: "Languages",
    body: "English, Hindi, Bengali",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-reveal scroll-mt-20 bg-slate-100/70 px-5 py-24 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle description="A practical toolkit spanning analytical methods, engineering, and communication.">
          Skills &amp; toolkit
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <article
              key={s.title}
              className="card-lift rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.body.split(", ").map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
