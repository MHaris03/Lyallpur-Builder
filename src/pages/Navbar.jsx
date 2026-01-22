import { useState, useEffect } from "react";
import logo from "../../public/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  let timeoutId = null;

  const navItems = [
    { label: "Home", to: "#" },
    { label: "Company", to: "#" },
    { label: "Services", to: "#" },
    { label: "Projects", to: "#" },
    { label: "Blog", to: "#" },
    { label: "Contact Us", to: "#" },
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
                  <a href={to} className="flex items-center gap-1 hover:text-[#e1921f] transition">
                    {label}
                  </a>
                  {isServicesOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden">
                      {serviceItems.map(({ label, to }) => (
                        <li key={label}>
                          <a
                            href={to}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#e1921f]"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a key={label} href={to} className="hover:text-[#e1921f] transition">
                  {label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="bg-[#e1921f] text-white px-6 py-3 font-semibold hover:bg-yellow-500 transition w-full sm:w-auto">
              GET A QUOTE
            </button>

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
            <img src={logo} alt="Industrus" className="h-16 w-16 object-contain" />
            <button
              className="text-2xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-4 text-lg">
            {navItems.map(({ label, to }) => (
              <a
                key={label}
                href={to}
                className="font-medium text-[#0b1d3a]"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}

          </nav>
        </div>
      </div>

      {/* Spacer */}
      {scrolled && <div className="h-[88px]"></div>}
    </header>
  );
}
