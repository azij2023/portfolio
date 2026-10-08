import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle description="An interdisciplinary academic foundation in analytics and management.">
          Education
        </SectionTitle>
        <article className="card-lift relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <span className="absolute inset-y-0 left-0 w-1.5 bg-blue-600" />
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
                Joint postgraduate programme
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Master&apos;s in Data Science &amp; Management
              </h3>
              <p className="mt-3 text-slate-600">
                Indian Institute of Technology Ropar <span className="text-slate-300">×</span>{" "}
                Indian Institute of Management Amritsar
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              In progress
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
