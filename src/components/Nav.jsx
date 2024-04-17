import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import "../App.css";

import { BookOpenIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
    let Links = [
        { name: "KEZDŐLAP", link: "#" },
        { name: "RÓLUNK", link: "#about" },
        { name: "MUNKÁINK", link: "#projects" },
        { name: "KAPCSOLAT", link: "#contact" },
    ];
    let [open, setOpen] = useState(false);
    let [activeLink, setActiveLink] = useState(null); // State to track active link

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".nav-container")) {
                setActiveLink(null); // Reset active link state when clicking outside the navigation links
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-40 ">
            <div className="md:flex items-center justify-between md:bg-opacity-100 md:bg-white max-md:bg-black py-4 md:px-10 px-7">
                {/* logo section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <img className="w-36 max-md:hidden" src={logo} alt="logo" />
                    <img
                        className="w-[3rem] md:hidden"
                        src={logo2}
                        alt="logo"
                    />
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
                    {Links.map((link, index) => (
                        <li
                            className="md:ml-8 md:my-0 my-7 font-semibold first:ml-0 relative"
                            key={index}
                        >
                            {" "}
                            {/* Added key prop */}
                            <a
                                href={link.link}
                                className={`md:text-gray-800 hover:text-red-500 max-md:text-white duration-500 focus:text-red-500 ${
                                    activeLink === index ? "active " : ""
                                } `}
                                onClick={() => setActiveLink(index)}
                            >
                                {link.name}
                            </a>
                            {activeLink === index && (
                                <div className="flex items-center justify-center text-center h-2">
                                    <span className="dot h-2 w-2 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full"></span>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                {/* button */}
                <button className="hidden relative md:flex  text-black bg-gradient-to-br from-pink-500 to-orange-400 hover:font-bold duration-500  font-medium rounded-3xl text-sm px-5 py-2.5 text-center ">
                    Beszéljünk!
                </button>
            </div>
        </div>
    );
};

export default Nav;
