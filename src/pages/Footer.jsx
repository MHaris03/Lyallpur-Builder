import { Link } from "react-router-dom";
import footerBg from "../assets/city-skiline.png";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    Youtube
} from "lucide-react";


export default function Footer() {
    return (
        <footer
            className="relative text-gray-300"

        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0b1d3a]/90"></div>

            {/* Content */}
            <div
                className="relative z-10"
                style={{
                    backgroundImage: `url(${footerBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-[1300px] mx-auto px-6 py-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">

                        {/* LOGO + ABOUT */}
                        <div className="lg:col-span-2">
                            <div className="inline-flex flex-col items-center gap-4 rounded-xl px-4 py-3">
                                <img
                                    src="/logo.png"
                                    alt="Lyallpur Builder"
                                    className="h-20 sm:h-18 w-auto object-contain"
                                />
                                <div className="relative inline-block mb-6">
                                    <p className="text-[#e1921f] text-md font-medium tracking-wide relative z-10">
                                        Building Dreams, Creating Realities
                                    </p>

                                    {/* Accent Line */}
                                    <span className="absolute left-0 -bottom-2 h-[3px] w-14 bg-[#e1921f]"></span>

                                    {/* Glow Effect */}
                                    <span className="absolute inset-0 bg-[#e1921f]/20 blur-xl rounded-md -z-10"></span>
                                </div>
                            </div>
                            <p className="text-md leading-relaxed mb-6">
                                At Lyallpur Builder.Com, we bring together functionality and aesthetics
                                to provide homeowners with customised and efficient home
                                construction.
                            </p>
                        </div>

                        <div className="space-y-4 lg:col-span-2">

                            <h4 className="text-[#e1921f] font-semibold mb-4">Get In Touch</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition cursor-pointer">
                                        <Phone size={16} />
                                    </span>
                                    <span>+92 300 7217106</span>
                                </div>
                                 <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition cursor-pointer">
                                        <Phone size={16} />
                                    </span>
                                    <span>+92 303 5336074</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition cursor-pointer">
                                        <Mail size={18} />
                                    </span>
                                    <span>info@lyallpurbuilder.com</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="p-2 rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition cursor-pointer mt-1">
                                        <MapPin size={18} />
                                    </span>
                                    <span className="leading-relaxed max-w-sm block">
                                        2nd Floor, United Plaza, Main Lahore – Sheikhupura Road, Faisalabad
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="pl-0">
                            <h4 className="text-[#e1921f] font-semibold mb-4">Home</h4>
                            <ul className="space-y-2 text-md">
                                <li>About Us</li>
                                <li>Why Us</li>
                                <li>Our Projects</li>
                                <li>Make My House</li>
                                <li>Contact Us</li>
                                <li>Terms & Condition</li>
                                <li>Privacy Policy</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div className="lg:col-span-2">
                            <h4 className="text-[#e1921f] font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-md">
                                <li>Residential Construction</li>
                                <li>Commercial Construction</li>
                                <li>Maintenance</li>
                                <li>Interiors</li>
                                <li>Renovations</li>
                                <li>Architectural Plans</li>
                                <li>Engineering Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="relative z-10 bg-[#08162e] border-t border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-md">
                    <p>© {new Date().getFullYear()} Lyallpur Builder. All Rights Reserved.</p>

                    <div className="flex gap-3 mt-4 md:mt-0">
                        {[Instagram, Facebook, Youtube].map((Icon, index) => (
                            <div
                                key={index}
                                className="p-2 rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition cursor-pointer"
                            >
                                <Icon size={18} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}
