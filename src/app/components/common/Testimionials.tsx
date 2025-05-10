"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import ".";

// import required modules
import { EffectCards } from "swiper/modules";
import { motion, useTransform, useScroll } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
const Reviews = [
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220452/pexels-photo-220452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220451/pexels-photo-220451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220454/pexels-photo-220454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220455/pexels-photo-220455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
];
function Testimionials() {
  // const settings = {
  //   className: "center",
  //   arrows: false,
  //   vertical: true,
  //   verticalSwiping: true,
  //   centerMode: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1800,
  //   autoplaySpeed: 1000,
  //   cssEase: "ease",
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   swipeToSlide: true,
  //   draggable: true,
  // };
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <div className="bg-[#02ABD5]  ">
      <div className=" md:h-[1000px]   h-[1500px] py-10 lg:h-auto flex lg:flex-row sm:flex-col items-center justify-evenly gap-[20px] overflow-y-hidden  ">
        <div className="lg:w-[40%] px-10 w-[100%]  mt-10">
          <h2 className="flex flex-wrap text-[#FFFFFF] font-[500] text-[44px] ">
            What our Customers have to say!
          </h2>
          <p className="text-[#ffffffbe] font-[400] text-[18px] w-fit flex flex-wrap">
            Client voices, our pride. Discover firsthand experiences as our
            clients share stories of exceptional service, creativity that
            exceeds expectations, and partnerships that define success. Real
            testimonials, real satisfaction – your success, our story.
          </p>

          <div className="flex items-center md:flex-row flex-col justify-start gap-[60px] mt-[80px]">
            <div>
              <h5 className="text-[#FFFFFF] font-[500] text-[38px] font-spaceGrotesk">
                73+
              </h5>
              <p className="text-[#FFFFFF] font-spaceGrotesk tracking-[-0.66px] font-[22px]">
                Full 5 Star Reviews
              </p>
            </div>
            <div>
              <h5 className="text-[#FFFFFF] font-[500] text-[38px] font-spaceGrotesk">
                4.9
              </h5>
              <p className="text-[#FFFFFF] font-spaceGrotesk tracking-[-0.66px] font-[22px]">
                Out of 5 Average Rating
              </p>
            </div>
          </div>
        </div>
        {/* <motion.div
          style={{ y }}
          className=" "
          ref={targetRef}
        > */}
        <section
          ref={targetRef}
          className="relative h-auto lg:w-[60%] w-[100%]  5sm:p-2 overflow-hidden "
        >
          <div className="sticky  top-0 flex  items-center overflow-hidden">
            {/* <motion.div style={{ x }} className="flex gap-4 py-5"> */}
            {/* <Slider {...settings}> */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper "
            >
              {Reviews.map((review, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      className=" bg-white flex flex-col justify-evenly text-black h-full  w-[100%] py-20 rounded-lg    sm:p-[15px]"
                    >
                      <p className=" review text-[14px] font-[400] pb-[30px] text-wrap">
                        {review.review}
                      </p>
                      <div className="bg-[#76767626] h-[1px] "></div>
                      <div className="flex items-center pt-[30px] justify-start gap-[20px]">
                        <div className="w-[90px] h-[70%] ">
                          <Image
                            className="rounded-full w-[90px] object-cover h-[90px]"
                            src={review.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 className=" font-spaceGrotesk tracking-[-0.84px] font-[500] text-[28px] ">
                            {review.name}
                          </h5>
                          <p className="authorName text-[18px] font-spaceGrotesk tracking-[-0.54px]">
                            {review.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* </Slider> */}
            {/* </motion.div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimionials;
