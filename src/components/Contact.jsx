import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section-reveal scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle description="Have a role, collaboration, or interesting problem in mind? I’d be glad to hear from you.">
          Let&apos;s connect
        </SectionTitle>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-slate-900 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Get in touch
            </p>
            <h3 className="mt-4 text-2xl font-bold">Start a conversation.</h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              I&apos;m interested in data science, decision science, and
              analytics opportunities.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:azij2023@gmail.com"
                  className="font-medium text-white transition-colors hover:text-blue-300"
                >
                  azij2023@gmail.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Location
                </p>
                <p className="font-medium text-white">Kolkata, India</p>
              </div>
              <a
                href="https://www.linkedin.com/in/azijur-rahaman/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-white"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mdeaaqbq"
            method="POST"
            className="space-y-5 p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Your name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                />
              </label>
            </div>
            <label className="block text-sm font-semibold text-slate-700">
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a little about what you have in mind..."
                required
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Send message <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
