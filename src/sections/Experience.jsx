import AnimatedSection from "@/components/layout/AnimatedSection";
import SectionTitle from "../components/layout/SectionTitle";
import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
          subtitle="Career Journey"
          title="Experience"
        />

        <div className="relative border-l border-white/10 ml-4">

          {experience.map((item, index) => (

            <AnimatedSection key={item.role} delay={index * 0.1} className=" bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 " >

              {/* Timeline Dot */}
              <div className="
                absolute
                -left-[52px]
                top-2
                w-5
                h-5
                rounded-full
                bg-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.8)]
              " />

              {/* Card */}
              <div className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-sm
                hover:border-cyan-400/40
                transition
              ">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.role}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-gray-500 mt-2 md:mt-0">
                    {item.duration}
                  </p>

                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {item.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        text-sm
                        rounded-full
                        bg-white/5
                        border border-white/10
                        text-cyan-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </AnimatedSection>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;