import React from "react";

function Skills() {
  const skills = [
    {
      name: "Life Skills",
      level: "Advanced",
      count: "100",
    },
    {
      name: "Aptitude",
      level: "Expert",
      count: "100",
    },
    {
      name: "Soft Skills",
      level: "Advanced",
      count: "100",
    },
    {
      name: "Reasoning Skills",
      level: "Expert",
      count: "90",
    },
    {
      name: "Verbal Ability",
      level: "Expert",
      count: "100",
    },
    {
      name: "BFSI",
      level: "Expert",
      count: "95",
    },
  ];

  return (
    <section id="skills" className="my-10 p-10 bg-gray-400 relative md:rounded-br-full md:rounded-tl-full">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-gray-900">Skills</span>
        </h3>
        <p className="text-gray-300 mt-3 text-lg">My Knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div key={i} className="border-2 border-gray-600 group relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
                style={{
                  background: `conic-gradient( #ddd ${skill.count}%, rgb(65, 65, 65) ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-lg w-28 h-28 bg-gray-900 flex items-center justify-center rounded-full group-hover:text-gray-600 group-hover:text-3xl">
                  {skill.name}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
