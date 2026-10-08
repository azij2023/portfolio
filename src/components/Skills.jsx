import SectionTitle from "./SectionTitle";

const skills = [
  { title: "Technical Tools", body: "SQL, Python, Power BI, Tableau, Excel, MySQL, Git, R, MLOps" },
  { title: "Machine Learning & AI", body: "Advanced statistics, ML algorithms, Deep Learning, NLP, Computer Vision" },
  { title: "Quantitative & Analytical Skills", body: "Statistical modeling, Data analysis, Predictive modeling, A/B testing" },
  { title: "Mathematical & Statistical Skills", body: "Linear algebra, Probability theory, Statistical inference, Hypothesis testing" },
  { title: "Operations Research & Optimization", body: "Linear programming, Integer programming, Network optimization, Simulation modeling" },
  { title: "Econometrics & Time Series Analysis", body: "Regression analysis, Time series forecasting, Panel data analysis, Econometric modeling" },
  { title: "Data Science & Cloud Platforms", body: "AWS, GCP, ETL, Data pipelines" },
  { title: "Optimization / Systems", body: "Supply chain optimization, Resource allocation, Decision support systems" },
  { title: "Web Development", body: "React, Vite, Tailwind CSS, HTML5, CSS3, JavaScript, RESTful APIs" },
  { title: "Soft Skills", body: "Problem Solving, Collaboration, Communication, Leadership, Adaptability" },
  { title: "Business Competencies", body: "Structured Problem Solving, Stakeholder Management, Metric Validation & QA, Executive Dashboards" },
  { title: "Additional Skills", body: "Data visualization, Business intelligence, Project management, Agile methodologies" },
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
