import {
    Building2,
    Sofa,
    Scissors,
    ClipboardCheck,
} from "lucide-react";

const steps = [
    {
        step: "1",
        icon: Building2,
        title: "The Feasibility",
        desc: "This initial phase of the project includes preliminary studies",
    },
    {
        step: "2",
        icon: Sofa,
        title: "The Development",
        desc: "We get into the detail of the scheme. We’ll refine the internal",
    },
    {
        step: "3",
        icon: Scissors,
        title: "Full Mobilization",
        desc: "Once the contractor is appointed, will workshops to review",
    },
    {
        step: "4",
        icon: ClipboardCheck,
        title: "Post PC Work",
        desc: "The project concludes with site visits to inspect all the works",
    },
];

export default function AboutProcess() {
    return (
        <section className="py-8 bg-white ">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* <h2 className="text-4xl font-semibold mb-4">
                    Best Solutions For Your Dream
                </h2> */}

                <h2 className="text-3xl text-center mb-4 md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                    Best Solutions For Your {" "}
                    <span className="text-[#e1921f]">Dream</span>
                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto mb-16">
                    Client’s often don’t know what to expect during the interior design
                    process, so we’ve put together our guide work stages
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {steps.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="group">
                                {/* Circle */}
                                <div
                                    className={`relative cursor-pointer mx-auto w-32 h-32 rounded-full border border-dashed flex items-center justify-center transition-all duration-500
                  ${item.active
                                            ? "border-[#e1921f]"
                                            : "border-gray-300 group-hover:border-[#e1921f]"
                                        }`}
                                >
                                    {/* Step Number */}
                                    <span className="absolute -top-2 right-2 w-8 h-8 rounded-full bg-white border border-dashed text-md flex items-center justify-center
                    group-hover:text-[#e1921f]">
                                        {item.step}
                                    </span>

                                    <Icon
                                        size={40}
                                        className={`transition-colors duration-500
                    ${item.active
                                                ? "text-[#e1921f]"
                                                : "text-gray-400 group-hover:text-[#e1921f]"
                                            }`}
                                    />
                                </div>

                                {/* Text */}
                                <h3 className="mt-6 text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 mt-2 text-md">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
