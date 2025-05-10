"use client";
import React, { useContext, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
// import TestimonialSlider from "../components/TestimonialSlider";
import Testimionials from "../components/common/Testimionials";
import EliteSquad from "../components/common/EliteSquad";
import TextAnimation from "../components/common/TextAnimation";
import BussinessPotential from "../components/homepage/BussinessPotential";
import { motion } from "framer-motion";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import { MenuContext } from "../components/context/MenuContext";
import CountUp from "react-countup";
// import EliteSquad from "../components/common/EliteSquad";

const AboutSection = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [
    { id: 1, src: "/images/articles/article2.png" },
    { id: 2, src: "/images/articles/article3.png" },
    { id: 3, src: "/images/articles/article4.png" },
    { id: 4, src: "/images/articles/article5.png" },
    { id: 5, src: "/images/articles/article6.png" },
    { id: 6, src: "/images/articles/article7.png" },
    { id: 7, src: "/images/articles/article8.png" },
  ];
  const AnimateVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };
  const [type, setType] = useState("all");
  const Types = [
    {
      name: "all",
    },
    {
      name: "web Design",
    },
    {
      name: "Webflow",
    },
    {
      name: "culture",
    },
    {
      name: "case studies",
    },

    {
      name: "branding",
    },
    {
      name: "Ui/UX",
    },
  ];
  return (
    <div className="overflow-hidden  " onClick={handleMenuClick}>
      <div className="hero-section   25s:container mx-auto">
        <div className="lg:flex px-4 pt-10   w-[100%]  bg-[url('/assets/newbg.png')] bg-no-repeat bg-cover">
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
              src="/images/Rectangle 39.png"
              className="flex justify-end w-[2000px]   items-end img-fluid object-cover"
              width={"2000"}
              height={"100"}
              alt="not found"
            />
          </motion.div>
          <motion.div
            className="lg:w-[50%] lg:ps-10 ps-2 pt-7 lg:pt-4"
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
            <h1 className="text-5xl img-fluid text-justify xl:text-6xl 2xl:text-[90px]  font-bold">
              Inside Our <br className="lg:block hidden" /> Force Field
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl 2xl:text-5xl font-semibold">
              At the end of the day there is <br className="lg:block hidden" />{" "}
              a solution. That is our reach.
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base text-[14px]">
              We’ve got many skills, but we are most proud of our ability to
              DE-STRESS any situation. Infinity Graphics team has been infected
              with this good vibes since 2018. Now we spread it around. We get
              super-excited with original ideas, and every solved problem fires
              us up even more. Minds set on the future, we keep sharpening our
              skills, practicing UI & UX, and mastering tools like Figma and Web
              flow every day.
            </p>
          </motion.div>
        </div>
      </div>
      <div className=" xl:px-32 lg:px-20 bg-[#F1F6F5]  px-4 25s:container mx-auto">
        <motion.div
          className="sm:font-semibold font-medium sm:text-5xl text-4xl pt-20 sm:pb-10 pb-5 ps-3"
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
          Working party
        </motion.div>
        <motion.div
          className="group "
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
          <Image
            src="/images/Rectangle 40.png"
            className="px-3"
            width={"2000"}
            height={"100"}
            alt="not found"
          />
        </motion.div>
      </div>
      <BussinessPotential />
      <div className="25s:container bg-[#F1F6F5] mx-auto sm:flex xl:px-32 lg:px-20 px-10 sm:pb-28 pb-16 pt-8 justify-between xsm:flex-row flex-col items-center gap-5 sm:text-left text-center">
        <div className="flex flex-col items-center">
          <h5 className="xl:text-4xl md:text-3xl text-2xl text-gray-400">
            Completed <br /> Projects
          </h5>
          <h4 className="xl:text-9xl md:text-7xl text-5xl font-semibold pt-2">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }: any) => (
                <div>
                  {isVisible ? (
                    <CountUp start={0} scrollSpyOnce={true} end={6000} />
                  ) : (
                    6000
                  )}
                  +
                </div>
              )}
            </VisibilitySensor>
            {/* <CountUp duration={2} start={0} end={1280}></CountUp> + */}
          </h4>
        </div>
        <div className="sm:my-0 my-10 flex flex-col items-center">
          <h5 className="xl:text-4xl md:text-3xl text-2xl text-gray-400">
            Satisfied <br /> Clients
          </h5>
          <h4 className="xl:text-9xl md:text-7xl text-5xl font-semibold pt-2">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }: any) => (
                <div>
                  {isVisible ? (
                    <CountUp start={0} scrollSpyOnce={true} end={174} />
                  ) : (
                    174
                  )}
                  +
                </div>
              )}
            </VisibilitySensor>
            {/* <CountUp duration={2} start={0} end={174}></CountUp> + */}
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="xl:text-4xl md:text-3xl text-2xl text-gray-400">
            Years of <br /> Experience
          </h5>
          <h4 className="xl:text-9xl md:text-7xl text-5xl font-semibold pt-2">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }: any) => (
                <div>
                  {isVisible ? (
                    <CountUp start={0} scrollSpyOnce={true} end={6} />
                  ) : (
                    6
                  )}
                  +
                </div>
              )}
            </VisibilitySensor>
            {/* <CountUp duration={2} start={0} end={5}></CountUp> + */}
          </h4>
        </div>
      </div>
      <div className="bg-[#02ABD5] text-white xl:px-32 lg:px-20 px-10 lg:flex items-center">
        {/* <div className="lg:w-1/2 pe-10 lg:py-0 py-14">
          <h5 className="text-4xl font-medium capitalize pb-5 leading-tight tracking-tight">
            What our Customers <br /> have to say!
          </h5>
          <p>
            Client voices, our pride. Discover firsthand experiences as our
            clients share stories of exceptional service, creativity that
            exceeds expectations, and partnerships that define success. Real
            testimonials, real satisfaction – your success, our story.
          </p>
          <div className="flex sm:pt-16 pt-10">
            <div className="me-14">
              <h5 className="text-2xl font-bold">73+</h5>
              <p>Full 5 Star Reviews</p>
            </div>
            <div>
              <h5 className="text-2xl font-bold">4.9</h5>
              <p>Out of 5 Average Rating</p>
            </div>
          </div>
        </div> */}
        <div className="md:container mx-auto">
          <Testimionials />
        </div>
      </div>
      <div className="25s:container bg-[#F1F6F5] mx-auto sm:flex 4sm:flex-row flex-col items-center justify-between xl:px-32 lg:px-20 px-10 py-20">
        <div>
          <h5 className="md:text-4xl text-3xl font-medium pb-5 tracking-tight">
            WANT TO JUMP ON BOARD?
          </h5>
          <h4 className="xl:text-9xl lg:text-8xl md:text-6xl text-5xl font-medium pt-2 tracking-tighter">
            Check Out <br className="sm:block hidden" /> Open Positions
          </h4>
        </div>
        <div className="flex cursor-pointer group hover:rotate-0 justify-center items-center 5sm:w-[110px] 5sm:h-[110px] w-[70px] h-[70px] bg-[#02ABD5] hover:bg-[#111a1d] duration-500 rounded-full ">
          <div className="relative cursor-default">
            <span className="inline-block  transition-all  group-hover:opacity-100 group-hover:rotate-45 cursor-pointer ease-in-out duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="39"
                viewBox="0 0 38 39"
                fill="none"
              >
                <path
                  d="M35.3634 6.38651L37.3269 4.42285L33.4 0.495541L31.4366 2.4592L35.3634 6.38651ZM31.4366 2.4592L0.6366 33.2628L4.56344 37.1902L35.3634 6.38651L31.4366 2.4592Z"
                  fill="white"
                />
                <path
                  d="M24.8809 7.48878L27.6577 7.48878L27.6577 1.93505L24.8809 1.93505L24.8809 7.48878ZM24.8809 1.93505L2.60002 1.93505L2.60002 7.48878L24.8809 7.48878L24.8809 1.93505Z"
                  fill="white"
                />
                <path
                  d="M30.3713 35.5763L30.3713 38.3532L35.9251 38.3532L35.9251 35.5763L30.3713 35.5763ZM30.3713 12.3594L30.3713 35.5763L35.9251 35.5763L35.9251 12.3594L30.3713 12.3594Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* <img
          src="/images/arrow.svg"
          alt=""
          className="lg:w-[170px] w-[120px] sm:mx-0 mx-auto sm:mt-0 mt-7"
        /> */}
      </div>
      <div className="overflow-hidden">
        <EliteSquad className={"bg-[#1F1F1F]"} />
      </div>

      <div className="25s:container mx-auto bg-[#F1F6F5] xl:px-32 sm:px-2 px-10 pt-20">
        {/* <div className="flex flex-wrap">
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Web Design
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Web Flow
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Business
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Culture
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Case Studies
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Branding
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            UI/UX
          </h5>
        </div> */}
        <div className="flex items-center  flex-wrap gap-[20px] justify-start">
          {Types.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setType(item.name)}
                type="button"
                className={`${spaceGrotesk.className} bg-[#1F1F1F] cursor-pointer group rounded-r-[40px] py-[10px] px-[30px] flex items-center justify-center text-[#FFFFFF] text-[23px] font-[400] uppercase `}
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <span className="">
                    <TextAnimation word={item.name} key={index} />
                  </span>
                  {/* <span className="absolute left-0 cursor-pointer  translate-y-16 opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-500 group-hover:translate-y-0 inline-block">
                    {item.name}
                  </span> */}
                </div>
              </button>
            );
          })}
        </div>
        <h5 className="text-4xl font-medium py-14 ps-2">OTHER TOPICS</h5>
        <div className="flex flex-wrap justify-center ">
          {blogs?.map((val, index) => {
            return (
              <motion.div
                key={index}
                variants={AnimateVarients}
                className="max-w-[430px] "
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                <BlogCard img={val.src} key={index} />;
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex justify-between items-start bg-white xl:mx-32 sm:mx-20 mx-10 sm:my-20 my-10">
        <div>
          <h4 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-medium py-4 px-3">
            Get In Touch
          </h4>
        </div>
        <img
          src="/images/arrow.svg"
          alt=""
          className="p-4 md:w-[110px] sm:w-[80px] w-[70px]"
        />
      </div> */}
    </div>
  );
};

export default AboutSection;
