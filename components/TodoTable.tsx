import React from "react";
import TodoItem from "./TodoItem";

export default function TodoTable() {
  return (
    <div className="flex flex-col gap-[1.5rem] text-slate-700 w-[38%] text-xl">
      <div className=" bg-slate-50 flex justify-center items-center gap-[1rem] rounded-md h-[4.2rem]">
        <div className="pl-[1.5rem]">
          <div className="h-[1.5rem] w-[1.5rem] border-[2px] border-slate-200 rounded-full"></div>
        </div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="w-full py-[1rem] px-[0.5rem] border-none active:border-none focus:border-none placeholder:text-slate-400 outline-none focus:outline-none"
        />
      </div>

      <div className="w-full bg-slate-50 rounded-t-md">
        <p className="py-[1rem] text-center text-slate-400">No todos yet...</p>
      </div>
    </div>
  );
}
