import { useEffect, useState } from "react";

const stats = [
    { value: 1000, label: "Homes Designed", suffix: "+" },
    { value: 70, label: "Members On-Board", suffix: "+" },
    { value: 550, label: "Happy Clients", suffix: "+" },
    { value: 2000000, label: "Sq ft Designed & Created", suffix: "+" },
];

function Counter({ value, suffix }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / 60;

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <span className="text-[#e1921f] text-5xl font-bold">
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

export default function AboutCounter() {
    return (
        <section className="py-20 bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

                {stats.map((item, i) => (
                    <div key={i}>
                        <Counter value={item.value} suffix={item.suffix} />
                        <p className="mt-3 font-medium">{item.label}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}
