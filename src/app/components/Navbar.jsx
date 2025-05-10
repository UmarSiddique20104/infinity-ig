import React from "react";
import Button from "./Button";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Image from "next/image";
const Nabvar = () => {
  return (
    <div className="flex justify-between items-center px-md-20 lg:px-10 pt-7">
              <Image src="/images/logo.svg" alt=""  />

      <div className="flex items-center">
        <div className="md:block hidden">
        <Button title="Contact" url="/contact" />
        </div>
        <div className="bg-black p-4 w-fit rounded-full ms-4">
          <HiOutlineBars3BottomLeft color="white" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
