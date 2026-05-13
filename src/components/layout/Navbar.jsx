import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },

      {
        threshold: 0.4
      }

    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <button
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}
            className="
              text-xl
              font-bold
              tracking-wide
              hover:text-cyan-400
              transition
            "
          >
            Uday VR
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className={` transition hover:text-cyan-400 ${activeSection === "about" ? "text-cyan-400" : "text-gray-300"} `}>
              About
            </a>

            <a href="#skills" className={` transition hover:text-cyan-400 ${activeSection === "skills" ? "text-cyan-400" : "text-gray-300"} `}>
              Skills
            </a>

            <a href="#projects" className={` transition hover:text-cyan-400 ${activeSection === "projects" ? "text-cyan-400" : "text-gray-300"} `}>
              Projects
            </a>

            <a href="#contact" className={` transition hover:text-cyan-400 ${activeSection === "contact" ? "text-cyan-400" : "text-gray-300"} `}>
              Contact
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a href="https://github.com/udayvr0"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 hover:text-cyan-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/uday-vr-775022218/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-cyan-400 transition" />
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Menu */}

        {isMenuOpen && (

          <div className="
            md:hidden
            mt-4
            p-6
            flex
            flex-col
            gap-6
            rounded-2xl
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            shadow-2xl
            text-gray-300
            text-sm
          ">

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-cyan-400 transition hover:translate-x-1"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-cyan-400 transition hover:translate-x-1"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-cyan-400 transition hover:translate-x-1"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-cyan-400 transition hover:translate-x-1"
            >
              Contact
            </a>

          </div>

        )}
      </div>
    </nav>
  );
}

export default Navbar;