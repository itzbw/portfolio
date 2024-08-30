import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export const projects = [
  {
    title: "ft_transcendence",
    image: "./projects/ft_transcendence.gif",
    url: "https://42.thebw.dev",
    description: "A web-based 3D pong game",
  },
  {
    title: "Piggie Clicker",
    image: "/projects/piggie_clicker.gif",
    url: "https://piggies.thebw.dev",
    description: "Click the guinea pig",
  },
];

export const Projects = () => {
  const { viewport } = useThree();
  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group>
          <Project />
        </motion.group>
      ))}
    </group>
  );
};
