import { useState } from "react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    category: "Tech",
    field: "Deep learning · Computer vision",
    title: "PostalVision | Postal OCR & Logistics Intelligence",
    description: "Developed a scratch-built CRNN-BiGRU-CTC postal OCR workflow with offline lookup of more than 19,000 Indian PIN records. Independent accuracy figures were not documented.",
    tools: ["PyTorch", "OpenCV", "Flask"],
    sampleUrl: "https://azij2023.github.io/PostVision/docs/",
    image: "postalvision-sample.png",
    imageAlt: "PostalVision sample interface showing five example envelopes",
  },
  {
    category: "Tech",
    field: "Machine learning · Banking",
    title: "ChurnZero | Bank Customer Churn Prediction",
    image: "project-images/tech-churnzero-preview.jpg",
    imageAlt: "ChurnZero concept front page with a customer data upload panel",
    description: "Analyzed churn risk with 114 engineered banking features and a LightGBM-XGBoost ensemble, using outreach costs to choose a decision threshold. Performance figures are reported in the competition deck.",
    tools: ["Python", "LightGBM", "XGBoost"],
  },
  {
    category: "Tech",
    field: "Machine learning · Digital engagement",
    title: "StreamMax | Viewer Fatigue Prediction",
    image: "project-images/tech-streammax-preview.jpg",
    imageAlt: "StreamMax concept front page with video thumbnails and a viewing pattern chart",
    description: "Modeled viewer fatigue from 8,000 labeled users. A three-model blend reached 0.8076 validation ROC-AUC and generated risk scores for 2,000 test users.",
    tools: ["Python", "scikit-learn", "LightGBM"],
  },
  {
    category: "Tech",
    field: "Machine learning · Marketing analytics",
    title: "E-Commerce Conversion Prediction",
    image: "project-images/tech-ecommerce-preview.jpg",
    imageAlt: "E-Commerce Conversion concept front page with product tiles and a funnel",
    description: "Engineered features across 13,000 labeled shopping sessions and tuned a logistic regression threshold to 0.568 out-of-fold F1, then generated 3,000 test predictions.",
    tools: ["Python", "scikit-learn", "Cross-validation"],
  },
  {
    category: "Tech",
    field: "Machine learning · Networks",
    title: "Network Congestion Prediction",
    image: "project-images/tech-network-congestion-preview.jpg",
    imageAlt: "Network Congestion Predictor concept front page with a network traffic map",
    description: "Team-built a three-class Random Forest predictor from 5,000 network telemetry records and 11 features. Project slides report 95% evaluation accuracy.",
    tools: ["Python", "Random Forest", "SMOTE"],
  },
  {
    category: "Tech",
    field: "AIOps · Explainability",
    title: "Explainable Network Failure Root-Cause Analysis",
    image: "project-images/tech-network-root-cause-preview.jpg",
    imageAlt: "Network Root Cause concept front page with a fault path diagram",
    description: "Designed a two-stage network failure and root-cause analysis concept using short-interval telemetry, with planned SHAP explanations and evaluation criteria.",
    tools: ["System design", "SHAP (planned)", "NetworkX (planned)"],
  },
  {
    category: "Tech",
    field: "Applied statistics · Regression",
    title: "Insurance Charges Prediction",
    image: "project-images/tech-insurance-preview.jpg",
    imageAlt: "Insurance Charges Analysis concept front page with a scatterplot",
    description: "Studied 1,338 insurance-charge records, screened outliers, compared linear and regularized regression models, and examined bias in high-cost predictions.",
    tools: ["Python", "Ridge/Lasso", "PCA"],
  },
  {
    category: "Tech",
    field: "Database systems · SQL",
    title: "Academic Portal | MySQL Database",
    image: "project-images/tech-academic-portal-preview.jpg",
    imageAlt: "Academic Portal concept front page with course and grade panels",
    description: "Co-developed a database for registration, grades, CGPA, and role-based approvals, including stored-procedure validation of a 24-credit limit.",
    tools: ["MySQL", "Stored procedures", "Database design"],
  },
  {
    category: "Tech",
    field: "Exploratory analysis · Consumer insights",
    title: "Insightify | Restaurant Data Analysis",
    image: "project-images/tech-insightify-preview.jpg",
    imageAlt: "Insightify concept front page with restaurants, map, and rating panels",
    description: "Cleaned restaurant pricing and rating data, compared location and service patterns, and found a near-zero cost-rating correlation in the analyzed data.",
    tools: ["Python", "Data cleaning", "EDA"],
  },
  {
    category: "Management",
    field: "Market research · Consumer behavior",
    title: "Decoding Consumer Choice",
    image: "project-images/consumer-choice.jpg",
    imageAlt: "Illustrative consumer comparing products and filling out a survey",
    description: "Co-conducted a 50-respondent Indian marketplace survey and ANOVA/regression analysis to identify the service factors associated with satisfaction and repeat purchase.",
    tools: ["Survey design", "ANOVA", "Regression"],
  },
  {
    category: "Management",
    field: "Sustainability · Procurement",
    title: "Supplier Sustainability Program",
    image: "project-images/supplier-sustainability.jpg",
    imageAlt: "Illustrative sustainable cooling equipment supply chain",
    description: "Co-developed a 36-month Scope 3 supplier strategy for a modeled one-million-AC supply chain, targeting about 34% lower emissions and projecting ₹132 per-unit material savings.",
    tools: ["Supplier scorecards", "Scenario modeling", "GHG accounting"],
  },
  {
    category: "Management",
    field: "Operations · Supply chain",
    title: "Cambridge Cooling Systems",
    image: "project-images/cooling-systems.jpg",
    imageAlt: "Illustrative air conditioner assembly line in a factory",
    description: "Co-evaluated Cambridge and Mexico production scenarios, calculated an approximately 833-unit break-even under assumed cost curves, and recommended a phased hybrid footprint.",
    tools: ["Cost-volume analysis", "Factor rating", "Operations strategy"],
  },
  {
    category: "Management",
    field: "Financial analytics · Strategy",
    title: "Investing Through Tariff Wars",
    image: "project-images/tariff-wars.jpg",
    imageAlt: "Illustrative global investment analysis desk with charts",
    description: "Analyzed 300+ global mutual funds and ETFs by tariff exposure and resilience, then proposed a 45/35/20 defensive, balanced, and opportunistic allocation framework.",
    tools: ["Financial EDA", "Regression", "Portfolio segmentation"],
  },
  {
    category: "Management",
    field: "Strategic management · AI governance",
    title: "Anduril Industries | AI-Driven Strategy",
    image: "project-images/anduril-strategy.jpg",
    imageAlt: "Illustrative aerospace research workspace with an unmanned aircraft model",
    description: "Co-authored an industry and company assessment using PESTLE and Porter's Five Forces, with an Adopt-Scale-Lead AI roadmap and governance recommendations.",
    tools: ["PESTLE", "Five Forces", "AI strategy"],
  },
  {
    category: "Management",
    field: "Managerial economics · Policy",
    title: "GST Reform in India",
    image: "project-images/gst-reform.jpg",
    imageAlt: "Illustrative tax analysis desk with receipts and supply-demand curves",
    description: "Modeled four illustrative GST tax-incidence scenarios to compare how demand and supply elasticities affect affordability, revenue, and deadweight loss.",
    tools: ["Tax incidence", "Elasticity", "Scenario analysis"],
  },
];

