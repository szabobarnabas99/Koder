import React from "react";
import "../App.css";
import {
    FaGithub,
    FaTwitter,
    FaFacebookF,
    FaLinkedin,
    FaYoutube,
    FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../ContentOption";

export const Socialicons = (params) => {
    return (
        <div className="stick_follow_icon z-30 ">
            <ul>
                {socialprofils.twitter && (
                    <li>
                        <a href={socialprofils.twitter}>
                            <FaTwitter className="hover:fill-red-600 duration-500" />
                        </a>
                    </li>
                )}
                {socialprofils.github && (
                    <li>
                        <a href={socialprofils.github}>
                            <FaGithub className="hover:fill-red-600 duration-500" />
                        </a>
                    </li>
                )}
                {socialprofils.facebook && (
                    <li>
                        <a href={socialprofils.facebook}>
                            <FaFacebookF className="hover:fill-red-600 duration-500" />
                        </a>
                    </li>
                )}
                {socialprofils.linkedin && (
                    <li>
                        <a href={socialprofils.linkedin}>
                            <FaLinkedin className="hover:fill-red-600 duration-500" />
                        </a>
                    </li>
                )}
                {socialprofils.youtube && (
                    <li>
                        <a href={socialprofils.youtube}>
                            <FaYoutube className="hover:fill-red-600 duration-500" />
                        </a>
                    </li>
                )}
                {socialprofils.twitch && (
                    <li>
                        <a href={socialprofils.twitch}>
                            <FaTwitch className="hover:fill-red-600 duration-500" />
                        </a>
                    </li>
                )}
            </ul>
            <p className="cursor-default">Follow Us</p>
        </div>
    );
};
