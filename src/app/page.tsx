import Image from "next/image";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";
import MySkills from "./components/mySkills";
import MyProjects from "./components/myProjects";
import Nav from "./components/nav";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="flex-1 flex-col min-h-screen w-screen max-w-screen gap-10 items-center p-5 md:p-10 bg-black">
      {/* top nav */}
      <Nav />

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* intro */}
        <Intro />

        {/* array of my skills */}
        <MySkills />
      </div>

      {/* array of screenshots */}
      <MyProjects />
    </main>
  );
}
