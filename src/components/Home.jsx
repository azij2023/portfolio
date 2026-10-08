export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <img
          src="/profile.jpeg"
          alt="AZIJUR RAHAMAN"
          className="w-64 h-64 rounded-full object-cover border-4 border-blue-700 shadow-lg mx-auto mb-6"
        />
        <h1 className="font-mono text-cyan-500 text-2xl md:text-2x1 font-semibold">
          MS in Data Science and Management | IIT Ropar & IIM AMritsar | Fresher
        </h1>
        <p className="text-slate-500 mt-2">Seeking data-driven managerial roles</p>
        <p className="font-mono text-cyan-500 text-sm mt-1">Data Science • Decision Science • Strategy </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-blue-700 text-white px-6 py-2 font-medium hover:bg-cyan-500 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-4 flex justify-center gap-4 text-xl text-slate-700">
          <a href="https://www.linkedin.com/in/azijur-rahaman/" target="_blank" rel="noreferrer" className="hover:text-cyan-500">
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="hover:text-cyan-500">
            Email
          </a>
          <a href="https://github.com/azij2023" target="_blank" rel="noreferrer" className="hover:text-cyan-500">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}