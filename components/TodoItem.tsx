import React from "react";
import Image from "next/image";

export default function TodoItem() {
  return (
    <div className="border-b-[1.8px] border-slate-300 py-[1rem] flex justify-between items-center px-[1.5rem]">
      <div>
        <div className="h-[1.5rem] w-[1.5rem] border-[2px] border-slate-200 rounded-full"></div>
      </div>
      <div className="w-full text-start px-[1.5rem]">Create New todo</div>
      <div>
        <button>
          <Image
            src="icon-cross.svg"
            width={20}
            height={20}
            alt="cross"
          ></Image>
        </button>
      </div>
    </div>
  );
}
