import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { IoIosGlobe } from "react-icons/io";
import { SlArrowDownCircle } from "react-icons/sl";
import "../App.css";

const Header = () => {
    return (
        <div className="h-screen max-md:w-screen">
            <div className="md:w-full h-dvh flex justify-center items-center flex-col cursor-default max-md:w-screen max-md:justify-center">
                <div className="max-md:h-full flex flex-col items-center justify-center">
                    <h1 className="h1 text-center max-md:text-[25px]">
                        Szükséged van
                        <br /> egy{" "}
                        <IoIosGlobe className="text-red-500 inline-block text-7xl z-10 pb-2 max-md:text-[35px] max-md:pb-[3px]" />{" "}
                        weboldalra,
                        <br /> ami{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-pink-700 inline-block text-transparent bg-clip-text ">
                            MEGBÍZHATÓ?
                        </span>
                    </h1>
                    <p className="p mt-[1rem] z-10 text-center max-w-[35rem]  max-md:text-[13px]  max-md:w-[300px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur accusantium fugit perspiciatis enim quo?
                        Sapiente voluptatum assumenda autem praesentium dolorem!
                    </p>
                    <a href="#about" className="z-10 mt-[40px]">
                        <SlArrowDownCircle className="text-5xl z-5" />
                    </a>
                    <div className="absolute w-full h-[100vh]  right-0 bottom-0 z-0 max-md:w-screen">
                        <ParticlesContainer />
                    </div>
                </div>
                <div className=" md:absolute w-full flex justify-between md:pl-[72px] md:pr-[81px] md:pb-[40px] cursor-default md:mt-[850px] max-md:px-[7px] max-md:mb-[7px]">
                    <p className="font-semibold max-md:text-[12px]">
                        koderagency@koder.hu
                    </p>
                    <p className="font-semibold max-md:text-[12px]">
                        Koder Agency
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
