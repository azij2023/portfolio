import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Academic work exploring data science, decision science, and applied machine learning.">
          Academic projects
        </SectionTitle>

        <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-14 text-center sm:px-10">
          <span
            aria-hidden="true"
            className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-700"
          >
            +
          </span>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            Academic projects coming soon
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-500">
            This space is reserved for academic projects. Internship work is
            presented separately in the experience section.
          </p>
        </div>
      </div>
    </section>
  );
}
