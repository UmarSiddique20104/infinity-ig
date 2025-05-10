'use client'
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Projects from "../components/projects";
import Image from "next/image";
import { MenuContext } from "../components/context/MenuContext";


const Projectspage = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section bg-cover bg-[url('/assets/newbg.png')]">
        <div className="lg:flex xl:px-32  lg:px-20 px-4 py-20 ">
          <div className="lg:w-1/2 lg:pe-4 flex justify-center">
            <Image src="/images/projects/project 1.png" width={"2000"} height={"2000"} alt=""/>
          </div>
          <div className="lg:w-1/2 lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="uppercase text-5xl xl:text-5xl 15s:text-8xl font-bold">
              All <br className="lg:block hidden" /> Projects
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xll:text-3xl 15s:text-4xl font-semibold">
            Crafting Digital Experiences: Showcasing Our Portfolio of Infinity Graphic Projects
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
            Welcome to &quot;All Projects,&quot; your exclusive glimpse into the creative 
            world of our design agency. Here, we take pride in curating and presenting 
            a diverse array of projects that exemplify our passion for innovation, creativity, 
            and excellence. Explore our portfolio and discover how we&apos;ve transformed concepts 
            into captivating digital experiences
            </p>
          </div>
        </div>
      </div>
     <Projects />
    
     
    </div>
   
  );
};

export default Projectspage;
