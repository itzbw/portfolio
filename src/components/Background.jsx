import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({ color: "darkgrey" });

  const data = useScroll();

  const timeline = useRef();

  useFrame(() => {
    // timeline.current.progress(data.scroll.current);

    material.current.color = new THREE.Color(color.current.color);
  });
  useEffect(() => {
    timeline.current = gsap.timeline();
    timeline.current.to(color.current, {
      color: "slategrey",
    });
    timeline.current.to(color.current, {
      color: "#7a7ca5",
    });
    timeline.current.to(color.current, {
      color: "slategrey",
    });
  }, []);

  return (
    <group>
      <Sphere args={[50, 64, 64]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          tonMapped={false}
        />
      </Sphere>
    </group>
  );
};
