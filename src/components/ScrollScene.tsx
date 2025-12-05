import { useScroll } from "@react-three/drei";
import AboutMe from "./AboutMe/AboutMe";
import { useRef } from "react";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";
import * as THREE from "three";
import ContactMe from "./ContactMe/ContactMe";

const ScrollScene = () => {
  const scroll = useScroll();
  const aboutRef = useRef<Group | null>(null);
  const skillsRef = useRef<Group | null>(null);
  const projectsRef = useRef<Group | null>(null);
  const contactMeRef = useRef<Group | null>(null);
  const { camera } = useThree();

  useFrame(() => {
    const offset = scroll.offset;
    const scrollDistance = offset * 55;

    if (aboutRef.current) aboutRef.current.position.y = scrollDistance + 2.2;
    if (skillsRef.current) skillsRef.current.position.y = -30 + scrollDistance;
    if (projectsRef.current)
      projectsRef.current.position.y = -60 + scrollDistance;
    if (contactMeRef.current)
      contactMeRef.current.position.y = -75.5 + scrollDistance;

    let targetX = 0;
    let targetY = 5;
    let targetZ = 10;

    if (offset < 0.333) {
      targetX = -5;
      targetY = 5;
      targetZ = 10;
    } else if (offset < 0.666) {
      targetX = -7;
      targetY = 5;
      targetZ = 8;
    } else if (offset < 0.9) {
      targetX = -6;
      targetY = 5;
      targetZ = 9.5;
    } else {
      targetX = -15;
      targetY = 5;
      targetZ = 20;
    }

    camera.position.set(
      THREE.MathUtils.lerp(camera.position.x, targetX, 0.1),
      THREE.MathUtils.lerp(camera.position.y, targetY, 0.1),
      THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1)
    );
  });

  return (
    <group>
      <group ref={aboutRef} position={[0, 3, 0]}>
        <AboutMe />
      </group>

      <group ref={skillsRef} position={[-7, -35, 0]}>
        {/* <group ref={aboutRef} position={[-7, 3, 0]}> */}
        <Skills />
      </group>

      <group ref={projectsRef} position={[0, -60, 0]}>
        <Projects />
      </group>

      <group ref={contactMeRef} position={[-15, -60, 10]}>
        <ContactMe />
      </group>
    </group>
  );
};

export default ScrollScene;
