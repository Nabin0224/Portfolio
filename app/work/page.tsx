import Navbar from "@/components/ui/front/Navbar";
import Separator from "@/components/ui/Separator";
import React from "react";
import { skills } from "@/components/ui/data/skills";
import PrimaryButton from "@/components/ui/PrimaryButton";

const Work = () => {
  return (
    <div>
      <Navbar />
      <div className="heading flex md:flex-row gap-2 md:gap-0 flex-col-reverse my-4 md:my-6 p-2 mx-1 md:mx-6 justify-between">
        <div className="flex justify-end md:justify-start text-[14px] text-neon mt-2 md:w-[30%]">
         <p className="w-[85%] text-[#cccfca]">
          Helping bold, innovative brands succeed through strategic, full-stack development — whether building solo or alongside a team.</p>
        </div>
        <div className="flex flex-col items-end md:item-center font-bebas-serif tracking-wider text-gray-300/80 text-neon">
          <div className="text-6xl md:text-8xl">SELECTED WORKS (3)</div>
          <div className="text-6xl md:text-8xl">2024-2025</div>
        </div>
      </div>
      <Separator />
      <div className="skills flex flex-col flex-1 mx-2 md:mx-6 my-4 md:my-0 p-1 md:p-0 ">
        {skills &&
          skills.map((skill, index) => (
            <div className=""  key={index}>
              <div className="flex flex-col md:flex-row  md:justify-between md:items-center items-start">
                <div className="flex md:flex-row flex-col gap-8 my-7 w-max">
                  <h2 className="text-3xl md:text-6xl font-source-serif text-neon ">{skill.title}</h2>
                  <div className="flex flex-col font-helvetica text-xs md:text-sm justify-center items-center text-neon text-[#cccfca]">
                    <p>{skill.level}</p>
                    <p>{skill.started}</p>
                  </div>
                </div>
                  <PrimaryButton btnText="Live Site" />
              </div>
              <Separator />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Work;
