import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { socialprofils } from "../ContentOption";

const Socials = () => {
    return (
        <div className="flex flex-col   mr-[1rem] gap-y-3 text-2xl z-10 items-center w-full text-center">
            <a
                href={socialprofils.github}
                className="hover:text-black duration-500"
            >
                <FaGithub className="socials" />
            </a>
            <a
                href={socialprofils.instagram}
                className="hover:text-black duration-500"
            >
                <FaInstagram className="socials" />
            </a>
            <a
                href={socialprofils.facebook}
                className="hover:text-black duration-500"
            >
                <FaFacebookF className="socials" />
            </a>
            <a
                href={socialprofils.linkedin}
                className="hover:text-black duration-500"
            >
                <FaLinkedinIn className="socials" />
            </a>
            <a
                href={socialprofils.youtube}
                className="hover:text-black duration-500"
            >
                <FaYoutube className="socials" />
            </a>
        </div>
    );
};

export default Socials;
