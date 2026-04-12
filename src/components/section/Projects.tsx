import { useRef } from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import ProjectButton from "../UI/ProjectButton";
import { projects } from "../../utils/constants";

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
    (latest) => `translateY(${latest}px)`,
  );

  const opacity = useTransform(scrollProgress, [0.39, 0.4], [0, 1]);

  const colorChange = useTransform(
    scrollProgress,
    [0.63, 0.67],
    ["#3331", "#c10007"],
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
              <p className="my-4 lg:text-xl text-sky-50/75 font-roboto">
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
            <div className={`relative cursor-grab w-full lg:w-1/2 h-max`}>
              {project.src ? (
                <video
                  onMouseEnter={projectEnter}
                  onMouseLeave={projectLeave}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  preload="metadata"
                  muted
                  playsInline
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                  poster={project.poster}
                  className="rounded-2xl mx-auto aspect-video"
                  key={`video_${index}`}
                >
                  <source src={project.src} type="video/mp4" />
                </video>
              ) : (
                <p className="text-center text-white text-6xl">
                  Project In Progress...
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
