import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Header from ".././layout/Header";
import "../../styles/hero.css";

const Hero = () => {
  const handleProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section" id="home">

      {/* Header */}
      <Header />

      {/* Video Frame */}
      <div className="hero-video-wrapper">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="container-fluid hero-container">
          <div className="row align-items-end h-100">

            {/* Name */}
            <div className="col-12 col-lg-8">
              <motion.div
                className="hero-name-wrapper"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                <h1 className="hero-name">
                  anish
                </h1>
              </motion.div>
            </div>

            {/* Intro */}
            <div className="col-12 col-lg-4">
              <motion.div
                className="hero-intro"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeOut",
                }}
              >
                <p>
                  I'm Anish, a Full Stack Developer and
                  Designer, who loves creating modern,
                  interactive and scalable digital experiences.
                </p>

                <motion.button
                  className="hero-project-btn"
                  onClick={handleProjects}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>View Projects</span>

                  <span className="hero-btn-icon">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                    />
                  </span>
                </motion.button>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;