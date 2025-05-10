"use client";
import React, { useContext, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import TextAnimation from "../components/common/TextAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { MenuContext } from "../components/context/MenuContext";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Articlespage = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [
    { id: 1, src: "/images/articles/article2.png" },
    { id: 2, src: "/images/articles/article3.png" },
    { id: 3, src: "/images/articles/article4.png" },
    { id: 4, src: "/images/articles/article5.png" },
    { id: 5, src: "/images/articles/article6.png" },
    { id: 6, src: "/images/articles/article7.png" },
    { id: 7, src: "/images/articles/article8.png" },
  ];
  // const [type, setType] = useState("all");
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
  const AnimateVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section bg-cover bg-[url('/assets/newbg.png')]  font-spaceGrotesk">
        <div className="w-full lg:flex xl:px-32  lg:px-20 px-10 py-20 ">
          <div className="lg:w-[60%]  h-[30%]  flex flex-col items-center justify-center">
            <Image src="/images/articles/article1.png" alt="" width={"2000"} height={"2000"}/>
          </div>
          <div className="lg:w-[40%] flex flex-col  lg:ps-10  ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl xl:text-6xl xll:text-9xl font-bold">
              Articles
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl xll:text-4xl font-semibold">
              Exploring Design Insights: Articles from Our Infinity Graphic
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base font-inter">
              We delve into the latest trends, insights, and best practices in
              the world of design. Here, you&apos;ll find a curated collection of
              informative and thought-provoking articles written by our team of
              design experts, covering a wide range of topics relevant to
              design, creativity, and innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:px-32 sm:px-4 xsm:px-10 bg-[#F1F6F5] pt-20 font-spaceGrotesk">
        {/* <div className="flex flex-wrap">
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Web Design
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Web Flow
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Business
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Culture
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Case Studies
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Branding
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            UI/UX
          </h5>
        </div> */}
        <div className="flex  items-center flex-wrap gap-[20px] justify-start">
          {Types.map((item, index) => {
            return (
              <button
                key={index}
                // onClick={() => setType(item.name)}
                type="button"
                className={`${spaceGrotesk.className} bg-[#1F1F1F] cursor-pointer group rounded-r-[40px] py-[10px] px-[30px] flex items-center justify-center text-[#FFFFFF] text-[23px] font-[400] uppercase `}
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <span className="">
                    <TextAnimation word={item.name} key={index}/>
                  </span>
                  {/* <span className="absolute left-0 cursor-pointer  translate-y-16 opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-500 group-hover:translate-y-0 inline-block">
                    {item.name}
                  </span> */}
                </div>
              </button>
            );
          })}
        </div>
        <h5 className="text-4xl font-medium py-14 ps-2 uppercase">
          Unveiling the World Through Our Articles
        </h5>
        <Link href="/article">
          <div className="xsm:grid slg:grid-cols-3 xsm:grid-cols-2 justify-self-center w-full ">
            {blogs?.map((val, index) => {
              return (
                <motion.div
                key={index}
                  variants={AnimateVarients}
                  className="max-w-[430px] "
                  initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: index % 2 === 0 ? -100 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 0.5, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <BlogCard img={val.src} key={index} />;
                </motion.div>
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Articlespage;
