"use client";
import React, { useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import TextAnimation from "../common/TextAnimation";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
function ProjectsArea() {
  const CardData = [
    { id: 1, img: "/assets/project1.png" },
    { id: 2, img: "/assets/project2.png" },
    { id: 3, img: "/assets/project3.png" },
    { id: 4, img: "/assets/project1.png" },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
      clamp = gsap.utils.clamp(-20, 20);

    // ScrollTrigger logic here
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.4,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="bg-[#eef5f6] pt-[124px] pb-[120px]"
    >
      <div className="max-w-[1440px] px-5 sm:px-[30px] mx-auto">
        <div className="flex xmd:flex-row sm:flex-col gap-5 justify-between flex-wrap items-center">
          <div className="flex justify-center gap-[20px] items-center">
            <h4
              className={`${spaceGrotesk.className} md:w-[562px] sm:text-[30px] xsm:text-[44px] text-[#1F1F1F] font-[500] uppercase`}
            >
              Unlock the potential of your business
            </h4>
          </div>
          <div className="">
            <Link
              href="/services"
              className="flex group justify-center pt-[30px] sm:pt-0 gap-[20px] items-center"
            >
              <h5
                className={`font-spaceGrotesk text-[23px] text-black transition-all ease-in-out duration-500 group-hover:text-[#00FF9C] font-[400] uppercase`}
              >
                <TextAnimation word={"view all projects"} />
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                className="group-hover:rotate-[40deg] transition-all duration-500 ease-in-out group-hover:fill-[#ffffff] fill-[#00FF9C]"
                fill="none"
              >
                <circle cx="19.5" cy="19.5" r="19.5" />
                <path
                  d="M18.9621 16.6801C18.8931 17.7184 18.2071 28.0453 18.1382 29.0837C18.0002 31.1604 19.5709 32.9546 21.6476 33.0926C23.7244 33.2305 25.5186 31.6598 25.6565 29.5831C25.7255 28.5447 26.4115 18.2178 26.4805 17.1795C26.6184 15.1028 25.0477 13.3085 22.971 13.1706C20.8943 13.0326 19.0991 14.6042 18.9621 16.6801Z"
                  fill="#1F1F1F"
                />
                <path
                  d="M22.9701 13.1713C21.9317 13.1023 11.6048 12.4164 10.5664 12.3474C8.48972 12.2094 6.6955 13.7801 6.55755 15.8569C6.4196 17.9336 7.9903 19.7278 10.067 19.8658C11.1054 19.9347 21.4323 20.6207 22.4706 20.6897C24.5474 20.8276 26.3416 19.2569 26.4795 17.1802C26.6175 15.1035 25.046 13.3083 22.9701 13.1713Z"
                  fill="#1F1F1F"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-[70px] gap-[20px] xl:gap-y-[80px] flex-wrap items-center">
          {/* <motion.div
            className="card"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: index % 2 === 0 ? 50 : -50,
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
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div> */}
          {CardData.map((item,i)=>(
            <ProjectCard key={item.id} img={item.img} index={i}/>
          ))}
          {/* <div className="group">
            <Image
              src="/assets/project3.png"
              width={695}
              height={300}
              className="h-auto w-full lg:w-[550px] group-hover:scale-105 transition-all duration-500 rounded-[50px] skewElem"
              alt=""
            />
            <div className="px-[40px] w-full lg:w-[550px] pt-[40px]">
              <h6
                className={`${spaceGrotesk.className} text-[40px] font-[500]`}
              >
                Responsive Website
              </h6>
              <p
                className={`${spaceGrotesk.className} flex items-center flex-wrap gap-[10px] text-[#828282] text-[18px]`}
              >
                {" "}
                <span>#Eternal</span> <span>#Equality</span>{" "}
                <span>#Fashion</span> <span>#Lies</span>{" "}
                <span>#LongWayHome</span> <span>#Industry</span>{" "}
              </p>
            </div>
          </div>
          <div className="group">
            <Image
              src="/assets/project4.png"
              width={695}
              height={300}
              className="h-auto w-full lg:w-[550px] group-hover:scale-105 transition-all duration-500 rounded-[50px] skewElem"
              alt=""
            />
            <div className="px-[40px] w-full lg:w-[550px] 2xl:w-[695px] pt-[40px]">
              <h6
                className={`${spaceGrotesk.className} text-[40px] font-[500]`}
              >
                Responsive Website
              </h6>
              <p
                className={`${spaceGrotesk.className} flex items-center flex-wrap gap-[10px] text-[#828282] text-[18px]`}
              >
                <span>#Eternal</span> <span>#Equality</span>{" "}
                <span>#Fashion</span> <span>#Lies</span>{" "}
                <span>#LongWayHome</span> <span>#Industry</span>{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectsArea;
