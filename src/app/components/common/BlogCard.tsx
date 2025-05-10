import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import { motion } from "framer-motion";
function BlogCard({title,img,type,time,index}:any) {
  return (
    <Link href={"/project"} key={index}>
    <div>
      <motion.div
        key={index}
        // variants={AnimateVarients}
        // variants={AnimateVariants}
        // whileHover={{ scale: 1.05 }}
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
        <Image
          src={img}
          width={430}
          height={300}
          className="h-auto rounded-[40px]"
          alt=""
        />
        <div className="flex items-center p-[30px] justify-start gap-[60px]">
          <p
            className={`${spaceGrotesk.className} text-[18px] text-[#828282] font-[500]`}
          >
            {type}
          </p>
          <p
            className={`${spaceGrotesk.className} text-[18px] text-[#828282] font-[500]`}
          >
            {time}
          </p>
        </div>
        <h5
          className={`${spaceGrotesk.className}  text-[28px] text-[#1F1F1F] font-[500]`}
        >
          {title}
        </h5>
      </motion.div>
    </div>
  </Link>
  )
}

export default BlogCard