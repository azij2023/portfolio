import SectionTitle from "./SectionTitle";

const skills = [
  {
    title: "Data Science & ML",
    detail:
      "Python (PyTorch, scikit-learn, pandas, NumPy), R, SQL (MySQL), CNN/CRNN, XGBoost, LightGBM, Regression, EDA, SHAP",
  },
  {
    title: "Product & Management",
    detail:
      "Requirements Gathering, PRD & Roadmapping, Stakeholder Management, Process Analysis, KPI Monitoring, Risk Assessment",
  },
  {
    title: "Tools & Platforms",
    detail:
      "MS Office Suite (Excel, Word, PowerPoint), Power BI, Tableau, FastAPI, Flask, React, Git, GCP, AWS",
  },
  {
    title: "Languages & Interests",
    detail:
      "English, Hindi, Bengali | Stock Market Trading (Technical & Fundamental Analysis), Educational YouTube Content Creation",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-reveal scroll-mt-20 bg-slate-100/70 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Technical &amp; management skills</SectionTitle>
        <dl className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="grid gap-2 border-b border-slate-200 py-5 last:border-b-0 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6"
            >
              <dt className="font-semibold text-blue-900">{skill.title}</dt>
              <dd className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {skill.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
