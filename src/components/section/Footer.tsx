const Footer = () => {
  const links: { name: string; link: string }[] = [
    { name: "linkedin", link: "https://www.linkedin.com/in/cm-ch/" },
    {
      name: "discord",
      link: "https://discordapp.com/users/434001308484239381",
    },
    { name: "github", link: "https://github.com/MrRo-bot/" },
    {
      name: "hackerrank",
      link: "https://www.hackerrank.com/profile/chhavimanichoub1",
    },
    { name: "tvtime", link: "https://tvtime.com/r/3e5vr" },
    {
      name: "youtube",
      link: "https://www.youtube.com/@chhavimanichoubey9437",
    },
  ];

  return (
    <>
      <footer className="py-3 lg:py-6 mt-6 lg:mt-12 overflow-hidden">
        <div className="w-[105%] my-4 lg:my-10 whitespace-nowrap overflow-hidden h-16 lg:h-32 bg-sky-50 transition-all duration-900 ease-in-out hover:invert-100 flex items-center rotate-z-3 -mx-5">
          {new Array(7).fill(0).map((_, index) => (
            <h3
              key={index}
              className="inline-block pl-12 indent-0 animate-marquee font-extrabold text-4xl lg:text-8xl uppercase text-sky-950 -mt-1.5"
            >
              JavaScript/TypeScript{" "}
              <span className="font-extrabold text-4xl lg:text-8xl text-sky-50 strokeClass2">
                — React.js —
              </span>{" "}
              {"Expo(Native)"}{" "}
              <span className="font-extrabold text-4xl lg:text-8xl text-sky-50 strokeClass2">
                — HTML / CSS —
              </span>{" "}
              TailwindCSS{" "}
              <span className="font-extrabold text-4xl lg:text-8xl text-sky-50 strokeClass2">
                — Node.js —
              </span>{" "}
              Tanstack{" "}
              <span className="font-extrabold text-4xl lg:text-8xl text-sky-50 strokeClass2">
                — Responsive design —
              </span>
            </h3>
          ))}
        </div>

        <div className="flex gap-4 lg:gap-6 mt-12 lg:mt-24 items-center justify-center">
          {links.map((link, index) => (
            <a
              key={`${link.name}_${index}`}
              href={link.link}
              className="group flex size-12 lg:size-14 transition-all duration-500 ease-in-out items-center justify-center rounded-full text-red-700 hover:text-sky-50 focus:text-sky-50 p-2 bg-red-700 hover:bg-black focus:bg-black hover:drop-shadow-[0_1px_12px_rgba(255,255,255,0.4)] focus:drop-shadow-[0_1px_12px_rgba(255,255,255,0.4)]"
            >
              <img
                className="w-full h-full group-hover:rotate-y-360 group-focus:rotate-y-360 transition-all duration-500 ease-in-out"
                src={"./logos/" + link.name + ".svg"}
                alt=""
              />
            </a>
          ))}
        </div>
        <p className="mt-4 lg:mt-6 text-sm lg:text-base flex items-center justify-center text-sky-50 font-medium">
          Developed with lot of{" "}
          <span className="text-xl lg:text-3xl hover:animate-bounce">💖</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
