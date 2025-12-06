import { Canvas } from "@react-three/fiber";
import "./App.css";
import Main from "./components/Main";
import SocialBtn from "./components/SocialBtn";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <>
      <div
        className="flex justify-between fixed top-2 left-2 z-10 w-screen px-5"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex gap-2">
          <SocialBtn
            Icon={Facebook}
            href="https://www.facebook.com/gcprashant00/"
          />
          <SocialBtn
            Icon={Instagram}
            href="https://www.instagram.com/gc__prashant/"
          />
          <SocialBtn Icon={Github} href="https://github.com/PrashantGC00" />
          <SocialBtn
            Icon={Linkedin}
            href="https://www.linkedin.com/in/prashant-g-c-07814231a/"
          />
        </div>
        <div className="ml-auto">
          <div className="relative w-7 h-7 cursor-pointer group rounded-full hover:bg-gray-300">
            <svg
              className="absolute inset-0 animate-spin group-hover:animate-none"
              viewBox="0 0 32 32"
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground transition-all duration-500 ease-out [stroke-dasharray:94.25] [stroke-dashoffset:70.69] group-hover:[stroke-dashoffset:0]"
              />
            </svg>
            <button
              className={`absolute inset-0 flex items-center justify-center cursor-pointer`}
              onClick={() =>
                (window.location.href = "mailto:gcprashant555@gmail.com")
              }
            >
              <Mail
                size={16}
                className="group-hover:text-red-800 transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
      <Canvas shadows camera={{ position: [-5, 5, 10], fov: 50 }}>
        <Main />
      </Canvas>
    </>
  );
}

export default App;
