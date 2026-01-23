import React from "react";
import Hero from "../components/HeroPage/Hero";
import Serviceimg from "../assets/servicehero.webp"
import Service from "../components/Services/Service";

export default function OurService() {
    return (
        <>
            <Hero
                backgroundImage={Serviceimg}
                overlayColor="rgba(0,0,0,0.6)"
                label="Our Services"
                title={
                    <>
                        Inspiring Spaces Improving Lives
                    </>
                }
                description="We ensure quality and attention to detail throughout, delivering precision and excellence in every aspect of your project."
            />
           <Service/>
        </>

    );
}