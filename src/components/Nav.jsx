import React, { useState } from "react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

import { BookOpenIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
    let Links = [
        { name: "HOME", link: "#" },
        { name: "SERVICES", link: "#services" },
        { name: "ABOUT", link: "#about" },
        { name: "CONTACT", link: "#contact" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-40">
            <div className="md:flex items-center justify-between md:bg-opacity-100 md:bg-white max-md:bg-black py-4 md:px-10 px-7">
                {/* logo section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <img className="w-36 max-md:hidden" src={logo} alt="" />
                    <img className="w-[3rem] md:hidden" src={logo2} alt="" />
                </div>
                {/* Menu icon */}
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 "
                >
                    {open ? (
                        <XMarkIcon className="text-red-500" />
                    ) : (
                        <Bars3Icon className="text-red-500" />
                    )}
                </div>
                {/* linke items */}
                <ul
                    className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static max-md:bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-16" : "top-[-210px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li className="md:ml-8 md:my-0 my-7 font-semibold first:ml-0">
                            <a
                                href={link.link}
                                className="md:text-gray-800 hover:bg-gradient-to-r from-orange-600 to-pink-700 inline-block hover:text-transparent max-md:text-white bg-clip-text duration-500 "
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* button */}
                <button className="hidden relative md:flex lg:ml-[90px] md:ml-[40px]">
                    Button
                </button>
            </div>
        </div>
    );
};

export default Nav;
