import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useEffect, useState } from "react";
import { Menu } from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  // if scroll then close the menu
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        <color attach="background" args={["#ececec"]} />

        <ScrollControls pages={4} damping={0.2}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience />
          </Scroll>

          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}

export default App;
