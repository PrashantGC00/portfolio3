import { useRef } from "react";
import { TextBoard } from "../Board";
import { Text, useScroll } from "@react-three/drei";
import type { Group } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Projects = () => {
  const ref = useRef<Group | null>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;

    const fadeStart = 0.45;
    const fadeEnd = 0.6;
    const progress = (scroll.offset - fadeStart) / (fadeEnd - fadeStart);
    const opacity = Math.max(0, Math.min(1, progress));

    ref.current.visible = opacity > 0;
    ref.current.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh && child.material) {
        const material = child.material as THREE.Material & {
          opacity?: number;
          transparent?: boolean;
        };
        material.opacity = opacity;
        material.transparent = true;
      }
    });
  });

  return (
    <group ref={ref}>
      <TextBoard>
        <Text
          position={[-3, 1.7, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.4}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          Projects
        </Text>

        <Text
          position={[-3, 1.2, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          MERN Stack Application
        </Text>

        <Text
          position={[-3, 0.95, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
          Full-stack app with React, Node.js, Express, MongoDB, authentication
          and dashboard, booking features.
        </Text>

        <Text
          position={[-3, 0.6, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          3D Portfolio Website
        </Text>

        <Text
          position={[-3, 0.35, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
          Interactive portfolio using React Three Fiber and Drei.
        </Text>

        <Text
          position={[-3, 0, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          CMS & Booking Platform
        </Text>

        <Text
          position={[-3, -0.25, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
          Admin CMS with Radix UI, TanStack Query & Table. MongoDB, React,
          NodeJS, Express, TypeScript
        </Text>

                <Text
          position={[-3, -0.7, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          Kanban Board
        </Text>

        <Text
          position={[-3, -0.9, 4]}
          rotation={[0, -Math.PI / 1.6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
           Built a Drag and Drop Kanban board using ReactDnD and TypeScript
        </Text>
      </TextBoard>
    </group>
  );
};

export default Projects;
