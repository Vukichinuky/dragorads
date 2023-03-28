import React, { useState } from "react";
import Link from 'next/link'
import NavLinksVert from "./NavLinksVert";


const NavVert = () => {


    const [open, setOpen] = useState(false);
    return (
        <nav className=" ">
            <div className=" font-bold  ">
                <div className="z-50  md:w-auto   flex justify-between">

                    <div className="w-full bg-white sticky-top opacity-80 fixed flex" onClick={() => setOpen(!open)}>
                        {open ? (
                            <img className="md:hidden m-2 h-10 p-2 z-50" src="/x-symbol-svgrepo-com (2).svg" alt="Close" />
                        ) : (
                            <img className="md:hidden m-2 h-10 z-50" src="/menu-duo-lg-svgrepo-com.svg" alt="Menu" />
                        )}
                    </div>
                </div>
                <ul className="md:flex hidden  mt-10 uppercase items-start gap-1 ">
                    <li>
                        <Link href="/" className="  inline-block">
                            <p className=" bg-zinc-700 text-slate-400 hover:bg-yellow-500 hover:text-white cursor-pointer  rounded-3xl md:py-4   p-2 px-8
               my-1 mt-3 md:mx-10 ">почетнa</p>
                        </Link>
                    </li>
                    <NavLinksVert />
                </ul>
                <div className="md:block hidden">
                </div>
                {/* Mobile nav izmeni jebeni hamburger menu*/}
                <ul
                    className={`
        md:hidden bg-white uppercase fixed-top w-full z-40 bottom-0 p-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    <li>
                        <Link href="/" className=" text-center ">
                            <p className="   text-black hover:text-yellow-500 font-bold uppercase rounded-3xl md:py-4   p-2 px-8
               my-1 mt-3 md:mx-10">почетнa</p>
                        </Link>
                    </li>
                    <NavLinksVert />
                    <div className="py-5">
                    </div>
                </ul>
            </div>
        </nav>
    );
};
export default NavVert;
