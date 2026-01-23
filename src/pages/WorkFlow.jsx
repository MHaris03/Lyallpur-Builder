import { Lightbulb, Users, Hammer } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import service1 from "../assets/design.jpg";
import service2 from "../assets/participation.jpg";
import service3 from "../assets/execution.jpg";
import WorkflowCard from "./WorkflowCard";

gsap.registerPlugin(ScrollTrigger);

export default function WorkFlow() {

    return (
        <section className="py-24 bg-white">
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                <WorkflowCard
                    icon={Lightbulb}
                    title="Idea & Design"
                    text="Creative interior design concepts with functional blueprints, crafting spaces that harmonize aesthetics and utility, transforming environments into personalized reflections of inhabitant's lifestyles."
                    image={service1}
                />

                <WorkflowCard
                    icon={Users}
                    title="Participation"
                    text="Engaging customers in making design decisions, ensuring spaces reflect their preferences and lifestyles, fostering a sense of ownership and connection within the environment."
                    image={service2}
                    active
                />

                <WorkflowCard
                    icon={Hammer}
                    title="Execution"
                    text="Shaping dreams involves the meticulous coordination of materials, furnishings, and architectural elements to manifest envisioned spaces, ensuring functionality and aesthetic coherence."
                    image={service3}
                />

            </div>
        </section>
    );
}
