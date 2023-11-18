import React, { useState } from "react";
import Link from "next/link";
import { links2 } from "./MylinksVert";

const NavLinksVert = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links2.map((link1) => (
        <div key={link1.names}>
          <div className=" flex  flex-col items-center  text-left md:cursor-pointer group">
            <h1
              className=" bg-[#cbcbcb]  w-24 text-center text-xs xl:text-l xl:w-44   hover:bg-yellow-500 hover:text-white text-white  rounded-3xl md:py-4    p-3
                mt-3 md:mx-10  group"
              onClick={() => {
                heading !== link1.names
                  ? setHeading(link1.names)
                  : setHeading("");
                setSubHeading("");
              }}
            >
              {link1.names}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  names={`${
                    heading === link1.names ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </h1>
            {link1.submenu && (
              <div>
                <div className=" hidden  flex-col  group-hover:md:block ">
                  <div className=" flex justify-center flex-col items-center p-2 ">
                    {link1.sublinks.map((mysublinks) => (
                      <div key={link1.names}>
                        <h1 className="text-xs py-3 px-1 m-1   rounded-3xl  font-light">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink44) => (
                          <Link href={slink44.link1}>
                            <li
                              key={link1.names}
                              className="    text-white  hover:bg-yellow-500 hover:text-white z-50 bg-[#cbcbcb] py-4 px-5 rounded-3xl"
                            >
                              {slink44.names}
                            </li>
                          </Link>
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
            ${heading === link1.names ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link1.sublinks.map((slinks23) => (
              <div key={link1.names}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks23.Head
                        ? setSubHeading(slinks23.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks23.Head}

                    <span className="text-xl md:mt-1  md:ml-2 inline">
                      <ion-icon
                        names={`${
                          subHeading === slinks23.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks23.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks23.sublink.map((slink44) => (
                      <li
                        key={link1.names}
                        className="hover:text-yellow-400  text-center"
                      >
                        <Link href={slink44.link1}>{slink44.names}</Link>
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
