import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  const fonts = [
    "'Grotters', sans-serif",
    "'HelloTexas', sans-serif",
    "'Repetition Scrolling', sans-serif",
    '"Poppins", sans-serif',
  ];
  const [fontIndex, setFontIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const currentFont = fonts[fontIndex];

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#f74a2d]" />
          <div className="w-1 sm:h-48 h-[120px] red-gradient-2" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{ height: "1.3em" }}
          >
            Hi, I'm{" "}
            <span
              className="text-[#f74a2d]"
              style={{ fontFamily: currentFont }}
            >
              Rezab
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Full stack software developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
