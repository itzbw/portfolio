import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { atom, useAtom } from "jotai";
import { animate, useMotionValue } from "framer-motion";

export const projects = [
  {
    title: "Swifty Companion",
    image: "/projects/companion.png",
    url: "https://github.com/itzbw/swiftyCompanion",
    description: "A mobile app using 42 API",
  },
  {
    title: "Yfebo",
    image: "/projects/yfebo.png",
    url: "https://github.com/itzbw/yfebo",
    description: "A weather app using open-meteo API",
  },
  {
    title: "Dear Diary",
    image: "/projects/diary.png",
    url: "https://github.com/itzbw/dearDiary",
    description: "A journal app using supabase",
  },
  {
    title: "42 Projects",
    image: "/projects/42.jpg",
    url: "https://github.com/itzbw/42",
    description: "An overview of my 42 Cursus projects",
  },
  {
    title: "so_long",
    image: "/projects/so_long.gif",
    url: "https://github.com/itzbw/42-so_long",
    description: "a mini 2D game written in C using minilibX ",
  },
  {
    title: "minishell",
    image: "/projects/minishell_01.png",
    url: "https://github.com/itzbw/42-minishell",
    description: "a simple shell like bash, written in C",
  },
  {
    title: "cub3d",
    image: "/projects/cub3d.gif",
    url: "https://github.com/itzbw/42-cub3d",
    description: "a FPS maze game written in C",
  },
  {
    title: "ft_transcendence",
    image: "./projects/transcendence.png",
    url: "https://github.com/itzbw/42-ft_transcendence",
    description: "A website with 3D pong written in three.js",
  },
  {
    title: "Piggie Clicker",
    image: "/projects/piggie_clicker.png",
    url: "https://piggies.thebw.dev",
    description: "a mini 2D game using Phaser",
  },
  {
    title: "Stack on the Box",
    image: "/projects/stackbox.png",
    url: "https://stackbox.thebw.dev",
    description: "a mini 3D game using three.js & cannon.js",
  },
  {
    title: "toodoo app",
    image: "/projects/toodoo.png",
    url: "https://toodoo.thebw.dev",
    description: "an todo app using MERN stack",
  },
  {
    title: "Google Hackathon 2024",
    image: "/projects/googlePrize.jpg",
    url: "https://github.com/itzbw/googleHackathon2024",
    description: "Google Data Center Hardware Hackathon Paris 2024",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;
  const { size } = useThree();

  const background = useRef();
  const bkgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bkgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bkgOpacity.get();
  });

  // Responsive sizing
  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;

  const getProjectScale = () => {
    if (isMobile) return [3, 2.5, 2];
    if (isTablet) return [3.5, 2.7, 2];
    return [4.5, 3.5, 2];
  };

  const getImageScale = () => {
    if (isMobile) return [2.5, 1.8, 2];
    if (isTablet) return [3.2, 2.2, 2];
    return [4, 2.5, 2];
  };

  const getFontSize = () => {
    if (isMobile) return 0.2;
    if (isTablet) return 0.25;
    return 0.3;
  };

  const getDescriptionFontSize = () => {
    if (isMobile) return 0.15;
    if (isTablet) return 0.18;
    return 0.2;
  };

  const getMaxWidth = () => {
    if (isMobile) return 2.5;
    if (isTablet) return 3.2;
    return 4;
  };

  return (
    <group {...props}>
      <mesh
        position-z={-0.2}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={getProjectScale()} />
        <meshBasicMaterial color="grey" transparent opacity={0.5} />
      </mesh>
      <Image
        scale={getImageScale()}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />

      <Text
        maxWidth={getMaxWidth()}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={getFontSize()}
        position={[getMaxWidth() / -2, -1, 0]}
      >
        {project.title.toUpperCase()}
      </Text>

      <Text
        color="black"
        maxWidth={getMaxWidth()}
        anchorX="left"
        anchorY="top"
        fontSize={getDescriptionFontSize()}
        position={[getMaxWidth() / -2, -1.4, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(0);

export const Projects = () => {
  const { viewport, size } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  // Responsive spacing
  const isMobile = size.width < 768;
  const getProjectSpacing = () => {
    if (isMobile) return 4;
    return 5;
  };

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * getProjectSpacing(),
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
