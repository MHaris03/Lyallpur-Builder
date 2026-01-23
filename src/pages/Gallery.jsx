import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/gallery (1).jpg";
import img2 from "../assets/gallery (2).jpg";
import img3 from "../assets/gallery (3).jpg";
import img4 from "../assets/gallery (4).jpg";
import img5 from "../assets/gallery (5).jpg";
import img6 from "../assets/gallery (6).jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const openImage = (index) => {
        setCurrent(index);
        setOpen(true);
    };

    const close = () => setOpen(false);

    const next = () =>
        setCurrent((prev) => (prev + 1) % images.length);

    const prev = () =>
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                {/* <h2 className="text-4xl font-semibold text-center mb-16">
                    Our Gallery
                </h2> */}

                <div className="text-center max-w-3xl mx-auto mb-10">
                    <p className="text-[#e1921f] font-bold tracking-widest text-md mb-3">
                        Our Construction Work
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1d3a] leading-tight">
                        Latest {" "}
                        <span className="text-[#e1921f]">Projects</span>
                    </h2>

                    {/* <p className="mt-6 text-gray-600">
                        Construction is a general term meaning the art and science to form
                        objects systems organizations.
                    </p> */}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl cursor-pointer group"
                            onClick={() => openImage(index)}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔥 Lightbox Modal */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

                    {/* Close */}
                    <button
                        onClick={close}
                        className="absolute top-6 right-6 text-white hover:scale-110 transition"
                    >
                        <X size={36} />
                    </button>

                    {/* Prev */}
                    <button
                        onClick={prev}
                        className="absolute left-6 text-white hover:scale-110 transition"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Image */}
                    <img
                        src={images[current]}
                        alt=""
                        onClick={next}
                        className="max-h-[85vh] max-w-[90vw] object-contain cursor-pointer select-none"
                    />

                    {/* Next */}
                    <button
                        onClick={next}
                        className="absolute right-6 text-white hover:scale-110 transition"
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </section>
    );
}
