"use client";
import React, { useContext } from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import EliteSquad from "../components/common/EliteSquad";
import Testimionials from "../components/common/Testimionials";
import Image from "next/image";
import { MenuContext } from "../components/context/MenuContext";

const Teampage = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="overflow-hidden" onClick={handleMenuClick}>
      <div className="hero-section  25s:container mx-auto">
        <div className="lg:flex bg-cover bg-[url('/assets/newbg.png')] xl:px-32 lg:px-20 px-10 py-20 font-spaceGrotesk">
          <div className="lg:w-1/2  flex justify-center">
            <Image src="/images/team.png" alt="" width={"2000"} height={"2000"}/>
          </div>
          <div className="lg:w-1/2 lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl xl:text-6xl xll:text-8xl font-bold">
              Our Team
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl xxl:text-4xl font-semibold">
              Meet the Creatives: Unveiling Our Infinity Graphic Team
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
              You can get to know the talented individuals who bring creativity,
              passion, and expertise to every project we undertake. Here, we
              introduce you to the diverse and dynamic team behind our success,
              highlighting their skills, experiences, and contributions to our
              collective vision.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="bg-white text-black py-20">
        <div className="lg:flex">
          <div className="lg:w-1/3"></div>
          <h4 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl lg:-ms-10 lg:px-0 md:px-20 px-10 lg:w-1/3 uppercase leading-tight">
            The Elite <br className="lg:block hidden" /> sAquad{" "}
            <br className="lg:block hidden" /> Of{" "}
            <br className="lg:block hidden" /> Builders
          </h4>
          <div className="xxl:-ms-10 ms-10 lg:w-1/3 xxl:pe-32 lg:pe-10 ">
            <div className="flex justify-center xl:pe-44 lg:pe-20 lg:mt-0 mt-5">
              <Image
                src="/images/Vector.png"
                alt=""
                className="lg:w-[110px] w-[80px]"
              />
            </div>
            <p className="text-lg lg:pt-20 pt-10 lg:pb-0 pb-16 leading-8 lg:text-left text-center">
              We are a group of passionate <br /> creators spread across the
              globe, <br />
              united by a singular purpose. JUST <br /> GREAT WORK
            </p>
          </div>
        </div>
        <Image
          src="/images/Group 56.png"
          alt=""
          className="xl:px-32 lg:px-20 px-10 sm:-mt-32 -mt-20"
        />
      </div> */}
      <div className=" bg-[#F1F6F5]">
        <EliteSquad
          className={" bg-[#F1F6F5]"}
          txtcol={"text-black"}
          pcol={"text-black"}
        />
      </div>

      <div className="25s:container items-center bg-[#F1F6F5]   mx-auto sm:flex 4sm:flex-row flex-col gap-3 justify-between xl:px-32 lg:px-20 px-10 py-20">
        <div>
          <h5 className="md:text-4xl text-3xl font-medium pb-5 tracking-tight">
            WANT TO JUMP ON BOARD?
          </h5>
          <h4 className="xl:text-9xl lg:text-8xl md:text-6xl text-5xl font-medium pt-2 tracking-tighter">
            Check Out <br className="sm:block hidden" /> Open Positions
          </h4>
        </div>
        <div className="flex group hover:rotate-0 justify-center items-center 5sm:w-[110px] 5sm:h-[110px] w-[70px] h-[70px] bg-[#02ABD5] rounded-full ">
          <div className="relative cursor-default">
            <span className="inline-block  transition-all  group-hover:opacity-100 group-hover:rotate-45 cursor-default ease-in-out duration-500">
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
        {/* <Image
          src="/images/arrow.svg"
          alt=""
          className="lg:w-[170px] w-[120px] sm:mx-0 mx-auto sm:mt-0 mt-7"
        /> */}
      </div>

      {/* <div className="bg-[#02ABD5] ">
        <div className="md:container mx-auto  text-white xl:px-32 lg:px-20 px-10 lg:flex items-center">
        <div className="lg:w-1/2 pe-10 lg:py-0 py-14 ">
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
        </div>
        <div className="lg:w-1/2 ">
          <TestimonialSlider />
        </div>
        </div>
      </div> */}
      <div>
        <Testimionials />
      </div>
    </div>
  );
};

export default Teampage;
