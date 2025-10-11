import { TypeAnimation } from "react-type-animation";

import christian from "../public/assets/CHRISTIAN.png";
import me from "../public/assets/ME.png";
import tech_stack from "../public/assets/tech stack.png";

import { Download } from "lucide-react";

function App() {
  return (
    <>
      <div className="h-screen p-5 bg-main container">
        <img src={christian} alt="CHRISIAN" className="w-full" />

        <div className="w-full bg-active rounded-full mt-3 flex justify-around p-2 text-sm text-main helvetica-bold">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Skills</p>
          <p>Contact</p>
        </div>

        <div className="flex justify-center">
          <img
            src={me}
            alt="ME"
            className="size-70 rounded-full border-solid border-2 border-active bg-white mt-7 mb-5"
          />
        </div>

        <p className="helvetica text-active">I AM A</p>
        <TypeAnimation
          sequence={["FULLSTACK DEVELOPER", 1000, "GRAPHIC DESIGENER", 1000]}
          wrapper="span"
          speed={50}
          className="bokis text-active text-4xl tracking-wide"
          repeat={Infinity}
        />

        <div className="border-solid border-2 border-active rounded-full w-48 h-12 flex justify-center items-center mt-5 hover:scale-105 hover:cursor-pointer">
          <p className="helvetica-compressed text-active flex gap-3 text-xl">
            <Download className="text-active" /> DOWNLOAD CV
          </p>
        </div>

        <img src={tech_stack} alt="TECH STACK" className="w-full mt-5 foot" />
      </div>
    </>
  );
}

export default App;
