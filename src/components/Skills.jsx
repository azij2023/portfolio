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
    <section id="skills" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
              <h3 className="font-semibold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
