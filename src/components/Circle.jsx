import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo2.svg";
import { collabApps } from "../constans";

const Circle = () => {
    return (
        <div className="bg-black text-white max-md:w-[screen] h-full">
            <div className="flex flex-row pb-[18px] items-center max-md:pb-[48px] max-md:justify-center md:hidden">
                <IoIosArrowForward className="text-red-500 text-[35px] max-md:text-[20px]" />
                <h3 className="flex items-center justify-center text-[35px] max-md:text-[20px]">
                    Mivel dolgozunk?
                </h3>
            </div>
            <div className="flex md:pt-[175px] md:ml-[176px] max-md:flex-col max-md:w-screen">
                <div className="flex flex-col md:w-1/2 max-md:justify-center max-md:text-center max-md:items-center">
                    <div className="flex flex-row pb-[18px] items-center max-md:hidden">
                        <IoIosArrowForward className="text-red-500 text-[35px]" />
                        <h3 className="flex items-center justify-center text-[35px] ">
                            Mivel dolgozunk?
                        </h3>
                    </div>
                    <div className="max-md:w-[80%]">
                        <p className="p font-normal normal-case max-md:text-[16px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ullam voluptate ipsa ea expedita nobis illo
                            est iure facilis veniam earum. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Ullam
                            voluptate ipsa ea expedita nobis illo est iure
                            facilis veniam earum.
                        </p>
                    </div>
                </div>
                <div className="lg:ml-auto xl:w-[38rem] mt-4 max-md:order-first pb-[57px] max-md:scale-[85%]">
                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full ">
                                    <img
                                        src={logo}
                                        width={48}
                                        height={48}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className="absolute mt-[85px] left-[43%] h-1/2"
                                    style={{
                                        transform: `rotate(${index * 45}deg)`,
                                    }}
                                >
                                    <div>
                                        <div
                                            className="relative -top-[7.2rem]  flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl "
                                            style={{
                                                transform: `rotate(${
                                                    -index * 45
                                                }deg)`,
                                            }}
                                        >
                                            <img
                                                width={app.width}
                                                height={app.height}
                                                className="m-auto"
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Circle;
