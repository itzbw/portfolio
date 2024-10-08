import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useEffect, useState } from "react";
import { Menu } from "./components/Menu";
import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";
import { LoadBar } from "./components/loader";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [loading, setLoading] = useState(true);

  // if scroll then close the menu
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  useEffect(() => {
    document.addEventListener("animation-loaded", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        {loading && <LoadBar />}
        <Canvas shadows camera={{ position: [0, 10, 60], fov: 10 }}>
          <color attach="background" args={["#000000"]} />

          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>

            <Scroll html>
              <Interface setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>

        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />

        {/* <Cursor /> */}
      </MotionConfig>

      <Leva hidden />
    </>
  );
}

export default App;
