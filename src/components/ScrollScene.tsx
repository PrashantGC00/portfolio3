import { Html, useScroll } from "@react-three/drei";
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
  const aboutRef = useRef<Group>(null);
  const skillsRef = useRef<Group>(null);
  const projectsRef = useRef<Group>(null);
  const contactMeRef = useRef<Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    const offset = scroll.offset;
    const scrollDistance = offset * 55;

    if (aboutRef.current) {
      aboutRef.current.position.y = scrollDistance + 2.2;
    }

    if (skillsRef.current) {
      skillsRef.current.position.y = -30 + scrollDistance;
    }

    if (projectsRef.current) {
      projectsRef.current.position.y = -60 + scrollDistance;
    }

    if (projectsRef.current) {
      contactMeRef.current.position.y = -75.5 + scrollDistance;
    }

    // Page 1: Initial position [-5, 5, 10]
    if (offset < 0.333) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, -5, 0.1);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5, 0.1);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10, 0.1);
    }
    // Page 2: [7, 5, 10]
    else if (offset < 0.666) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, -7, 0.1);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5, 0.1);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8, 0.1);
    }
    // Page 3: [9, 5, 10]
    else if (offset < 0.9) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, -6, 0.1);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5, 0.1);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 9.5, 0.1);
    } 
    else {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, -15, 0.1);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5, 0.1);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 20, 0.1);
    }
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
