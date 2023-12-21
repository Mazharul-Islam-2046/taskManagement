import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#2ecc71] py-3 mt-16 space-y-5">
            <div className="space-y-3 px-24">
                <h2 className="text-[#dbebfd] text-3xl font-bold">
                TaskN<span className="">est</span>
                </h2>
                <div className="flex gap-3 justify-center text-[#dbebfd] text-2xl">
                    <a href="https://www.linkedin.com/in/md-mazharul-islam-mzshishir/"><FaLinkedin/></a>
                    <a href="https://github.com/Mazharul-Islam-2046"><FaGithub/></a>
                    <a href="youtube.com"><FaYoutube/></a>
                </div>
            </div>
            <h2 className="text-[#ecf0f1] uppercase font-semibold">Copyright © 2023 TaskNest Inc</h2>
        </div>
    );
};

export default Footer;