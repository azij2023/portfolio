import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle>Education</SectionTitle>
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="font-semibold text-slate-800">Degree — Field of Study</h3>
          <p className="text-slate-500 mt-1">Institution Name</p>
          <p className="text-slate-500">Start Year — End Year</p>
        </div>
      </div>
    </section>
  );
}
