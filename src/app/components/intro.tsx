import { BsArrowRightCircle } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";

const Intro = () => {
  return (
    <div className="flex flex-col items-start gap-10 w-full my-20">
      <h2 className="flex gap-4 text-white text-4xl">
        Hi there! <PiHandWaving className="text-orange-500" />
      </h2>
      <div className="flex flex-col gap-3">
        <h3 className="text-white max-w-[500px] text-xl md:text-3xl font-extralight">
          {"I'm Ezeani Chukwudi, a FullStack (mobile and web) developer."}
        </h3>
        <h4 className="text-white max-w-[500px] text-sm md:text-md font-extralight">
          {
            "I have created real-world solutions relied upon by thousands of users for their daily activities."
          }
        </h4>
      </div>
      <a href="mailto:concord_chucks2@yahoo.com">
        <button className="flex items-center gap-4 p-3 px-5 rounded-3xl bg-white text-black hover:text-white hover:bg-black hover:border border-white">
          Get in Touch <BsArrowRightCircle />{" "}
        </button>
      </a>
    </div>
  );
};

export default Intro;
