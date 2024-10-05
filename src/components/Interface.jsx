import { motion, transform } from "framer-motion";
import { atom, useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
    h-screen w-screen p-8 max-w-screen-2xl
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
        I'm a developer based in Paris 🗼
        <br />I enjoy building 3D games and designing
        <br />
        fullstack applications with React and Node.js
        <br />
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className="shiny-cta"
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

// const skills = [
//   {
//     title: "Three.js",
//     level: 50,
//   },
//   {
//     title: "JS",
//     level: 60,
//   },
//   {
//     title: "Docker",
//     level: 30,
//   },
//   {
//     title: "C",
//     level: 60,
//   },
//   {
//     title: "C++",
//     level: 40,
//   },
// ];

// const languages = [
//   {
//     title: "English",
//     level: 90,
//   },
//   {
//     title: "French",
//     level: 70,
//   },
//   {
//     title: "Traditional Chinese",
//     level: 100,
//   },
//   {
//     title: "Japanese",
//     level: 80,
//   },
//   {
//     title: "Simplified Chinese",
//     level: 50,
//   },
// ];

// const SkillList = (props) =>
//   props.items.map((skill, index) => (
//     <div className="w-64" key={index}>
//       <motion.h3
//         className="text-xl font-bold text-white"
//         initial={{ opacity: 0 }}
//         variants={{
//           visible: {
//             opacity: 1,
//             transition: { duration: 1, delay: 1 + index * 0.2 },
//           },
//         }}
//       >
//         {skill.title}
//       </motion.h3>
//       <div className="h-2 w-full rounded-full mt-1">
//         <motion.div
//           className="h-full bg-gray-300 rounded-full"
//           style={{ width: `${skill.level}%` }}
//           initial={{ scaleX: 0, originX: 0 }}
//           variants={{
//             visible: {
//               scaleX: 1,
//               transition: { duration: 1, delay: 1 + index * 0.2 },
//             },
//           }}
//         />
//       </div>
//     </div>
//   ));

// const SkillSection = () => {
//   return (
//     <Section>
//       <motion.div whileInView={"visible"}>
//         <motion.h2
//           whileInView={"visible"}
//           initial={{ opacity: 0 }}
//           variants={{
//             visible: {
//               opacity: 1,
//               transition: { duration: 1, delay: 1 },
//             },
//           }}
//           className="bright-gradient text-5xl h-14 font-bold text-white"
//         >
//           Skills
//         </motion.h2>
//         <div className="mt-6 space-y-2">
//           <SkillList items={skills} />
//         </div>
//       </motion.div>
//       <br />
//       <motion.div whileInView={"visible"}>
//         <motion.h2
//           whileInView={"visible"}
//           initial={{ opacity: 0 }}
//           variants={{
//             visible: {
//               opacity: 1,
//               transition: { duration: 1, delay: 1.5 },
//             },
//           }}
//           className="bright-gradient text-5xl h-14 font-bold text-white mt-8"
//         >
//           Languages
//         </motion.h2>
//         <div className="mt-8 space-y-2">
//           <SkillList items={languages} />
//         </div>
//       </motion.div>
//     </Section>
//   );
// };

const skills = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "C" },
  { title: "Three.js" },
  { title: "React" },
  { title: "Node.js" },
];

const languages = [
  { title: "English", level: 100 },
  { title: "French", level: 70 },
  { title: "Traditional Chinese", level: 100 },
  { title: "Japanese", level: 80 },
  { title: "Simplified Chinese", level: 60 },
];

const SkillList = ({ items }) =>
  items.map((skill, index) => (
    <motion.div
      key={index}
      className="text-xl font-bold text-white mb-2 mr-4"
      initial={{ opacity: 0, x: -20 }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.1 * index },
        },
      }}
    >
      {skill.title}
    </motion.div>
  ));

const LanguageList = ({ items }) =>
  items.map((lang, index) => (
    <div className="w-full max-w-xs mb-4" key={index}>
      <motion.h3
        className="text-xl font-bold text-white"
        initial={{ opacity: 0, x: -20 }}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2 * index },
          },
        }}
      >
        {lang.title}
      </motion.h3>
      <div className="h-2 w-full bg-gray-700 rounded-full mt-1">
        <motion.div
          className="h-full bg-white rounded-full"
          style={{ width: `${lang.level}%` }}
          initial={{ scaleX: 0, originX: 0 }}
          variants={{
            visible: {
              scaleX: 1,
              transition: { duration: 1, delay: 0.2 * index },
            },
          }}
        />
      </div>
    </div>
  ));

const SkillSection = () => {
  return (
    <Section className="py-10 px-4 sm:px-6 lg:px-8">
      <motion.div whileInView="visible" className="w-full max-w-xs">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            },
          }}
          className="text-5xl font-bold text-white mb-6"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-y-2 mb-10 w-full">
          <SkillList items={skills} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            },
          }}
          className="text-5xl font-bold text-white mb-6 mt-10"
        >
          Languages
        </motion.h2>
        <div className="space-y-2">
          <LanguageList items={languages} />
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
      <div className="w-full h-full gap-8 items-center justify-center text-white">
        <h2 className="bright-gradient text-6xl h-20 font-bold">Projects</h2>
        <div className="flex w-full h-full gap-8 items-center justify-center text-white">
          <button
            className="hover:text-indigo-600 transition-colors text-2xl"
            onClick={previousProject}
          >
            ← Previous
          </button>
          <button
            className="hover:text-indigo-600 transition-colors text-2xl"
            onClick={nextProject}
          >
            Next →
          </button>
        </div>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const url = "https://github.com/itzbw";
  return (
    <Section className="contact">
      <h2
        id="contatc-me"
        className="accent-gradient font-bold "
        style={{
          fontSize: "min(15vw, 100px)",
        }}
      >
        Contact Me
      </h2>
      <br />

      <a
        className="text-white align-top text-4xl font-bold"
        href="mailto:bobo@thebw.dev"
        style={{
          fontSize: "min(7vw, 40px)",
        }}
      >
        bobo@thebw.dev
      </a>

      <button
        onClick={() => {
          window.open(url, "_blank");
        }}
        className={`bg-white text-black py-2 px-4 rounded-lg font-bold text-lg mt-8`}
      >
        Github
      </button>
    </Section>
  );
};
