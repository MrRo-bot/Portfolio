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
    <section className="h-screen w-full flex overflow-hidden">
      <div className="relative w-1/2">
        <div className="w-full h-full grid place-items-center">
          <div className=" flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.5,
              }}
              className="text-7xl font-black gap-4 flex text-sky-50 overflow-hidden"
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
              className="relative bg-red-700 p-1 box-decoration-clone outline-1 outline-dashed outline-sky-50"
            >
              <p className="w-max mx-auto text-2xl text-sky-50 font-light">
                REACT & NATIVE DEVELOPER | UI UX DEVELOPER | MUSIC
              </p>
              <img
                className="absolute w-44 -right-28 top-12 -rotate-2"
                src="./myHobby.svg"
                alt=""
              />
            </motion.div>

            <MainButton
              link="#about"
              text="find out more"
              linkEnter={linkEnter}
              linkLeave={linkLeave}
            />
          </div>
        </div>
        <pre className="font-black font-roboto uppercase animate-pulse bottom-4 left-4 absolute size-max p-4 rounded-full bg-white text-center">{`Desktop\nView\nonly`}</pre>
      </div>
      <div className="w-1/2 animate-glow">
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
