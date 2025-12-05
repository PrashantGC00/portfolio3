import { Float, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from 'three';

export const TextBoard = ({ children }: React.PropsWithChildren) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const floatOffset = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const targetOffset = hovered ? 0.3 : 0;
    floatOffset.current = THREE.MathUtils.lerp(
      floatOffset.current,
      targetOffset,
      delta * 4
    );
    
    const bobbing = hovered ? Math.sin(state.clock.elapsedTime * 2) * 0.05 : 0;
    groupRef.current.position.y = floatOffset.current + bobbing;
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, Math.PI / 5, 0]}
      onPointerEnter={() => {setHovered(true); document.body.style.cursor = "pointer" }}
      onPointerLeave={() => {setHovered(false); document.body.style.cursor = "auto" }}
    >
      {children}
    </group>
  )
}

export const HTMLBoard = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Float floatIntensity={1} position={[0, 2, 0]}>
        <group rotation={[0, Math.PI / 5, 0]}>
          <Html
            style={{
              userSelect: "none",
              background: "transparent",
              pointerEvents: "auto",
            }}
            wrapperClass="component-transparent"
            castShadow={false}
          >
            {children}
          </Html>
        </group>
      </Float>
    </>
  );
}