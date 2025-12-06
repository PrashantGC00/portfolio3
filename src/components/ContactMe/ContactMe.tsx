import { Text, useScroll } from "@react-three/drei";
import { TextBoard } from "../Board";
import { useRef } from "react";
import type { Group } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ContactMe = () => {
  const ref = useRef<Group | null>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current) return;

    const fadeStart = 0.85;
    const fadeEnd = 0.9;
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
          position={[0, 1.7, -2]}
          rotation={[0, -Math.PI / 6, 0]}
          fontSize={0.4}
          color="black"
          onClick={() => window.open('mailto:gcprashant555@gmail.com')}
          font="/fonts/gothic/science-gothic.ttf"
        >
          Contact Me @ gcprashant555@gmail.com
        </Text>
        <mesh position={[0, 1.19, -2]} rotation={[0, -Math.PI / 6, 0]}>
          <planeGeometry args={[7, 0.03]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </TextBoard>
    </group>
  );
};

export default ContactMe;
