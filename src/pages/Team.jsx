import { User } from "lucide-react";

const team = [
    {
        name: "Ahmed Khan",
        role: "Founder & Principal Designer",
        image: "", // leave empty to show icon
    },
    {
        name: "Sara Malik",
        role: "Interior Architect",
        image: "",
    },
    {
        name: "Usman Ali",
        role: "Project Manager",
        image: "",
    },
    {
        name: "Ayesha Noor",
        role: "3D Visualizer",
        image: "",
    },
];

export default function Team() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl text-center mb-4 md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                    Our {" "}
                    <span className="text-[#e1921f]">Team</span>
                </h2>
                <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
                    A passionate team of designers, architects, and managers delivering
                    excellence in every project.
                </p>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Avatar */}
                            <div className="w-28 h-28 mx-auto rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mb-6">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User size={48} className="text-gray-400" />
                                )}
                            </div>

                            {/* Info */}
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
