import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (
    <button
      onClick={scrollToTop}

      className={`
        fixed
        bottom-8
        right-8
        z-50
        p-4
        rounded-full
        bg-cyan-400
        text-black
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110

        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;