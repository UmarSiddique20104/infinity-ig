"use client";
import Image from "next/image";
import Navbar from "./components/common/Navbar";
import "./globals.css";
// import { useInView } from "react-intersection-observer";
import Mainsection from "./components/homepage/Mainsection";
import BussinessPotential from "./components/homepage/BussinessPotential";
import ServicesArea from "./components/homepage/ServicesArea";
import ProjectsArea from "./components/homepage/ProjectsArea";
import Topics from "./components/homepage/Topics";
import Testimionials from "./components/common/Testimionials";
import Footer from "./components/common/Footer";
import EliteSquad from "./components/common/EliteSquad";
import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MenuContext } from "./components/context/MenuContext";

export default function Home() {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const background = {
    backgroundImage: "url(/assets/bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div onClick={handleMenuClick}>
      <div
        className="25s:container mx-auto  w-full min-h-screen relative overflow-hidden "
        // style={background}
        id="bg"
      >
          <Mainsection />
          <BussinessPotential />
          <ServicesArea />
          <ProjectsArea />
          <EliteSquad className={"bg-[#1F1F1F]"} />
          <Topics />
          <Testimionials />
        
      </div>
    </div>
  );
}
