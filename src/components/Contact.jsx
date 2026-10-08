import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Contact</SectionTitle>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-2 text-slate-600">
            <p>Phone: +91 8759101001</p>
            <p>Email: azij2023@gmail.com</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/azijur-rahaman/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 hover:underline"
              >
                Explore My World
              </a>
            </p>
            <p>Location: Kolkata, India</p>
          </div>

          {/* Replace action with your own Formspree endpoint or backend */}
          <form action="https://formspree.io/f/mdeaaqbq" method="POST" className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-blue-700 text-white py-2 text-sm font-medium hover:bg-cyan-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
