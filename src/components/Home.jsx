const focusAreas = ["Data science", "Decision science", "Optimization"];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:min-h-screen"
    >
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
            Open to data-driven opportunities
          </p>
          <p className="mb-2 text-lg font-medium text-slate-500">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
            Azijur
            <br />
            <span className="text-blue-700">Rahaman.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            I turn data, mathematical models, and thoughtful product design into
            practical decisions and measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-600"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              <span aria-hidden="true">↓</span> Download résumé
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 text-sm font-medium text-slate-500 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/azijur-rahaman/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-blue-700"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a
              href="https://github.com/azij2023"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-blue-700"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a
              href="mailto:azij2023@gmail.com"
              className="transition-colors hover:text-blue-700"
            >
              Email
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-blue-200 to-cyan-100" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white bg-white p-3 shadow-2xl shadow-slate-900/15">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Portrait of Azijur Rahaman"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-center"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:-left-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Currently pursuing
            </p>
            <p className="mt-1 text-sm font-bold text-slate-800">MS · Data Science &amp; Management</p>
            <p className="mt-1 text-xs text-slate-500">IIT Ropar × IIM Amritsar</p>
          </div>
          <span
            aria-hidden="true"
            className="absolute -right-3 top-8 grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-xl text-white shadow-lg sm:-right-6"
          >
            ✳
          </span>
        </div>
      </div>
    </section>
  );
}
