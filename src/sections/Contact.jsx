import SectionTitle from "../components/layout/SectionTitle";
import AnimatedSection from "../components/layout/AnimatedSection";

function Contact() {
    return (
        <section
            id="contact"
            className="py-32"
        >
            <div className="max-w-5xl mx-auto px-6">

                <SectionTitle
                    subtitle="Let's Connect"
                    title="Get In Touch"
                />

                <AnimatedSection>

                    <div className="
            relative
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-sm
            p-12
          ">

                        {/* Glow */}
                        <div className="
              absolute
              top-0
              right-0
              w-72
              h-72
              bg-cyan-500/10
              rounded-full
              blur-3xl
            " />

                        <div className="relative z-10">

                            <h3 className="text-4xl font-bold mb-6">
                                Let's Build Something Great
                            </h3>

                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                                Open to opportunities involving Azure integrations, Dynamics 365,
                                enterprise automation, cloud engineering, and AI-powered solutions.
                            </p>

                            {/* Contact Links */}

                            <div className="flex flex-wrap gap-6">

                                <a
                                    href="mailto:uday4vr@gmail.com?subject=Opportunity Discussion"
                                    className="
                                        px-6 py-3
                                        rounded-2xl
                                        bg-cyan-400
                                        text-black
                                        font-medium
                                        hover:scale-105
                                        transition
                                    "
                                >
                                    Email Me
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/uday-vr-775022218/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        px-6 py-3
                                        rounded-2xl
                                        border border-white/10
                                        hover:border-cyan-400
                                        hover:text-cyan-400
                                        transition
                                    "
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="https://github.com/udayvr0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        px-6 py-3
                                        rounded-2xl
                                        border border-white/10
                                        hover:border-cyan-400
                                        hover:text-cyan-400
                                        transition
                                    "
                                >
                                    GitHub
                                </a>

                            </div>

                        </div>

                    </div>

                </AnimatedSection>

            </div>
        </section>
    );
}

export default Contact;