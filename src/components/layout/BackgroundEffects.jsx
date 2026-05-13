import { motion } from "framer-motion";

function BackgroundEffects() {
    return (
        <div className="absolute inset-0 overflow-hidden">

            {/* TOP CYAN GLOW */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0]
                }}

                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}

                className="
          absolute
          top-[-200px]
          left-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
            />

            {/* PURPLE GLOW */}
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, 50, 0]
                }}

                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}

                className="
          absolute
          bottom-[-250px]
          right-[-150px]
          w-[550px]
          h-[550px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
            />

            {/* CENTER BLUE LIGHT */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}

                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}

                className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl"
            />

            {/* RADIAL OVERLAY */}
            <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]
      " />

        </div>
    );
}

export default BackgroundEffects;