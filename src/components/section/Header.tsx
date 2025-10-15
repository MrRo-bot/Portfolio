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
      <div className="absolute flex justify-between items-center top-2 left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16 xl:left-20 xl:right-20 2xl:left-24 2xl:right-24">
        <motion.a
          style={{ opacity }}
          className="cursor-pointer pointer-events-auto transition-opacity duration-500 ease-in-out"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          href="https://chhavimani.vercel.app/"
        >
          <img
            className="size-16 sm:size-20 md:size-24 lg:size-28 xl:size-32 2xl:size-36 lg:mt-10"
            src="./icon.svg"
            alt=""
          />
        </motion.a>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="group pointer-events-auto transition-colors hover:bg-sky-50 focus:bg-sky-50 duration-700 before:content-[''] before:pointer-events-none before:inset-0 before:absolute before:animate-customPing before:rounded-full before:bg-sky-50/10 relative cursor-pointer p-3 lg:p-4 rounded-full bg-red-800 size-12 sm:size-14 md:size-16 lg:size-18"
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
