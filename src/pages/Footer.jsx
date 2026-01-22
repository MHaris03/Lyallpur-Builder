import footerBg from "../assets/city-skiline.png";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Linkedin,
    Facebook,
    Twitter,
    Youtube
} from "lucide-react";



export default function Footer() {
    return (
        <footer
            className="relative text-gray-300"
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0b1d3a]/85"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

                    {/* LOGO + ABOUT */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-[#e1921f] mb-4">
                            LYALLPUR BUILDER<span className="text-sm align-top">®</span>
                        </h2>
                        <p className="text-sm leading-relaxed mb-6">
                            At Lyallpur Builder.Com, we bring together functionality and aesthetics
                            to provide homeowners with customised and efficient home
                            construction.
                        </p>

                        <h3 className="text-[#e1921f] font-semibold mb-3">
                            Get In Touch
                        </h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <span className="p-2 text-md rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition">
                                    <Phone size={16} />
                                </span>
                                <span>+92 3007217106</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="p-2 text-md rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition">
                                    <Mail size={16} />
                                </span>
                                <span>hello@lyallpurbuilder.com</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="p-2 rounded-full bg-white/10 hover:bg-[#e1921f] hover:text-black transition">
                                    <MapPin size={16} />
                                </span>
                                <span className="text-md leading-relaxed">
                                    2nd Floor, United Plaza, Main Lahore - Sheikhupura - Faisalabad Rd,
                                    near Qamar Garden, Qamar Garden, Faisalabad
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* HOME */}
                    <div>
                        <h4 className="text-[#e1921f] font-semibold mb-4">Home</h4>
                        <ul className="space-y-2 text-md">
                            <li>About Us</li>
                            <li>Why Us</li>
                            <li>Our Projects</li>
                            <li>Make My House</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
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

                    {/* INFORMATION */}
                    <div>
                        <h4 className="text-[#e1921f] font-semibold mb-4">Information</h4>
                        <ul className="space-y-2 text-md">
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>Cancellation Policy</li>
                            <li>Referral Policy</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    {/* OTHERS */}
                    {/* <div>
                        <h4 className="text-[#e1921f] font-semibold mb-4">Others</h4>
                        <ul className="space-y-2 text-md">
                            <li>Join as an Expert</li>
                            <li>Channel Partner</li>
                            <li>Refer & Earn</li>
                            <li>Material Supplier</li>
                            <li>Join us as a Freelancer</li>
                        </ul>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-md">
                    <p>© 2026 Lyallpur Builder. All Rights Reserved.</p>
                    <div className="flex gap-3 mt-4 md:mt-0">
                        {[
                            <Instagram />,
                            <Linkedin />,
                            <Facebook />,
                            <Twitter />,
                            <Youtube />
                        ].map((Icon, index) => (
                            <div
                                key={index}
                                className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                            >
                                {Icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
