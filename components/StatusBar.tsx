import React from "react";

export default function StatusBar() {
  return (
    <div className="flex py-[0.8rem] justify-between items-center px-[1.5rem] text-slate-[400] bg-slate-50 w-[38%] rounded-b-md text-slate-400 text-[1rem]">
      <div className="w-1/3">
        <p className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
          0 items left
        </p>
      </div>
      <div className="bold flex justify-center gap-[0.8rem] font-bold w-1/3">
        <button className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
          All
        </button>
        <button className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
          Active
        </button>
        <button className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
          Completed
        </button>
      </div>
      <div className="w-1/3 text-end">
        <button className="hover:text-slate-500 cursor-pointer ease-in-out duration-300">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
