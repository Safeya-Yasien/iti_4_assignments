import { useState } from "react";
import {
  FaBars,
  FaBoxes,
  FaHome,
  FaInfo,
  FaPhone,
  FaRProject,
  FaServicestack,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles =
    "flex items-center text-white font-bold hover:text-green-200 transition-colors duration-300";

  return (
    <header className="bg-green-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Brand</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 ml-5 mr-5">
          <Link to="/" className={linkStyles}>
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/about" className={linkStyles}>
            <FaInfo className="mr-1" /> About
          </Link>
          <Link to="/services" className={linkStyles}>
            <FaServicestack className="mr-1" /> Services
          </Link>
          <Link to="/contact" className={linkStyles}>
            <FaPhone className="mr-1" /> Contact
          </Link>
          <Link to="/products" className={linkStyles}>
            <FaBoxes className="mr-1" /> Products
          </Link>
          <Link to="/cart" className={linkStyles}>
            <FaShoppingCart className="mr-1" /> Cart
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-green-600 p-4 space-y-2 ml-2 mr-2">
          <Link to="/" className={linkStyles} onClick={() => setIsOpen(false)}>
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className={linkStyles}
            onClick={() => setIsOpen(false)}
          >
            <FaInfo className="mr-2" /> About
          </Link>
          <Link
            to="/services"
            className={linkStyles}
            onClick={() => setIsOpen(false)}
          >
            <FaServicestack className="mr-2" /> Services
          </Link>
          <Link
            to="/contact"
            className={linkStyles}
            onClick={() => setIsOpen(false)}
          >
            <FaPhone className="mr-2" /> Contact
          </Link>
          <Link to="/products" className={linkStyles}>
            <FaBoxes className="mr-1" /> Products
          </Link>
          <Link
            to="/cart"
            className={linkStyles}
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingCart className="mr-2" /> Cart
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
