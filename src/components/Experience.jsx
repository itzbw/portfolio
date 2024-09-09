import {
  Environment,
  OrbitControls,
  Sky,
  ContactShadows,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { Avatar } from "./avatar";
import { useControls } from "leva";
import { PlaneGeometry } from "three/src/Three.js";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { framerMotionConfig } from "../config";
import * as THREE from "three";
import { Projects } from "./Projects";
import { Background } from "./Background";
import { Punk } from "./Punk";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Sitting");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(
        {
          0: "Sitting",
          1: "Standing",
          2: "Thinking",
          3: "Talking On Phone",
        }[section]
      );
    }, 600);
  }, [section]);

  useFrame((state) => {
    let currentSection = Math.floor(data.scroll.current * data.pages);

    if (currentSection > 3) {
      currentSection = 3;
    }

    if (currentSection !== section) {
      setSection(currentSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment files="/textures/cyberpunk-neon-city-night-futuristic-city-scene-style-pixel-art-80-s-wallpaper-retro-future.jpg" />
      <ambientLight intensity={1} color={0xffffff} />
      <directionalLight intensity={5} position={[1, 10, 1]} color={0xfd6c9e} />
      <directionalLight intensity={5} position={[10, 20, 1]} color={0x9370db} />
      <directionalLight
        intensity={1}
        position={[-30, 30, 30]}
        color={0xffffff}
      />
      <directionalLight
        intensity={1}
        position={[-10, -10, -10]}
        color={0xffffff}
      />

      {/* <EffectComposer>
        <Bloom
          kernelSize={1}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.1}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.1}
        />
      </EffectComposer> */}
      {/* <Background /> */}
      <motion.group
        position={[1.8, 0.17, 2.4]}
        rotation={[-3.1, 1.3, 3.14]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            y: -0.2,
            x: 0.5,
            z: 14.5,
            scaleX: 1.5,
            scaleY: 1.5,
            scaleZ: 1.5,
            rotateY: Math.PI,
          },
          1: {
            y: -viewport.height - 2.8,
            x: 0,
            z: 10,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 3,
            scaleY: 3,
            scaleZ: 3,
          },
          2: {
            x: -3,
            y: -viewport.height * 2 + 0.5,
            z: 5,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 2,
            scaleY: 2,
            scaleZ: 2,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 2,
            z: 25,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 2,
            scaleY: 2,
            scaleZ: 2,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>

      <motion.group
        position={[1.5, 2, 3]}
        scale={[1, 1, 1]}
        rotation-y={-Math.PI / 4}
        animate={{ y: section === 0 ? 0 : -1 }}
      >
        {/* <Office section={section} /> */}
        <Punk />

        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          // position={[-0.2, 0, -0.8]}
          // rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>
      {/* Skill */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        {/* <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float> */}
      </motion.group>

      <Projects />
    </>
  );
};
