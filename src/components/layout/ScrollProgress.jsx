import { motion, useScroll } from "framer-motion";

function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        origin-left
        z-[100]
        bg-cyan-400
      "

      style={{
        scaleX: scrollYProgress
      }}
    />
  );
}

export default ScrollProgress;