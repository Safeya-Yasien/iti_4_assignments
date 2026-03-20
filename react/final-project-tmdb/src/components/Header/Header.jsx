import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-blue-500 ${
      isActive ? "text-blue-600" : "text-gray-300"
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          TMDB<span className="text-blue-600">FLIX</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/tv-shows" className={navLinkClass}>
            TV Shows
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass}>
            My List
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search Icon (Simulated) */}
          <button className="text-gray-300 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* User Profile / Auth */}
          <Link
            to="/login"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
