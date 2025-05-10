import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
function PersonCard({
  image,
  className,
  imgCss,
  name, designation
}: any) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt options={defaultOptions}>
      <motion.div
        style={{
          perspective: 800,
        }}
        className={`${className} rounded-lg bg-[url('/assets/Waqar_Bhai-01.png')]`}
        // onMouseMove={handleMouseMove}
        // onMouseLeave={handleMouseLeave}
      >
        <motion.div
        // style={{
        //   rotateX,
        //   rotateY,
        // }}
        >
          <Image
            src={image}
            className={`${imgCss} rounded-3xl backdrop-blur-sm bg-white/30`}
            width={300}
            height={300}
            alt=""

          />
        </motion.div>
        <motion.span
          key="card"
          style={{
            boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
            borderRadius: 10,
            transformStyle: "preserve-3d",
            perspective: 800,
            // rotateX: cardRotateX, // Use the transformed motion values for 3D rotation
            // rotateY: cardRotateY,
          }}
          transition={{ velocity: 0 }}
          className="text-[#FFFFFF] font-spaceGrotesk text-[28px] font-[500]   backdrop-blur-sm bg-white/30 absolute group-hover:opacity-100 opacity-0 top-0 left-0 right-0 bottom-0 w-[300px] h-full flex flex-col gap-4 items-center justify-center transition-all duration-75"
        >
         <div>
         {name}
         </div>
         <div className="text-[16px]">
          {designation}
         </div>
        </motion.span>
      </motion.div>
    </Tilt>
  );
}

export default PersonCard;
