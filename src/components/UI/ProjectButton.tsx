const ProjectButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <a
      href={href}
      className="hover:shadow-[7px_2px_18px_15px_rgba(213,_4,_71,_0.72)] transition-all duration-500 ease-in-out focus:shadow-[7px_2px_18px_15px_rgba(213,_4,_71,_0.72)] px-4 lg:px-8 py-2 lg:py-4 border-solid border-1 border-sky-50 text-sky-50 hover:text-sky-200 hover:bg-red-600/20 focus:text-sky-200 focus:bg-red-600/20 font-roboto font-semibold rounded-2xl"
    >
      {title}
    </a>
  );
};

export default ProjectButton;
