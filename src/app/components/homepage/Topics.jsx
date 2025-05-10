"use client";
import React, { useEffect, useRef } from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import { TOPICS } from "../common/TopicsArray";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import Link from "next/link";
import TextAnimation from "../common/TextAnimation";
import BlogCard from "../common/BlogCard";
function Topics() {
  // const boxRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   offset: ["0 1", "1.33 1"],
  //   target: boxRef,
  // });
  // const transform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // const AnimateVarients = {
  //   initial: {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   animate: (index) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   }),
  // };
  // const AnimateVariants = {
  //   initial: { opacity: 0, x: -300 }, // Initial animation state
  //   animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Smooth animation on hover
  // };

  useEffect(() => {}, []);
  const [type, setType] = React.useState("all");
  const Types = [
    {
      name: "all",
    },
    {
      name: "web Design",
    },
    {
      name: "Webflow",
    },
    {
      name: "culture",
    },
    {
      name: "case studies",
    },

    {
      name: "branding",
    },
    {
      name: "Ui/UX",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="bg-[#F1F6F5]"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="py-[140px] container 5sm:px-[40px] px-[10px] mx-auto"
      >
        <div className="flex items-center flex-wrap gap-[20px] justify-start">
          {Types.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setType(item.name)}
                type="button"
                className={`${spaceGrotesk.className} bg-[#1F1F1F] cursor-pointer group rounded-r-[40px] py-[10px] px-[30px] flex items-center justify-center text-[#FFFFFF] text-[23px] font-[400] uppercase `}
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <span className="">
                    <TextAnimation word={item.name} />
                  </span>
                  {/* <span className="absolute left-0 cursor-pointer  translate-y-16 opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-500 group-hover:translate-y-0 inline-block">
                    {item.name}
                  </span> */}
                </div>
              </button>
            );
          })}
        </div>
        <div>
          <h4
            className={`${spaceGrotesk.className} pt-[60px] pb-[70px] uppercase font-[500] text-[44px] text-[#1F1F1F]`}
          >
            Other Topics
          </h4>
        </div>
        <div
          //   style={{ scale: transform, opacity: transform }}
          //   ref={boxRef}
          className="flex items-start gap-x-[30px] gap-y-[60px] justify-center flex-wrap"
        >
          {TOPICS.filter((item) => type === "all" || item.type === type).map(
            (item, index) => (
              <BlogCard key={index} img={item.img} title={item.title} time={item.time} type={item.type} index={index}/>
            )

                // <Link href={"/project"} key={index}>
                //   <div>
                //     <motion.div
                //       key={index}
                //       // variants={AnimateVarients}
                //       // variants={AnimateVariants}
                //       // whileHover={{ scale: 1.05 }}
                //       className="max-w-[430px] hover:scale-105 transition-all duration-500"
                //       initial={{
                //         opacity: 0,
                //         // if odd index card,slide from right instead of left
                //         x: index % 2 === 0 ? -100 : 100,
                //       }}
                //       whileInView={{
                //         opacity: 1,
                //         x: 0, // Slide in to its original position
                //         transition: {
                //           duration: 1, // Animation duration
                //         },
                //       }}
                //       viewport={{ once: true }}
                //     >
                //       <Image
                //         src={item.img}
                //         width={430}
                //         height={300}
                //         className="h-auto rounded-[40px]"
                //         alt=""
                //       />
                //       <div className="flex items-center p-[30px] justify-start gap-[60px]">
                //         <p
                //           className={`${spaceGrotesk.className} text-[18px] text-[#828282] font-[500]`}
                //         >
                //           {item.type}
                //         </p>
                //         <p
                //           className={`${spaceGrotesk.className} text-[18px] text-[#828282] font-[500]`}
                //         >
                //           {item.time}
                //         </p>
                //       </div>
                //       <h5
                //         className={`${spaceGrotesk.className}  text-[28px] text-[#1F1F1F] font-[500]`}
                //       >
                //         {item.title}
                //       </h5>
                //     </motion.div>
                //   </div>
                // </Link>
              
            
          )}
        </div>
      </div>
    </div>
  );
}

export default Topics;
