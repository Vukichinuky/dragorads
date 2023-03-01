import React, { useState } from "react";
import Link from 'next/link'
import NavLinks from "./NavLinks";


const Navbar = () => {


  const [open, setOpen] = useState(false);
  return (
    <nav className=" ">
      <div className=" font-medium ">
        <div className="z-50  md:w-auto   flex justify-between">
       
          <div className="text-3xl  w-full bg-white  sticky-top opacity-80 fixed flex " onClick={() => setOpen(!open)}>
          <img name={`${open ? "close" : 'menu'}`} className=" md:hidden m-2 h-10 z-50  " src="/menu-svgrepo-com.svg" alt="" />

          </div>
        </div>
        <ul className="md:flex hidden flex-col mt-10 uppercase items-start gap-1 ">
        <li>
            <Link href="/" className="py-7 px-3 inline-block">
             <p className=" bg-zinc-700 text-slate-400 hover:bg-yellow-500 hover:text-white cursor-pointer  rounded-3xl md:py-4   p-2 px-8
               my-1 mt-3 md:mx-10 ">почетнa</p>
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
        </div>
         {/* Mobile nav */}
         <ul
          className={`
        md:hidden bg-white uppercase fixed-top w-full z-40 bottom-0 p-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
             <li>
            <Link href="/" className=" ">
             <p className="  text-zinc-800   font-bold uppercase rounded-3xl md:py-4   p-2 px-8
               my-1 mt-3 md:mx-10">почетнa</p>
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
          </div>
        </ul>
      </div>
      </nav>
  );
};
export default Navbar;
