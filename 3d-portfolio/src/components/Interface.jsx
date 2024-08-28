const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <h1>Skill</h1>
      </Section>
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-3xl font-extra-bold leading-snug">
        Hello I'm
        <br />
        <span className="text-2xl font-normal">Bobo </span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        I'm a creative developer
        <br />
        learning to build 3D websites
      </p>
      <button
        className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
      >
        Contact Me
      </button>
    </Section>
  );
};
