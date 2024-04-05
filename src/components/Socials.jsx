import { FaGithub, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Socials = () => {
    return (
        <div className="flex flex-col absolute pb-[5rem] self-end mr-[1rem] gap-y-5 text-2xl z-10">
            <FaGithub className="socials" />
            <FaLinkedinIn className="socials" />
            <FaFacebookF className="socials" />
            <RiInstagramFill className="socials" />
            <FaYoutube className="socials" />
        </div>
    );
};

export default Socials;
