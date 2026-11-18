import { useState } from "react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    category: "Tech",
    field: "Deep learning · Computer vision",
    title: "PostalVision | Postal OCR & Logistics Intelligence",
    description: "Developed a scratch-built CRNN-BiGRU-CTC postal OCR workflow with offline lookup of more than 19,000 Indian PIN records. Independent accuracy figures were not documented.",
    tools: ["PyTorch", "OpenCV", "Flask"],
  },
  {
    category: "Tech",
    field: "Machine learning · Banking",
    title: "ChurnZero | Bank Customer Churn Prediction",
    description: "Analyzed churn risk with 114 engineered banking features and a LightGBM-XGBoost ensemble, using outreach costs to choose a decision threshold. Performance figures are reported in the competition deck.",
    tools: ["Python", "LightGBM", "XGBoost"],
  },
  {
    category: "Tech",
    field: "Machine learning · Digital engagement",
    title: "StreamMax | Viewer Fatigue Prediction",
    description: "Modeled viewer fatigue from 8,000 labeled users. A three-model blend reached 0.8076 validation ROC-AUC and generated risk scores for 2,000 test users.",
    tools: ["Python", "scikit-learn", "LightGBM"],
  },
  {
    category: "Tech",
    field: "Machine learning · Marketing analytics",
    title: "E-Commerce Conversion Prediction",
    description: "Engineered features across 13,000 labeled shopping sessions and tuned a logistic regression threshold to 0.568 out-of-fold F1, then generated 3,000 test predictions.",
    tools: ["Python", "scikit-learn", "Cross-validation"],
  },
  {
    category: "Tech",
    field: "Machine learning · Networks",
    title: "Network Congestion Prediction",
    description: "Team-built a three-class Random Forest predictor from 5,000 network telemetry records and 11 features. Project slides report 95% evaluation accuracy.",
    tools: ["Python", "Random Forest", "SMOTE"],
  },
  {
    category: "Tech",
    field: "AIOps · Explainability",
    title: "Explainable Network Failure Root-Cause Analysis",
    description: "Designed a two-stage network failure and root-cause analysis concept using short-interval telemetry, with planned SHAP explanations and evaluation criteria.",
    tools: ["System design", "SHAP (planned)", "NetworkX (planned)"],
  },
  {
    category: "Tech",
    field: "Applied statistics · Regression",
    title: "Insurance Charges Prediction",
    description: "Studied 1,338 insurance-charge records, screened outliers, compared linear and regularized regression models, and examined bias in high-cost predictions.",
    tools: ["Python", "Ridge/Lasso", "PCA"],
  },
  {
    category: "Tech",
    field: "Database systems · SQL",
    title: "Academic Portal | MySQL Database",
    description: "Co-developed a database for registration, grades, CGPA, and role-based approvals, including stored-procedure validation of a 24-credit limit.",
    tools: ["MySQL", "Stored procedures", "Database design"],
  },
  {
    category: "Tech",
    field: "Exploratory analysis · Consumer insights",
    title: "Insightify | Restaurant Data Analysis",
    description: "Cleaned restaurant pricing and rating data, compared location and service patterns, and found a near-zero cost-rating correlation in the analyzed data.",
    tools: ["Python", "Data cleaning", "EDA"],
  },
  {
    category: "Management",
    field: "Market research · Consumer behavior",
    title: "Decoding Consumer Choice",
    description: "Co-conducted a 50-respondent Indian marketplace survey and ANOVA/regression analysis to identify the service factors associated with satisfaction and repeat purchase.",
    tools: ["Survey design", "ANOVA", "Regression"],
  },
  {
    category: "Management",
    field: "Sustainability · Procurement",
    title: "Supplier Sustainability Program",
    description: "Co-developed a 36-month Scope 3 supplier strategy for a modeled one-million-AC supply chain, targeting about 34% lower emissions and projecting ₹132 per-unit material savings.",
    tools: ["Supplier scorecards", "Scenario modeling", "GHG accounting"],
  },
  {
    category: "Management",
    field: "Operations · Supply chain",
    title: "Cambridge Cooling Systems",
    description: "Co-evaluated Cambridge and Mexico production scenarios, calculated an approximately 833-unit break-even under assumed cost curves, and recommended a phased hybrid footprint.",
    tools: ["Cost-volume analysis", "Factor rating", "Operations strategy"],
  },
  {
    category: "Management",
    field: "Financial analytics · Strategy",
    title: "Investing Through Tariff Wars",
    description: "Analyzed 300+ global mutual funds and ETFs by tariff exposure and resilience, then proposed a 45/35/20 defensive, balanced, and opportunistic allocation framework.",
    tools: ["Financial EDA", "Regression", "Portfolio segmentation"],
  },
  {
    category: "Management",
    field: "Strategic management · AI governance",
    title: "Anduril Industries | AI-Driven Strategy",
    description: "Co-authored an industry and company assessment using PESTLE and Porter's Five Forces, with an Adopt-Scale-Lead AI roadmap and governance recommendations.",
    tools: ["PESTLE", "Five Forces", "AI strategy"],
  },
  {
    category: "Management",
    field: "Managerial economics · Policy",
    title: "GST Reform in India",
    description: "Modeled four illustrative GST tax-incidence scenarios to compare how demand and supply elasticities affect affordability, revenue, and deadweight loss.",
    tools: ["Tax incidence", "Elasticity", "Scenario analysis"],
  },
];

const filters = ["All", "Tech", "Management"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  return (
    <section id="projects" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Explore technical builds, analytics studies, and management case projects.">
          Projects
        </SectionTitle>

        <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => {
            const count = filter === "All"
              ? projects.length
              : projects.filter((project) => project.category === filter).length;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? "border-blue-800 bg-blue-800 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {filter} <span className="ml-1 opacity-75">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex min-h-28 items-end bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-100">
                  {project.field}
                </p>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  {project.category} project
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and methods">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
