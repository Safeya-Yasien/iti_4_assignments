import { useLanguage } from "@/context/useLanguage";
import { useThemeStore } from "@/store/useThemeStore";
import { useState } from "react";
import {
  FaBars,
  FaBoxes,
  FaHome,
  FaInfo,
  FaMoon,
  FaShoppingCart,
  FaSun,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const { lang, toggleLanguage } = useLanguage();

  const headerBg = theme === "light" ? "bg-green-600" : "bg-gray-900";
  const linkStyles =
    "flex items-center text-white font-bold hover:text-green-200 transition-colors duration-300";

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className={`${headerBg} shadow-md transition-all duration-500`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* task7 */}
        <div className="text-xl font-bold text-white uppercase tracking-tighter">
          {lang === "en" ? "My Store" : "متجري"}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 ml-5 mr-5">
          <Link to="/" className={linkStyles}>
            <FaHome className="mr-1" />
            {lang === "en" ? "Home" : "الرئيسية"}
          </Link>
          <Link to="/about" className={linkStyles}>
            <FaBoxes className="mr-1" />
            {lang === "en" ? "Products" : "المنتجات"}
          </Link>

          <Link to="/cart" className={`${linkStyles} relative`}>
            <div className="relative">
              <FaShoppingCart className="mr-1 text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="ml-2">Cart</span>
          </Link>
          <button
            onClick={toggleLanguage}
            className="cursor-pointer text-white border border-white/40 px-2 py-1 rounded text-xs font-bold hover:bg-white hover:text-green-600 transition-all"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-white text-xl p-2 hover:bg-white/20 rounded-full transition-all"
          >
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
          <Link
            to={"/login"}
            className="text-white border border-white mb-0 flex items-center p-2 rounded-md hover:bg-white hover:text-black transition-all"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-white text-lg"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
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

          <Link to="/products" className={linkStyles}>
            <FaBoxes className="mr-1" /> Products
          </Link>
          <Link
            to="/cart"
            className={linkStyles}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <FaShoppingCart className="mr-2" />
              Cart
              <span className="ml-2 bg-white text-green-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
