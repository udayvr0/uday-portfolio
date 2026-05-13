import { motion } from "framer-motion";
import { useState, useRef } from "react";
import profileImage from "../assets/profile.jpg";

function Hero() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const hoverTimeout = useRef(null);

    const handleMouseEnter = () => {

        if (!isUnlocked) {

            hoverTimeout.current = setTimeout(() => {
                setIsUnlocked(true);
            }, 3000);

        }
    };

    const handleMouseLeave = () => {

        if (!isUnlocked && hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }

    };

    return (
        <section className="min-h-screen flex items-center pt-24">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >

                        <p className="text-cyan-400 mb-4 text-sm tracking-widest uppercase">
                            Software Engineer
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Building Intelligent
                            <span className="block text-cyan-400">
                                Enterprise Solutions
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                            Azure, Cloud Automation, REST APIs, Python & C#, AI-enhanced workflows,
                            Power Platform, Dynamics 365 and Power Platform, focused on scalable
                            enterprise systems.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">

                            <a
                                href="#projects"
                                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
                            >
                                View Projects
                            </a>

                            <a
                                href="/Uday_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/20 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
                            >
                                View Resume
                            </a>

                        </div>

                    </motion.div>
                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center"
                    >

                        {/* Glow */}
                        <div className="absolute w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl" />

                        {/* Image Card */}
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`group relative w-[250px] h-[330px] rounded-3xl
                                overflow-hidden border border-white/10 bg-white/5
                                backdrop-blur-sm shadow-2xl transition-all duration-700
                                ease-out ${isUnlocked ? "scale-105" : "hover:scale-105"} `}
                        >

                            <img
                                src={profileImage}
                                alt="Profile"
                                className={`
                                        w-full
                                        h-full
                                        object-cover
                                        transition-all
                                        duration-700
                                        ease-out
                                        ${isUnlocked
                                        ? ""
                                        : "grayscale group-hover:grayscale-0"
                                    }
`}
                            />

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Hero;