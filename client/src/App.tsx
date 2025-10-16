import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

import christian from "../public/assets/CHRISTIAN.png";
import me from "../public/assets/me.png";
import tech_stack from "../public/assets/tech stack.png";

import About from "./components/about";
import { Download } from "lucide-react";

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (section: string) => {
    setActiveNav(section);

    if (section === "About" && aboutRef.current) {
      // detect screen width
      const isMobile = window.innerWidth < 640; // Tailwind 'md' breakpoint
      const yOffset = isMobile ? -50 : 0; // apply offset only on mobile

      const y =
        aboutRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (section === "Home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect scroll position to auto-update activeNav
  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current?.offsetTop ?? 0;
      const scrollY = window.scrollY;

      if (scrollY >= aboutTop - window.innerHeight / 2) {
        setActiveNav("About");
      } else {
        setActiveNav("Home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.6; // after 60% of home
      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadClicked = () => {
    window.open(
      "https://drive.google.com/file/d/1Y40uQRb1OYH2Tw4s72fChAoluLo607RU/view?usp=sharing"
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
  };

  return (
    <>
      <motion.div
        /// <reference path="" />
        ref={homeRef}
        className="min-h-screen w-full p-5 pb-20 md:pb-5 bg-main flex flex-col justify-between overflow-x-hidden"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.img
            src={christian}
            alt="CHRISTIAN"
            className="w-full"
            initial={{ opacity: 0, y: -30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* <motion.div
            className={`w-full bg-active rounded-full mt-0 mb-5 flex justify-around p-2 text-sm md:w-1/2 md:text-md lg:text-xl text-main helvetica-bold shadow-lg z-50 ${
              isSticky
                ? "fixed top-4 left-1/2 -translate-x-1/2 md:w-[60%] lg:w-[40%]"
                : ""
            }`}
            initial="hidden"
            animate={!isLoaded ? "hidden" : isSticky ? "sticky" : "visible"}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 40 },
              sticky: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  className="group cursor-pointer relative"
                  onClick={() => handleNavClick(item)}
                  custom={i}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={navItemVariants}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <p
                    className={`relative transition-colors duration-300 ${
                      activeNav === item ? "text-main" : "text-main"
                    }`}
                  >
                    {item}
                    <motion.span
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[3px] bg-main rounded-full z-10"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeNav === item ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  </p>
                </motion.div>
              )
            )}
          </motion.div> */}

          <motion.div
            className={`bg-active flex justify-around p-2 text-sm md:text-md lg:text-xl text-main helvetica-bold shadow-lg z-50 transition-all duration-500
    ${
      isSticky
        ? // when sticky (scrolling)
          "fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[60%] lg:w-[40%] rounded-none md:rounded-full mt-0"
        : // when normal (home section)
          "w-full md:w-1/2 rounded-full mt-0 mb-3 md:mt-5"
    }`}
            initial="hidden"
            animate={!isLoaded ? "hidden" : isSticky ? "sticky" : "visible"}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 30 },
              sticky: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.div
                key={item}
                className="group cursor-pointer relative"
                onClick={() => handleNavClick(item)}
              >
                <p className="relative transition-colors duration-300 text-main">
                  {item}
                  <motion.span
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-2px] h-[3px] bg-main rounded-full z-10"
                    initial={{ width: 0 }}
                    animate={{
                      width: activeNav === item ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center md:hidden">
            <motion.img
              src={me}
              alt="ME"
              className="size-70 rounded-full border-solid border-2 border-active bg-white mt-7 mb-5"
              initial={{ opacity: 0, y: 0 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.1)",
              }}
            />
          </div>

          <motion.img
            src={me}
            alt="ME"
            className="hidden md:block md:absolute md:bottom-0 md:right-0 md:size-100 lg:size-125"
            initial={{ opacity: 0, x: 100 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.1)",
            }}
          />
        </motion.div>

        <motion.div className="mt-10" variants={slideInVariants}>
          <motion.p
            className="helvetica text-active text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I AM A
          </motion.p>
          <TypeAnimation
            sequence={["FULLSTACK DEVELOPER", 1000, "GRAPHIC DESIGNER", 1000]}
            wrapper="span"
            speed={50}
            className="bokis text-active text-4xl md:text-5xl lg:text-6xl tracking-wide block"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="border-solid border-2 border-active rounded-full w-48 h-12 flex justify-center items-center mt-5 hover:cursor-pointer group overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          {...scaleOnHover}
        >
          <motion.div
            className="absolute inset-0 bg-active opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            whileHover={{ opacity: 0.1 }}
          />
          <p
            className="helvetica-compressed text-active flex gap-3 text-xl relative z-10"
            onClick={downloadClicked}
          >
            <motion.div
              whileHover={{ rotate: 12 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Download className="text-active" />
            </motion.div>
            DOWNLOAD CV
          </p>
        </motion.div>

        <motion.img
          src={tech_stack}
          alt="TECH STACK"
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      {/* About Section */}
      <div ref={aboutRef}>
        <About isActive={activeNav === "About"} />
      </div>
    </>
  );
}

export default App;
