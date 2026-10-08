import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>About me</SectionTitle>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-600 leading-relaxed">
          <p>
            Aspiring Applied ML Scientist and Data Scientist currently pursuing a Master’s in Data Science & Management jointly offered by 
IIT Ropar & IIM Amritsar. Skilled in statistics, linear algebra, optimization, data mining, machine learning etc with strong 
foundations in MySQL, databases and python. Passionate about bridging technical innovation with strategic management to deliver 
impactful, data-driven solutions. 
          </p>
        </div>
      </div>
    </section>
  );
}
