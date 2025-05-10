import React from "react";

function TextAnimation({ word, className }: any) {
  const letterDelay = [
    0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450,
    480, 510, 540,
  ];
  const letterDuration = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500, 1600, 1700, 1800, 1900, 2000,
  ];

  return (
    <div className="cursor-pointer">
      <div className="flex h-[50%] cursor-pointer items-center relative flex-col justify-center   overflow-hidden ">
        <div className="flex cursor-pointer">
          {word.split("").map((letter: any, index: any) => (
            <span
              key={index}
              className={`delay-[${letterDelay[index]}] ${className} ${
                letter == " " ? "px-1" : ""
              } transition-all group-hover:-translate-y-16 cursor-pointer group-hover:opacity-0 group-hover:rotate-12  ease-in-out duration-${
                letterDuration[index]
              }`}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* 2 */}
        <div className="flex absolute cursor-pointer ">
          {word.split("").map((letter: any, index: any) => (
            <span
              key={index}
              className={` delay-[${letterDelay[index]}] ${
                letter == " " ? "px-1" : ""
              }  transition-all opacity-0 cursor-pointer  group-hover:opacity-100  translate-y-16 group-hover:translate-y-0 ease-in-out duration-${
                letterDuration[index]
              } `}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
