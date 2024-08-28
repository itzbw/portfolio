import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }}>
        <color attach="background" args={["#ececec"]} />

        <ScrollControls pages={4} damping={0.5}>
          <Scroll>
            <Experience />
          </Scroll>

          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      {/* <h1 className="text-3xl font-bold underline">Lalala!</h1> */}
    </>
  );
}

export default App;
