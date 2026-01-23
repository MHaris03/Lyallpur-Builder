import {
    Home,
    Building2,
    Wrench,
    Paintbrush,
    Layers,
    ClipboardList
} from "lucide-react";
import service1 from "../../assets/service-1.jpg"
import service2 from "../../assets/service-2.jpg"
import service3 from "../../assets/service-3.jpg"

const services = [
    {
        title: "Residential Construction",
        desc:
            "We design and build high-quality residential homes with strong structures, modern layouts, and long-lasting materials. From concept to completion, we ensure comfort, safety, and durability.",
        image: service1,
        icon: Home,
    },
    {
        title: "Commercial Construction",
        desc:
            "We deliver reliable commercial construction solutions for offices, plazas, and business spaces, focused on functionality, durability, and timely project completion.",
        image: service2,
        icon: Building2,
    },
    {
        title: "Renovation & Remodeling",
        desc:
            "We transform existing spaces with smart renovation and remodeling solutions that enhance appearance, functionality, and property value.",
        image: service3,
        icon: Wrench,
    },
    {
        title: "Interior & Exterior Works",
        desc:
            "We create modern and elegant interiors and exteriors that reflect quality craftsmanship and contemporary design standards.",
        image: service1,
        icon: Paintbrush,
    },
    {
        title: "Grey Structure Construction",
        desc:
            "We provide strong and reliable grey structure construction using approved drawings and quality materials to ensure long-term structural stability.",
        image: service2,
        icon: Layers,
    },
    {
        title: "Project Planning & Management",
        desc:
            "We manage construction projects efficiently with proper planning, scheduling, and supervision to deliver quality results within budget and time.",
        image: service3,
        icon: ClipboardList,
    },
];

export default function Service() {
    return (
        <section className="py-24 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-[#e1921f] font-bold tracking-widest text-sm mb-3">
                        OUR SERVICES
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                        High Quality Construction Solutions <br />
                        For Residentials &{" "}
                        <span className="text-[#e1921f]">Industries!</span>
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
                                        className="absolute -bottom-6 left-6 w-14 h-14 bg-[#e1921f] 
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
                               group-hover:text-[#e1921f] transition"
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
