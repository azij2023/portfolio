import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    tag: "SUMMER INTERNSHIP",
    company: "Transmission Corporation of Andhra Pradesh Ltd (APTRANSCO) — State PSU",
    role: "Analytics & Optimization Intern",
    mode: "Onsite (Paid)",
    dates: "May 2026 - June 2026 (2 months)",
    projectTitle: "Security-Constrained Economic Dispatch Power Purchase Decision Support",
    categories: [
      "Data science",
      "Decision science",
      "Optimization",
      "Applied Science",
      "Forecasting",
      "Product",
      "Strategy",
      "Operation",
    ],
    bullets: [
      "Collaborated with operations leadership to diagnose power-procurement bottlenecks through stakeholder discussions; translated ambiguous scheduling challenges into an automated decision-support roadmap to replace manual spreadsheets",
      "Engineered an optimization and cost-forecasting model using Python and SQL to analyze dynamic spot-market pricing, grid load, and transmission constraints",
      "Built executive dashboards in React to track procurement KPIs and daily variances, contributing to up to a 20% reduction in overall power purchase costs",
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
    categories: ["Data science", "Applied Science", "ML", "Product"],
    details: [
      {
        heading: "Problem Discovery & System Architecture",
        body: "Designed Learning Agent to solve the challenge of self-guided learning with weak context and limited adaptive feedback by turning any topic and optional notes into a structured lesson, quiz, and remediation flow; built the system with React, FastAPI, and a LangGraph StateGraph to coordinate context gathering, validation, explanation, scoring, and retry logic in a modular, state-driven architecture.",
      },
      {
        heading: "Modelling & Impact",
        body: "Modelled the learning journey as an adaptive assessment loop that generates relevant context, explains concepts in beginner-friendly format, creates multiple-choice checks, and gives answer-by-answer feedback, while using a 70% threshold to trigger either progression or a simpler retry explanation; this improved retention and learning efficiency by helping users quickly identify knowledge gaps and revisit concepts through targeted, performance-based remediation.",
      },
      {
        heading: "Full-Stack Interface & Real-Time Tracking",
        body: "Developed a responsive full-stack interface with React + Vite and FastAPI that enables lesson generation, quiz attempts, progress tracking, and note export while keeping session state across requests for real-time monitoring of learner performance, checkpoint progress, and remediation status; the result is a polished, adaptive study platform with strong usability and continuous visibility into the learner’s understanding.",
      },
    ],
    bullets: [
      "Developed an LLM-based pedagogical agent using LangGraph and Python with structured checkpoint-verification workflows and Feynman-style explanations",
      "Achieved 90% question relevance and 95% scoring accuracy in evaluation",
    ],
    screenshots: [
      `${import.meta.env.BASE_URL}learning-agent-home.png`,
      `${import.meta.env.BASE_URL}learning-agent-lesson.png`,
    ],
    liveLink: "https://learning-agent-xi.vercel.app/",
    liveLinkText: "View Live Learning Agent Platform",
  },
];

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <article className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
        {exp.tag}
        <span className="rounded-full bg-white/10 px-3 py-1 font-medium normal-case tracking-normal text-slate-200">
          {exp.mode}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-slate-100 bg-slate-50/80 px-6 pb-1 pt-3 text-sm">
        <div className="flex min-w-0 flex-wrap items-center gap-x-10 gap-y-1">
          <span className="font-semibold text-slate-800">{exp.company}</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="font-semibold text-slate-900">{exp.role}</span>
        </div>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">{exp.dates}</span>
      </div>

      <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7">
        {exp.projectTitle && (
          <p className="-ml-1 mb-4 inline-block rounded-lg bg-blue-50 py-2 text-sm font-semibold leading-relaxed text-slate-800">
            {exp.projectTitle}
          </p>
        )}

        {exp.screenshots.length > 0 && (
          <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {exp.screenshots.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${exp.company} dashboard view ${index + 1}`}
                loading="lazy"
                className="h-64 w-full rounded-2xl border border-slate-200 bg-slate-100 object-cover object-top shadow-sm"
              />
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
          >
            View Details <span aria-hidden="true">→</span>
          </button>
          {exp.liveLink && (
            <a
              href={exp.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
            >
              {exp.liveLinkText || "View Live Dashboard"} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      {open &&
        createPortal(
          <div
            className="modal-backdrop fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/50 px-4 py-4 backdrop-blur-sm sm:py-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${exp.role} details`}
              className="modal-panel my-auto max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:max-h-[calc(100dvh-4rem)] sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-800">{exp.role}</h3>
                <button
                  type="button"
                  aria-label="Close experience details"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-xl text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                >
                  ×
                </button>
              </div>
              {exp.details ? (
                <div className="space-y-5">
                  {exp.details.map(({ heading, body }) => (
                    <section key={heading}>
                      <h4 className="mb-1 text-sm font-semibold text-slate-800">{heading}</h4>
                      <p className="text-sm leading-relaxed text-slate-600">{body}</p>
                    </section>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5 text-sm leading-relaxed text-slate-600">
                      <span className="absolute left-0 top-1 text-blue-700" aria-hidden="true">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
}

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [...new Set(experiences.flatMap((exp) => exp.categories))]
    .sort((a, b) => a.localeCompare(b));
  const filteredExperiences =
    activeCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.categories.includes(activeCategory));

  return (
    <section id="experience" className="section-reveal scroll-mt-20 bg-slate-100/70 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionTitle>Experience</SectionTitle>
        <div
          aria-label="Filter experience by category"
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border-blue-700 bg-blue-700 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredExperiences.map((exp) => (
          <ExperienceCard key={exp.company + exp.dates} exp={exp} />
        ))}
      </div>
    </section>
  );
}