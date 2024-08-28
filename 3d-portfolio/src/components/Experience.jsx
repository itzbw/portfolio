import {
  Environment,
  OrbitControls,
  Sky,
  ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./avatar";
import { useControls } from "leva";
import { PlaneGeometry } from "three/src/Three.js";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="pink" />
          </mesh>
        )}
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.02}>
          <planeGeometry />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      </group>
    </>
  );
};
