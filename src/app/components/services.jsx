"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const Services = () => {
  return (
    <div className="w-full ">
      <div className="xl:px-32 w-full  lg:px-20 xsm:px-10 px-4">
        <div className="flex justify-start fw-medium sm:text-3xl text-2xl pt-7">
          <Image
            className="me-2 w-3 h-3 flex mt-3"
            src="/images/services/Ellipse 6.png"
            width={"2000"}
            height={"100"}
            alt=""
          />
          <h3 className="space-grotesk text-3xl uppercase font-medium text-left ">
            Services
          </h3>
        </div>
      </div>
      <div className="xl:px-32 w-full lg:px-20 xsm:px-10 px-4 sm:py-20 py-10">
        <div className="mb-5 w-full">
          <div className="lg:flex w-[100%] justify-between font-spaceGrotesk">
            <div className="lg:w-1/2  font-spaceGrotesk w-full">
              <h6 className="font-semibold text-1xl ms-3">
                <span className="text-gray-400 me-4 text-1xl xl:text-1xl xxl:text-1xl font-bold">
                  01
                </span>
                UI & UX Design in Figma
              </h6>
              <h2 className="w-full font-semibold xl:text-5xl lg:text-5xl sm:text-4xl text-5xl leading-tight  tracking-tight lg:w-full  lg:mb-0 mb-7 pb-10 ps-3">
                Web Design
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pe-4 flex lg:justify-end mb-4 ">
              <ul className="lg:w-[85%] w-full">
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F w-full rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  UX RESEARCH
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  MAPPING AND STORY BOARDING
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  WIREFRAMING
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  UI DESIGN
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  PROTOTYPING AND TESTING
                </li>
              </ul>
            </div>
          </div>

          <div className="flex xmd:flex-row flex-col gap-5 mb-5 justify-between items-center">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -50,
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
              <Link href={"/service"}>
                <div className="flex flex-col lg:pe-4  gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 43.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div>
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      StellarShield
                    </h3>
                    <p className="text-gray-400 text-base ">
                      <span className="lg:pe-2">Crypto Blockchain Agency</span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 44.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      Anasoli
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        Web Development Agency
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="my-10">
          <div className="lg:flex w-[100%] justify-between font-spaceGrotesk">
            <div className="lg:w-1/2 w-full">
              <h6 className="font-semibold text-1xl ms-3">
                <span className="text-gray-400 me-4 text-1xl xl:text-1xl xxl:text-1xl font-bold">
                  02
                </span>
                Creativity in flow
              </h6>
              <h2 className="w-full font-semibold xl:text-5xl lg:text-5xl sm:text-4xl text-5xl leading-tight  tracking-tight lg:w-full lg:mb-0 mb-7 pb-10 ps-3">
                Graphic Designing
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pe-4 flex lg:justify-end mb-4 ">
              <ul className="uppercase lg:w-[85%] w-full">
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  Project Definition and Research
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    alt=""
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                  />
                  Concept Development
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    alt=""
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                  />
                  Client Feedback and Revisions
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    alt=""
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                  />
                  Final Design Development
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    alt=""
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                  />
                  Delivery and Feedback
                </li>
              </ul>
            </div>
          </div>

          <div className="flex xmd:flex-row flex-col gap-5 mb-5 justify-between items-center">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 46.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      Thalassea
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        Sea Moss Gel
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 47.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      PLuck
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        A streamer Gaming Overlay
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mb-5">
          <div className="lg:flex w-[100%] justify-between font-spaceGrotesk">
            <div className="lg:w-1/2 w-full">
              <h6 className="font-semibold text-1xl ms-3">
                <span className="text-gray-400 me-4 text-1xl xl:text-1xl xxl:text-1xl font-bold">
                  03
                </span>
                Digital & Print
              </h6>
              <h2 className="font-semibold xl:text-5xl lg:text-5xl sm:text-4xl text-5xl leading-tight  tracking-tight lg:w-full  lg:mb-0 mb-7 pb-10 ps-3">
                Branding &Identity
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pe-4 flex lg:justify-end mb-4">
              <ul className="uppercase lg:w-[85%] w-full">
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  BRAND RESEARCH
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  BRAND STRATEGY
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  BRAND IDENTITY
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  LOGO DESIGN
                </li>
              </ul>
            </div>
          </div>

          <div className="flex xmd:flex-row flex-col gap-5 mb-5 justify-between items-center">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 48.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      Thalassea
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        Sea Moss Gel
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 49.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      PLuck
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        A streamer Gaming Overlay
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mb-5">
          <div className="lg:flex w-[100%] justify-between font-spaceGrotesk">
            <div className="lg:w-1/2 w-full">
              <h6 className="font-semibold text-1xl ms-3">
                <span className="text-gray-400 me-4 text-1xl xl:text-1xl xxl:text-1xl font-bold">
                  04
                </span>
                Crafting Motion Graphics Masterpieces
              </h6>
              <h2 className=" w-full font-semibold xl:text-5xl lg:text-5xl sm:text-4xl text-5xl leading-tight  tracking-tight lg:w-full  lg:mb-0 mb-7 pb-10 ps-3">
                Motion Graphics
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pe-4 flex lg:justify-end mb-4">
              <ul className="uppercase lg:w-[85%] w-full">
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  Conceptualization
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  Design and Asset Creation
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  Animation
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  Sound Design
                </li>
                <li className="mb-2 px-4 py-2 border-2 border-1F1F1F rounded-full pl-4 space-y-2 flex items-center">
                  <Image
                    className="rounded-full bg-black me-2 w-5 h-5"
                    src="/images/services/Group 12.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  Iteration and Feedback
                </li>
              </ul>
            </div>
          </div>

          <div className="flex xmd:flex-row flex-col gap-5 mb-5 justify-between items-center">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center cursor-pointer">
                  <Image
                    src="/images/services/Rectangle 41.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      Thalassea
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        Sea Moss Gel
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 50,
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
              <Link href={"/service"}>
                <div className="flex flex-col  lg:pe-4 gap-4 justify-center">
                  <Image
                    src="/images/services/Rectangle 45.png"
                    width={"2000"}
                    height={"100"}
                    alt=""
                  />
                  <div className="">
                    <h3 className="space-grotesk text-4xl font-medium text-left">
                      PLuck
                    </h3>
                    <p className="flex:lg text-gray-400 leading-5 text-base ">
                      <span className="lg:pe-2 text-1xl text-1lg">
                        A streamer Gaming Overlay
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
