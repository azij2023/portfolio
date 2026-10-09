import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Focus", "#services"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-extrabold tracking-[0.13em] text-slate-900 sm:text-base"
        >
          AZIJUR<span className="text-blue-600">.</span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        <div
          id="primary-navigation"
          className={`absolute inset-x-0 top-full border-b border-slate-200 bg-white px-5 py-4 shadow-lg md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
            {links.map(([label, href]) => {
              const section = href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    aria-current={activeSection === section ? "location" : undefined}
                    className={`block rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      activeSection === section
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 md:pt-0 md:pl-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-full bg-blue-100 px-5 py-2.5 text-center text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-200"
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
