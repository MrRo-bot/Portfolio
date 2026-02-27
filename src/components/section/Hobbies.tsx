import { motion, MotionValue, useTransform } from "motion/react";
import { music } from "../../utils/constants";

interface Hobbies {
  linkEnter: () => void;
  linkLeave: () => void;
  scrollProgress: MotionValue<number>;
}

const Hobbies = ({ linkEnter, linkLeave, scrollProgress }: Hobbies) => {
  const translateY = useTransform(scrollProgress, [0.77, 0.78], [50, 0]);
  const translateValue = useTransform(
    translateY,
    (latest) => `translateY(${latest}px)`,
  );

  const opacity = useTransform(scrollProgress, [0.77, 0.78], [0, 1]);

  return (
    <section id="hobby" className="bg-red-700 px-5 lg:px-20 py-36">
      <div className="w-[500px]">
        <h2>
          <motion.span
            style={{ transform: translateValue, opacity }}
            className="inline-block transition-all duration-700 ease-in-out text-3xl lg:text-5xl font-black text-sky-50 mr-2 sm:mr-4"
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
          className="transition-all duration-500 ease-in-out text-sky-50/90 sm:tracking-widest font-roboto mt-4 w-7/12 sm:w-auto wrap-break-word sm:wrap-normal" // "transition-all duration-500 ease-in-out text-sky-50/90 tracking-widest font-roboto mt-4 w-9/12 lg:w-auto"
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
              <h3 className="sm:w-max text-center sm:text-left mx-auto wrap-break-word lg:w-1/2 text-xl sm:text-2xl lg:text-4xl py-2 font-bold">
                {music.name}
              </h3>
              <span className="sm:w-max lg:w-1/4 text-right font-light text-xl text-sky-50/80">
                {music.type}
              </span>
              <span className="sm:w-max lg:w-1/4 text-right text-6xl">
                {"⇗"}
              </span>
              <div
                className={`absolute z-50 w-[336px] h-[188px] left-1/4 -rotate-20 opacity-0 transition-all duration-700 ease-in-out group-hover:rotate-20 group-hover:opacity-100 group-hover:left-1/2 group-focus:left-1/2 group-focus:rotate-20 group-focus:opacity-100`}
              >
                <img loading="lazy" src={music.poster} alt="" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
