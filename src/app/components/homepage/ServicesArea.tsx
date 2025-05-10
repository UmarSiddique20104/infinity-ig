"use client";
//ts nocheck
import React from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, inView } from "framer-motion";

import { motion } from "framer-motion";
import { animate } from "framer-motion";
import TextAnimation from "../common/TextAnimation";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function ServicesArea() {
  const [index, setIndex] = React.useState("");
  const boxRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); // State for position

  const handleMouseMove = (e: any, idx: any) => {
    const { clientX, clientY } = e;

    // Set the position of the image/video to follow the cursor
    setPosition({ x: clientX, y: clientY });
    setIndex(idx);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="bg-[#1F1F1F] pt-[124px] pb-[120px]"
    >
      <div className="max-w-[1440px] px-5 sm:px-[30px] mx-auto">
        <div className="flex lg:justify-between xsm:items-start max-lg:flex-col sm:items-center">
          <div className="flex xsm:flex-row sm:flex-col justify-center items-start gap-[10px] sm:gap-[20px] sm:items-center">
            <h4
              id="box"
              className={`font-spaceGrotesk md:text-[44px] xsm:text-[36.5px] sm:text-[30px] text-white font-[500] uppercase`}
            >
              Our Project Area
            </h4>
            <div
              className={`font-spaceGrotesk cursor-pointer group rounded-[36px] bg-[#02ABD5] text-[30px] sm:text-[44px] px-[28px] py-[4px] font-[400]`}
            >
              <div className="relative overflow-hidden cursor-pointer">
                <span className="inline-block cursor-pointer group text-white ">
                  <TextAnimation word={"Works"} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#242424] rounded-[50px] mt-[40px] sm:mt-[84px] border border-[#FFFFFF1A] p-[20px] sm:p-[30px]">
          <div>
            {[
              {
                title: "Graphic Designing",
                description: `Revitalize your brand's essence through our graphic design alchemy. We turn concepts into captivating visuals, forging a distinctive identity from logos to marketing materials. Immerse your brand in our creative ingenuity!`,
                image: "/assets/GraphicDesigning.png",
              },
              {
                title: "UI/UX Designing",
                description: `Elevate your brand with our graphic design magic. From logos to marketing materials, we bring your vision to life with creativity and flair. Unleash the power of visual impact!`,
                video: "/assets/UIUX.mp4",
              },
              {
                title: "Branding",
                description: `Crafting identities that resonate. Our branding designs are more than visuals; they're stories told in color, shape, and emotion. Elevate your brand's narrative with our unique blend of creativity and strategy. Stand out, be remembered.`,
                image: "/assets/Branding.jpg",
              },
              {
                title: "Motion Graphic Designing",
                description: `Bring your ideas to life with our motion graphic design expertise. We merge creativity and motion to tell compelling stories, making your brand dynamic and unforgettable. Elevate your visual content and captivate your audience with our seamless animation magic.`,
                video: "/assets/Motion.mp4",
              },
            ].map((service, idx: any) => (
              <div
                key={idx}
                onMouseEnter={() => setIndex(idx)}
                onMouseLeave={() => setIndex("")}
                onMouseMove={(e) => handleMouseMove(e, idx)} // Handle mouse move
                className={`cursor-pointer group max-lg:flex-col relative flex justify-start py-[20px] sm:py-[50px] ${
                  idx < 3 ? "border-b border-[#FFFFFF1A]" : ""
                } items-start`}
              >
                <h5
                  className={`font-spaceGrotesk lg:w-[45%] text-[30px] ${
                    index === idx ? "text-[#00FF9C]" : "text-[#FFFFFF]"
                  } sm:text-[40px] font-[500]`}
                >
                  {service.title}
                </h5>
                <p className="lg:w-[596px] text-[#FFFFFF59] text-[18px] font-[400]">
                  {service.description}
                </p>
                {service.image ? (
                  <Image
                    className={`${
                      index === idx
                        ? "absolute z-10 object-cover rounded-[25px] transition-all duration-1000 ease-in-out"
                        : "hidden"
                    }`}
                    src={service.image}
                    alt={service.title}
                    width={432}
                    height={540}
                    style={{
                      transform: `translate(${position.x - 216}px, ${
                        position.y - 280
                      }px)`, // Adjust to center the image above the cursor
                      pointerEvents: "none", // Disable pointer events
                    }}
                  />
                ) : (
                  <video
                    className={`${
                      index === idx
                        ? "absolute z-10 rounded-[25px] transition-all duration-1000 ease-in-out"
                        : "hidden"
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    width={432}
                    height={540}
                    style={{
                      transform: `translate(${position.x - 216}px, ${
                        position.y - 350
                      }px)`, // Adjust to center the video above the cursor
                      pointerEvents: "none", // Disable pointer events
                    }}
                  >
                    <source src={service.video} type="video/mp4"></source>
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesArea;
