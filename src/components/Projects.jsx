import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Academic work exploring data science, decision science, and applied machine learning.">
          Academic projects
        </SectionTitle>

        <div className="mx-auto grid max-w-2xl gap-6">
          <article className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800">
              <div className="flex items-center gap-4 text-blue-100">
                <span
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white/10 text-3xl"
                >
                  +
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Academic work
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Academic project
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                Project details coming soon
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                This space is reserved for an academic project. Project
                overview, tools, and outcomes will be added here.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
