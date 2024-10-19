import { BsArrowDownCircle } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-20 w-full">
      <h2 className="text-white text-4xl font-bold">EC</h2>
      <a href="/CHUCKS_CV_OnePage.pdf" download={true}>
        <button className="flex items-center gap-4 p-3 px-5 rounded-3xl bg-white text-black hover:text-white hover:bg-black hover:border border-white">
          Download CV <BsArrowDownCircle />{" "}
        </button>
      </a>
    </div>
  );
};

export default Nav;
