import { useState } from "react";
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
    screenshots: ["/sced-dashboard-1.png", "/sced-dashboard-2.png"],
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

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="bg-blue-900 text-white px-6 py-2 text-xs font-bold tracking-wide">
        {exp.tag}
      </div>
      <div className="bg-blue-50 px-6 py-2">
        <p className="font-semibold text-slate-800 text-sm">{exp.company}</p>
      </div>
      <div className="bg-blue-50/60 px-6 py-2 flex flex-wrap justify-between gap-2 text-sm font-medium text-slate-700">
        <span>{exp.role}</span>
        <span className="underline">{exp.mode}</span>
        <span className="underline">{exp.dates}</span>
      </div>

      <div className="p-6">
        <p className="inline-block bg-slate-200 font-semibold text-slate-800 px-2 py-1 text-sm mb-4">
          {exp.projectTitle}
        </p>

        {exp.screenshots.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {exp.screenshots.map((src) => (
              <img
                key={src}
                src={src}
                alt={`${exp.company} screenshot`}
                className="w-full h-64 object-cover rounded-xl border border-slate-200"
              />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-blue-700 text-white px-5 py-2 text-sm font-medium hover:bg-cyan-500 transition-colors"
          >
            View Details
          </button>
          {exp.liveLink && (
            <a
              href={exp.liveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-blue-700 text-blue-700 px-5 py-2 text-sm font-medium hover:bg-blue-700 hover:text-white transition-colors"
            >
              View Live Dashboard →
            </a>
          )}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg text-slate-800">{exp.role}</h3>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>
            <ul className="space-y-3">
              {exp.bullets.map((b) => (
                <li key={b} className="text-slate-600 text-sm pl-5 relative">
                  <span className="absolute left-0 top-1 text-blue-700">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <SectionTitle>Experience</SectionTitle>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company + exp.dates} exp={exp} />
        ))}
      </div>
    </section>
  );
}