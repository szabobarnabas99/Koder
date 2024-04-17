import React from "react";

import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import logo from "../assets/logo2.svg";

const ReviewComponent = () => {
    const reviewData = [
        {
            icon: (
                <ImQuotesLeft className="mt-[42px]  mb-[32px] text-3xl text-red-600 " />
            ),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing el Lorem ipsum dolor sit, amet consectetur adipisicing el",
            profile: logo,
            star: (
                <FaStar className="mt-[42px]  mb-[32px] text-3xl text-yellow-400" />
            ),
            name: "Gazdag Balazs",
            role: "Marketing Agency CEO",
        },
        {
            icon: (
                <ImQuotesLeft className="mt-[42px]  mb-[32px] text-3xl text-red-600 " />
            ),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing el Lorem ipsum dolor sit, amet consectetur adipisicing el",
            profile: logo,
            star: (
                <FaStar className="mt-[42px]  mb-[32px] text-3xl text-yellow-400" />
            ),
            name: "Gazdag Balazs",
            role: "Marketing Agency CEO",
        },
        {
            icon: (
                <ImQuotesLeft className="mt-[42px]  mb-[32px] text-3xl text-red-600 " />
            ),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing el Lorem ipsum dolor sit, amet consectetur adipisicing el",
            profile: logo,
            star: (
                <FaStar className="mt-[42px]  mb-[32px] text-3xl text-yellow-400" />
            ),
            name: "Gazdag Balazs",
            role: "Marketing Agency CEO",
        },
        {
            icon: (
                <ImQuotesLeft className="mt-[42px]  mb-[32px] text-3xl text-red-600 " />
            ),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing el Lorem ipsum dolor sit, amet consectetur adipisicing el",
            profile: logo,
            star: (
                <FaStar className="mt-[42px]  mb-[32px] text-3xl text-yellow-400" />
            ),
            name: "Gazdag Balazs",
            role: "Marketing Agency CEO",
        },
        {
            icon: (
                <ImQuotesLeft className="mt-[42px]  mb-[32px] text-3xl text-red-600 " />
            ),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing el Lorem ipsum dolor sit, amet consectetur adipisicing el",
            profile: logo,
            star: (
                <FaStar className="mt-[42px]  mb-[32px] text-3xl text-yellow-400" />
            ),
            name: "Gazdag Balazs",
            role: "Marketing Agency CEO",
        },
        {
            icon: (
                <ImQuotesLeft className="mt-[42px]  mb-[32px] text-3xl text-red-600 " />
            ),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing el Lorem ipsum dolor sit, amet consectetur adipisicing el",
            profile: logo,
            star: (
                <FaStar className="mt-[42px]  mb-[32px] text-3xl text-yellow-400" />
            ),
            name: "Gazdag Balazs",
            role: "Marketing Agency CEO",
        },
    ];

    const groupedReviews = reviewData.reduce((acc, curr, index) => {
        const groupIndex = Math.floor(index / 2);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curr);
        return acc;
    }, []);

    return (
        <div className="flex   ">
            {groupedReviews.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className={`flex ${
                        groupIndex === 2 || groupIndex === 1
                            ? "flex-col "
                            : "flex-row mt-[192px]"
                    } ${groupIndex === 2 ? "mt-[100px] " : ""} `}
                >
                    {group.map((review, index) => (
                        <div
                            key={index}
                            className={`bg-neutral-900 h-[386px] w-[262px] rounded-2xl mr-[22px] mb-[22px] ${
                                index === 0 && groupIndex === 0
                                    ? "mt-[130px]"
                                    : ""
                            }`}
                        >
                            <div className="pl-[30px] flex flex-col pr-[9px] h-[386px] w-[262px]">
                                <div className="mt-[24px] mb-[32px] text-4xl text-red-600">
                                    <ImQuotesLeft />
                                </div>
                                <p>{review.description}</p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="mt-[42px] mb-[32px] text-2xl text-yellow-500 mr-[5px]"
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    <img
                                        className="w-[32px]"
                                        src={review.profile}
                                        alt=""
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-bold text-[13px]">
                                            {review.name}
                                        </p>
                                        <p className="text-[13px]">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ReviewComponent;
