import React from "react";
import { Socialicons } from "./Social";
import "../App.css";

const About = () => {
    return (
        <div id="about" className="bg-black w-full h-[800px] dark-background">
            <div className=" bg-black ml-[50px] pt-[50px]">
                <div className="vl ">
                    <h1 className=" text-white pl-2">Rólunk</h1>
                    <p className="text-white pl-2">
                        Egy kis ügynökség, nagy célokkal!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
