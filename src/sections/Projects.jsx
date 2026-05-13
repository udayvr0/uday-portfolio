import AnimatedSection from "@/components/layout/AnimatedSection";
import SectionTitle from "../components/layout/SectionTitle";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <AnimatedSection key={project.title} delay={index * 0.1} className=" bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 " >

              {/* Hover Glow */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-cyan-500/5
              " />

              <div className="relative z-10">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.technologies.map((tech) => (

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

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="
                      px-5 py-2
                      rounded-xl
                      bg-cyan-400
                      text-black
                      font-medium
                      hover:scale-105
                      transition
                    "
                  >
                    {project.primaryButton}
                  </a>

                  <a
                    href={project.demo}
                    className="
                      px-5 py-2
                      rounded-xl
                      border border-white/10
                      hover:border-cyan-400
                      hover:text-cyan-400
                      transition
                    "
                  >
                    {project.secondaryButton}
                  </a>

                </div>

              </div>

            </AnimatedSection>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;