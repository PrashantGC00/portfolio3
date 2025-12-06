import { TextBoard } from "../Board";
import { Text } from "@react-three/drei";

const AboutMe = () => {
  return (
    <TextBoard>
      <Text
        position={[-5.5, 1.7, 0]}
        rotation={[0, -Math.PI / 8, 0]}
        fontSize={0.5}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Prashant G.C.
      </Text>
      <Text
        position={[-5.5, 1.2, 0]}
        rotation={[0, -Math.PI / 8, 0]}
        fontSize={0.25}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Software Developer
      </Text>
      <Text
        position={[-3, 1.6, 5]}
        rotation={[0, -Math.PI / 2.2, 0]}
        fontSize={0.15}
        color="black"
        maxWidth={4.2}
        font="/fonts/gothic/science-gothic.ttf"
      >
        I am a software developer focused on building clean, scalable web
        applications and interactive user experiences with modern JavaScript
        frameworks.
      </Text>
    </TextBoard>
  );
};

export default AboutMe;
