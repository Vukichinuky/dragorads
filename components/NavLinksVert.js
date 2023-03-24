import React, { useState } from "react";
import Link from 'next/link'
import { links } from "./Mylinks";

const NavLinksVert = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className=" flex  flex-col items-center  text-left md:cursor-pointer group">
                        <h1
                            className=" bg-zinc-700  hover:bg-yellow-500 hover:text-white text-slate-400  rounded-3xl md:py-4   p-2 px-8
               my-1 mt-3 md:mx-10  group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl md:hidden inline">
                                <ion-icon
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                                        }`}
                                ></ion-icon>
                            </span>

                        </h1>
                        {link.submenu && (
                            <div>
                                <div className=" hidden  flex-col  group-hover:md:block ">

                                    <div className=" flex justify-center flex-col items-center p-2 ">

                                        {link.sublinks.map((mysublinks) => (
                                            <div key={link.name}>
                                                <h1 className="text-xs py-3 px-1 m-1   rounded-3xl  font-light">
                                                    {mysublinks.Head}
                                                </h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li key={link.name} className="    text-slate-400  hover:bg-yellow-500 hover:text-white z-50 bg-zinc-700 py-4 px-5 rounded-3xl">
                                                        <Link
                                                            href={slink.link}
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                    >
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div key={link.name}>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
                                    >
                                        {slinks.Head}

                                        <span className="text-xl md:mt-1  md:ml-2 inline">
                                            <ion-icon
                                                name={`${subHeading === slinks.Head
                                                    ? "chevron-up"
                                                    : "chevron-down"
                                                    }`}
                                            ></ion-icon>
                                        </span>
                                    </h1>
                                    <div
                                        className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.sublink.map((slink) => (
                                            <li key={link.name} className="hover:text-yellow-400  text-center">
                                                <Link href={slink.link} >{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};
export default NavLinksVert;
