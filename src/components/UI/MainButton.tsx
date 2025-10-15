import { motion } from "motion/react";
const MainButton = ({
  linkEnter,
  linkLeave,
  text,
  link,
}: {
  linkEnter: () => void;
  linkLeave: () => void;
  text: string;
  link: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
      }}
      className="mt-12 transition-all duration-500 ease-in-out w-max"
    >
      <a
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
        className="text-red-700 no-underline shadow-none"
        href={link}
        title={text}
      >
        <button className="group text-red-700 text-center transition-all duration-300 select-none whitespace-nowrap overflow-visible m-0 relative inline-block outline-none border-none align-middle no-underline p-0 w-56 h-auto bg-[#5555] rounded-3xl hover:drop-shadow-[0_1px_12px_rgba(255,255,255,0.4)] hover:bg-pink-400">
          <span
            className="transition-all duration-450 ease-in-out relative block m-0 size-12 bg-red-600 rounded-3xl group-hover:w-full"
            aria-hidden="true"
          >
            <span
              className="absolute top-0 bottom-0 m-auto transition-all duration-450 ease-in-out left-[.625rem] w-[1.125rem] h-[.125rem] bg-none 
            before:absolute before:content-[''] before:-top-1 before:-right-[0.0625rem] before:size-[0.625rem] before:border-t-[.125rem] before:border-t-solid before:border-t-sky-100 before:border-r-[.125rem] before:border-r-solid before:border-r-sky-100 before:rotate-45
            after:absolute after:content-['-'] after:text-sky-50 after:font-semibold after:scale-x-200 after:-top-2.5 after:-translate-x-full after:opacity-0 after:transition-all after:duration-500 after:delay-100 after:ease-in-out
            group-hover:left-4 group-hover:after:translate-x-0 group-hover:after:opacity-100
            "
            ></span>
          </span>
          <span className="transition-all duration-450 ease-in-out absolute inset-0 p-3 ml-[2.85rem] text-sky-50 font-medium text-center uppercase">
            {text}
          </span>
        </button>
      </a>{" "}
    </motion.div>
  );
};

export default MainButton;
