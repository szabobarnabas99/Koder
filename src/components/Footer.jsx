import React from "react";
import logo from "../assets/logo.svg";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-black text-white ">
            <div className="flex justify-center mb-[56px] ">
                <hr className=" md:w-[1320px] border-none h-[2px] bg-white" />
            </div>
            <div className="flex justify-around pb-[77px] md:ml-[176px]">
                <div className="  w-full">
                    <img className="" src="" alt="koder logo" />
                    <div>
                        <p>HU EN DE</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] text-[16px]   w-full">
                    <div className="flex flex-row  items-center ">
                        <IoIosArrowForward className="text-red-500 text-[24px]" />
                        <a href="#">Kezdőlap</a>
                    </div>
                    <div className="flex flex-row  items-center ">
                        <IoIosArrowForward className="text-red-500 text-[24px]" />
                        <a href="#about">Rólunk</a>
                    </div>
                    <div className="flex flex-row  items-center ">
                        <IoIosArrowForward className="text-red-500 text-[24px]" />
                        <a href="#projects">Munkáink</a>
                    </div>
                    <div className="flex flex-row  items-center ">
                        <IoIosArrowForward className="text-red-500 text-[24px]" />
                        <a href="#contact">Kapcsolat</a>
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] text-[16px]   w-full">
                    <a href="">ÁSZF</a>
                    <a href="">Adatkezelési nyilatkozat</a>
                    <a href="">Impresszum</a>
                </div>
                <div className=" w-full">
                    <div>
                        <h4 className="font-bold text-[18px] pb-[12px]">
                            Lépj velünk kapcsolatba!
                        </h4>
                        <div className="flex text-center items-center gap-[7px] pb-[12px]">
                            <FaEnvelope className="text-[16px] " />
                            <p className=" text-[16px]">info@koder.hu</p>
                        </div>
                        <div className="flex text-center items-center gap-[7px] pb-[12px]">
                            <BsFillTelephoneFill className="text-[16px] " />
                            <p className=" text-[16px]">+36 70 123 4567</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-[85px]">
                <p>© Copyright 2024 Koder. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
