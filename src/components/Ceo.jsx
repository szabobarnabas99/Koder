import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import balazs from "../assets/balazs.avif";
import barni from "../assets/barni.avif";
import CountUp from "react-countup";

const Ceo = () => {
    return (
        <div className="flex items-center bg-black text-white w-full h-full">
            <div className="flex flex-row items-start gap-7 md:ml-[176px] w-[400px] mt-[95px]">
                <div className="relative mb-[100px]">
                    <div className="overflow-hidden h-[412px] w-[160px] rounded-2xl ">
                        <img
                            className="h-[412px] grayscale hover:grayscale-0"
                            src={balazs}
                            alt=""
                        />
                    </div>
                    <div class="absolute bottom-[280px] px-2  w-full flex flex-col  items-center">
                        <h1 class="font-semibold text-[13px] bg-gradient-to-r from-orange-600 to-pink-700 inline-block text-transparent bg-clip-text">
                            {" "}
                            Gazdag Balázs{" "}
                        </h1>
                        <p class="text-black text-[13px]">CEO/FOUNDER</p>
                    </div>
                </div>
                <div className="relative mt-[130px]">
                    <div className="overflow-hidden h-[412px]  w-[160px] rounded-2xl">
                        <img
                            className="h-[412px]  grayscale hover:grayscale-0 transition-all duration-500"
                            src={barni}
                            alt=""
                        />
                    </div>
                    <div class="absolute bottom-[280px]   w-full flex flex-col  items-center">
                        <h1 class="font-semibold text-[13px] bg-gradient-to-r from-orange-600 to-pink-700 inline-block text-transparent bg-clip-text">
                            {" "}
                            Szabó Barnabás{" "}
                        </h1>
                        <p class="text-black text-[13px]">CEO/FOUNDER</p>
                    </div>
                </div>
            </div>
            <div className="text-xl font-bold uppercase flex flex-col items-start mr-[120px] mb-[50px]">
                <div className="flex flex-row pb-[18px]">
                    <IoIosArrowForward className="text-red-500 text-[35px]" />
                    <h3 className="flex items-center justify-center">
                        Kik vagyunk?
                    </h3>
                </div>
                <p className="p w-[45rem] font-normal normal-case pb-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus inventore incidunt amet quae! Asperiores, deleniti
                    quam beatae modi eos natus repellendus sint tempora vel
                    provident nobis laudantium animi perferendis officia?
                </p>
                <p className="p w-[45rem] font-normal normal-case">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus inventore incidunt amet quae! Asperiores, deleniti
                    quam beatae modi eos natus repellendus sint tempora vel
                    provident nobis laudantium animi perferendis officia?
                </p>
                <div className="pt-[36px]">
                    <div className="flex flex-1 gap-x-[63px]">
                        <div className=" flex-2 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 flex-row">
                                <CountUp start={0} end={5} duration={5} />

                                <hr className="max-w-10 rounded-lg h-[7px] bg-gradient-to-r from-orange-600 to-pink-600 border-none" />
                            </div>
                            <div className="text-xs font-normal  tracking-[1px] leading-[1.4] max-w-[200px]">
                                Év Tapasztalat
                            </div>
                        </div>
                        <div className=" flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                <CountUp start={0} end={30} duration={5} />+
                                <hr className="max-w-10 rounded-lg h-[7px] bg-gradient-to-r from-orange-600 to-pink-600 border-none" />
                            </div>
                            <div className="text-xs font-normal tracking-[1px] leading-[1.4] max-w-[200px] ">
                                Project
                            </div>
                        </div>
                        <div className=" flex-1 ">
                            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                <CountUp start={0} end={50} duration={5} />
                                <hr className="max-w-10 rounded-lg h-[7px] bg-gradient-to-r from-orange-600 to-pink-600 border-none" />
                            </div>
                            <div className="text-xs font-normal tracking-[1px] leading-[1.4] w-[140px]">
                                Elégedett ügyfél
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ceo;
