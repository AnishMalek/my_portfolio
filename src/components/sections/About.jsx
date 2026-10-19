import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "../../styles/about.css";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 70%"],
  });

 const text =
  "With a deep passion for modern web technologies, I have built scalable applications, intuitive user interfaces, and high-performance backends. I focus on creating clean, responsive, and meaningful digital experiences that combine thoughtful design with powerful functionality"

  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="about-section"
      id="about"
    >
      <div className="about-container">

        {/* =========================
            ABOUT HEADING
        ========================= */}

        <motion.h2
          className="about-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          <motion.span
            custom={0}
            variants={wordVariants}
          >
            I am Anish,
          </motion.span>{" "}

          <motion.span
            custom={1}
            variants={wordVariants}
          >
            <em>a full stack developer.</em>
          </motion.span>{" "}

          <motion.span
            custom={2}
            variants={wordVariants}
          >
            I specialize in
          </motion.span>{" "}

          <motion.span
            custom={3}
            variants={wordVariants}
          >
            scalable architectures
          </motion.span>{" "}

          <motion.span
            custom={4}
            variants={wordVariants}
          >
            and immersive interfaces.
          </motion.span>
        </motion.h2>


        {/* =========================
            SCROLL REVEAL TEXT
        ========================= */}

        <div className="about-reveal-wrapper">
          <p className="about-reveal-text">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 0.15;

              return (
                <AboutWord
                  key={index}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
};


/* =========================
   HEADING ANIMATION
========================= */

const wordVariants = {
  hidden: {
    opacity: 0,
    x: -80,
  },

  visible: (index) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};


/* =========================
   SCROLL WORD
========================= */

const AboutWord = ({
  word,
  progress,
  start,
  end,
}) => {
  const color = useTransform(
    progress,
    [start, end],
    ["#666666", "#dedbc8"]
  );

  return (
    <motion.span
      className="about-word"
      style={{ color }}
    >
      {word}{" "}
    </motion.span>
  );
};


export default About;