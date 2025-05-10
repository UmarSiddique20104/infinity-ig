'use client'
import React, { useContext } from "react";
import Service from "../components/service";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuContext } from "../components/context/MenuContext";


const Servicepage = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section font-spaceGrotesk">
        <div className="lg:flex xl:px-32 lg:px-20 px-2 py-20 bg-cover bg-[url('/assets/newbg.png')]">
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
          <div >
            <Image src="/images/services/Rectangle 42.png"alt=""  width={"2000"}
              height={"100"} />
          </div>
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
          <div >
            <h1 className="text-5xl xl:text-6xl xxl:text-8xl font-bold">
              UX <br className="lg:block hidden" /> Reserach
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl xxl:text-4xl font-semibold">
              Enhancing User Experience: The Power of Effective Search Services
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base font-inter">
              In the digital realm, where user experience reigns supreme, the 
              significance of search functionality cannot be overstated. A seamless, 
              intuitive search service is not just a feature; it&apos;s a gateway to content, 
              products, and information. Here&apos;s why optimizing your UX search service matters
            </p>
          </div>
          </motion.div>
        </div>
      </div>
     <Service />
  
    </div>
   
  );
};

export default Servicepage;
