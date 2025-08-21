import { Environment, useScroll } from "@react-three/drei";
import { Avatar } from "./avatar";

import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { framerMotionConfig } from "../config";

import { Projects } from "./Projects";

import { Punk } from "./Punk";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport, size } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  // Check if mobile/tablet
  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;

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
  });

  // Responsive scaling factors
  const getScaleFactor = () => {
    if (isMobile) return 0.6;
    if (isTablet) return 0.8;
    return 1;
  };

  const scaleFactor = getScaleFactor();

  return (
    <>
      <Environment files="/textures/cyberpunk-min.jpg" />
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
            x: isMobile ? 0.2 : 0.5,
            z: isMobile ? 12 : 14.5,
            scaleX: 1.5 * scaleFactor,
            scaleY: 1.5 * scaleFactor,
            scaleZ: 1.5 * scaleFactor,
            rotateY: Math.PI,
          },
          1: {
            y: -viewport.height - (isMobile ? 2 : 2.8),
            x: 0,
            z: isMobile ? 8 : 10,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 3 * scaleFactor,
            scaleY: 3 * scaleFactor,
            scaleZ: 3 * scaleFactor,
          },
          2: {
            x: isMobile ? -2 : -3,
            y: -viewport.height * 2 + 0.5,
            z: isMobile ? 4 : 5,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 2 * scaleFactor,
            scaleY: 2 * scaleFactor,
            scaleZ: 2 * scaleFactor,
          },
          3: {
            y: -viewport.height * 3 + 1.1,
            x: isMobile ? 0.5 : 1,
            z: isMobile ? 20 : 25,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 2 * scaleFactor,
            scaleY: 2 * scaleFactor,
            scaleZ: 2 * scaleFactor,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>

      <motion.group
        position={[1.5, 2, 3]}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
        rotation-y={-Math.PI / 4}
        animate={{ y: section === 0 ? 0 : -1 }}
      >
        <Punk />

        <group ref={characterContainerAboutRef} name="CharacterSpot"></group>
      </motion.group>

      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>

      <Projects />
    </>
  );
};
