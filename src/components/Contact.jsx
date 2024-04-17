import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Socials from "./Socials";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BiSolidFactory } from "react-icons/bi";
import { HiMiniBookOpen } from "react-icons/hi2";
import { BiSolidMessage } from "react-icons/bi";

const Contact = () => {
    return (
        <div id="contact" className="bg-black w-full text-white ">
            <div className="absolute  flex justify-end w-full md:pt-[101px] md:pr-[199px]">
                <p className="text-[16px]  font-bold">Koder Agency</p>
            </div>
            <div className="  md:ml-[176px] md:pt-[97px]">
                <div className="flex">
                    <div className="bg-gradient-to-b from-orange-600 to-pink-700 rounded-xl w-[10px] h-[94px] self-center"></div>
                    <div className="flex flex-col">
                        <h2 className="  pl-2  font-bold leading-[56px]	">
                            Kapcsolat
                        </h2>
                        <p className=" pl-2 text-[25px] font-medium ">
                            Szavak helyett beszéljenek a referenciák!
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div className="flex flex-row pb-[18px] items-center mt-[98px]">
                            <IoIosArrowForward className="text-red-500 text-[24px]" />
                            <h3 className="flex items-center justify-center text-[20px] ">
                                Küldj nekünk üzenetet!
                            </h3>
                        </div>
                        <div className="max-w-[521px] pb-[50px]">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ullam voluptate ipsa ea
                                expedita nobis illo est iure facilis veniam
                                earum. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ullam voluptate ipsa ea
                                expedita nobis illo est iure facilis veniam
                                earum.
                            </p>
                        </div>
                        <div className="contact-form w-[539px]">
                            <div className="relative flex gap-[19px] pb-[15px]">
                                <div>
                                    <BsPersonFill className="absolute top-[50%]  text-[20px] transform -translate-y-[17px] left-[10px] text-gray-500" />
                                    <input
                                        placeholder="Teljes Név*"
                                        type="text "
                                        className="w-[251px] h-[46px] bg-black border-[1px] border-gray-400 rounded-md pl-[40px] focus:outline-none focus:border-orange-600"
                                    />
                                </div>
                                <div className="relative">
                                    <BiSolidFactory className="absolute top-[50%]  text-[20px] transform -translate-y-[10px] left-[10px] text-gray-500" />
                                    <input
                                        placeholder="Cégnév"
                                        type="text"
                                        className="w-[251px] h-[46px] bg-black border-[1px] border-gray-400 rounded-md pl-[40px] focus:outline-none focus:border-orange-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[19px] ">
                                <div className="relative">
                                    <FaEnvelope className="absolute top-[50%]  text-[18px] transform -translate-y-[9px] left-[10px] text-gray-500" />
                                    <input
                                        placeholder="E-mail cím"
                                        type="text"
                                        className="bg-black border-[1px] border-gray-400 rounded-md pl-[40px] focus:outline-none focus:border-orange-600 w-[521px] h-[46px]"
                                    />
                                </div>
                                <div className="relative">
                                    <HiMiniBookOpen className="absolute top-[50%]  text-[20px] transform -translate-y-[10px] left-[10px] text-gray-500" />
                                    <input
                                        placeholder="Tárgy"
                                        type="text"
                                        className="bg-black border-[1px] border-gray-400 rounded-md pl-[40px] focus:outline-none focus:border-orange-600  w-[521px] h-[46px] "
                                    />
                                </div>
                                <div className="relative">
                                    <BiSolidMessage className="absolute top-[50%]  text-[20px] transform -translate-y-[10px] left-[10px] text-gray-500" />
                                    <input
                                        placeholder="Üzenet"
                                        type="text"
                                        className="bg-black border-[1px] border-gray-400 rounded-md pl-[40px] focus:outline-none focus:border-orange-600 w-[521px] h-[178px] align-text-top"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            value="Send"
                            className="flex text-center items-center justify-center border-gray-400 border-[2px] w-[521px]  h-[70px] rounded-full mb-[140px] mt-[45px] bg-black transition-all duration-500 ease-in-out hover:bg-white hover:border-black hover:text-black"
                        >
                            <div className="pr-[18px] text-[17px]">Küldés</div>
                            <FaArrowRightLong className="text-[25.5px]" />
                        </button>
                    </div>
                    <div className=" w-full flex flex-col items-center justify-center text-center ">
                        <div className="w-[480px] bg-gradient-to-br from-[#FF5425] to-[#ED1E79] h-[230px] text-left flex flex-row rounded-xl">
                            <div className="mt-[54px] ml-[54px]">
                                <h4 className="font-bold text-[25px] pb-[12px]">
                                    INFO
                                </h4>
                                <div className="flex text-center items-center gap-[7px] pb-[12px]">
                                    <FaEnvelope className="text-[21px] " />
                                    <p className=" text-[21px]">
                                        info@koder.hu
                                    </p>
                                </div>
                                <div className="flex text-center items-center gap-[7px] pb-[12px]">
                                    <BsFillTelephoneFill className="text-[21px] " />
                                    <p className=" text-[21px]">
                                        +36 70 123 4567
                                    </p>
                                </div>
                            </div>
                            <div className=" text-white  flex items-center justify-end ml-[140px] mr-[54px] rounded-xl">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
