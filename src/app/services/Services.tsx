"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Services from "../components/services";
import Image from "next/image";
import { MenuContext } from "../components/context/MenuContext";
export const Service = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section ">
        <div className="lg:flex bg-cover bg-[url('/assets/newbg.png')]  px-4 py-8 ">
          <motion.div
            className="lg:w-[50%]   flex justify-end items-end"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: -100,
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
            <Image
              src="/images/services/Rectangle 39.png"
              className="flex justify-end w-[2000px]   items-end img-fluid object-cover"
              width={"2000"}
              height={"100"}
              alt="not found"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 lg:ps-10 ps-2 pt-7 lg:pt-4"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 100,
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
            <div>
              <h1 className="text-5xl xl:text-6xl xxl:text-8xl font-bold">
                What We <br className="lg:block hidden" /> Do
              </h1>
              <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl xxl:text-4xl font-semibold">
                Embracing Solutions Within Our Grasp: Unveiling the End-of-Day
                Resolve
              </h5>
              <p className="text-gray-400 leading-5 pe-8 text-base">
                Constantly feeling the pulse of the digital world. We offer
                quality UI design, development, branding and more for
                forward-looking industries. Helping businesses grow and
                delivering exciting web experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Services />
    </div>
  );
};
