import { motion } from "motion/react";
import "../../styles/header.css";

const Header = () => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      className="site-header"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <nav className="portfolio-navbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="portfolio-nav-link"
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;