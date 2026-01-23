import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import slide1 from "../assets/slider-1.jpg";
import slide2 from "../assets/slider-2.jpg";
import slide3 from "../assets/slider-3.jpg";

const slides = [
  {
    image: slide1,
    subtitle: "GREAT EXPERIENCE IN BUILDING",
    title: "We Are Professional For Industrial Solution!",
    text: "We produce positive results from ever-growing industrial & manufacturing estate.",
  },
  {
    image: slide2,
    subtitle: "TRUSTED CONSTRUCTION COMPANY",
    title: "Building The Future With Excellence",
    text: "High quality construction services with modern technology.",
  },
  {
    image: slide3,
    subtitle: "ISO CERTIFIED COMPANY",
    title: "Industrial & Engineering Solutions",
    text: "Delivering reliable and cost-effective industrial solutions.",
  },
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 2.5, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      textRef.current.querySelectorAll("h2, span"),
      { opacity: 0, y: 20, scaleX: 0 },
      {
        opacity: 1,
        y: 0,
        scaleX: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      }
    );

  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] sm:h-[80vh] xs:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        ref={imageRef}
        src={slides[index].image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative ml-10 z-10 flex h-full items-center justify-center lg:justify-start">
        <div
          ref={textRef}
          className="px-6 sm:px-12 lg:pl-24 max-w-3xl text-center lg:text-left"
        >
          <p className="text-[#e1921f] font-semibold tracking-wide mb-3 text-sm sm:text-base">
            {slides[index].subtitle}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mb-5">
            {slides[index].title}
          </h1>

          <div className="relative inline-block mb-6">
            <h2 className="text-[#e1921f] text-lg sm:text-xl md:text-2xl font-medium tracking-wide relative z-10">
              Building Dreams, Creating Realities
            </h2>

            {/* Accent Line */}
            <span className="absolute left-0 -bottom-2 h-[3px] w-14 bg-[#e1921f]"></span>

            {/* Glow Effect */}
            <span className="absolute inset-0 bg-[#e1921f]/20 blur-xl rounded-md -z-10"></span>
          </div>

          <p className="text-gray-200 mb-8 text-sm sm:text-base">
            {slides[index].text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#e1921f] text-white px-6 py-3 font-semibold hover:bg-yellow-500 transition w-full sm:w-auto">
              GET A QUOTE
            </button>
            <button className="border text-white border-white px-6 py-3 hover:bg-white hover:text-black transition w-full sm:w-auto">
              MAKE AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${index === i ? "bg-yellow-400" : "bg-white/50"
              }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
