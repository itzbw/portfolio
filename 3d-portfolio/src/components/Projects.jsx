import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { atom, useAtom } from "jotai";
import { animate, useMotionValue } from "framer-motion";

export const projects = [
  {
    title: "ft_transcendence",
    image: "./projects/transcendence.png",
    url: "https://42.thebw.dev",
    description: "A web-based 3D pong game",
  },
  {
    title: "Piggie Clicker",
    image: "/projects/piggie_clicker.png",
    url: "https://piggies.thebw.dev",
    description: "Click the guinea pig",
  },
  {
    title: "42",
    image: "/projects/42.png",
    url: "https://github.com/itzbw/42",
    description: "My 42 Cursus projects",
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
        position-z={-0.002}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />

      <Text
        // color={"black"}
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, -0.1]}
      >
        {project.title.toUpperCase()}
      </Text>

      <Text
        // color={"black"}
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

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
            x: 0 + (index - currentProject) * 2.5,
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
