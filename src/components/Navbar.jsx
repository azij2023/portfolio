const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-wide text-blue-700">
          AZIJUR RAHAMAN
        </a>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-blue-700 hover:text-cyan-500 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
