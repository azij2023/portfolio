export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>
          <span className="font-semibold text-slate-800">Azijur Rahaman</span>
          <span className="mx-2 text-slate-300">·</span>
          Data science &amp; decision science
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
