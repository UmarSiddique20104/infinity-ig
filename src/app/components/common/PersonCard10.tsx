import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
function PersonCard10({
//   handleMouseMove,
//   handleMouseLeave,
//   cardRotateX,
//   cardRotateY,
//   rotateX,
//   rotateY,
//   image,
//   className,
//   imgCss,
}: any) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-100, 300], [-10, 10]);
  const cardRotateX = useTransform(cardY, [-200, 300], [25, -25]);
  const cardRotateY = useTransform(cardX, [-200, 300], [-10, 25]);

  const handleMouseMove = (event: any) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };
  return (
    <div>
      <motion.div
        style={{
          perspective: 800,
        }}
        className={` relative group cursor-pointer `}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
          }}
        >
          <Image
            src={"/assets/img10.png"}
            className={`w-[278px] self-start h-auto`}
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
            rotateX: cardRotateX, // Use the transformed motion values for 3D rotation
            rotateY: cardRotateY,
          }}
          transition={{ velocity: 0 }}
          className="text-[#FFFFFF] font-spaceGrotesk text-[40px] font-[500]  bg-[#ffffff63] backdrop-blur-[1.875em] absolute group-hover:opacity-100 opacity-0 top-0 left-0 right-0 bottom-0 w-[300px] h-full flex items-center justify-center transition-all duration-75"
        >
          John Doe
        </motion.span>
      </motion.div>
    </div>
  );
}

export default PersonCard10;
