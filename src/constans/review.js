import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import logo from "../assets/logo2.svg";

export const reviewData = [
    {
        icon: (
            <ImQuotesLeft className="mt-[42px] ml-[26px] mb-[32px] text-3xl text-[#FE512B]" />
        ),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing el",
        profile: logo,
        star: (
            <FaStar className="mt-[42px] ml-[26px] mb-[32px] text-3xl text-[#FE512B]" />
        ),
        name: "Gazdag Balazs",
        role: "Marketing Agency CEO",
    },
];
