import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    tag: "SUMMER INTERNSHIP",
    company: "Transmission Corporation of Andhra Pradesh Ltd (APTRANSCO) — State PSU",
    role: "Data Science & Optimization Intern",
    mode: "Onsite (Paid)",
    dates: "May 2026 - June 2026 (2 months)",
    projectTitle: "Agentic Security-Constrained Economic Dispatch (SCED) Power Purchase Decision Support System",
    bullets: [
      "Stakeholder Discovery & System Architecture: Partnered with grid operations leadership to diagnose complex procurement bottlenecks from unstructured requirements; designed autonomous decision-support roadmap replacing legacy spreadsheet workflows",
      "Agentic Modelling & Impact: Built an optimisation engine (Python, MILP) that can modify forecasts of how much power to buy from which generators at minimum cost, with a MySQL-backed data layer; developed an agentic optimisation framework in Python running 15-minute scheduled cycles with human-in-the-loop deficit alerts; cutting power purchase costs by up to 20%",
      "Full-Stack Interface & Real-Time Tracking: Engineered an 8-tab React dashboard integrated via REST APIs, converting multi-file spreadsheet workflows into single-click optimal dispatch schedules with real-time deficit alerts",
    ],
    screenshots: [
      `${import.meta.env.BASE_URL}sced-dashboard-1.png`,
      `${import.meta.env.BASE_URL}sced-dashboard-2.png`,
    ],
    liveLink: "https://lgb-sced-dashboard.vercel.app",
  },
  {
    tag: "WINTER INTERNSHIP",
    company: "Infosys Springboard, India",
    role: "AI Agent Intern",
    mode: "Remote",
    dates: "Jan 2026 - Feb 2026 (2 months)",
    projectTitle: "Designing an Autonomous Learning Agent with Checkpoint Verification and Feynman Pedagogy",
    bullets: [
      "Architected a stateful autonomous learning agent in Python using LangGraph, LangChain, and ChromaDB; integrated Groq API with dynamic web search and document chunking for high-speed LLM inference across learning checkpoints",
      "Built automated tests with a 70% passing bar that trigger simple-language explanations when scores drop; achieved >80% question relevance, >90% scoring accuracy",
    ],
    screenshots: [],
    liveLink: null,
  },
];

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
    <article className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {exp.screenshots.length > 0 ? (
        <img
          src={exp.screenshots[0]}
          alt={`${exp.company} project dashboard`}
          loading="lazy"
          className="h-56 w-full border-b border-slate-100 object-cover object-top"
        />
      ) : (
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800">
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
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            {exp.tag}
          </p>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {exp.dates}
          </span>
        </div>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
          {exp.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600">{exp.company}</p>
        <p className="mt-4 leading-relaxed text-slate-600">{exp.projectTitle}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {exp.mode}
          </span>
          {exp.screenshots.length > 1 && (
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              Dashboard
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
          >
            View experience details <span aria-hidden="true">→</span>
          </button>
          {exp.liveLink && (
            <a
              href={exp.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
            >
              Open live dashboard <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

    </article>

      {open && (
        <div
          className="modal-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${exp.role} details`}
            className="modal-panel max-h-full w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                  {exp.tag} · {exp.dates}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{exp.role}</h3>
                <p className="mt-1 text-sm text-slate-500">{exp.company}</p>
              </div>
              <button
                type="button"
                aria-label="Close experience details"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>
            {exp.screenshots.length > 1 && (
              <div className="mb-6 grid grid-cols-2 gap-3">
                {exp.screenshots.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${exp.company} dashboard view ${index + 1}`}
                    loading="lazy"
                    className="h-36 w-full rounded-xl border border-slate-200 object-cover object-top"
                  />
                ))}
              </div>
            )}
            <ul className="space-y-4">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-0.5 text-blue-700" aria-hidden="true">↗</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-reveal scroll-mt-20 bg-slate-100/70 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Hands-on work applying analytics and AI to operational challenges.">
          Experience
        </SectionTitle>
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company + exp.dates} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}