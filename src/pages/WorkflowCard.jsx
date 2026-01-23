import React from "react";

export default function ServicesCard({
  icon: Icon,
  title,
  text,
  image,
  active = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border transition-all duration-500
        min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]
        ${active ? "shadow-xl" : "hover:shadow-xl"}
      `}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Content */}
      <div className="relative cursor-pointer z-10 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center h-full text-center">
        <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
          <Icon
            size={48}
            className={`transition-all duration-500 ease-out
              ${active
                ? "text-white -translate-y-2 scale-110 group-hover:-translate-y-3 group-hover:scale-115"
                : "text-[#e1921f] group-hover:text-white group-hover:-translate-y-2 group-hover:scale-110"
              }`}
          />
        </div>

        <h3
          className={`text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-4 transition-colors duration-500
            ${active ? "text-white" : "text-gray-900 group-hover:text-white"}`}
        >
          {title}
        </h3>

        <p
          className={`text-sm sm:text-base md:text-base leading-relaxed transition-colors duration-500
            ${active ? "text-gray-200" : "text-gray-400 group-hover:text-gray-200"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
