import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ReviewComponent from "./Review";
import { SlArrowDownCircle } from "react-icons/sl";

const Testimonials = () => {
    return (
        <div className="bg-black text-white ">
            <div className="md:pl-[176px] pt-[124px]">
                <div className="flex flex-row pb-[18px] items-center">
                    <IoIosArrowForward className="text-red-500 text-[35px]" />
                    <h3 className="flex items-center justify-center text-[35px]">
                        Ezt mondták rólunk mások
                    </h3>
                </div>
                <p className="p w-[45rem] font-normal normal-case pb-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus inventore incidunt amet quae! Asperiores, deleniti
                    quam beatae modi eos natus repellendus sint tempora vel
                    provident nobis laudantium animi perferendis officia?
                </p>
                <div>
                    <ReviewComponent />
                </div>
            </div>
            <div className="flex items-center justify-center ml-0">
                <a href="#projects">
                    <SlArrowDownCircle className="text-5xl mt-[40px] mb-[40px]" />
                </a>
            </div>
        </div>
    );
};

export default Testimonials;
