import SectionTitle from "./SectionTitle";

const skills = [
  {
    title: "Data Science & ML",
    items: [
      "Python (PyTorch, scikit-learn, pandas, NumPy)",
      "R",
      "SQL (MySQL)",
      "CNN/CRNN",
      "XGBoost",
      "LightGBM",
      "Regression",
      "EDA",
      "SHAP",
    ],
  },
  {
    title: "Product & Management",
    items: [
      "Requirements Gathering",
      "PRD & Roadmapping",
      "Stakeholder Management",
      "Process Analysis",
      "KPI Monitoring",
      "Risk Assessment",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "MS Office Suite (Excel, Word, PowerPoint)",
      "Power BI",
      "Tableau",
      "FastAPI",
      "Flask",
      "React",
      "Git",
      "GCP",
      "AWS",
    ],
  },
  {
    title: "Languages & Interests",
    items: [
      "English",
      "Hindi",
      "Bengali",
      "Stock Market Trading (Technical & Fundamental Analysis)",
      "Educational YouTube Content Creation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-reveal bg-slate-100/70 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="A practical toolkit spanning analytical methods, engineering, and communication.">
          Skills &amp; toolkit
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="card-lift rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{skill.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
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
