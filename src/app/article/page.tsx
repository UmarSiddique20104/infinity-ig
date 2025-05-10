"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import Image from "next/image";
import { MenuContext } from "../components/context/MenuContext";
const Articlepage = () => {
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
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section bg-cover bg-[url('/assets/newbg.png')]">
        <div className="lg:flex xl:px-32 lg:px-20 px-10 py-20 font-spaceGrotesk ">
          <motion.div
            className="lg:w-1/2 lg:pe-4 flex justify-center"
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
              src="/images/articles/article2.png"
              width={1000}
              height={100}
              className="w-[100%] object-contain"
              alt="Not Found"
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
            <h1 className="uppercase text-5xl xl:text-6xl xll:text-8xl font-bold">
              5 Web design trends for 2024
            </h1>
            <div className="sm:flex xl:px-5 lg:px-5 px-5 sm:pb-5 pb-5 pt-5 sm:text-left text-center">
              <div>
                <h5 className="xl:text-1xl md:text-1xl text-1xl md:mr-2 lg:mr-2 font-bold">
                  Article Type:
                </h5>
                <p className="pt-2 text-gray-400">UI/UX</p>
              </div>
              <div>
                <h5 className="xl:text-1xl md:text-1xl text-1xl md:mr-2 lg:mr-2 font-bold">
                  Upload Date:
                </h5>
                <h4 className="xl:text-1xl md:text-1xl text-1xl font-semibold pt-2 text-gray-400">
                  20/02/2024
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="xl:px-32 bg-[#F1F6F5] sm:px-4 md:px-20 pt-20">
        <div className="flex justify-start pt-7">
          <Image
            className="me-2 w-3 h-3 flex mt-3 "
            src="/images/services/Ellipse 6.png"
            width={100}
            height={100}
            alt="Not Found"
          />
          <h3 className="space-grotesk text-3xl uppercase font-medium text-left">
            Unveiling the Future: 5 Web Design Trends Set to Dominate in 2024
          </h3>
        </div>
        <p className="text-gray-400 mt-5 text-1xl text-left">
          As we embark on a new year, the ever-evolving landscape of web design
          continues to push boundaries and redefine digital experiences. In
          2024, we anticipate a convergence of creativity, technology, and
          user-centricity, giving rise to innovative design trends that will
          shape the digital realm. Here, we unveil five key web design trends
          poised to dominate in the year ahead, offering insights and
          inspiration for designers and businesses alike.
        </p>
        {/* 1 */}
        <div className="lg:flex justify-between items-center mt-5 ">
          <motion.div
            className="lg:w-1/2 me-5 mb-4 lg:mb-0 "
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
            <div>
              <h5 className="xl:text-4xl lg:text-3xl sm:text-4xl text-2xl leading-tight font-medium tracking-tight lg:w-1/2 sm:w-3/5 lg:mb-0 mb-7">
                1Metaverse-inspired Design:
              </h5>
              <p className="text-gray-400 leading-5 pe-8 text-base">
                The Metaverse, a virtual shared space, is increasingly
                influencing web design aesthetics, blurring the lines between
                reality and digital realms. Expect to see designs that
                incorporate futuristic elements, immersive experiences, and
                interactive interfaces reminiscent of virtual worlds. From 3D
                graphics and spatial navigation to augmented reality overlays,
                Metaverse-inspired design will elevate user engagement and
                redefine online interactions.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 lg:pe-4 flex justify-center"
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
            <div>
              <Image
                src="/images/articles/article8.png"
                width={1000}
                height={10}
                className="w-[100%]"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        {/* 2 */}
        <div className=" flex lg:flex-row flex-col justify-between items-center mt-5">
          <motion.div
            className="lg:w-1/2 lg:pe-4 flex justify-center order-2 lg:order-1 "
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
              src="/images/articles/Rectangle 40.png"
              width={1000}
              height={100}
              className="w-[100%]"
              alt=""
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 ms-5 mb-4 lg:mb-0 order-1  lg:order-2"
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
              <h5 className="xl:text-4xl lg:text-3xl sm:text-4xl text-2xl leading-tight font-medium tracking-tight lg:w-1/2 sm:w-3/5 lg:mb-0 mb-7">
                2Metaverse-inspired Design:
              </h5>
              <p className="text-gray-400 leading-5 pe-8 text-base">
                The Metaverse, a virtual shared space, is increasingly
                influencing web design aesthetics, blurring the lines between
                reality and digital realms. Expect to see designs that
                incorporate futuristic elements, immersive experiences, and
                interactive interfaces reminiscent of virtual worlds. From 3D
                graphics and spatial navigation to augmented reality overlays,
                Metaverse-inspired design will elevate user engagement and
                redefine online interactions.
              </p>
            </div>
          </motion.div>
        </div>
        {/* 3 */}
        <div className=" flex lg:flex-row flex-col justify-between items-center mt-5">
          <motion.div
            className="lg:w-1/2 lg:pe-4 flex justify-center order-2 "
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
              src="/images/articles/Rectangle 40 (1).png"
              width={1000}
              height={100}
              className="w-[100%]"
              alt=""
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 ms-5 mb-4 lg:mb-0 order-1"
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
            <h5 className="xl:text-4xl lg:text-3xl sm:text-4xl text-2xl leading-tight font-medium tracking-tight lg:w-1/2 sm:w-3/5 lg:mb-0 mb-7">
              3Metaverse-inspired Design:
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
              The Metaverse, a virtual shared space, is increasingly influencing
              web design aesthetics, blurring the lines between reality and
              digital realms. Expect to see designs that incorporate futuristic
              elements, immersive experiences, and interactive interfaces
              reminiscent of virtual worlds. From 3D graphics and spatial
              navigation to augmented reality overlays, Metaverse-inspired
              design will elevate user engagement and redefine online
              interactions.
            </p>
          </motion.div>
        </div>
        {/* 4 */}
        <div className=" flex lg:flex-row flex-col justify-between items-center mt-5">
          <motion.div
            className="lg:w-1/2 lg:pe-4 flex justify-center order-2 lg:order-1 "
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
              src="/images/articles/Rectangle 40 (2).png"
              width={1000}
              height={100}
              className="w-[100%]"
              alt=""
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 ms-5 mb-4 lg:mb-0 order-1 lg:order-2  "
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
            <h5 className="xl:text-4xl lg:text-3xl sm:text-4xl text-2xl leading-tight font-medium tracking-tight lg:w-1/2 sm:w-3/5 lg:mb-0 mb-7">
              4Metaverse-inspired Design:
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
              The Metaverse, a virtual shared space, is increasingly influencing
              web design aesthetics, blurring the lines between reality and
              digital realms. Expect to see designs that incorporate futuristic
              elements, immersive experiences, and interactive interfaces
              reminiscent of virtual worlds. From 3D graphics and spatial
              navigation to augmented reality overlays, Metaverse-inspired
              design will elevate user engagement and redefine online
              interactions.
            </p>
          </motion.div>
        </div>
        {/* 5 */}
        <div className=" flex lg:flex-row flex-col justify-between items-center mt-5">
          <motion.div
            className="lg:w-1/2 lg:pe-4 flex justify-center order-2 "
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
              src="/images/articles/Rectangle 40 (3).png"
              width={1000}
              height={100}
              className="w-[100%]"
              alt=""
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 ms-5 order-1 mb-4 lg:mb-0"
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
            <h5 className="xl:text-4xl lg:text-3xl sm:text-4xl text-2xl leading-tight font-medium tracking-tight lg:w-1/2 sm:w-3/5 lg:mb-0 mb-7">
              5Metaverse-inspired Design:
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
              The Metaverse, a virtual shared space, is increasingly influencing
              web design aesthetics, blurring the lines between reality and
              digital realms. Expect to see designs that incorporate futuristic
              elements, immersive experiences, and interactive interfaces
              reminiscent of virtual worlds. From 3D graphics and spatial
              navigation to augmented reality overlays, Metaverse-inspired
              design will elevate user engagement and redefine online
              interactions.
            </p>
          </motion.div>
        </div>

        <div className="mb-5">
          <div className="flex justify-start pt-7">
            <Image
              className="me-2 w-3 h-3 flex mt-3"
              src="/images/services/Ellipse 6.png"
              width={1000}
              height={100}
              alt=""
            />
            <h3 className="space-grotesk text-3xl uppercase font-medium text-left">
              Conclusion
            </h3>
          </div>

          <p className="text-gray-400 mt-5 text-1xl text-left">
            As we look ahead to 2024, the future of web design is brimming with
            possibilities. From Metaverse-inspired aesthetics and sustainable
            practices to data-driven personalization and inclusive design, the
            year ahead promises to be an exciting journey of innovation and
            creativity. By embracing these emerging trends and embracing the
            ever-changing digital landscape, designers and businesses can stay
            ahead of the curve and deliver exceptional web experiences that
            resonate with users in meaningful ways.
          </p>
        </div>

        <div>
          <div className="flex justify-start pt-7">
            <Image
              className="me-2 w-3 h-3 flex mt-3"
              src="/images/services/Ellipse 6.png"
              width={100}
              height={100}
              alt=""
            />
            <h3 className="space-grotesk text-3xl uppercase font-medium text-left">
              More Articles
            </h3>
          </div>
        </div>

        <div className="xsm:grid slg:grid-cols-3 xsm:grid-cols-2 justify-self-center w-full ">
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
    </div>
  );
};

export default Articlepage;
