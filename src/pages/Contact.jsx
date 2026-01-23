import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-bold text-[#0b1d3a]">Contact Us</h1>
                    <p className="mt-3 text-gray-600">
                        Let’s discuss your project — we’re here to help
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone className="text-[#e1921f]" />
                                <div>
                                    <h4 className="font-semibold text-[#0b1d3a]">Waqas Majeed</h4>
                                    <p className="text-sm text-gray-500">Project Consultant</p>
                                    <a
                                        href="tel:+923007217106"
                                        className="text-gray-600 hover:text-[#e1921f]"
                                    >
                                        +92 300 7217106
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-[#e1921f]" />
                                <div>
                                    <h4 className="font-semibold text-[#0b1d3a]">Mirza Awais</h4>
                                    <p className="text-sm text-gray-500">Site Manager</p>
                                    <a
                                        href="tel:+923035336074"
                                        className="text-gray-600 hover:text-[#e1921f]"
                                    >
                                        +92 303 5336074
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-[#e1921f]" />
                                <div>
                                    <h4 className="font-semibold text-[#0b1d3a]">Email</h4>
                                    <a
                                        href="mailto:info@lyallpurbuilder.com"
                                        className="text-gray-600 hover:text-[#e1921f]"
                                    >
                                        info@lyallpurbuilder.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#e1921f]" />
                                <div>
                                    <h4 className="font-semibold text-[#0b1d3a]">Visit Us</h4>
                                    <p className="text-gray-600">
                                        2nd Floor, United Plaza, Main Lahore – Sheikhupura Road, Faisalabad
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-md">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.259022338061!2d73.1530426746939!3d31.462060150022218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922696409cc0d55%3A0x865419572531ace0!2sUnited%20Plaza!5e0!3m2!1sen!2s!4v1769175049220!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>

                        </div>
                    </div>

                    <form className="bg-white p-8 rounded-xl shadow-md space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-[#0b1d3a]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1921f]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#0b1d3a]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1921f]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#0b1d3a]">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1921f]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#0b1d3a]">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your project"
                                className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1921f]"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#e1921f] text-white py-3 font-semibold hover:bg-yellow-500 transition rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
