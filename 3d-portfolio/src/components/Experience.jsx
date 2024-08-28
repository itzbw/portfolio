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

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset="sunset" />
      <Office />
      <group position-y={0}>
        <ContactShadows
          opacity={0.5}
          scale={1}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
      </group>
    </>
  );
};
