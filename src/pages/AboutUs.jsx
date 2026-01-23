import about1 from "../assets/aboutus1.png";
import about2 from "../assets/aboutus2.png";
import herobg from "../assets/abouthero.jpg";
import { Check } from "lucide-react";
import AboutProcess from "../components/About/AboutProcess";
import AboutCounter from "../components/About/AboutCounter";
import Hero from "../components/HeroPage/Hero";
import Team from "./Team";

export default function AboutUs() {
    return (
        <>
            <Hero
                backgroundImage={herobg}
                overlayColor="rgba(0,0,0,0.6)"
                label="About Us"
                title={
                    <>
                        Inspiring Spaces Improving Lives
                    </>
                }
                description="Crafting thoughtful interiors that reflect personality, purpose, and perfection."
            />
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGES */}
                    <div className="relative flex gap-6">
                        {/* Image 1 */}
                        <div className="w-1/2">
                            <img
                                src={about1}
                                alt=""
                                className="rounded-xl object-cover h-[520px] w-full"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="w-1/2 mt-20">
                            <img
                                src={about2}
                                alt=""
                                className="rounded-xl object-cover h-[520px] w-full"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        {/* Label */}
                        <span className="text-[#e1921f] font-semibold tracking-widest uppercase text-sm">
                            About Us
                        </span>

                        {/* Heading */}
                        <h2 className="text-4xl xl:text-5xl font-bold leading-tight mt-4 mb-6 text-gray-900">
                            Partner In Inspiring <br />
                            And Improving Your <br />
                            Life
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                            Our core business is all about aligning our clients’ homes and
                            businesses with environments crafted around real people’s wants
                            and needs, seeking to balance brand expression with end-user
                            ergonomics. Specialize in mixed-use projects.
                        </p>

                        {/* Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "No hidden commission",
                                "3D Design Included",
                                "Fully Vastu Optimized",
                                "Personalized Designs",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="text-[#e1921f]" size={20} />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <AboutProcess />
            <AboutCounter />
            <Team/>
        </>

    );
}
