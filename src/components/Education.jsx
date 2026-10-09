import SectionTitle from "./SectionTitle";

const education = [
  {
    degree: "M.S. in Data Science & Management",
    institute: "IIT Ropar & IIM Amritsar",
    score: "93%",
    years: "2025–2027",
  },
  {
    degree: "PG Diploma in Data Engineering",
    institute: "IIT Jodhpur",
    score: "71%",
    years: "2024–2025",
  },
  {
    degree: "M.Sc. in Mathematics",
    institute: "Aliah University",
    score: "79%",
    years: "2016–2018",
  },
  {
    degree: "Class XII · Science",
    institute: "WBCHSE",
    score: "81%",
    years: "2011–2013",
  },
  {
    degree: "Class X · General Studies",
    institute: "WBBSE",
    score: "85%",
    years: "2010–2011",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle description="Academic training across data science, engineering, mathematics, and management.">
          Education
        </SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <article
              key={item.degree}
              className={`card-lift relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${
                index === 0 ? "md:col-span-2 sm:p-8" : ""
              }`}
            >
              <span className="absolute inset-y-0 left-0 w-1.5 bg-blue-600" />
              <div className="flex flex-wrap items-start justify-between gap-4 pl-2">
                <div>
                  <h3 className="font-bold text-slate-900">{item.degree}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.institute}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {item.score}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.years}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
