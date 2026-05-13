import SectionTitle from "../components/layout/SectionTitle";
import certifications from "../data/Certifications";
import AnimatedSection from "../components/layout/AnimatedSection";

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Achievements"
          title="Certifications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

            <AnimatedSection
              key={index}
              delay={index * 0.08}
              className="
                group
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-sm
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="flex items-center justify-between mb-6">

                <span className="
                  px-4 py-2
                  rounded-full
                  bg-cyan-400/10
                  text-cyan-300
                  text-sm
                  border border-cyan-400/20
                ">
                  {cert.provider}
                </span>

              </div>

              <h3 className="text-3xl font-bold mb-3">
                {cert.name}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {cert.title}
              </p>

            </AnimatedSection>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;