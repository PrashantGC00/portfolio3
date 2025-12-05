import { Scroll, ScrollControls } from "@react-three/drei";
import { RotatingBox } from "./RotatingBox";
import { useEffect } from "react";
import ScrollScene from "./ScrollScene";

const Main = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      div::-webkit-scrollbar {
        display: none;
      }
      div {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[5, 15, 5]}
        intensity={0.7}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {}
      <ScrollControls pages={3} damping={1.5} distance={2}>
        <RotatingBox />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          receiveShadow
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#ffffff" metalness={0} roughness={0.1} />
        </mesh>
        <Scroll>
          <ScrollScene />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Main;
