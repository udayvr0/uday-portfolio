import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({
  children,
  className = "",
  delay = 0
}) {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });

  return (
    <motion.div
      ref={ref}

      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
        filter: "blur(10px)"
      }}

      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
        scale: isInView ? 1 : 0.97,
        filter: isInView
          ? "blur(0px)"
          : "blur(10px)"
      }}

      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}

      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;