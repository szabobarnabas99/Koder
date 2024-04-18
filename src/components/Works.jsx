import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import mountain from "../assets/mountain.jpeg";

const Works = () => {
    return (
        <div id="projects" className="bg-white w-full  text-black">
            <div className="absolute  flex justify-end w-full md:pt-[101px] md:pr-[199px] h-full">
                <p className="text-[16px]  font-bold">Koder Agency</p>
            </div>
            <div className="  md:ml-[176px] md:pt-[97px]">
                <div className="flex">
                    <div className="bg-gradient-to-b from-orange-600 to-pink-700 rounded-xl w-[10px] h-[94px] self-center"></div>
                    <div className="flex flex-col">
                        <h2 className="  pl-2  font-bold leading-[56px]	">
                            Munkáink
                        </h2>
                        <p className=" pl-2 text-[25px] font-medium ">
                            Szavak helyett beszéljenek a referenciák!
                        </p>
                    </div>
                </div>
            </div>
            <div className="ml-0 flex flex-col justify-center items-center gap-[25px] mt-[70px] h-full">
                <div className="overflow-hidden bg-red-300 w-[1139px] h-[391px] flex justify-center items-center text-center rounded-2xl shadow-[0px_9px_11px_0px_#a0aec0]">
                    <img src={mountain} alt="mountain" />
                </div>
                <div className="flex items-center justify-center text-center gap-[25px]">
                    <div className="overflow-hidden bg-red-400 w-[557px] h-[417px] rounded-2xl shadow-[0px_9px_11px_0px_#a0aec0]">
                        <img src={mountain} alt="mountain" className="h-full" />
                    </div>
                    <div className="overflow-hidden bg-red-400 w-[557px] h-[417px] rounded-2xl shadow-[0px_9px_11px_0px_#a0aec0]">
                        <img src={mountain} alt="mountain" className="h-full" />
                    </div>
                </div>
                <div className="overflow-hidden bg-red-300 w-[1139px] h-[391px] rounded-2xl shadow-[0px_9px_11px_0px_#a0aec0]">
                    <img src={mountain} alt="mountain" />
                </div>
                <button className="flex text-center items-center justify-center border-black border-[2px] w-[1139px] h-[70px] rounded-full mb-[140px] mt-[45px] transition-all duration-500 ease-in-out hover:bg-black hover:border-white hover:text-white">
                    <div className="pr-[18px] text-[17px]">More projects</div>
                    <FaArrowRightLong className="text-[25.5px]" />
                </button>
            </div>
        </div>
    );
};

export default Works;
