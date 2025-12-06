import { useRef } from "react";
import { TextBoard } from "../Board";
import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import * as THREE from "three";

const Skills = () => {
  const ref = useRef<Group | null>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;

    const fadeStart = 0.2;
    const fadeEnd = 0.3;
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
          position={[3, 1.7, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.4}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          Skills & Technologies
        </Text>

        <Text
          position={[3, 1.2, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          Frontend Development
        </Text>
        <Text
          position={[3, 0.95, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
          React • TypeScript • Three.js • Tailwind CSS • Next.js • Framer Motion
        </Text>

        <Text
          position={[3, 0.6, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          Backend Development
        </Text>
        <Text
          position={[3, 0.35, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
          Node.js • Express • MongoDB • PostgreSQL • Go • Fiber • Gin • Gorm • Prisma
        </Text>

        <Text
          position={[3, 0, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.15}
          color="black"
          font="/fonts/gothic/science-gothic.ttf"
        >
          Others
        </Text>
        <Text
          position={[3, -0.25, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.1}
          color="black"
          maxWidth={4}
          font="/fonts/gothic/science-gothic.ttf"
        >
          Git • Docker • AWS • Redis
        </Text>
      </TextBoard>
    </group>
  );
};

export default Skills;
