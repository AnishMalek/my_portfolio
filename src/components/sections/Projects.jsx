import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import projects from "../../data/projectsdetails.js";
import "../../styles/projects.css";

const Projects = () => {

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
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

  return (
    <section className="projects-section" id="projects">
      <div className="projects-noise"></div>

      {/* Heading */}
      <motion.div
  className="projects-heading"
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
      Selected Works.
    </motion.strong>{" "}

    <motion.span
      custom={1}
      variants={wordVariants}
    >
      Built with code.
    </motion.span>{" "}

    <motion.span
      custom={2}
      variants={wordVariants}
    >
      Designed with purpose.
    </motion.span>
  </h2>
</motion.div>

      {/* Cards Container */}
      <div className="container projects-container">
        <div className="row g-4 justify-content-center projects-grid">
          {projects.map((project, index) => (
            <div
              className="col-12 col-md-6 col-xl-4 project-column"
              key={project.id}
            >
              <motion.article
                className="project-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="project-card-top">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-date">
                    {project.date}
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-features">
                    {project.features.map((feature) => (
                      <div
                        className="project-feature"
                        key={feature}
                      >
                        <span className="feature-icon">
                          <Check size={14} strokeWidth={2.5} />
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;