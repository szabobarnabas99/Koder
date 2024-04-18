import React from "react";
import { Socialicons } from "./Social";
import { IoIosArrowForward } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import "../App.css";

const workData = [
    {
        icon: (
            <FaComputer className="mt-[42px] ml-[26px] mb-[32px] text-3xl text-[#FE512B]" />
        ),
        name: "Webfejlesztés",
        description:
            "Lorem ipsum dolor sit amet consectetur. Integer velit sit commodo consequat at.",
    },
    {
        icon: (
            <FaComputer className="mt-[42px] ml-[26px] mb-[32px] text-3xl  text-[#F94045]" />
        ),
        name: "Hosting",
        description:
            "Lorem ipsum dolor sit amet consectetur. Integer velit sit commodo consequat at.",
    },
    {
        icon: (
            <FaComputer className="mt-[42px] ml-[26px] mb-[32px] text-3xl  text-[#F63851]" />
        ),
        name: "Grafikai tervezés",
        description:
            "Lorem ipsum dolor sit amet consectetur. Integer velit sit commodo consequat at.",
    },
    {
        icon: (
            <FaComputer className="mt-[42px] ml-[26px] mb-[32px] text-3xl  text-[#F0276C]" />
        ),
        name: "UI/UX Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Integer velit sit commodo consequat at.",
    },
];

const About = () => {
    const arrayWorkData = workData.map((work) => (
        <div className="bg-neutral-900 md:mr-[30px] border-b-4 border-red-500 rounded-xl h-[291px] w-[244px] work hover:bg-neutral-800 cursor-default ">
            <span className="mt-[40px]">{work.icon}</span>
            <h4 className="font-bold text-[21px] pb-[6px] pl-[24px]">
                {work.name}
            </h4>
            <p className="font-[16px] pl-[24px] ">{work.description}</p>
        </div>
    ));

    return (
        <div
            id="about"
            className="bg-black w-full h-full text-white  max-md:pt-[20px]  max-md:w-screen max-md:pb-[58px]"
        >
            <div className="absolute  flex justify-end w-full md:pt-[101px] md:pr-[199px]">
                <p className="text-[16px]  font-bold max-md:hidden ">
                    Koder Agency
                </p>
            </div>
            <div className="  md:ml-[176px] md:pt-[97px]">
                <div className="flex  max-md:justify-center  max-md:items-center max-md:text-center">
                    <div className="bg-gradient-to-b from-orange-600 to-pink-700 rounded-xl w-[10px] h-[94px] self-center  max-md:hidden  "></div>
                    <div className="flex flex-col">
                        <h2 className="  pl-2  font-bold leading-[56px]	 max-md:text-[25px]  max-md:leading-[40px]">
                            RÓLUNK
                        </h2>
                        <p className=" pl-2 text-[25px] font-medium  max-md:text-[18px]">
                            Egy kis ügynökség nagy célokkal!
                        </p>
                    </div>
                </div>
                <div className="md:ml-[5px] font-bold mt-[141px] text-xl uppercase flex items-center  max-md:mt-[84px] max-md:w-screen max-md:justify-center max-md:pr-[10px]">
                    <IoIosArrowForward className="text-red-500 text-[35px] max-md:text-[20px]" />
                    <h3 className="max-md:text-[20px]">Mivel foglalkozunk?</h3>
                </div>
                <div className="mt-[33px] flex items-center   max-md:w-screen max-md:justify-center">
                    <div className=" flex justify-evenly max-md:flex-col max-md:items-center max-md:gap-[40px]">
                        {arrayWorkData}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
