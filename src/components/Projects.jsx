import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { atom, useAtom } from "jotai";
import { animate, useMotionValue } from "framer-motion";

export const projects = [
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

  const background = useRef();
  const bkgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bkgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bkgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.2}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[4.5, 3.5]} />
        <meshBasicMaterial color="grey" transparent opacity={0.5} />
      </mesh>
      <Image
        scale={[4, 2.5, 2]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />

      <Text
        // color={"black"}
        maxWidth={4}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.3}
        position={[-2, -1, 0]}
      >
        {project.title.toUpperCase()}
      </Text>

      <Text
        color="black"
        maxWidth={4}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-2, -1.4, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(0);

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 5,
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
