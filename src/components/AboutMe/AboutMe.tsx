import { TextBoard } from "../Board";
import { Text } from "@react-three/drei";

const AboutMe = () => {
  return (
    <TextBoard>
      <Text
        position={[-3, 1.7, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.5}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Prashant G.C.
      </Text>
      <Text
        position={[-3, 1.2, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.2}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Jr. Developer
      </Text>
      <Text
        position={[-3, 0.7, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.1}
        color="black"
        maxWidth={4}
        font="/fonts/gothic/science-gothic.ttf"
      >
        Software developer | Problem solver | Tech enthusiast | I build web apps
        and interactive experiences with a focus on clean code and usability.
      </Text>
    </TextBoard>
  );
};

export default AboutMe;