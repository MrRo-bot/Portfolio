import { useRef } from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import ProjectButton from "../UI/ProjectButton";

const Projects = ({
  projectEnter,
  projectLeave,
  scrollProgress,
}: {
  projectEnter: () => void;
  projectLeave: () => void;
  scrollProgress: MotionValue<number>;
}) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const projects: {
    title: string;
    description: string;
    skills: string[];
    src: string;
    poster: string;
    demoLink: string;
    githubLink: string;
  }[] = [
    {
      title: "Wetter Mobile",
      description: "React Native Expo based app for minimalist weather app. ",
      skills: [
        "expo",
        "expo-asset",
        "expo-location",
        "expo-notifications",
        "zustand",
        "tanstack/react-query",
        "nativewind",
        "tailwindcss",
        "react",
        "react-native",
        "typescript",
        "react-native-async-storage/async-storage",
        "react-native-community/netinfo",
        "react-native-community/datetimepicker",
        "react-native-gifted-charts",
        "react-native-image-colors",
        "react-native-paper",
        "react-native-reanimated",
        "react-native-svg",
      ],
      src: "./videos/Wetter_MOBILE.mp4",
      poster: "./videos/Wetter_MOBILE.png",
      githubLink: "https://github.com/MrRo-bot/Wetter_Mobile",
      demoLink: "https://github.com/MrRo-bot/Wetter_Mobile/releases/",
    },
    {
      title: "YouPipe",
      description:
        "YouTube Clone with Glassmorphism design and popular web technologies",
      skills: [
        "React.js",
        "TailwindCSS",
        "Express",
        "Node.js",
        "Motion",
        "Vite",
        "NPM",
        "Google Auth Library",
        "React Redux",
        "React Router",
        "React Virtuoso",
        "React Toastify",
        "React Loading Skeleton",
        "React Icons",
        "React OAuth Google",
      ],
      src: "./videos/YouPipe_DESKTOP.mp4",
      poster: "./videos/YouPipe_DESKTOP.png",
      githubLink: "https://github.com/MrRo-bot/YouPipe",
      demoLink: "https://youpipe-frontend.vercel.app/",
    },
    {
      title: "Despesa",
      description: "Money manager build with MERN stack",
      skills: [
        "React.js",
        "React Virtuoso",
        "React Toastify",
        "React Loading Skeleton",
        "React Number Format",
        "React Icons",
        "TailwindCSS",
        "MongoDB",
        "Express",
        "Node.js",
        "Apollo",
        "Chart.js",
        "DaisyUI",
        "Motion",
        "ReactRouter",
        "Vite",
        "NPM",
        "Firefox",
        "Passport.js Auth Library",
        "Nanoid",
        "Bcrypt",
      ],
      src: "./videos/Despesa_DESKTOP.mp4",
      poster: "./videos/Despesa_DESKTOP.png",
      githubLink: "https://github.com/MrRo-bot/Despesa",
      demoLink: "https://despesa-frontend.vercel.app/",
    },
    {
      title: "Mousike",
      description: "Spotify UI clone with neomorphism design ",
      skills: [
        "@fortawesome/react-fontawesome",
        "Nanoid",
        "React.js",
        "React Confetti",
        "React Loading Skeleton",
        "React Number Format",
        "spotify-web-api-js",
        "Immer",
        "Motion",
        "React Router",
        "TailwindCSS",
        "Vite",
      ],
      src: "./videos/Mousike_DESKTOP.mp4",
      poster: "./videos/Mousike_DESKTOP.png",
      githubLink: "https://github.com/MrRo-bot/Mousike",
      demoLink: "https://mousike.netlify.app/",
    },
    {
      title: "Wetter",
      description: "Weather app with minimal design ",
      skills: ["React", "TailwindCSS", "JavaScript", "ES6", "Vite", "NPM"],
      src: "./videos/Wetter_DESKTOP.mp4",
      poster: "./videos/Wetter_DESKTOP.png",
      githubLink: "https://github.com/MrRo-bot/Wetter",
      demoLink: "https://wetterforecast.netlify.app/",
    },
    {
      title: "The Dark Room Photography",
      description: "Basic portfolio website for a photography business",
      skills: ["HTML", "CSS", "JavaScript", "Jquery"],
      src: "./videos/Dark_Room_Photography_DESKTOP.mp4",
      poster: "./videos/Dark_Room_Photography_DESKTOP.png",
      githubLink: "https://github.com/MrRo-bot/The-Dark-Room-Photography",
      demoLink: "https://thedarkroomphotography.netlify.app/",
    },
  ];

  const handleMouseOver = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseOut = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.load();
    }
  };

  const translateY = useTransform(scrollProgress, [0.39, 0.4], [50, 0]);
  const translateValue = useTransform(
    translateY,
    (latest) => `translateY(${latest}px)`
  );

  const opacity = useTransform(scrollProgress, [0.39, 0.4], [0, 1]);

  const colorChange = useTransform(
    scrollProgress,
    [0.63, 0.67],
    ["#3331", "#c10007"]
  );

  return (
    <motion.section
      id="project"
      style={{ backgroundColor: colorChange }}
      className="px-5 lg:px-20 transition-colors duration-700 ease-in-out py-36"
    >
      <div className="w-[500px]">
        <h2>
          <motion.span
            style={{ transform: translateValue, opacity }}
            className="inline-block text-3xl lg:text-5xl transition-all duration-700 ease-in-out font-black text-sky-50 mr-2 sm:mr-4"
          >
            MY
          </motion.span>
          <motion.span
            style={{ transform: translateValue, opacity }}
            className="inline-block text-3xl lg:text-5xl transition-all duration-700 ease-in-out font-black text-red-700"
          >
            PROJECTS
          </motion.span>
        </h2>

        <motion.p
          style={{ opacity }}
          className="transition-opacity duration-500 ease-in-out text-sky-50/50 sm:tracking-widest font-roboto mt-4 w-7/12 sm:w-auto wrap-break-word sm:wrap-normal"
        >
          Here are a handful of projects. Move the mouse over the corresponding
          project.
        </motion.p>
      </div>
      <div className="mx-auto my-10 flex items-center justify-center flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={`${project.title}_${index}`}
            className="flex w-full flex-col lg:flex-row items-center justify-between gap-2 lg:gap-6"
          >
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl lg:text-4xl py-2 font-bold text-sky-50">
                {project.title}
              </h3>
              <p className="my-4 lg:text-xl text-sky-50/50 font-roboto">
                {project.description}
              </p>
              <h4 className="lg:text-lg py-2 font-semibold text-sky-50">
                DEVELOPMENT TOOLS
              </h4>
              <div className="py-2 font-light text-sky-100 flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <p
                    key={`${skill}_${skillIndex}`}
                    className="text-shadow-lg text-shadow-red-400/70 transition-all duration-500 hover:text-shadow-none focus:text-shadow-none hover:drop-shadow-[0_1px_6px_rgba(255,255,255,0.4)] focus:drop-shadow-[0_1px_6px_rgba(255,255,255,0.4)] text-sm lg:text-base px-1 lg:px-2 py-0.75 lg:py-1.5 rounded-full bg-red-600/50 border-1 border-solid border-sky-50/50"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 my-4">
                <ProjectButton
                  href={project.githubLink}
                  title={"View Project"}
                />
                <ProjectButton href={project.demoLink} title={"View Demo"} />
              </div>
            </div>
            <div
              className={`relative cursor-grab bg-no-repeat bg-top self-start bg-contain w-full lg:w-1/2 ${
                project.title === "Wetter Mobile"
                  ? "h-[250px] sm:h-[300px] lg:h-full"
                  : 'h-[200px] lg:h-[400px] bg-[url("/laptop.png")]'
              }`}
            >
              <video
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                preload="none"
                muted
                playsInline
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
                poster={project.poster}
                className={
                  project.title === "Wetter Mobile"
                    ? "absolute left-1/2 -translate-x-1/2 object-cover w-1/3 top-6 rounded-2xl"
                    : "absolute object-cover aspect-video top-2 sm:top-2.75 lg:top-5 left-1/2 -translate-x-1/2 w-[80%] h-[63%] sm:w-[78%] lg:w-[79.5%] sm:h-[83%] lg:h-[81%]"
                }
                key={`video_${index}`}
              >
                <source src={project.src} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
