import { useEffect, useRef, useState } from "react";
import { motion, stagger, useScroll, useTransform } from "motion/react";

import Header from "./components/section/Header";
import Footer from "./components/section/Footer";
import ContactUs from "./components/section/ContactUs";
import Hobbies from "./components/section/Hobbies";
import Projects from "./components/section/Projects";
import About from "./components/section/About";
import Hero from "./components/section/Hero";
import { useDimensions } from "./utils/useDimensions";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
    },

    titleText: {
      width: 180 + "px",
      height: 180 + "px",
      x: mousePosition.x - 90,
      y: mousePosition.y - 90,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },

    project: {
      width: 80 + "px",
      height: 80 + "px",
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      color: "white",
      backgroundColor: "red",
      fontWeight: 800,
      fontSize: "1em",
      textAlign: "center",
      padding: "0.5em",
    },

    link: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      boxShadow: "0px 0px 0px 20px #ffffff50",
    },
  };

  const textEnter = () => setCursorVariant("titleText");
  const textLeave = () => setCursorVariant("default");

  const linkEnter = () => setCursorVariant("link");
  const linkLeave = () => setCursorVariant("default");

  const projectEnter = () => setCursorVariant("project");
  const projectLeave = () => setCursorVariant("default");

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 6, 50]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  const navVariants = {
    open: {
      opacity: 1,
      transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
      opacity: 0,
      transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
  };

  const navItemVariants = {
    open: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 50,
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.div
        className={`rounded-full size-3 grid place-items-center fixed pointer-events-none bg-sky-50 z-[9999999]`}
        variants={variants}
        animate={cursorVariant}
      >
        {cursorVariant === "project" ? `Wait & \n Watch` : ""}
      </motion.div>

      {isOpen && (
        <motion.nav
          className="fixed flex flex-col items-start justify-start sm:justify-center w-screen h-screen bg-black z-[99999] inset-0"
          initial="closed"
          animate="open"
          custom={height}
          ref={containerRef}
        >
          <motion.ul
            className="w-1/3 ml-[10%] mr-auto mt-24"
            variants={navVariants}
          >
            {["about", "project", "hobby", "contact"].map((i) => {
              return (
                <motion.li
                  onMouseEnter={linkEnter}
                  onMouseLeave={linkLeave}
                  className="before:absolute before:transition-transform before:duration-500 before:inset-0 before:delay-50 before:ease-in-out before:bg-red-700 before:-z-10 before:-translate-x-full hover:before:translate-x-0 overflow-hidden relative z-10 uppercase text-white font-black w-max cursor-pointer text-5xl sm:text-6xl text-left my-8 px-2 py-1"
                  variants={navItemVariants}
                  whileTap={{ scale: 0.95 }}
                  key={i}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <a href={`#${i}`}>{i}</a>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.nav>
      )}

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        opacity={opacity}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <main>
        <Hero
          blurValue={heroBlur}
          textEnter={textEnter}
          textLeave={textLeave}
          linkEnter={linkEnter}
          linkLeave={linkLeave}
        />
        <About
          scrollProgress={scrollYProgress}
          textEnter={textEnter}
          textLeave={textLeave}
          // linkEnter={linkEnter}
          // linkLeave={linkLeave}
        />
        <Projects
          scrollProgress={scrollYProgress}
          projectEnter={projectEnter}
          projectLeave={projectLeave}
        />
        <Hobbies
          scrollProgress={scrollYProgress}
          linkEnter={linkEnter}
          linkLeave={linkLeave}
        />
        {/* roadmap section */}
        {/* <section className="px-20 py-36">
          <div className="w-[500px]">
            <span className="text-5xl font-black text-sky-50 mr-4">MY</span>
            <span className="text-5xl font-black text-red-700">ROADMAP</span>
          </div>
        </section> */}
      </main>
      <ContactUs scrollProgress={scrollYProgress} />
      <Footer />
    </>
  );
};
export default App;
