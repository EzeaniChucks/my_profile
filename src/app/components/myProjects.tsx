"use client";
import Image from "next/image";
import {
  earth_novel_fe_address,
  encalc_fe_address,
  pavos_fe_address,
} from "../utils";

const myProjects = [
  {
    title: "Pavos Mobile",
    pic: "/pavos_dashboard.png",
    link: `${pavos_fe_address}/user/qrcode`,
  },
  {
    title: "Pavos Web",
    pic: "/pavos_web.png",
    link: `${pavos_fe_address}`,
  },
  {
    title: "Encalc: The future of nutrition accuracy",
    pic: "/encalc.png",
    link: `${encalc_fe_address}`,
  },
  {
    title: "EarthNovel: Read, write, earn",
    pic: "/earthnovel.png",
    link: `${earth_novel_fe_address}`,
  },
];
const MyProjects = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center self-center p-3 md:p-10">
      <h3 className="text-white self-start">PROJECTS</h3>
      <div className="flex items-center justify-center flex-wrap gap-10 p-5">
        {myProjects?.map((eachProject, i: number) => {
          return (
            <div
              key={eachProject.title}
              className="relative flex flex-col items-center w-full max-w-[500px] md:h-[370px] rounded-2xl border border-white cursor-pointer p-3 md:p-6"
              onClick={() => (window.location.href = eachProject?.link)}
            >
              <p className="text-white p-5 text-center">{eachProject?.title}</p>
              {i == 0 ? (
                <Image
                  src={eachProject.pic}
                  alt={eachProject.title}
                  width={500}
                  height={500}
                  className="flex-1 w-[150px] h-[70%] rounded-xl"
                />
              ) : (
                <Image
                  src={eachProject.pic}
                  alt={eachProject.title}
                  width={1000}
                  height={1000}
                  className="flex md:flex-1 w-full md:h-40 rounded-xl"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
