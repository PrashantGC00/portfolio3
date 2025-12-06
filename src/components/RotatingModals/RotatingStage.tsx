import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Stage } from "../Models/Stage";

export const RotatingStage = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!boxRef.current) return;

    const offset = scroll.offset;
    const time = performance.now() / 1000;
    boxRef.current.rotation.y += 0.005;

    let baseY = 0;
    if (offset < 0.33) {
      const sectionProgress = offset / 0.33;
      baseY = sectionProgress * 3;
    } else if (offset < 0.66) {
      baseY = 3;
    } else {
      baseY = 3;
    }

    const wobbleAmplitude = 0.1;
    boxRef.current.position.y = baseY + Math.sin(time * 2) * wobbleAmplitude;

    if (offset < 0.33) {
      const sectionProgress = offset / 0.33;
      boxRef.current.position.y = sectionProgress * 3;
    } else if (offset < 0.66) {
      const sectionProgress = (offset - 0.33) / 0.33;
      boxRef.current.position.x = -sectionProgress * 3;
    } else {
      const sectionProgress = (offset - 0.66) / 0.34;
      boxRef.current.position.z = -sectionProgress * 3;
      boxRef.current.rotation.y += sectionProgress * 0.1;
      boxRef.current.rotation.x = 0;
    }
  });

  return (
    <mesh ref={boxRef} castShadow position={[0, 2, 0]}>
      <Stage scale={0.7} />
    </mesh>
  );
};
