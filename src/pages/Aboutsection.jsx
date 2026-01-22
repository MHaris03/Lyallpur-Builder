import { Hammer, Target } from "lucide-react";
import Aboutimg from "../assets/About.png";

export default function AboutSection() {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <div className="text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                        We're Building Everything Best <br className="hidden sm:block" />
                        That You <span className="text-[#e1921f]">Needed!</span>
                    </h1>

                    <p className="mt-5 sm:mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
                        Construction is a general term meaning the art and science to form
                        objects systems organizations, and comes from Latin construction
                        and Old French construction.
                    </p>

                    <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-6 sm:gap-8">

                        <div className="flex gap-4 items-start">
                            <div className="text-[#e1921f] shrink-0">
                                <Hammer size={36} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b1d3a] mb-1 text-sm sm:text-base">
                                    Industrus Mission
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Construction is a general term meaning the art and science
                                    to form objects systems.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-[#e1921f] shrink-0">
                                <Target size={36} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b1d3a] mb-1 text-sm sm:text-base">
                                    Our Vision
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Construction is a general term meaning the art and science
                                    to form objects systems.
                                </p>
                            </div>
                        </div>

                    </div>

                    <button
                        className="mt-8 sm:mt-10 bg-[#e1921f] text-black font-semibold 
                       px-6 sm:px-8 py-3 sm:py-4 
                       transition-all duration-300 hover:bg-[#0b1d3a] hover:text-white"
                    >
                        MORE ABOUT US
                    </button>
                </div>

                <div className="relative">
                    <img
                        src={Aboutimg}
                        alt="About us"
                        className="rounded-lg object-cover w-full max-h-[420px] sm:max-h-[500px] lg:max-h-none"
                    />
                </div>

            </div>
        </section>
    );
}
