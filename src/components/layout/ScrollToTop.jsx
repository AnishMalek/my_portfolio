import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import "../../styles/scroll-top.css";


const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.2,
      });
    }
  };


  return (
    <motion.button
      type="button"
      className="scroll-top-button"
      onClick={scrollToTop}
      aria-label="Scroll to top"

      initial={false}

      animate={{
        opacity: showButton ? 1 : 0,
        scale: showButton ? 1 : 0.8,
      }}

      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}

      style={{
        pointerEvents: showButton ? "auto" : "none",
      }}

      whileHover={{
        y: -4,
      }}

      whileTap={{
        scale: 0.9,
      }}
    >
      <ArrowUp
        size={20}
        strokeWidth={1.8}
      />
    </motion.button>
  );
};


export default ScrollToTop;