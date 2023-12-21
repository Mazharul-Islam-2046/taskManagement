import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";
import ForWhom from "./Sections/ForWhom/ForWhom";
import Hero from "./Sections/Hero/Hero";
import OurTeam from "./Sections/OurTeam/OurTeam";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <ForWhom/>
            <OurTeam/>
            <Footer/>
        </div>
    );
};

export default Home;