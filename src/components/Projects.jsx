import { useState } from "react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Project One",
    blurb: "One-line description of the project.",
    details: [
      "Key point about what it does.",
      "Key point about tech/approach used.",
      "Key result or outcome.",
    ],
  },
  {
    title: "Project Two",
    blurb: "One-line description of the project.",
    details: [
      "Key point about what it does.",
      "Key point about tech/approach used.",
      "Key result or outcome.",
    ],
  },
  {
    title: "Project Three",
    blurb: "One-line description of the project.",
    details: [
      "Key point about what it does.",
      "Key point about tech/approach used.",
      "Key result or outcome.",
    ],
  },
];

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(null);
  const active = openIdx !== null ? projects[openIdx] : null;

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col">
              <h3 className="font-semibold text-slate-800 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm mb-4 flex-1">{p.blurb}</p>
              <button
                onClick={() => setOpenIdx(i)}
                className="self-start rounded-full bg-blue-700 text-white px-4 py-1.5 text-sm font-medium hover:bg-cyan-500 transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg text-slate-800">{active.title}</h3>
              <button onClick={() => setOpenIdx(null)} className="text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>
            <ul className="space-y-2">
              {active.details.map((d) => (
                <li key={d} className="text-slate-600 text-sm pl-5 relative">
                  <span className="absolute left-0 top-1 text-blue-700">▸</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
