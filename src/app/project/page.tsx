'use client'
import React, { useContext } from "react";
import Project from "../components/project"
import Image from "next/image";
import { MenuContext } from "../components/context/MenuContext";
import Link from "next/link";

const ProjectDetail = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section bg-cover bg-[url('/assets/newbg.png')]">
        <div className="lg:flex xl:px-32 lg:px-20 px-4 py-20 ">
          <div className="lg:w-1/2 lg:pe-4 flex justify-center">
            <Image src="/images/projects/project 2.png" width={"500"} height={"0"} alt="" className="object-contain"/>
          </div>
          <div className="lg:w-1/2 lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="uppercase text-6xl xl:text-8xl xxl:text-10xl font-bold mt-5">
                WOO  <br className="lg:block hidden" /> Spaces Web
            </h1>
            <div className="flex md:flex-row flex-wrap gap-2 xl:px-5 lg:px-5 px-5 sm:pb-5 pb-5 pt-5 justify-between sm:text-left text-center">
                <div>
                    <h5 className="xl:text-1xl md:text-1xl text-1xl font-bold">
                        Clients:
                    </h5>
                    <p className="pt-2 text-gray-400">
                    Argova Josen
                    </p>
                </div>
                <div>
                    <h5 className="xl:text-1xl md:text-1xl text-1xl font-bold">
                        Company:
                    </h5>
                    <h4 className="xl:text-1xl md:text-1xl text-1xl font-semibold pt-2 text-gray-400">
                    Argova Josen
                    </h4>
                </div>
                <div>
                    <h5 className="xl:text-1xl md:text-1xl text-1xl font-bold">
                        Location:
                    </h5>
                    <h4 className="xl:text-1xl md:text-1xl text-1xl font-semibold pt-2 text-gray-400">
                    Argova Josen
                    </h4>
                </div>
                <div>
                    <h5 className="xl:text-1xl md:text-1xl text-1xl font-bold">
                        Project Type:
                    </h5>
                    <h4 className="xl:text-1xl md:text-1xl text-1xl font-semibold pt-2 text-gray-400">
                    Argova Josen
                    </h4>
                </div>
                <div>
                    <h5 className="xl:text-1xl md:text-1xl text-1xl font-bold">
                        Duration:
                    </h5>
                    <h4 className="xl:text-1xl md:text-1xl text-1xl font-semibold pt-2 text-gray-400">
                    Argova Josen
                    </h4>
                </div>
            </div>

            <div className="sm:flex xl:px-5 lg:px-5 px-5 sm:pb-28 pb-16  items-center sm:text-left text-center">
            
             <Link href={'/'}>
             <div className="flex items-center bg-black rounded-r-full after:rounded-l-full py-5 px-5 text-white cursor-pointer group duration-300 ">
                <h5 className="uppercase xl:text-1xl md:text-1xl text-1xl">
                Visit Website
                </h5>
                <Image src="/images/projects/icons8_menu 1.png" width={"20"} height={"2000"} alt="" className="ml-2 object-cover group-hover:w-[15%]  duration-500 group-hover:rotate-45" />
              </div>
             </Link>

            </div>
          </div>
        </div>
      </div>
     <Project />
    
    </div>
   
  );
};

export default ProjectDetail;
