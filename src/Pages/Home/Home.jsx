import Navbar from "../SharedComponents/Navbar/Navbar";
import ForWhom from "./Sections/ForWhom/ForWhom";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <ForWhom/>
        </div>
    );
};

export default Home;