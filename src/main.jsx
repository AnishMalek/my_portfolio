import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import Lenis from "lenis";


const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    // Make Lenis accessible to other components
    window.lenis = lenis;

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);

      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);

      lenis.destroy();

      delete window.lenis;
    };
  }, []);

  return children;
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </React.StrictMode>
);