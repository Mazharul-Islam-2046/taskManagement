import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="relative z-0 top-0 left-0 right-0">
            <img className="w-full h-screen max-h-[680px] object-cover" src="https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div data-aos="fade-right" className="bg-black bg-opacity-25 absolute top-0 left-0 h-full w-full flex flex-col text-start md:px-24 px-5 text-[#dbebfd] justify-center items-start">
                <h2 className="text-sm md:text-lg font-bold mb-2 uppercase text-[#ff9185] mt-10">Nesting Your Tasks</h2>
                <p className="text-xl md:text-4xl font-bold mb-6">Streamlining Collaboration, <br /> Boosting Productivity</p>
                <p className="leading-relaxed text-sm md:text-base mb-6">Elevate your productivity with TaskSphere — the ultimate task management platform. <br /> Effortlessly streamline collaboration, organize tasks intuitively, <br /> and drive success. Experience the future of task management, where simplicity meets achievement.</p>
                <button className="py-3 px-6 bg-[#1bb85c] text-white font-semibold rounded-md hover:bg-gray-100 hover:text-gray-600">{user? <Link to="/taskmanagement/all">Dashboard</Link> : <Link to="/login">Let's Explore</Link>}</button>
            </div>
        </div>
    );
};

export default Hero;