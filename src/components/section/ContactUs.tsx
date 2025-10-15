import { useTransform, motion, MotionValue } from "motion/react";

const ContactUs = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const translateY = useTransform(scrollProgress, [0.93, 0.94], [50, 0]);
  const translateValue = useTransform(
    translateY,
    (latest) => `translateY(${latest}px)`
  );

  const opacity = useTransform(scrollProgress, [0.93, 0.94], [0, 1]);

  return (
    <section id="contact" className="px-20 py-16">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center mx-auto w-max">
          <h2>
            <motion.span
              style={{ transform: translateValue, opacity }}
              className="inline-block transition-all duration-700 ease-in-out text-5xl font-black text-sky-50 mr-2"
            >
              GET IN
            </motion.span>
            <motion.span
              style={{ transform: translateValue, opacity }}
              className="inline-block transition-all duration-700 ease-in-out text-5xl font-black text-red-700"
            >
              TOUCH
            </motion.span>
          </h2>

          <motion.p
            style={{ opacity }}
            className="transition-all duration-500 ease-in-out text-sky-50/90 tracking-widest font-roboto mt-6 whitespace-break-spaces text-lg"
          >
            For questions, suggestions or anything else, a mail is enough to
            contact me.
          </motion.p>

          <div className="mb-4 mt-12 text-sky-50 text-lg font-roboto tracking-wider">
            <div className="flex justify-center items-center gap-2 transition-colors duration-600 hover:text-red-700 focus:text-red-700 ">
              <img
                className="size-6 text-sky-50"
                src="./logos/mail.svg"
                alt=""
              />
              <a href="mailto:chhavimanichoubey@outlook.in">
                hello@chhavimanichoubey@outlook.in
              </a>
            </div>
            <div className="flex mt-2 justify-center items-center gap-2 transition-colors duration-600 hover:text-red-700 focus:text-red-700 ">
              <img
                className="size-6 text-sky-50"
                src="./logos/whatsapp.svg"
                alt=""
              />
              <a href="https://wa.me/7049649604">{"+91 7047649604"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
