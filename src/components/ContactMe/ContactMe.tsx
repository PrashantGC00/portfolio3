import { Html, Text } from "@react-three/drei";
import React from "react";
import { TextBoard } from "../Board";

const ContactMe = () => {
  return (
    <TextBoard>
      <Text
        position={[3, 1.7, -2]}
        rotation={[0, -Math.PI / 6, 0]}
        fontSize={0.4}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Contact Me @
      </Text>

      <Text
        position={[3, 1.2, -2]}
        rotation={[0, -Math.PI / 6, 0]}
        fontSize={0.3}
        color="black"
        onClick={() => {
          window.location.href = "mailto:yourname@gmail.com";
        }}
        fontStyle="underline"
        font="/fonts/gothic/science-gothic.ttf"
      >
        gcprashant555@gmail.com
      </Text>

      <mesh position={[3, 0.95, -2]} rotation={[0, -Math.PI / 6, 0]}>
        <planeGeometry args={[4.8, 0.03]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </TextBoard>
  );
};

export default ContactMe;
