
import { motion } from "framer-motion";

import Link from "next/link";

import Separator from "../Separator";

const Footer = () => {
  




  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
     
   <footer className="mt-54">
      <Separator />
          <div className="p-2 m-1">
            <ul className="flex flex-wrap justify-between md:text-[15px]">
              <li className=" content-center">
                <span className="">
                  <Link href={"/lobby"}>
                    <span className="relative inline-block group cursor-pointer">
                      <span className="relative inline-block group text-muted font-helvetica text-neon">
                        Nabin Budhathoki
                      </span>
                      <span className="absolute left-0 -bottom-[1px] h-[1px] w-full origin-right scale-x-0 bg-white/50 transition-transform ease-out duration-350 group-hover:scale-x-100 group-hover:origin-left"></span>{" "}
                    </span>{" "}
                  </Link>
                  <strong className="text-[17px] text-muted/55">/</strong>{" "}
                  <span className="text-[14px] font-helvetica text-muted text-neon ">
                    LOBBY
                  </span>
                </span>
              </li>
              <li className="md:px-4 -mx-2">
            
                
            <span className=" flex items-center justify-center text-sm transition-all duration-150 group-hover:-translate-y-full text-muted">
                   Kathmandu, Nepal
                 </span>


            
              </li>
            </ul>
          </div>
          </footer>
 

      {/* separator */}


 

  
    </motion.div>
  );
};



export default Footer