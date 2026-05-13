import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";

function App() {
  return (
    <div className="relative overflow-hidden bg-[#0B0F19] min-h-screen">

      {/* BACKGROUND GLOWS

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" /> */}

      <ScrollProgress />
      <BackToTop />
      <BackgroundEffects />

      {/* CONTENT */}

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;