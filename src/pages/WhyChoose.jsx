import {
    ShieldCheck,
    CheckCircle,
    Timer,
    CreditCard,
    Activity,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Guaranteed Price Protection",
        description:
            "We ensure complete transparency in pricing with no hidden charges, safeguarding you from unexpected cost escalations.",
    },
    {
        icon: CheckCircle,
        title: "440+ Quality Checks",
        description:
            "Every project undergoes over 440 rigorous quality checks to ensure flawless execution and superior craftsmanship.",
    },
    {
        icon: Timer,
        title: "Timely Delivery",
        description:
            "Our streamlined processes and expert planning guarantee on-time project delivery without compromising quality.",
    },
    {
        icon: CreditCard,
        title: "Payment In Stages",
        description:
            "Pay only as the project progresses through clearly defined milestones, ensuring financial flexibility and trust.",
    },
    {
        icon: Activity,
        title: "24×7 Real Time Tracking",
        description:
            "Track your project progress anytime with real-time updates, ensuring complete visibility and peace of mind.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                {/* <h2 className="text-4xl font-semibold text-center mb-16 text-gray-900">
                    Why Choose Us
                </h2> */}

                <h2 className="text-3xl text-center mb-16 md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                    Why Choose {" "}
                    <span className="text-[#e1921f]">Us</span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group flex gap-5 bg-white p-6 rounded-xl border-l-4 border-[#e1921f] shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <Icon
                                        size={36}
                                        className="text-[#e1921f] group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#0b1d3a]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
