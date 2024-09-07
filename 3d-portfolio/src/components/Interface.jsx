import { motion, transform } from "framer-motion";
import { atom, useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <Section>
      <h1 className="text-6xl  text-white font-extrabold leading-snug">
        Hello
        <br />
        I'm{" "}
        <span id="myname" className=" px-1 text-white italic">
          bonnie
        </span>
      </h1>
      <motion.p
        className="text-lg text-white mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        I'm a creative developer
        <br />
        learning to build 3D websites
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-purple-900 text-white py-2 px-4 rounded-lg font-bold text-lg mt-8`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 2 },
        }}
      >
        Contact Me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Three.js",
    level: 60,
  },
  {
    title: "Vanilla JS",
    level: 60,
  },
  {
    title: "Docker",
    level: 60,
  },
  {
    title: "C",
    level: 60,
  },
  {
    title: "C++",
    level: 40,
  },
];

const languages = [
  {
    title: "English",
    level: 90,
  },
  {
    title: "French",
    level: 70,
  },
  {
    title: "Trditional Chinese",
    level: 100,
  },
  {
    title: "Japanese",
    level: 80,
  },
  {
    title: "Simplified Chinese",
    level: 70,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 id="skills" className="text-3xl font-bold  text-white">
          Skills
        </h2>
        <div className="mt-6 space-y-2">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 1 + index * 0.2 },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                <motion.div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <br />
      <motion.div whileInView={"visible"}>
        <h2 id="skills" className="text-3xl font-bold text-white mt-8">
          Languages
        </h2>
        <div className="mt-8 space-y-2">
          {languages.map((languages, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 1 + index * 0.2 },
                  },
                }}
              >
                {languages.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${languages.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center text-white">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 id="projects" className="text-3xl font-bold text-white">
          Projects
        </h2>
        <button
          className="hover:text-indigo-600 transition-colors text-white"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const url = "https://github.com/itzbw";
  return (
    <Section className="contact">
      <h2 id="contact" className="text-5xl font-bold">
        Contact Me
      </h2>
      <br />
      <p className="text-white align-top italic"> Email: thebw.42 @ pm.me</p>

      <button
        onClick={() => {
          window.open(url, "_blank");
        }}
        className={`bg-purple-900 text-white py-2 px-4 rounded-lg font-bold text-lg mt-8`}
      >
        Github
      </button>
    </Section>
  );
};
