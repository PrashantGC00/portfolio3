import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Dancer } from "../Models/Dancer";

export const RotatingDancer = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  const prevOffset = useRef(0);
  const [hovered, setHovered] = useState(false);
  const wobbleTime = useRef<number>(0);

  useFrame(() => {
    if (!boxRef.current) return;

    if (boxRef.current) {
      boxRef.current.rotation.y += 0.005;

      if (hovered) {
        wobbleTime.current = wobbleTime.current + 0.1;
        const wobbleX = Math.sin(wobbleTime.current) * 0.1;
        const wobbleZ = Math.cos(wobbleTime.current) * 0.1;
        boxRef.current.rotation.z = wobbleZ;
        boxRef.current.rotation.x += wobbleX * 0.05;
      } else {
        wobbleTime.current = 0;
        boxRef.current.rotation.z += (0 - boxRef.current.rotation.z) * 0.1;
        boxRef.current.rotation.x += (0 - boxRef.current.rotation.x) * 0.1;
      }

      const offset = scroll.offset;

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
    }
    prevOffset.current = scroll.offset;
  });

  return (
    <mesh
      ref={boxRef}
      castShadow
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Dancer scale={1.5} />
    </mesh>
  );
};