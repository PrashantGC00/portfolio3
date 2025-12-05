import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface COLORProps {
  [key: number]: string
}

const COLOR: COLORProps = {
  1: "#aaa",
  2: "blue",
  3: "yellow",
  4: "white",
};

export const RotatingBox = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  const prevOffset = useRef(0);
  const [color, setColor] = useState(1);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!boxRef.current) return;

    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01;
      boxRef.current.rotation.x += 0.005;

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

    if (hovered) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 6) * 0.15;
      boxRef.current.scale.set(scale, scale, scale);
    } else {
      boxRef.current.scale.x += (1 - boxRef.current.scale.x) * 0.1;
      boxRef.current.scale.y += (1 - boxRef.current.scale.y) * 0.1;
      boxRef.current.scale.z += (1 - boxRef.current.scale.z) * 0.1;
    }
    prevOffset.current = scroll.offset;
  });

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = () => {
    setColor((prev) => {
      if (prev <= 3) {
        return prev + 1;
      }
      return 1;
    });
  };

  return (
    <mesh
      ref={boxRef}
      castShadow
      onPointerEnter={() => handleMouseEnter()}
      onPointerLeave={() => handleMouseLeave()}
      onClick={() => handleClick()}
      position={[0, 3, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={COLOR[color]}
        metalness={0}
        roughness={0.25}
      />
    </mesh>
  );
};
