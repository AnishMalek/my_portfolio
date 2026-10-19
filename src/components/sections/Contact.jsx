import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "../../styles/contact.css";



const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/anish_malek7/",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/AnishMalek",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
   href: "https://www.linkedin.com/in/anishmalek",
    icon: FaLinkedinIn,
  },
];

const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      {/* Grain */}
      <div className="contact-noise"></div>

      <div className="contact-wrapper">
        {/* Heading */}
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="contact-heading-muted">Let&apos;s build</span>{" "}
          <span className="contact-heading-accent">together.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Currently open for new opportunities and freelance projects.
          Whether you have a question or just want to say hi, I&apos;ll try
          my best to get back to you!
        </motion.p>

        {/* CTA */}
        <motion.a
          href="mailto:anishmalek6312@gmail.com"
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover="hover"
        >
          <span>Say Hello</span>
          <motion.span
            className="contact-cta-arrow"
            variants={{
              hover: { x: 5 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowRight size={18} strokeWidth={2} />
          </motion.span>
        </motion.a>

        {/* Social icons */}
        <motion.div
          className="contact-socials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={socialContainerVariants}
        >
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <motion.a
              key={name}
              href={href}
              className="contact-social-link"
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialItemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -3 }}
            >
              <Icon size={20} strokeWidth={1.8} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="contact-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          © 2026 Anish Malek. Built with React &amp; Bootstrap.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;