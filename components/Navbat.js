// components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white shadow-lg opacity-100" : "bg-transparent opacity-0"
      }`}
    >
      <div className="flex justify-between items-center p-3 md:p-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold text-black animate-bounce-slow cursor-pointer">
          Mojesto
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-md font-medium">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500"
          >
            Team
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500"
          >
            Products
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 shadow-lg animate-slide-down flex flex-col items-center space-y-6 py-6 px-4">
          <Link
            onClick={toggleMenu}
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="team"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500 text-lg font-medium"
          >
            Team
          </Link>
          <Link
            onClick={toggleMenu}
            to="products"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500 text-lg font-medium"
          >
            Products
          </Link>
          <Link
            onClick={toggleMenu}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-500 text-lg font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}