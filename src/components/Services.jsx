import SectionTitle from "./SectionTitle";

const services = [
  { title: "Data Management", body: "Data cleaning, Data transformation, Data integration, Database management" },
  { title: "Statistical Modeling", body: "Regression analysis, ANOVA, Time series analysis, Bayesian statistics" },
  { title: "Machine Learning Techniques", body: "Supervised learning, Unsupervised learning, Reinforcement learning" },
  { title: "Optimization & Decision Science", body: "Linear programming, Integer programming, Simulation modeling" },
  { title: "Business Strategy & Consulting", body: "Market analysis, Competitive analysis, Strategic planning" },
  { title: "Project Management", body: "Agile methodologies, Risk management, Resource allocation" },
  { title: "Data Visualization & Reporting", body: "Dashboards, Interactive visualizations, Storytelling with data" },
  { title: "Research & Analysis", body: "Literature review, Data collection, Statistical analysis, Report writing" },
  { title: "Mentoring / Tutoring", body: "Personalized guidance, Skill development, Career counseling" },
  { title: "Web Development & APIs", body: "Frontend development, Backend development, RESTful APIs" },
  { title: "Domain Knowledge", body: "Finance, Healthcare, E-commerce, Marketing analytics" },
  { title: "Cloud Computing & Big Data", body: "AWS, Google Cloud, Hadoop" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Services</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center"
            >
              <h3 className="font-medium text-slate-700 mb-1">{s.title}</h3>
              <p className="text-slate-500 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}