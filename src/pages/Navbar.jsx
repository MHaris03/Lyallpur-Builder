import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  let timeoutId = null;

  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    {
      label: "Services",
      to: "/our-services",
      hasDropdown: true,
    },
    { label: "Our Work", to: "#" },
    { label: "Gallery", to: "/our-gallery" },
    { label: "Blog", to: "#" },
    { label: "Contact Us", to: "/contact" },
  ];

  const serviceItems = [
    { label: "Residential Construction", to: "/services/residential-construction" },
    { label: "Commercial Construction", to: "/services/commercial-construction" },
    { label: "Renovation & Remodeling", to: "/services/renovation-remodeling" },
    { label: "Interior & Exterior Works", to: "/services/interior-exterior" },
    { label: "Grey Structure Construction", to: "/services/grey-structure" },
    { label: "Project Planning & Management", to: "/services/project-planning" },
    { label: "Electrical & Plumbing Services", to: "/services/electrical-plumbing" },
    { label: "Maintenance & Repair Services", to: "/services/maintenance-repair" },
    { label: "Architectural Design & Drawings", to: "/services/architectural-design" },
    { label: "3D Elevation & Visualization", to: "/services/3d-visualization" },
    { label: "Structural Engineering Services", to: "/services/structural-engineering" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full z-50">
      <div
        className={`transition-all duration-300 ${scrolled
          ? "fixed top-0 left-0 w-full bg-white shadow-md z-50"
          : "relative bg-white z-40"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Industries"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 font-semibold text-[#0b1d3a] relative">
            {navItems.map(({ label, to, hasDropdown }) =>
              hasDropdown ? (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    timeoutId = setTimeout(() => setIsServicesOpen(false), 200);
                  }}
                >
                  <Link
                    to={to}
                    className={`flex items-center gap-1 transition ${location.pathname.includes("services")
                      ? "text-[#e1921f]"
                      : "hover:text-[#e1921f]"
                      }`}
                  >
                    {label}
                    <span className="text-sm">▾</span>
                  </Link>
                  {isServicesOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-md rounded-md overflow-hidden z-50">
                      {serviceItems.map(({ label, to }) => (
                        <li key={label}>
                          <Link
                            to={to}
                            className={`block px-4 py-2 text-sm transition hover:bg-gray-100 hover:text-[#e1921f] ${location.pathname === to ? "text-[#e1921f]" : ""
                              }`}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={label}
                  to={to}
                  className={`transition ${location.pathname === to ? "text-[#e1921f]" : "hover:text-[#e1921f]"
                    }`}
                >
                  {label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Quote Button – visible on ALL screens */}
            <Link
              to="/contact"
              className="hidden sm:inline-block bg-[#e1921f] text-white px-5 py-2 font-semibold hover:bg-yellow-500 transition"
            >
              GET A QUOTE
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl font-bold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Industries"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <button
              className="text-2xl text-red-500 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-3 text-lg">
            {navItems.map(({ label, to, hasDropdown }) =>
              hasDropdown ? (
                <div key={label} >
                  {/* Services Button */}
                  <Link
                    to="/our-services"
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-semibold ${location.pathname.includes("services")
                        ? "text-[#e1921f]"
                        : "text-[#0b1d3a]"
                      }`}
                  >
                    Services
                  </Link>

                  {/* Dropdown toggle icon */}
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-xl font-bold text-[#0b1d3a] ml-2"
                  >
                    {isServicesOpen ? "−" : "+"}
                  </button>

                  {/* Mobile Dropdown */}
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                      {serviceItems.map(({ label, to }) => (
                        <Link
                          key={label}
                          to={to}
                          onClick={() => setIsMenuOpen(false)}
                          className={`text-sm font-medium ${location.pathname === to
                            ? "text-[#e1921f]"
                            : "text-[#0b1d3a]"
                            } hover:text-[#e1921f]`}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-semibold text-[#0b1d3a] hover:text-[#e1921f]"
                >
                  {label}
                </Link>
              )
            )}

            {/* Mobile GET A QUOTE */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 bg-[#e1921f] text-white text-center py-3 font-semibold hover:bg-yellow-500 transition"
            >
              GET A QUOTE
            </Link>
          </nav>

        </div>
      </div>

      {/* Spacer */}
      {scrolled && <div className="h-[88px]"></div>}
    </header>
  );
}
