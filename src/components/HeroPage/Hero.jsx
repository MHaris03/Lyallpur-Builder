// components/Hero.jsx
import React from "react";

export default function Hero({
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.6)",
  label,
  title,
  description,
  className = "",
}) {
  return (
    <section
      className={`relative h-[70vh] flex items-center justify-center bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {label && (
          <span className="text-[#e1921f] tracking-widest uppercase text-sm">
            {label}
          </span>
        )}
        {title && (
          <h1 className="text-white text-2xl md:text-3xl font-bold mt-4">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-gray-200 mt-6 max-w-xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
