import {
  Environment,
  OrbitControls,
  Sky,
  ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./avatar";
import { useControls } from "leva";
import { PlaneGeometry } from "three/src/Three.js";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
  const { animation } = useControls({
    animation: {
      value: "Standing",
      options: ["Typing", "Standing", "Falling"],
    },
  });
  const { section } = props;

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset="sunset" />
      <motion.group
        position={[0, 1, 2]}
        scale={[0.8, 0.8, 0.8]}
        rotation-y={-Math.PI / 4}
        animate={{ y: section === 0 ? 0 : -1 }}
      >
        <Office section={section} />

        {/* <group position-y={0}>
        <ContactShadows
          opacity={0.5}
          scale={1}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        /> */}
        <Avatar animation={animation} />
      </motion.group>
    </>
  );
};
