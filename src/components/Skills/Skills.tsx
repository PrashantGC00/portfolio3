import { TextBoard } from "../Board";
import { Text } from "@react-three/drei";

const Skills = () => {
  return (
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
        React • TypeScript • Three.js • Tailwind CSS • Next.js
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
        Node.js • Express • MongoDB • PostgreSQL • Go • REST APIs
      </Text>
      
      <Text
        position={[3, 0, -2]}
        rotation={[0, -Math.PI / 6, 0]}
        fontSize={0.15}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Tools & Others
      </Text>
      <Text
        position={[3, -0.25, -2]}
        rotation={[0, -Math.PI / 6, 0]}
        fontSize={0.1}
        color="black"
        maxWidth={4}
        font="/fonts/gothic/science-gothic.ttf"
      >
        Git • Docker • AWS • Agile Methodologies
      </Text>
    </TextBoard>
  );
};

export default Skills;