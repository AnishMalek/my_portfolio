import { motion } from "motion/react";
import "../../styles/experience.css";

const Experience = () => {
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
  const experiences = [
    {
      date: "July 2026 - Present",
      title: "Full Stack Developer Intern",
      company: "BrainyBeam Technologies",
      description:
        "Working on modern full-stack web applications using the MERN stack, building responsive interfaces, developing backend APIs, and integrating databases.",
    },
    {
      date: "2026 - Present",
      title: "Student",
      company: "Kalol Institute of Management",
      description:
        "Pursuing Master of Computer Applications (MCA), developing strong knowledge of software development, web technologies, databases, and application development.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Heading */}
  <motion.h2
  className="experience-heading"
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.3,
  }}
>
  <motion.strong
    custom={0}
    variants={wordVariants}
  >
    Career Journey.
  </motion.strong>{" "}

  <motion.span
    custom={1}
    variants={wordVariants}
  >
    Where I've been.
  </motion.span>
</motion.h2>

        {/* Experience List */}
        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.div
              className="experience-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              {/* Date */}
              <div className="experience-date">
                {item.date}
              </div>

              {/* Details */}
              <div className="experience-details">
                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;