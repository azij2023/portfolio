const focusAreas = [
  "Data science",
  "Decision science",
  "Optimization",
  "Applied Science",
  "ML",
  "Forecasting",
  "Product",
  "Strategy",
  "Operation",
];

const achievements = [
  {
    title: "National Winner · IIM Bangalore",
    detail:
      "Operation Case Competition — Sustainable Supply Chain Design for Scope 3 Emissions",
    date: "Aug '26",
  },
  {
    title: "1st Runner Up · IIM Calcutta",
    detail:
      "National Data Analytics Case Competition — Resilient Portfolio Risk Design",
    date: "Dec '25",
  },
  {
    title: "All India Rank 70 · AINCAT, Naukri Campus",
    detail:
      "Secured a top rank in the nationwide career aptitude assessment",
    date: "June '26",
  },
  {
    title: "Top 10%ile · Summer Analytics, IIT Guwahati",
    detail:
      "Certificate of Excellence in a 6-week Machine Learning program and hackathon by the Consulting & Analytics Club",
    date: "Jul '26",
  },
  {
    title: "National Finalist · IIT Madras",
    detail:
      "HR Analytics Case Competition — Inefficiencies in Tech Hiring",
    date: "Dec '25",
  },
  {
    title: "ISRO Internship Selection · VSSC",
    detail:
      "Selected for a Summer '26 internship; did not join due to commitment to APTRANSCO",
    date: "May '26",
  },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden px-5 pb-16 pt-16 sm:px-8 lg:min-h-screen"
    >
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
            Open to data-driven and managerial opportunities
          </p>
          <p className="mb-2 text-lg font-medium text-slate-500">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
            Azijur
            <br />
            <span className="text-blue-700">Rahaman.</span>
          </h1>
          <div className="mx-auto mt-5 max-w-lg rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 text-left shadow-sm lg:mx-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Currently pursuing
            </p>
            <p className="mt-1 text-sm font-bold text-slate-800">
              MS · Data Science &amp; Management
            </p>
            <p className="mt-1 text-sm text-slate-500">
              IIT Ropar <span className="text-slate-300">×</span> IIM Amritsar
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-500 lg:justify-start">
            <a
              href={`${import.meta.env.BASE_URL}Azijur%20Rahaman_Resume.pdf`}
              download="Azijur Rahaman_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 hover:shadow-sm"
            >
              <span aria-hidden="true">↓</span> Download résumé
            </a>
            <a
              href="https://www.linkedin.com/in/azijur-rahaman/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 hover:shadow-sm"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/azij2023"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 hover:shadow-sm"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="mailto:azij2023@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 hover:shadow-sm"
            >
              Email
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            I turn data, mathematical models, and thoughtful product design into
            practical decisions and measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:text-blue-700 hover:shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Achievements
          </h2>
          <ul className="mt-6 space-y-4">
            {achievements.map((achievement) => (
              <li
                key={achievement.title}
                className="card-lift rounded-2xl bg-slate-50 p-4"
              >
                <div className="flex flex-nowrap items-baseline justify-between gap-x-3">
                  <p className="min-w-0 text-sm font-bold text-slate-900">
                    {achievement.title}
                  </p>
                  <span className="shrink-0 text-xs font-medium text-blue-700">
                    {achievement.date}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {achievement.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
