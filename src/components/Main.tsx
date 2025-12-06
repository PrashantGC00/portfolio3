import { Scroll, ScrollControls } from "@react-three/drei";
import { useEffect } from "react";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import { RotatingDancer } from "./RotatingModals/RotatingDancer";
import CameraController from "../utils/CameraControler";
import { RotatingStage } from "./RotatingModals/RotatingStage";

const Main = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      div::-webkit-scrollbar {
        display: none;
      }
      div {
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
      <ScrollControls pages={4} damping={2} distance={3}>
        <CameraController />
        <RotatingDancer />

        <mesh
          // rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          receiveShadow
        >
          <RotatingStage />
          {/* <planeGeometry args={[50, 50]} /> */}
          <meshStandardMaterial color="#ffffff" metalness={0} roughness={0.1} />
        </mesh>
        <Scroll>
          <group position={[0, 2.2, 0]}>
            <AboutMe />
          </group>
        </Scroll>

        <Scroll>
          <group position={[-7, -10, 0]}>
            <Skills />
          </group>
        </Scroll>
        <Scroll>
          <group position={[0, -20, 0]}>
            <Projects />
          </group>
        </Scroll>
        <Scroll>
          <group position={[-10, -33, 0]}>
            <ContactMe />
          </group>  
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Main;
