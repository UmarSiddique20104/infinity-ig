import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="xl:px-44 sm:px-20 px-5 pt-16">
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:pe-36 lg:mb-0 mb-10">
          <div className="sm:block flex justify-center">

          <Image src="/images/logo.svg" alt="" />
          </div>
          <div className="flex justify-between shadow-md mt-10 p-3">
            <div>
              <h5 className="uppercase text-lg font-medium">Stay Up to Date</h5>
              <p className="text-gray-400">Sign up to our newsletter today</p>
            </div>
            <Image src="/images/arrow.svg" width={50} alt=""/>
          </div>
        </div>
        <div className="lg:w-1/2 sm:flex justify-between">
          <div className="sm:text-left text-center">
            <h5 className="mb-5 font-medium">QUICK LINKS</h5>
            <ul className="text-gray-400">
              <li className="my-2 cursor-pointer"><a href="/">Home</a></li>
              <li className="my-2 cursor-pointer"><a href="about">About Us</a></li>
              <li className="my-2 cursor-pointer"><a href="projects">Our Projects</a></li>
              <li className="my-2 cursor-pointer"><a href="articles">Articles</a></li>
              <li className="my-2 cursor-pointer"><a href="team">Team</a></li>
            </ul>
          </div>
          <div className="sm:my-0 my-10 sm:text-left text-center">
            <h5 className="mb-5 font-medium">OUR PROJECTS</h5>
            <ul className="text-gray-400">
              <li className="my-2 cursor-pointer">Mobile App Designs</li>
              <li className="my-2 cursor-pointer">Web Designs</li>
              <li className="my-2 cursor-pointer">Motion Graphics</li>
              <li className="my-2 cursor-pointer">Branding</li>
              <li className="my-2 cursor-pointer">Style Guide</li>
            </ul>
          </div>
          <div className="sm:text-left text-center">
            <h5 className="mb-5 font-medium">FOLLOW US</h5>
            <ul className="text-gray-400">
              <li className="my-2 cursor-pointer">Dribble</li>
              <li className="my-2 cursor-pointer">Behance</li>
              <li className="my-2 cursor-pointer">Linked In</li>
              <li className="my-2 cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between text-sm mt-16 mb-7 sm:text-left text-center">
        <p>©2024 Infinity Graphics, All rights reserved.</p>
        <div className="flex sm:justify-start justify-center font-spaceGrotesk">
          <a  href="terms_and_conditions"className="me-4 font-spaceGrotesk">Terms & Conditions</a>
          <a href="privacy-policy" className="font-spaceGrotesk">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
