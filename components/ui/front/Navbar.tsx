'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import playAudio from "@/app/lib/playAudio";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Separator from "../Separator";


const Navbar = () => {

const [pathName, setPathName] = useState("")
const path = usePathname()
useEffect(() => {
  setPathName(path);
  
}, [])

console.log("pathName", pathName)
 

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}

    >
      <header className="mx-1 md:mx-6">
        <nav>
          <div className="p-2 m-1">
            <ul className="flex flex-wrap justify-between md:text-[15px]">
              <li className=" content-center">
                <span className="">
                 <Link href={'/frontend'}>
                 <span
              className="relative inline-block group cursor-pointer"
              
            >
                 <span className="relative inline-block group text-muted font-helvetica text-neon">
                    Nabin Budhathoki
                  </span>
                  <span
                className="absolute left-0 -bottom-[1px] h-[1px] w-full 
      origin-right 
      scale-x-0 
      bg-white/50
      transition-transform 
      ease-out
      duration-350 
      group-hover:scale-x-100 
      group-hover:origin-left"
              ></span> </span>
                  {" "}</Link>
                  <strong className="text-[17px] text-muted/55">/</strong>{" "}
                  <span className="text-[14px] font-helvetica text-muted text-neon ">
                    LOBBY
                  </span>
                </span>
              </li>
              <li className="md:px-4 -mx-2">
               <Link href={'/contact'}> <button className="relative overflow-hidden rounded-3xl  border-gray-500 group h-8 md:w-28 w-24 md:p-2 font-sans text-muted border-[1px]">
                  {/* Text default */}
                  <span className="absolute inset-0 flex items-center justify-center text-sm md:text-[16px] font-semibold transition-all duration-150 group-hover:-translate-y-full">
                    CONTACT
                  </span>

                  {/* Text on hover */}
                  <span className="absolute inset-0 flex items-center justify-center text-black text-sm md:text-[16px] font-semibold translate-y-full transition-all duration-50 group-hover:translate-y-0 button-bounce">
                    CONTACT
                  </span>

                  {/* Background rise */}
                  <span className="absolute inset-0 bg-primary translate-y-full transition-transform duration-150 group-hover:translate-y-0 rounded-3xl -z-10"></span>
                </button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* separator */}

     <Separator/>

      {/* Info and work  */}

      <div className={`protfolio mt-4 mx-1 md:mx-6 ${pathName == '/frontend' ? "block" : "hidden"} `}>
        <div className="flex justify-between p-2 m-1 font-source-serif md:text-4xl text-neon">
          <Link href={"/info"}>
            <span
              className="relative inline-block group cursor-pointer"
              onMouseEnter={playAudio}
            >
              <span className=" text-3xl md:text-5xl text-muted">Info</span>
              <span
                className="absolute left-0 -bottom-1 h-[1px] w-full 
      origin-right 
      scale-x-0 
      bg-white 
      transition-transform 
      ease-out
      duration-350 
      group-hover:scale-x-100 
      group-hover:origin-left"
              ></span>
            </span>
          </Link>

          
            <span
              className="relative inline-block group cursor-pointer"
              onMouseEnter={playAudio}
            >
                <Link href="/work">
                <span className=" text-3xl md:text-5xl text-muted">Work</span>
              <span
                className="absolute left-3 -bottom-1 h-[1px] w-[85%]
      origin-right 
      scale-x-0 
      bg-white 
      transition-transform 
      ease-out
      duration-350 
      group-hover:scale-x-100 
      group-hover:origin-left"
              ></span>
      </Link>
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
