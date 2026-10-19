import { motion } from "motion/react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";

import "../../styles/skills.css";

/* =========================
   DATA
   - "rows" locks in the exact pill groupings you asked for
     so they can never reflow/wrap unpredictably.
   - Add more cards/rows/techs here later without touching JSX.
========================= */

const skillStacks = [
  {
    id: 1,
    title: "FRONTEND",

    rows: [
      ["React", "JavaScript", "HTML"],
      ["CSS", "Bootstrap"],
      ["Framer Motion"],
    ],

    backgroundIcons: [SiReact, SiJavascript, SiHtml5, SiBootstrap],
  },

  {
    id: 2,
    title: "BACKEND",

    rows: [
      ["Node.js", "Express.js", "MongoDB"],
      ["Mongoose", "REST APIs"],
    ],

    backgroundIcons: [SiNodedotjs, SiExpress, SiMongodb, SiMongoose],
  },
];

const wordVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible: (index) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.4,
      delay: index * 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      {/* Grain */}
      <div className="skills-noise"></div>

      <div className="skills-wrapper">
        {/* Heading */}
       <motion.div
  className="skills-heading"
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.3,
  }}
>
  <h2>
    <motion.strong
      custom={0}
      variants={wordVariants}
    >
      Technical Arsenal.
    </motion.strong>{" "}

    <motion.span
      custom={1}
      variants={wordVariants}
    >
      Tools of the trade.
    </motion.span>
  </h2>
</motion.div>

        {/* Cards */}
        <div className="skills-grid">
          {skillStacks.map((stack, index) => (
            <motion.article
              className="skill-card"
              key={stack.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
            >
              {/* Background logos (decorative only) */}
              <div className="skill-background-icons" aria-hidden="true">
                {stack.backgroundIcons.map((Icon, iconIndex) => (
                  <Icon
                    key={iconIndex}
                    className={`skill-bg-icon skill-bg-icon-${iconIndex + 1}`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="skill-card-content">
                <h3>{stack.title}</h3>

                <div className="skill-technologies">
                  {stack.rows.map((row, rowIndex) => (
                    <div className="skill-row" key={rowIndex}>
                      {row.map((technology) => (
                        <span className="skill-pill" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;