import { motion, MotionValue } from "motion/react";
import type { Dispatch, SetStateAction } from "react";

const Header = ({
  linkEnter,
  linkLeave,
  opacity,
  setIsOpen,
  isOpen,
}: {
  linkEnter: () => void;
  linkLeave: () => void;
  opacity: MotionValue<number>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <header
      id="#"
      className="w-full sticky left-0 top-0 right-0 bg-transparent z-[999999] pointer-events-none"
    >
      <div className="absolute flex justify-between items-center left-16 top-2 right-16">
        <motion.a
          style={{ opacity }}
          className="cursor-pointer relative pointer-events-auto transition-opacity duration-500 ease-in-out"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          href="#"
        >
          <img className="size-32 mt-10" src="./iconFull.svg" alt="" />
          <img
            className="absolute size-2 top-26.5 left-9"
            src="./eyes.svg"
            alt=""
          />
          <img
            className="absolute size-2 top-26.5 left-20"
            src="./eyes.svg"
            alt=""
          />
          <img
            src="./moustache.png"
            className="absolute h-28 w-32 top-21 -left-0.5"
            alt=""
          />
        </motion.a>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="group pointer-events-auto transition-colors hover:bg-sky-50 focus:bg-sky-50 duration-700 before:content-[''] before:pointer-events-none before:inset-0 before:absolute before:animate-customPing before:rounded-full before:bg-sky-50/10 relative cursor-pointer p-3 rounded-full bg-red-800 size-16"
        >
          <img
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
            className="invert-100 group-hover:invert-0 group-focus:invert-0 transition-colors duration-500"
            src="./menu.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
