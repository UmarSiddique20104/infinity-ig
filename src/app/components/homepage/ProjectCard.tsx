import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function ProjectCard({ index, img }: any) {
  return (
    <Link href={"/project"}>
    <div>
      <motion.div
        className="group "
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? -100 : 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col flex-wrap">
          <Image
            src={img}
            width={695}
            height={300}
            className="h-auto   block w-full lg:w-[550px] z-10  transition-all duration-500 rounded-[50px]  group-hover:rounded-tr-[200px] "
            alt=""
          />
          <div className="px-[40px] flex flex-col flex-wrap w-full lg:w-[550px] pt-[40px] group-hover:pt-[15px] transition-all duration-500 rounded-[50px]">
            <h6 className={`${spaceGrotesk.className} text-[40px] group-hover:text-[30px] font-[500]  py-0 transition-all duration-500`}>
              Responsive Website
            </h6>
            <p
              className={`${spaceGrotesk.className} flex items-center flex-wrap gap-[10px] text-[#828282] text-[18px]`}
            >
              <span>#Eternal</span> <span>#Equality</span> <span>#Fashion</span>
              <span>#Lies</span> <span>#LongWayHome</span>
              <span>#Industry</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    </Link>
  );
}

export default ProjectCard;
