import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";

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
];

const Project = (props) => {
  const { project } = props;
  return (
    <group {...props}>
      <mesh position-z={-0.0002}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="slategray" transparent opacity={0.5} />
      </mesh>
      <Image
        scale={[1.8, 0.8, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.1}
      />

      <Text
        color={"black"}
        maxWidth={1.5}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, -0.1]}
      >
        {project.title.toUpperCase()}
      </Text>

      <Text
        color={"black"}
        maxWidth={1.85}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.1}
        position={[-1, -0.7, -0.1]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const Projects = () => {
  const { viewport } = useThree();
  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group key={"project_" + index} position={[index * 2.5, 0, -3]}>
          <Project project={project} />
        </motion.group>
      ))}
    </group>
  );
};
