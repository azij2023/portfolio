import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08 },
    );

    sections.forEach((section) => revealObserver.observe(section));

    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-800">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-[#dfeeff] px-5 py-3 text-sm font-semibold tracking-[0.02em] text-slate-900 shadow-[0_18px_35px_rgba(59,130,246,0.14)] transition-all hover:-translate-y-0.5 hover:bg-[#d1e8ff] focus-visible:outline-offset-4"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-base text-white">✦</span>
        Let&apos;s talk
      </a>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-slate-900 text-xl text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-700 focus-visible:outline-offset-4 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        ↑
      </button>
    </div>
  );
}
