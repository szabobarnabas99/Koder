import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { IoIosGlobe } from "react-icons/io";
import { SlArrowDownCircle } from "react-icons/sl";
import "../App.css";

const Header = () => {
    return (
        <div>
            <div className="w-full h-dvh flex justify-center items-center flex-col cursor-default">
                <h1 className="h1 text-center">
                    Szükséged van
                    <br /> egy{" "}
                    <IoIosGlobe className="text-red-500 inline-block text-7xl z-10 pb-2" />{" "}
                    weboldalra,
                    <br /> ami{" "}
                    <span className="bg-gradient-to-r from-orange-600 to-pink-700 inline-block text-transparent bg-clip-text ">
                        MEGBÍZHATÓ?
                    </span>
                </h1>
                <p className="mt-[1rem] z-10 text-center max-w-[35rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur accusantium fugit perspiciatis enim quo?
                    Sapiente voluptatum assumenda autem praesentium dolorem!
                </p>
                <SlArrowDownCircle className="text-5xl mt-[40px]" />
            </div>
            <div className="flex justify-between md:pl-[72px] md:pr-[81px] md:pb-[40px] cursor-default">
                <p>koderagency@koder.hu</p>
                <p>Koder Agency</p>
            </div>
            <div className="absolute w-full h-[100vh]  right-0 bottom-0 z-0">
                <ParticlesContainer />
            </div>
        </div>
    );
};

export default Header;
