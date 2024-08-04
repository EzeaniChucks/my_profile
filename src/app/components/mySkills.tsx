const myskills = [
  "nextjs",
  "react native",
  "react",
  "nextjs",
  "python",
  "flask",
  "express",
  "typescript",
  "sql",
  "mongoose",
  "tailwind",
  "docker",
];
const MySkills = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-3 md:p-10 my-5 w-full">
      <h3 className="text-white self-start">My Tech Stack</h3>
      <div className="flex items-center justify-center flex-wrap gap-2 p-5">
        {myskills?.map((eachSkill) => {
          return (
            <p
              key={eachSkill}
              className="text-white p-2 px-4 rounded-2xl border border-white hover:text-black hover:bg-white cursor-pointer"
            >
              {eachSkill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
