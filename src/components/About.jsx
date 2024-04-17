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
        <div className="bg-neutral-900 mr-[30px] border-b-4 border-red-500 rounded-xl h-[291px] w-[244px] work hover:bg-neutral-800 cursor-default">
            <span className="mt-[40px]">{work.icon}</span>
            <h4 className="font-bold text-[21px] pb-[6px] pl-[24px]">
                {work.name}
            </h4>
            <p className="font-[16px] pl-[24px]">{work.description}</p>
        </div>
    ));

    return (
        <div id="about" className="bg-black w-full h-[800px] text-white">
            <div className="absolute  flex justify-end w-full md:pt-[101px] md:pr-[199px]">
                <p className="text-[16px]  font-bold">Koder Agency</p>
            </div>
            <div className="  md:ml-[176px] md:pt-[97px]">
                <div className="flex">
                    <div className="bg-gradient-to-b from-orange-600 to-pink-700 rounded-xl w-[10px] h-[94px] self-center"></div>
                    <div className="flex flex-col">
                        <h2 className="  pl-2  font-bold leading-[56px]	">
                            RÓLUNK
                        </h2>
                        <p className=" pl-2 text-[25px] font-medium ">
                            Egy kis ügynökség nagy célokkal!
                        </p>
                    </div>
                </div>
                <div className="md:ml-[5px] font-bold mt-[141px] text-xl uppercase flex items-center">
                    <IoIosArrowForward className="text-red-500 text-[35px]" />
                    <h3 className="">Mivel foglalkozunk?</h3>
                </div>
                <div className="mt-[33px] flex items-center">
                    <div className="flex justify-evenly">{arrayWorkData}</div>
                </div>
            </div>
        </div>
    );
};

export default About;
