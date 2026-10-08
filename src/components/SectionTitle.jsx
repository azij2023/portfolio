export default function SectionTitle({ children, description }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {children}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
          {description}
        </p>
      )}
      <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-blue-600" />
    </div>
  );
}