function ProjectCard({ project }) {
  const projectImage = (
    <img
      src={`${import.meta.env.BASE_URL}${project.image}`}
      alt={project.imageAlt}
      loading="lazy"
      decoding="async"
      className="aspect-[1.93] w-full border-b border-slate-200 object-cover object-top"
    />
  );

  return (
    <article className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex min-h-28 items-end bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-100">
          {project.field}
        </p>
      </div>
      <div>
        {project.sampleUrl ? (
          <a
            href={project.sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Explore ${project.title} original app sample (opens in a new tab)`}
            className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            {projectImage}
          </a>
        ) : projectImage}
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          {project.category} project
        </p>
        <h4 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h4>
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
        {project.sampleUrl && (
          <a
            href={project.sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-800 transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label={`Explore ${project.title} original app sample (opens in a new tab)`}
          >
            Explore original app sample <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectGroup({ category }) {
  const [expanded, setExpanded] = useState(false);
  const categoryProjects = projects.filter((project) => project.category === category);
  const visibleProjects = expanded ? categoryProjects : categoryProjects.slice(0, 2);
  const remaining = categoryProjects.length - 2;
  const listId = `projects-${category.toLowerCase()}`;

  return (
    <div className={category === "Management" ? "mt-12" : undefined}>
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          {category} projects
        </h3>
        <span className="text-sm font-medium text-slate-500">{categoryProjects.length} projects</span>
      </div>

      <div id={listId} className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 text-center">
          <button
            type="button"
            aria-controls={listId}
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
            className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50"
          >
            {expanded
              ? `Show fewer ${category.toLowerCase()} projects`
              : `Show more ${category.toLowerCase()} projects (${remaining})`}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-reveal px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Explore technical builds, analytics studies, and management case projects.">
          Projects
        </SectionTitle>
        <ProjectGroup category="Tech" />
        <ProjectGroup category="Management" />
      </div>
    </section>
  );
}
