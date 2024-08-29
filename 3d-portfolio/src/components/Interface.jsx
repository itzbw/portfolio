import { motion, transform } from "framer-motion";

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

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <SkillSection />
      </Section>
      <Section>
        <ProjectSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hello I'm
        <br />
        <span className="bg-white px-1 text-pink-600 italic">Bonnie</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
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
        className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
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
    title: "Trditional Chinese",
    level: 100,
  },
  {
    title: "Simplified Chinese",
    level: 70,
  },
  {
    title: "Japanese",
    level: 70,
  },
  {
    title: "Frecnh",
    level: 60,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-2xl font-bold text-grey-800"
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
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
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
        <h2 className="text-4xl font-bold">Languages</h2>
        <div className="mt-8 space-y-4">
          {languages.map((languages, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-2xl font-bold text-grey-800"
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
                  className="h-full bg-indigo-500 rounded-full"
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

const ProjectSection = () => {};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact ME</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label htmlFor="name" className="font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-600 mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <label
            htmlFor="message"
            className="font-medium text-gray-600 mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 h-32"
          ></textarea>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md font-bold">
            Send
          </button>
        </form>
      </div>
    </Section>
  );
};
