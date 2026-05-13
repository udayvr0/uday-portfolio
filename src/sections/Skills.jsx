import AnimatedSection from "../components/layout/AnimatedSection";
import SectionTitle from "../components/layout/SectionTitle";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Technical Expertise"
          title="Skills & Technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <AnimatedSection key={skill.category} delay={index * 0.1} className=" bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 " >

              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (

                  <span
                    key={item}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-sm text-gray-300
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </AnimatedSection>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;