import AboutSection from "../../pages/Aboutsection";
import HomeHero from "../../pages/Heropage";
import Navbar  from "../../pages/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeHero />
            <AboutSection/>
        </>
    );
}
