import React from "react";
import Image from "next/image";

export default function ToggleButton() {
  return (
    <div className="absolute flex justify-between items-center w-[38%] left-1/2 -translate-1/2 top-[6.2rem]">
      <div className="font-extrabold text-[3rem] tracking-[1rem]">TODO</div>
      <button className="flex flex-col justify-center items-start">
        <Image src="/icon-moon.svg" height={30} width={30} alt="moon icon" />
      </button>
    </div>
  );
}
