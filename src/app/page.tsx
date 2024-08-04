import Image from "next/image";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex-1 flex-col min-h-screen w-screen max-w-screen gap-10 items-center p-10 bg-black">
      {/* top */}
      <div className="flex justify-between items-center h-20 w-full">
        <h2 className="text-white text-4xl font-bold">EC</h2>
        <button className="flex items-center gap-4 p-3 px-5 rounded-3xl bg-white text-black hover:text-white hover:bg-black hover:border border-white">
          Download CV <BsArrowDownCircle />{" "}
        </button>
      </div>

      {/* intro */}
      <div className="flex flex-col items-start gap-10 w-full mt-20">
        <h2 className="flex gap-4 text-white text-4xl">
          Hi there! <PiHandWaving className="text-orange-500" />
        </h2>
        <h3 className="text-white max-w-[500px] text-2xl md:text-3xl font-extralight">
          {
            "I'm Ezeani Chukwudi, a FullStack mobile and web developer. I have created solutions relied upon by thousands of users for their daily activities."
          }
        </h3>
        <button className="flex items-center gap-4 p-3 px-5 rounded-3xl bg-white text-black hover:text-white hover:bg-black hover:border border-white">
          Get in Touch <BsArrowRightCircle />{" "}
        </button>
      </div>

      {/* array of screenshots */}
      {/* <div></div> */}
    </main>
  );
}
