"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="container flex flex-wrap items-center justify-between gap-y-5 py-5">
        <div className="flex items-center gap-x-2">
          <h1 className="text-xl font-bold text-secondary">Sulthon</h1>
          <div className="bg-white h-3 w-3 rounded-full"></div>
        </div>
        <button onClick={() => setToggle(!toggle)} className={`sm:hidden`}>
          <Bars3Icon className="h-5 w-5" />
        </button>
        <ul
          className={`bg-slate-500/50 ${
            toggle ? "flex" : "hidden"
          } mx-auto gap-x-3 rounded-full px-4 py-2 backdrop-blur sm:m-0 sm:flex [&>li]:whitespace-nowrap [&>li]:rounded-full  [&>li]:px-4 [&>li]:py-1 [&>li]:text-sm`}
        >
          <li className="bg-primary">Home</li>
          <li className="hover:bg-primary">Projects</li>
          <li className="hover:bg-primary">Contact Me</li>
        </ul>
      </nav>
    </header>
  );
}
