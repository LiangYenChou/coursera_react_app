import LandingSection from "./components/LandingSection";
import Specials from "./components/Specials";
import ReviewSection from "./components/ReviewSection";
import About from "./components/About";

const Homepage = () =>{
    return(
        <>
        <LandingSection />
        <Specials />
        <ReviewSection />
        <About />
        </>
    );
};

export default Homepage;