import { Factory, Cog, Fuel } from "lucide-react";
import service1 from "../../assets/service-1.jpg"
import service2 from "../../assets/service-2.jpg"
import service3 from "../../assets/service-3.jpg"

const services = [
    {
        title: "Automobile & Manufacturing",
        desc:
            "We produce positive results from growing industrial estates, we have established a corporate or mandate to maintain the manufacturing economy.",
        image: service1,
        icon: Factory,
    },
    {
        title: "Mechanical Engineering",
        desc:
            "We produce positive results from growing industrial estates, we have established a corporate or mandate to maintain the manufacturing economy.",
        image: service2,
        icon: Cog,
    },
    {
        title: "Oil Gas & Power Plant",
        desc:
            "We produce positive results from growing industrial estates, we have established a corporate or mandate to maintain the manufacturing economy.",
        image: service3,
        icon: Fuel,
    },
];

export default function Service() {
    return (
        <section className="py-24 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-yellow-400 font-bold tracking-widest text-sm mb-3">
                        OUR SERVICES
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                        High Quality Construction Solutions <br />
                        For Residentials &{" "}
                        <span className="text-yellow-400">Industries!</span>
                    </h2>

                    <p className="mt-6 text-gray-600">
                        Construction is a general term meaning the art and science to form
                        objects systems organizations.
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* IMAGE */}
                                <div className="relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-56 object-cover"
                                    />

                                    {/* ICON BADGE */}
                                    <div
                                        className="absolute -bottom-6 left-6 w-14 h-14 bg-yellow-400 
                               flex items-center justify-center shadow-lg"
                                    >
                                        <Icon className="text-white" size={28} />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="pt-10 px-6 pb-8">
                                    <h3 className="text-xl font-bold text-[#0b1d3a] mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6">
                                        {service.desc}
                                    </p>

                                    <a
                                        href="#"
                                        className="text-sm font-semibold text-[#0b1d3a] 
                               group-hover:text-yellow-400 transition"
                                    >
                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
