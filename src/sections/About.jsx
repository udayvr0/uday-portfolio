import SectionTitle from "../components/layout/SectionTitle";
import calculateExperience from "../utils/calculateExperience";
const totalExperience = calculateExperience("2022-11-01");

function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Introduction"
          title="About Me"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Automation focused Cloud Developer with experience building
              scalable cloud-based applications, API-driven integrations, and
              automation workflows for large-scale enterprise clients.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Certified in Microsoft and Google Cloud technologies. Proven 
              expertise in API integrations, Cloud Automation & DevOps, with
              a strong focus on reliability and maintainability. Built AI-driven
              RAG applications using Azure OpenAI and LLMs, improving business
              process efficiency.
            </p>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                {totalExperience}
              </h3>

              <p className="text-gray-400">
                Of Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                10+
              </h3>

              <p className="text-gray-400">
                Certifications
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                Azure
              </h3>

              <p className="text-gray-400">
                Cloud Integrations
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                AI
              </h3>

              <p className="text-gray-400">
                Automation Focus
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;