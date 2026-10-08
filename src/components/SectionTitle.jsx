export default function SectionTitle({ children }) {
  return (
    <h2 className="relative text-center text-3xl font-semibold mb-12 text-cyan-600">
      {children}
      <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-20 h-1 rounded bg-blue-700" />
    </h2>
  );
}
