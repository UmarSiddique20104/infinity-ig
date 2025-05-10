import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ img }) => {
  console.log(img);
  return (
    
    <Link href={'/article'}>
      <div className="px-3  my-3 cursor-pointer">
        <Image src={img} width={"2000"}
              height={"100"} alt="" />
        <div className="p-5">
          <div className="text-gray-400 flex">
            <p>Ui/UX</p>
            <p className="ps-10">3 Minutes Read</p>
          </div>
          <h5 className="font-medium text-2xl mt-2">
            5 Web design trends <br className="xl:block hidden" />
            for 2024
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
