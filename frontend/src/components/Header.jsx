import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-body-md text-body-md text-primary border-b-2 border-primary pb-1 transition-colors duration-200 ease-in-out"
      : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out";

  return (
    <header
      className={`bg-surface fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "clinical-shadow" : "border-b border-outline-variant"
      }`}
    >
      <div className="flex justify-between items-center px-margin-desktop h-16 w-full max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/rg-rising-group-logo.jpg"
            alt="R.G. Suppliers / Rising Group"
            className="h-10 w-auto object-contain"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary">
            R.G. Suppliers
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-6 py-2 font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors duration-200"
          >
            Inquiry
          </Link>
          <button
            className="md:hidden text-on-surface-variant"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-surface border-t border-outline-variant px-margin-mobile py-stack-md flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
