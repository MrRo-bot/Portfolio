import { motion, MotionValue, useTransform } from "motion/react";
import MainButton from "../UI/MainButton";

const Hero = ({
  textEnter,
  textLeave,
  linkEnter,
  linkLeave,
  blurValue,
}: {
  textEnter: () => void;
  linkEnter: () => void;
  textLeave: () => void;
  linkLeave: () => void;
  blurValue: MotionValue<number>;
}) => {
  const blurFilter = useTransform(blurValue, (latest) => `blur(${latest}px)`);

  return (
    <section className="h-full lg:h-screen lg:justify-normal w-full flex-col lg:flex-row flex overflow-hidden">
      <div className="relative lg:w-1/2 mt-24 w-11/12 mx-auto">
        <div className="w-full h-full grid place-items-center">
          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.5,
              }}
              className="text-7xl font-black gap-4 flex flex-col lg:flex-row text-sky-50 overflow-hidden"
            >
              <span
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=""
              >
                HI , I AM
              </span>
              <span
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="animate-nameAnimation bg-top-left strokeClass bg-[url('/rotationRed.jpg')] bg-clip-text text-transparent"
              >
                CHHAVI
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                delay: 0.5,
              }}
              className="bg-red-700 p-1 box-decoration-clone outline-1 outline-dashed outline-sky-50 w-11/12 lg:w-max wrap-break-word"
            >
              <p className="mx-auto text-lg lg:text-2xl text-sky-50 font-light">
                REACT & NATIVE DEVELOPER | UI UX DEVELOPER |{" "}
                <span className="relative">
                  MUSIC
                  <img
                    className="absolute min-w-32 lg:min-w-36 -rotate-2 top-6 left-1/2 lg:-left-2"
                    src="./myHobby.svg"
                    alt=""
                  />
                </span>
              </p>
            </motion.div>

            <MainButton
              link="#about"
              text="find out more"
              linkEnter={linkEnter}
              linkLeave={linkLeave}
            />
          </div>
        </div>
        <pre className="hidden lg:block font-black font-roboto text-xs uppercase animate-pulse bottom-4 left-4 px-4 absolute size-max rounded-full bg-white text-center">{`Desktop View\nfor\nbest experience`}</pre>
      </div>
      <div className="lg:w-1/2 animate-glow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          className="flex justify-end h-full flex-col bg-[url('/circle.webp')] bg-no-repeat bg-cover"
        >
          <motion.img
            style={{ filter: blurFilter }}
            className="transition-all ease-in-out"
            src="./myImage.png"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
