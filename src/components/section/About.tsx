import { motion, MotionValue, useScroll, useTransform } from "motion/react";
// import MainButton from "../UI/MainButton";
import { useRef } from "react";

const About = ({
  textEnter,
  textLeave,
  // linkEnter,
  // linkLeave,
  scrollProgress,
}: {
  textEnter: () => void;
  textLeave: () => void;
  // linkEnter: () => void;
  // linkLeave: () => void;
  scrollProgress: MotionValue<number>;
}) => {
  const logos: { [key: string]: string } = {
    JavaScript: "javascript.svg",
    HTML: "html.svg",
    CSS: "css.svg",
    TailwindCSS: "tailwindcss.svg",
    "VS Code": "vscode.svg",
    TypeScript: "typescript.svg",
    "Tanstack Query": "tanstack.svg",
    "React Router": "reactrouter.svg",
    Zustand: "zustand.svg",
    Figma: "figma.svg",
    Git: "git.svg",
    Vite: "vite.svg",
    "Express.js": "express.svg",
    Apollo: "apollo.svg",
    GitHub: "github_color.svg",
    GraphQL: "graphql.svg",
    MongoDB: "mongo.svg",
    MySQL: "mysql.svg",
    "Node.js": "nodejs.svg",
    npm: "npm.svg",
    Redux: "redux.svg",
    SASS: "sass.svg",
    "React.js": "react.svg",
    Expo: "expo.svg",
  };
  const targetRef = useRef(null);
  const { scrollYProgress: y1 } = useScroll({ target: targetRef });

  const bgProgress = useTransform(y1, [0, 0.25], ["100%", "0%"]);
  const bgProgress1 = useTransform(y1, [0.3, 0.45], ["100%", "0%"]);
  const bgProgress2 = useTransform(y1, [0.5, 0.65], ["100%", "0%"]);
  const bgProgress3 = useTransform(y1, [0.7, 0.85], ["100%", "0%"]);
  const translateY = useTransform(scrollProgress, [0.17, 0.19], [50, 0]);
  const opacity = useTransform(scrollProgress, [0.17, 0.19], [0, 1]);
  const skillOpacity = useTransform(scrollProgress, [0.32, 0.34], [0, 1]);
  const colorChange = useTransform(
    scrollProgress,
    [0.3, 0.33],
    ["#c10007", "#3331"]
  );

  return (
    <>
      {" "}
      <section id="about" ref={targetRef} className="w-full bg-red-700">
        <div className="pt-48 pb-64 px-5 lg:px-20">
          <div className="w-[1200px] mx-auto">
            <motion.div
              style={{
                backgroundPositionY: 0,
                backgroundPositionX: bgProgress,
              }}
              className="transition-all ease-in-out text-transparent bg-clip-text bg-scroll bg-size-[200%_100%] bg-repeat bg-linear-[to_right,_#fff_50%,_#252525_50%] text-[3rem] sm:text-[4rem] lg:text-[12rem] font-extrabold leading-[160px] lg:leading-[180px]"
            >
              CODING IS
            </motion.div>
            <motion.div
              style={{
                backgroundPositionY: 0,
                backgroundPositionX: bgProgress1,
              }}
              className="transition-all ease-in-out text-transparent bg-clip-text bg-scroll bg-size-[200%_100%] bg-repeat bg-linear-[to_right,_#fff_50%,_#252525_50%] text-[3rem] sm:text-[4rem] lg:text-[12rem] font-extrabold leading-[160px] lg:leading-[180px]"
            >
              MORE
            </motion.div>
            <motion.div
              style={{
                backgroundPositionY: 0,
                backgroundPositionX: bgProgress2,
              }}
              className="transition-all ease-in-out text-transparent bg-clip-text bg-scroll bg-size-[200%_100%] bg-repeat bg-linear-[to_right,_#fff_50%,_#252525_50%] text-[3rem] sm:text-[4rem] lg:text-[12rem] font-extrabold leading-[160px] lg:leading-[180px]"
            >
              THAN JUST
            </motion.div>
            <motion.div
              style={{
                backgroundPositionY: 0,
                backgroundPositionX: bgProgress3,
              }}
              className="transition-all ease-in-out text-transparent bg-clip-text bg-scroll bg-size-[200%_100%] bg-repeat bg-linear-[to_right,_#fff_50%,_#252525_50%] text-[3rem] sm:text-[4rem] lg:text-[12rem] font-extrabold leading-[160px] lg:leading-[180px]"
            >
              A JOB
            </motion.div>
            <motion.div
              style={{ translateY, opacity }}
              className="transition-all ease-in-out text-3xl lg:text-7xl mt-14 font-extrabold text-[#333]"
            >
              CODING IS PASSION
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        style={{ backgroundColor: colorChange }}
        className="w-full transition-colors duration-500 ease-in-out px-5 lg:px-20 pb-12"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-full lg:w-1/3 p-2.5">
            <div className="relative bg-cover lg:bg-fixed bg-[url('/beach.png')] min-h-[400px] lg:min-h-[770px] w-full bg-no-repeat lg:bg-size-[36%_auto] rounded-3xl lg:rounded-[50px] before:bg-[url('/noise-300x300.webp')] before:bg-no-repeat before:bg-contain before:bg-cover before:content-[''] before:inset-0 before:absolute" />
          </div>
          <div className="w-full lg:w-1/3 p-2.5 flex flex-col gap-5">
            <div className="w-full relative">
              <div className="lg:bg-fixed lg:bg-contain bg-cover bg-[url('/coding.png')] bg-center bg-no-repeat overflow-hidden rounded-4xl h-full">
                <img
                  src="/noise-300x300.webp"
                  className="w-full h-[375px]"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full relative">
              <div className="lg:bg-fixed lg:bg-contain bg-cover bg-[url('/music.png')] bg-center bg-no-repeat overflow-hidden rounded-4xl h-full">
                <img
                  src="/noise-300x300.webp"
                  className="w-full h-[375px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="lg:ml-10 lg:w-1/3 p-2.5 font-roboto flex flex-col gap-8 tracking-wider leading-7 text-sky-100/95"
          >
            <div>
              <p>
                Nice that you have found me. Here you can find everything about
                me and my work as a web and native developer. Feel free to
                contact me if you have any questions.
              </p>
            </div>
            <div>
              <p>
                I am very lucky that I was able to turn my hobby into a
                profession. I regularly create new challenges that can be solved
                with code. Sometimes the solution is simple, sometimes a bit
                more complicated, but never boring.
              </p>
            </div>
            <div>
              <p>
                I started my development journey roughly around 2019, where I
                started learning fundamentals of web i.e. HTML and CSS and after
                1 or 2 years I've set my foot in the world of JavaScript and
                through that I finally ended up in the realm of React.js
                TailwindCSS and React Native.
              </p>
            </div>
            <div>
              <p>
                I have created several small and not so small projects for
                practising my skills over the years, When I’m not programming,
                I’m busy with MUSIC, listening to several genres, watching TV
                Shows and Movies and passing time with my folks and friends.
              </p>
            </div>
          </div>
        </div>
        <motion.div style={{ opacity: skillOpacity }} className="w-full mt-24">
          <p className="mx-auto lg:w-max text-center p-2.5 font-roboto flex flex-col gap-8 tracking-wide text-lg lg:text-2xl leading-7 text-sky-100/95 w-3/4">
            Some tools and tech skills I dabble on
          </p>
          <div className="gap-6 my-6 mx-auto flex justify-center items-center flex-wrap">
            {Object.keys(logos).map((logo, index) => (
              <div
                key={`${logo}_${index}`}
                className="relative group inline-block"
              >
                <img
                  src={`./logos/${logos[logo]}`}
                  alt=""
                  className="max-w-14 max-h-14 object-contain rounded-lg transition-transform duration-400 group-hover:scale-105 group-hover:rotate-360 group-focus:scale-105 group-focus:rotate-360 group-active:scale-105 group-active:rotate-360"
                />

                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 group-active:scale-y-100 transition-transform duration-400 w-max max-w-xs bg-sky-50 text-red-700 text-sm rounded-lg font-bold px-3 py-2 shadow-lg">
                  {logo}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.25 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-sky-50 w-0 h-0"></div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mx-auto w-max">
            <MainButton
              link="#"
              text="my certifications"
              linkEnter={linkEnter}
              linkLeave={linkLeave}
            />
          </div> */}
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
