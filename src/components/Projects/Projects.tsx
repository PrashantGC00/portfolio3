import { TextBoard } from "../Board";
import { Text } from "@react-three/drei";

const Projects = () => {
  return (
    <TextBoard>
      <Text
        position={[-3, 1.7, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.4}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        Projects
      </Text>

      <Text
        position={[-3, 1.2, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.15}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        MERN Stack Application
      </Text>

      <Text
        position={[-3, 0.95, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.1}
        color="black"
        maxWidth={4}
        font="/fonts/gothic/science-gothic.ttf"
      >
        Full-stack app with React, Node.js, Express, MongoDB, authentication and
        dashboard, booking features.
      </Text>

      <Text
        position={[-3, 0.6, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.15}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        3D Portfolio Website
      </Text>

      <Text
        position={[-3, 0.35, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.1}
        color="black"
        maxWidth={4}
        font="/fonts/gothic/science-gothic.ttf"
      >
        Interactive portfolio using React Three Fiber and Drei.
      </Text>

      <Text
        position={[-3, 0, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.15}
        color="black"
        font="/fonts/gothic/science-gothic.ttf"
      >
        CMS & Booking Platform
      </Text>

      <Text
        position={[-3, -0.25, 4]}
        rotation={[0, -Math.PI / 1.6, 0]}
        fontSize={0.1}
        color="black"
        maxWidth={4}
        font="/fonts/gothic/science-gothic.ttf"
      >
        Admin CMS with Radix UI, TanStack Query & Table. MongoDB, React, NodeJS, Express, TypeScript
      </Text>
    </TextBoard>
  );
};

export default Projects;
