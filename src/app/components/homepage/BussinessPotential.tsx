"use client";
import { animate, stagger, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import TextAnimation from "../common/TextAnimation";
// import { Space_Grotesk } from "next/font/google";
// const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const boxVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    x: "-40vw", // Start position off-screen to the left
  },
};
function BussinessPotential() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  // console.log(isInView);
  // useEffect(() => {
  //   if (isInView) {
  //     controls.start({ y: 200 });
  //   } else {
  //     controls.start({ y: -100 });
  //   }
  // }, [isInView,controls]);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="bg-[#F1F6F5] py-[50px] lg:py-[120px] xl:py-[140px]"
    >
      <div className="2xl:w-[1440px] container px-5 sm:px-[30px] 2xl:px-0 mx-auto">
        <div className="flex items-center max-xl:flex-col-reverse relative z-50 justify-between">
          <motion.div
            className="group "
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
            <h2
              className={`font-spaceGrotesk max-w-[562px] text-[#1F1F1F] text-[30px] sm:text-[40px] max-xl:my-[20px] md:text-[44px] font-[500] uppercase`}
            >
              Unlock the potential of your business
            </h2>
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
              src="/assets/section2img1.png"
              width={685}
              className="max-md:w-full h-auto"
              height={474}
              alt=""
            />
          </motion.div>
        </div>
        <div className="flex items-center max-xl:flex-col gap-[70px]">
          <motion.div
            className="group "
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
            <div className=" lg:w-[657px] h-auto 2xl:w-[850px] 2xl:h-[590px]  rounded-[50px] border xl:mt-[-80px] relative z-10 border-[#FFFFFF1A] bg-[#242424]">
              <Image
                src="/assets/borderbg.png"
                className="absolute max-xl:hidden top-[7px] right-[7px]"
                width={100}
                height={86}
                alt=""
              />
              <h3 className="text-[#FFFFFF] font-spaceGrotesk pt-[30px] md:pt-[120px] px-[10px] sm:px-[50px] 2xl:px-[100px] text-[30px] sm:text-[40px] font-[500]">
                Best Creative Design Agency
                <span className="block text-[#02ABD5]">Since 2018</span>
              </h3>
              <div className="flex items-center justify-center xl:justify-end px-[10px] sm:px-[50px] xl:px-[84px]">
                <p className="max-w-[596px] font-inter text-[18px] text-[#FFFFFF]">{`Revitalize your brand's essence through our graphic design alchemy.
We turn concepts into captivating visuals, forging a distinctive identity
from logos to marketing materials. Immerse your brand in our creative
ingenuity!`}</p>
              </div>
              <div className="flex items-center justify-between px-[10px] sm:px-[50px] max-md:pb-[30px] pt-[30px] md:pt-[72px]">
                <h3
                  className={`font-spaceGrotesk  text-[#FEFE34] text-[40px] sm:text-[60px] font-[500] uppercase`}
                >
                  #1
                </h3>
                <Link
                  className={`group relative font-spaceGrotesk  text-[#FFFFFF] flex items-center justify-center gap-2 text-[23px] font-[500] uppercase`}
                  href="/about"
                >
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="25"
                      viewBox="0 0 22 25"
                      className="group-hover:translate-y-[-10px] group-hover:opacity-0 group-hover:scale-0 group-hover:translate-x-[10px] transition-all duration-[.5s] ease-in-out"
                      fill="none"
                    >
                      <path
                        d="M19.1256 6.12948L20.0445 5.21045L18.2068 3.3724L17.2879 4.29142L19.1256 6.12948ZM17.2879 4.29142L2.87425 18.7081L4.71192 20.5461L19.1256 6.12948L17.2879 4.29142Z"
                        fill="#02ABD5"
                      />
                      <path
                        d="M14.22 6.64478L15.5196 6.64478L15.5196 4.04565L14.22 4.04565L14.22 6.64478ZM14.22 4.04565L3.7931 4.04565L3.7931 6.64478L14.22 6.64478L14.22 4.04565Z"
                        fill="#02ABD5"
                      />
                      <path
                        d="M16.7895 19.7897L16.7895 21.0892L19.3886 21.0892L19.3886 19.7897L16.7895 19.7897ZM16.7895 8.92371L16.7895 19.7897L19.3886 19.7897L19.3886 8.92371L16.7895 8.92371Z"
                        fill="#02ABD5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="25"
                      viewBox="0 0 22 25"
                      className="group-hover:translate-y-0 absolute left-0 translate-y-[10px] group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-0  translate-x-[-10px] transition-all duration-[.5s] ease-in-out"
                      fill="none"
                    >
                      <path
                        d="M19.1256 6.12948L20.0445 5.21045L18.2068 3.3724L17.2879 4.29142L19.1256 6.12948ZM17.2879 4.29142L2.87425 18.7081L4.71192 20.5461L19.1256 6.12948L17.2879 4.29142Z"
                        fill="#02ABD5"
                      />
                      <path
                        d="M14.22 6.64478L15.5196 6.64478L15.5196 4.04565L14.22 4.04565L14.22 6.64478ZM14.22 4.04565L3.7931 4.04565L3.7931 6.64478L14.22 6.64478L14.22 4.04565Z"
                        fill="#02ABD5"
                      />
                      <path
                        d="M16.7895 19.7897L16.7895 21.0892L19.3886 21.0892L19.3886 19.7897L16.7895 19.7897ZM16.7895 8.92371L16.7895 19.7897L19.3886 19.7897L19.3886 8.92371L16.7895 8.92371Z"
                        fill="#02ABD5"
                      />
                    </svg>
                  </>

                  <span className="">
                    <TextAnimation word={"About More"} />
                  </span>
                </Link>
              </div>
            </div>
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
            <div className="flex justify-start flex-wrap gap-[35px] xl:flex-col">
              <div className="flex justify-start gap-[20px] items-center">
                <div className=" w-[90px] h-[90px] flex justify-center items-center bg-[#ffffff] rounded-full">
                  <Image
                    src="/assets/bicon1.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div>
                  <h5
                    className={`font-spaceGrotesk  font-[500] leading-[95%] text-[38px]`}
                  >
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }: any) => (
                        <div>
                          {isVisible ? (
                            <CountUp
                              start={0}
                              scrollSpyOnce={true}
                              end={6000}
                            />
                          ) : (
                            6000
                          )}
                          +
                        </div>
                      )}
                    </VisibilitySensor>
                  </h5>
                  <p
                    className={`font-spaceGrotesk  text-[#767676] text-[22px] font-[400]`}
                  >
                    Completed Projects
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-[20px] items-center">
                <div className=" w-[90px] h-[90px] flex justify-center items-center bg-[#ffffff] rounded-full">
                  <Image
                    src="/assets/bicon2.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div>
                  <h5
                    className={`font-spaceGrotesk  font-[500] leading-[95%] text-[38px]`}
                  >
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }: any) => (
                        <div>
                          {isVisible ? (
                            <CountUp start={0} scrollSpyOnce={true} end={98} />
                          ) : (
                            98
                          )}
                          %
                        </div>
                      )}
                    </VisibilitySensor>
                  </h5>
                  <p
                    className={`font-spaceGrotesk  text-[#767676] text-[22px] font-[400]`}
                  >
                    Positive Rating
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-[20px] items-center">
                <div className=" w-[90px] h-[90px] flex justify-center items-center bg-[#ffffff] rounded-full">
                  <Image
                    src="/assets/bicon3.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div>
                  <h5
                    className={`font-spaceGrotesk  font-[500] leading-[95%] text-[38px]`}
                  >
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
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
                  </h5>
                  <p
                    className={`font-spaceGrotesk  text-[#767676] text-[22px] font-[400]`}
                  >
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BussinessPotential;
