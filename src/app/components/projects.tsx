"use client";
import Link from "next/link";
import React from "react";
import ProjectCard from "./homepage/ProjectCard";

const Projects = () => {
  const CardData = [
    { id: 1, img: "/assets/project1.png" },
    { id: 2, img: "/assets/project2.png" },
    { id: 3, img: "/assets/project3.png" },
    { id: 4, img: "/assets/project1.png" },
  ];
  return (
    <div className="25s:container mx-auto bg-[#F1F6F5]">
      <div className="xl:px-32 lg:px-20 px-4">
        <p className="sm:font-semibold uppercase font-medium sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 ps-3">
          Unlock the potential of <br />
          your business
        </p>
        <Link href="/project">
          <div className="flex justify-center mt-[70px] gap-[20px] xl:gap-y-[80px] flex-wrap items-center">
            {CardData.map((item, i) => (
              <ProjectCard key={item.id} img={item.img} index={i} />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
