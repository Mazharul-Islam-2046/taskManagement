import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import ForWhom from "./Sections/ForWhom/ForWhom";
import Hero from "./Sections/Hero/Hero";
import OurTeam from "./Sections/OurTeam/OurTeam";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task Nest || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Hero />
      <ForWhom />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
