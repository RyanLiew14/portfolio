import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiExpress,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <motion.header
        className="py-6 bg-white dark:bg-gray-800 shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Ryan Liew
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Software Developer</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="flex flex-col md:flex-row gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-teal-700 p-1">
              <div className="h-full rounded-full overflow-hidden">
                <Image
                  src="/profile-picture.jpg"
                  alt="Profile Picture"
                  width={500} // Replace with the actual width of your image in pixels
                  height={500} // Replace with the actual height of your image in pixels
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col ml-12 gap-8">
            <div>
              <p className="font-mono text-teal-300">Hi, my name is</p>
              <p className="text-8xl font-sans font-extrabold text-slate-300 -ml-1">
                Ryan Liew
              </p>
              <p className="text-gray-800 dark:text-gray-400 mt-8">
                I am a Computer Science graduate with a passion for learning and
                a focus on software engineering. I am committed to delivering
                high-quality results and excel at adapting to new technologies.
                I am eager to contribute my skills, creativity, and
                determination to a team that values innovation and embraces new
                challenges.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="flex flex-col md:flex-row gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full flex flex-col ml-12 gap-8">
            <p className="text-center text-2xl font-sans font-extralight text-slate-300 -ml-1 mt-8 mb-12">
              A little more about me...
            </p>
          </div>
        </motion.section>

        <motion.section
          className="flex flex-col md:flex-row gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full flex flex-col ml-12 gap-8">
            <div>
              <p className="font-mono text-teal-300">
                I am a competitive powerlifter
              </p>
              <p className="text-gray-800 dark:text-gray-400 mt-8">
                As a competitive powerlifter, I bring the same level of
                dedication, discipline, and determination to my professional
                endeavors. The mindset of continuously pushing boundaries,
                setting and achieving goals, and overcoming obstacles translates
                into my work ethic, resilience, and ability to thrive in
                challenging environments. These qualities, coupled with my
                passion for learning and drive for success, make me a strong
                candidate for any job that requires focus, perseverance, and a
                results-oriented mindset.
              </p>

              <p className="font-mono text-slate-300 mt-4">Current PRs: </p>
              <p className="font-mono text-teal-300">Squat: 162.5kg/358lbs</p>
              <p className="font-mono text-teal-300">Bench: 105kg/231lbs</p>
              <p className="font-mono text-teal-300">
                Deadlift: 182.5kg/402lbs
              </p>
            </div>
          </div>
          <div>
            <div className="p-4">
              <Image
                src="/deadlift.jpeg"
                alt="Deadlift"
                width={1000} // Replace with the actual width of your image in pixels
                height={1000} // Replace with the actual height of your image in pixels
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="flex flex-col md:flex-row gap-8 mt-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <div className="p-4 ml-6">
              <Image
                src="/grad.jpg"
                alt="grad"
                width={500} // Replace with the actual width of your image in pixels
                height={500} // Replace with the actual height of your image in pixels
              />
            </div>
          </div>
          <div className="w-full flex flex-col ml-12 gap-8">
            <div>
              <p className="font-mono text-teal-300">
                I graduated at the University Of Calgary
              </p>
              <p className="text-gray-800 dark:text-gray-400 mt-8">
                I graduated from the University of Calgary with a &nbsp;
                <span className="font-semibold">
                  BSc of Science, Major in Computer Science with a concentration
                  in Software Engineering
                </span>
                , I humbly bring a strong academic background and a commitment
                to lifelong learning. This experience has instilled in me
                valuable skills such as critical thinking, adaptability, and a
                strong work ethic, which I believe make me a promising candidate
                for any job opportunity.
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-4">
              Skills and Expertise
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-row items-center">
                <SiReact size={48}></SiReact>{" "}
                <p className="font-extralight ml-2"> React</p>
              </div>

              <div className="flex flex-row items-center">
                <SiNextdotjs size={48}></SiNextdotjs>{" "}
                <p className="font-extralight ml-2"> NextJS</p>
              </div>

              <div className="flex flex-row items-center">
                <SiTypescript size={48}></SiTypescript>{" "}
                <p className="font-extralight ml-2"> TypeScript</p>
              </div>

              <div className="flex flex-row items-center">
                <SiJavascript size={48}></SiJavascript>{" "}
                <p className="font-extralight ml-2"> JavaScript</p>
              </div>
              <div className="flex flex-row items-center">
                <SiTailwindcss size={48}></SiTailwindcss>{" "}
                <p className="font-extralight ml-2"> Tailwind</p>
              </div>
              <div className="flex flex-row items-center">
                <SiMongodb size={48}></SiMongodb>{" "}
                <p className="font-extralight ml-2"> Mongodb</p>
              </div>
              <div className="flex flex-row items-center">
                <SiGraphql size={48}></SiGraphql>{" "}
                <p className="font-extralight ml-2"> GraphQL</p>
              </div>
              <div className="flex flex-row items-center">
                <SiNodedotjs size={48}></SiNodedotjs>{" "}
                <p className="font-extralight ml-2"> NodeJS</p>
              </div>
            </div>

            <p className="text-center font-extralight mt-4">
              Always eager and passionate to learn more!
            </p>
          </div>
        </motion.section>

        <section></section>

        <section>
          <span className="flex display gap-4 justify-center text-2xl font-bold mb-4 text-center">
            Portfolio <SiGithub size={32}></SiGithub>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-4 shadow-sm rounded-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Portfolio
              </h3>
              <p className="text-gray-800 dark:text-gray-300">
                Portfolio website
              </p>
              <div className="flex flex-row gap-2 mt-2">
                <SiReact size={24}></SiReact>
                <SiJavascript size={24}></SiJavascript>
                <SiTailwindcss size={24}></SiTailwindcss>
                <SiNextdotjs size={24}></SiNextdotjs>
              </div>
              <a
                href="https://github.com/RyanLiew14/portfolio"
                className="text-blue-500 dark:text-blue-400 mt-2 inline-block"
              >
                View Project
              </a>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 shadow-sm rounded-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Recenseo
              </h3>
              <p className="text-gray-800 dark:text-gray-300">
                University of Calgary Course Rater Web Application
              </p>
              <div className="-ml-2 flex flex-row gap-2 mt-2">
                <SiMongodb size={24}></SiMongodb>
                <SiReact size={24}></SiReact>
                <SiJavascript size={24}></SiJavascript>
                <SiTailwindcss size={24}></SiTailwindcss>
                <SiExpress size={24}></SiExpress>
                <SiNodedotjs size={24}></SiNodedotjs>
              </div>
              <a
                href="https://github.com/RyanLiew14/Recenseo"
                className="text-blue-500 dark:text-blue-400 mt-2 inline-block"
              >
                View Project
              </a>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 shadow-sm rounded-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                LockedIn
              </h3>
              <p className="text-gray-800 dark:text-gray-300">
                LinkedIn clone, tailored towards gamers
              </p>
              <div className="-ml-2 flex flex-row gap-2 mt-2">
                <SiMongodb size={24}></SiMongodb>
                <SiReact size={24}></SiReact>
                <SiJavascript size={24}></SiJavascript>
                <SiTailwindcss size={24}></SiTailwindcss>
                <SiExpress size={24}></SiExpress>
                <SiNodedotjs size={24}></SiNodedotjs>
              </div>
              <p className="font-extralight mt-8">
                **Just an idea, not much developed
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 shadow-sm rounded-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                MonkeyTypeRacer
              </h3>
              <p className="text-gray-800 dark:text-gray-300">
                MonkeyType, but multiplayer
              </p>
              <div className="-ml-2 flex flex-row gap-2 mt-2">
                <SiMongodb size={24}></SiMongodb>
                <SiReact size={24}></SiReact>
                <SiJavascript size={24}></SiJavascript>
                <SiTailwindcss size={24}></SiTailwindcss>
                <SiExpress size={24}></SiExpress>
                <SiNodedotjs size={24}></SiNodedotjs>
              </div>
              <p className="font-extralight mt-8">
                **Just an idea, not much developed
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2023 Ryan Liew. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;