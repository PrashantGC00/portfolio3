import { Canvas } from "@react-three/fiber";
import "./App.css";
import Main from "./components/Main";
import SocialBtn from "./components/SocialBtn";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

function App() {
  return (
    <>
      <div className="flex gap-2 fixed top-2 left-2 z-10" style={{ pointerEvents: "auto" }}>
        <SocialBtn Icon={Facebook} href="https://www.facebook.com/gcprashant00/" />
        <SocialBtn Icon={Instagram} href="https://www.instagram.com/gc__prashant/" />
        <SocialBtn Icon={Github} href="https://github.com/PrashantGC00" />
        <SocialBtn Icon={Linkedin} href="https://www.linkedin.com/in/prashant-g-c-07814231a/" />
      </div>
      <Canvas shadows camera={{ position: [-5, 5, 10], fov: 50 }}>
        <Main />
      </Canvas>
    </>
  );
}

export default App;
