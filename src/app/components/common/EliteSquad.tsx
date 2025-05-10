import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PersonCard from "./PersonCard";

function EliteSquad({
  className,
  txtcol = "text-[#FFFFFF]",
  pcol = "text-[#FFFFFF]",
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
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className={`bg-[#1F1F1F] ${className}`}
    >
      <div className=" py-[100px] md:container px-[30px] mx-auto">
        <div className="flex items-start max-md:flex-col justify-center">
          <div className="flex md:w-[75%] items-center justify-end">
            <h3
              className={`font-spaceGrotesk text-[60px] ${txtcol} xsm:text-[70px] 2xl:text-[150px] uppercase leading-[120%] font-[500]`}
            >
              <span className="2xl:block">The Elite</span>
              <span className="2xl:block w-[690px]"> squad Of</span>
              <span className="2xl:block"> Builders</span>
            </h3>
          </div>

          <div className="md:w-[392px] flex flex-col gap-[30px] items-center md:gap-[140px]">
            <div className="ps-[65px] rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="120"
                viewBox="0 0 130 120"
                fill="none"
              >
                <path
                  d="M128.909 49.153L73.2035 66.6353L71.9915 67.0156L72.7878 68.0054L108.741 112.698L102.312 117.841L65.6557 72.2885L64.9805 71.4494L64.3053 72.2885L27.6487 117.841L21.22 112.698L57.1733 68.0054L57.9694 67.0158L56.7577 66.6353L1.08459 49.1512L3.52638 41.3117L59.7405 58.9506L60.8667 59.3039V58.1236V1.01364H69.0944V58.1236V59.3041L70.2207 58.9505L126.402 41.31L128.909 49.153Z"
                  fill="#FEFE34"
                  stroke="#1F1F1F"
                  stroke-width="1.73333"
                />
              </svg>
            </div>
            <p
              className={` ${pcol} text-[22px] flex justify-center font-[400] max-md:mb-[20px] leading-[160%] tracking-[0.11px]`}
            >
              We are a group of passionate creators spread across the globe,
              united by a singular purpose. JUST GREAT WORK
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-col 2xl:grid-cols-4">
          <div className="flex flex-col items-center justify-start">
            <PersonCard
              image={"/assets/Abdullah-SIR-1-01.png"}
              className={"relative group  cursor-pointer"}
              imgCss={" w-[300px]  h-auto"}
              name={"Muhammad Abdullah"}
              designation={"Chief Executive Officer"}
            />
            <div className="relative group  mt-[30px] rounded-[170px]">
              <PersonCard
                image={"/assets/Ahmed-Sir-1-01.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lgself-end w-[300px] h-auto"}
                name={"Ahmad Ali"}
                designation={"Chief Executive Officer"}
              />
            </div>

            <div className="relative group  md:mt-[155px] mt-[30px]  rounded-[170px]">
              <PersonCard
                image={"/assets/Asad-Sir-1-01.png"}
                className={"relative group md:mt-[-9rem] cursor-pointer"}
                imgCss={"rounded-lgw-[300px] h-auto"}
                name={"Asad Ullah"}
                designation={"Chief Executive Officer"}
              />
            </div>
            <div className="relative group  mt-[30px] rounded-[170px] ">
              <PersonCard
                image={"/assets/Feman-Sir.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lgw-[278px] h-auto"}
                name={"Muhammad Feman"}
                designation={"Project Manager"}
              />
            </div>
          </div>

          <div className="flex flex-col items-center max-md:mt-[30px]   justify-start gap-[30px] ">
            <div className="relative group">
              <PersonCard
                image={"/assets/Korai-Mascot-2-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[300px] h-auto"}
                name={"Umair Ahmad "}
                designation={" Team Lead Senior Graphic Designer"}
              />
              {/* <PersonCard
                image={"/assets/Bilal Bhai-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[278px] h-auto"}
                name={" Bilal Rasheed"}
                designation={"Senior Animator"}
              /> */}
            </div>
            <div className="relative group mt-0">
              <PersonCard
                image={"/assets/Noman-Sir-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lg w-[300px]  h-auto"}
                name={"Noman Ijaz "}
                designation={"Senior Graphic Designer"}
              />
              {/* <PersonCard
                image={"/assets/Korai Mascot 2-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[278px] h-auto"}
                name={"Umair Ahmad "}
                designation={"Senior Logo Designer"}
              /> */}
            </div>

            <div className="relative group mt-0  ">
              {/* provide  */}
              <PersonCard
                image={"/assets/Fatima-Shahbaz-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lg  w-[300px]  h-auto"}
                name={"Fatima Shabaz "}
                designation={"Graphic Designer"}
              />
            </div>
            <div className="relative group mt-0 ">
              <PersonCard
                image={"/assets/Zahid-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lg w-[300px]  h-auto"}
                name={"Muhammad Zahid"}
                designation={"Graphic Designer"}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[30px] max-lg:mt-[30px] ">
            {/* <div className="relative group  ">
              <PersonCard
                image={"/assets/Waqar_Bhai-01.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lgw-[300px] h-auto"}
                name={"Muhammad Waqar"}
                designation={"Senior Graphics Designer"}
              />
              <PersonCard
                image={"/assets/Raffay-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[300px] self-end  h-auto"}
                name={"Raffay Imran"}
                designation={"Graphic Designer"}
              />
            </div> */}
            <div className="relative group ">
              {/* provide  */}
              <PersonCard
                image={"/assets/Aqsa-Zahid-01.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lgw-[300px] h-auto"}
                name={"Aqsa Zahid"}
                designation={"Senior Graphics Designer"}
              />
            </div>
            <div className="relative group flex justify-center   lg:mt-0">
              <PersonCard
                image={"/assets/Raffay-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[300px] self-end  h-auto"}
                name={"Raffay Imran"}
                designation={"Graphic Designer"}
              />
              {/* <PersonCard
                image={"/assets/Yasir-01.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lgw-[278px] h-auto"}
                name={"Yasir Ahmad"}
                designation={"Animator"}
              /> */}
            </div>
            <div className="relative group ">
              {/* provide  */}
              <PersonCard
                image={"/assets/Raffay-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[300px] self-end  h-auto"}
                name={"Muhammad Bilal"}
                designation={"Junior Graphic Designer"}
              />
            </div>
          </div>
          <div className=" flex flex-col  lg:hidden 2xl:flex items-center justify-start max-md:mt-[30px] gap-[30px] max-lg:mt-[30px]">
            <div className="relative  group flex  flex-col  gap-7 justify-center ">
              {/* <PersonCard
                image={"/assets/Zahid-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[278px] self-start h-auto"}
                name={"Muhammad Zahid"}
                designation={"Logo Designer"}
              /> */}
              <PersonCard
                image={"/assets/Uzair-Haseen.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lg w-[300px] self-start h-auto"}
                name={"Uzair Haseeb"}
                designation={" Team Lead Senior Animation Artist"}
              />
            </div>
            {/* <div className="relative  group flex  flex-col  gap-7 justify-center ">
              <PersonCard
                image={"/assets/Bilal Bhai-01.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lg w-[300px] h-auto"}
                name={" Bilal Rasheed"}
                designation={"Senior Animation Artist"}
              />
              <PersonCard
                image={"/assets/Uzair Haseen.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[278px] self-start h-auto"}
                name={"Uzair Haseeb"}
                designation={"Senior Animator"}
              />
            </div> */}
            <div className="relative  group flex  flex-col  gap-7 justify-center ">
              <PersonCard
                image={"/assets/Yasir-01.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lg w-[300px] h-auto"}
                name={"Yasir Ahmad"}
                designation={"Animation Artist"}
              />
              {/* <PersonCard
                image={"/assets/Uzair Haseen.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[278px] self-start h-auto"}
                name={"Uzair Haseeb"}
                designation={"Senior Animator"}
              /> */}
            </div>
            <div className="relative  group flex  flex-col  gap-7 justify-center ">
              {/* provide  */}
              <PersonCard
                image={"/assets/Yasir-01.png"}
                className={"relative group cursor-pointer "}
                imgCss={"rounded-lg w-[300pxpx] h-auto"}
                name={"Muhammad Naveed"}
                designation={"Junior Animation Artist"}
              />
              {/* <PersonCard
                image={"/assets/Uzair Haseen.png"}
                className={"relative group cursor-pointer"}
                imgCss={"rounded-lgw-[278px] self-start h-auto"}
                name={"Uzair Haseeb"}
                designation={"Senior Animator"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EliteSquad;
