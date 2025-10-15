import { motion, MotionValue, useTransform } from "motion/react";

const Hobbies = ({
  linkEnter,
  linkLeave,
  scrollProgress,
}: {
  linkEnter: () => void;
  linkLeave: () => void;
  scrollProgress: MotionValue<number>;
}) => {
  const music: { src: string; poster: string; name: string; type: string }[] = [
    {
      poster: "./music/Game_Launch.webp",
      src: "https://youtu.be/9dFY9W5OFzo",
      name: "Game Launch",
      type: "Dance",
    },
    {
      poster: "./music/Impuissant.webp",
      src: "https://youtu.be/_8-GU9fZht0",
      name: "Impuissant",
      type: "Hip-Hop",
    },
    {
      poster: "./music/Learning_Curve.webp",
      src: "https://youtu.be/KkKxuSDEJdo",
      name: "Learning Curve",
      type: "Lo-Fi",
    },
    {
      poster: "./music/Low_On_Fidelity.webp",
      src: "https://youtu.be/Strv_PtWG7M",
      name: "Low On Fidelity",
      type: "Lo-Fi",
    },
    {
      poster: "./music/Not_Alike.webp",
      src: "https://youtu.be/bV8bxGqmviE",
      name: "Not Alike",
      type: "Rap",
    },
    {
      poster: "./music/The_House_Of_The_Falling_Sun.webp",
      src: "https://youtu.be/irhduFFIFWI",
      name: "The House Of The Falling Sun",
      type: "Cover",
    },
  ];

  const translateY = useTransform(scrollProgress, [0.77, 0.78], [50, 0]);
  const translateValue = useTransform(
    translateY,
    (latest) => `translateY(${latest}px)`
  );

  const opacity = useTransform(scrollProgress, [0.77, 0.78], [0, 1]);

  return (
    <section id="hobby" className="bg-red-700 px-5 lg:px-20 py-36">
      <div className="w-[500px]">
        <h2>
          <motion.span
            style={{ transform: translateValue, opacity }}
            className="inline-block transition-all duration-700 ease-in-out text-3xl lg:text-5xl font-black text-sky-50 mr-4"
          >
            HOBBY
          </motion.span>
          <motion.span
            style={{ transform: translateValue, opacity }}
            className="inline-block transition-all duration-700 ease-in-out text-3xl lg:text-5xl font-black"
          >
            PROJECTS
          </motion.span>
        </h2>

        <motion.p
          style={{ opacity }}
          className="transition-all duration-500 ease-in-out text-sky-50/90 tracking-widest font-roboto mt-4 w-9/12 lg:w-auto"
        >
          Since job related projects always come first, there is often not much
          time left for my own hobbies. Here is a small selection.
        </motion.p>
      </div>
      <div className="mx-auto my-10 flex flex-col items-center justify-center border-t-3 border-sky-50 border-t-solid">
        {music.map((music, index) => (
          <a
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
            key={`${music}_${index}`}
            href={music.src}
            style={{}}
            className="group w-full py-8 px-2 lg:px-5 border-b-3 border-sky-50 border-b-solid"
          >
            <div className="relative z-0 flex justify-between flex-col lg:flex-row items-center text-sky-50">
              <h3 className="w-max mx-auto lg:w-1/2 text-2xl lg:text-4xl py-2 font-bold">
                {music.name}
              </h3>
              <span className="w-max lg:w-1/4 text-right font-light text-xl text-sky-50/80">
                {music.type}
              </span>
              <span className="w-max lg:w-1/4 text-right text-6xl">{"⇗"}</span>
              <div
                className={`absolute z-50 w-[336px] h-[188px] left-1/4 -rotate-20 opacity-0 transition-all duration-700 ease-in-out group-hover:rotate-20 group-hover:opacity-100 group-hover:left-1/2 group-focus:left-1/2 group-focus:rotate-20 group-focus:opacity-100`}
              >
                <img src={music.poster} alt="" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
