import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Security-Constrained Economic Dispatch",
    category: "Optimization",
    description:
      "A decision-support system for power procurement, combining optimization workflows with an operational dashboard.",
    image: `${import.meta.env.BASE_URL}sced-dashboard-1.png`,
    imageAlt: "Per-block power dispatch dashboard",
    tags: ["Python", "MILP", "MySQL", "React", "REST APIs"],
    details: [
      "Designed an optimization engine for cost-aware power procurement using Python and mixed-integer linear programming.",
      "Built a MySQL-backed data layer and a React dashboard with eight operational views.",
      "Added scheduled decision cycles and human-in-the-loop deficit alerts.",
    ],
    link: "https://lgb-sced-dashboard.vercel.app",
    linkLabel: "Open live dashboard",
  },
  {
    title: "Autonomous Learning Agent",
    category: "AI & machine learning",
    description:
      "An agentic learning workflow that uses checkpoint-based verification to adapt explanations to learner performance.",
    image: null,
    imageAlt: "",
    tags: ["Python", "LangGraph", "LangChain", "ChromaDB", "Groq API"],
    details: [
      "Built a stateful learning agent with document chunking, vector search, and dynamic web search.",
      "Added checkpoint tests that trigger simpler explanations when assessment scores fall below the defined bar.",
      "Evaluated question relevance and answer scoring as part of the learning workflow.",
    ],
    link: null,
    linkLabel: "",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (!activeProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeProject]);

  return (
    <section id="projects" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="A selection of applied work across decision science, optimization, and AI.">
          Selected projects
        </SectionTitle>

        <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === item
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-56 w-full border-b border-slate-100 object-cover object-top"
                />
              ) : (
                <div className="flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800">
                  <div aria-hidden="true" className="flex items-center gap-3 text-blue-100">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white/10 text-3xl">
                      ◉
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      Learn · Test · Adapt
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                  >
                    View case study <span aria-hidden="true">→</span>
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="modal-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="modal-panel max-h-full w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  {activeProject.category}
                </p>
                <h3 id="case-study-title" className="mt-2 text-2xl font-bold text-slate-900">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close case study"
                onClick={() => setActiveProject(null)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>
            <p className="mt-5 leading-relaxed text-slate-600">{activeProject.description}</p>
            <ul className="mt-6 space-y-4">
              {activeProject.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-0.5 text-blue-600" aria-hidden="true">↗</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Open live dashboard <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            )}
          </section>
        </div>
      )}
    </section>
  );
}
