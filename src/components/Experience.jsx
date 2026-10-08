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
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-6 py-3 text-xs font-bold tracking-[0.12em] text-white">
        {exp.tag}
        <span className="rounded-full bg-white/10 px-3 py-1 font-medium tracking-normal text-slate-200">
          {exp.mode}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold text-blue-700">{exp.company}</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{exp.role}</h3>
          </div>
          <span className="shrink-0 text-sm font-medium text-slate-500">{exp.dates}</span>
        </div>
        <p className="mt-5 inline-block rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold leading-relaxed text-slate-800">
          {exp.projectTitle}
        </p>

        {exp.screenshots.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {exp.screenshots.map((src) => (
              <img
                key={src}
                src={src}
                alt={`${exp.company} screenshot`}
                loading="lazy"
                className="h-52 w-full rounded-xl border border-slate-200 object-cover object-top"
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            View Details
          </button>
          {exp.liveLink && (
            <a
              href={exp.liveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-700 hover:text-blue-700"
            >
              View Live Dashboard →
            </a>
          )}
        </div>
      </div>

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
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{exp.tag}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{exp.role}</h3>
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
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-reveal scroll-mt-20 bg-slate-100/70 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <SectionTitle description="Hands-on work applying analytics and AI to operational challenges.">
          Experience
        </SectionTitle>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company + exp.dates} exp={exp} />
        ))}
      </div>
    </section>
  );
}